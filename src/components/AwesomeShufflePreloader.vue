<template>
  <div class="loading-screen h-screen">
        <div class="placeholder">XVAULT</div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, getCurrentInstance } from 'vue';
import { gsap } from "gsap";

function animateScale(element, scaleValue) {
    gsap.fromTo(element, { scale: 1 }, { scale:scaleValue, duration:2, ease:"power1.out" })
}

function wrapLetters(placeholder, text) {
    placeholder.innerHTML = '';
    [...text].forEach(letter => {
        const span = document.createElement('span');
        span.style.filter = 'blur(8px)';
        span.textContent = letter;
        placeholder.appendChild(span);
    })
}

function animateBlurEffect(placeholder) {
    const letters = placeholder.children;
    let index = 0;

    function clearNextLetter() {
        if (index < letters.length) {
            gsap.to(letters[index], { filter: 'blur(0px)', duration: 0.5 })
            index++;
            if (index < letters.length) {
                setTimeout(clearNextLetter, 100);
            }
        }
    }

    setTimeout(clearNextLetter, 0);
}

function shuffleLetters(placeholder, finalText) {
    wrapLetters(placeholder, '');
    wrapLetters(placeholder, finalText.replace(/./g, ' '));

    let textArray = finalText.split('');
    let shufflingCounter = 0;
    let intervalHandles = [];

    function shuffle(index) {
        if (shufflingCounter < 30) {
            textArray[index] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)];
            placeholder.children[index].textContent = textArray[index];
        }
        else {
            placeholder.children[index].textContent = finalText.charAt(index);
            clearInterval(intervalHandles[index])
        }
    }

    for (let i = 0; i < finalText.length; i++) {
        intervalHandles[i] = setInterval(shuffle, 80, i);
    }

    setTimeout(() => {
        shufflingCounter = 30;
        for (let i = 0; i < finalText.length; i++) {
            placeholder.children[i].textContent = finalText.charAt(i);
            clearInterval(intervalHandles[i])
        }
        animateBlurEffect(placeholder);
    }, 1000)
}

onMounted(() => {
    if (document.body.classList.contains('is-ready'))
        document.body.classList.remove('is-ready');

    const placeholder = document.querySelector(".placeholder");
    animateScale(placeholder, 1.25);
    shuffleLetters(placeholder, "XVAULT");

    gsap.to('.loading-screen', {
        opacity: 0,
        duration: 0.5,
        delay: 3,
        ease: "power1.inOut",
        onComplete: () => {
            document.body.classList.add('is-ready');
        }
    })
});

</script>

<style lang="scss" scoped>
.loading-screen {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background: var(--body-color);
    color: #fff;
    pointer-events: none;
    z-index: 999;

    display: flex;
    justify-content: center;
    align-items: center;
}

.placeholder {
    @apply md:text-8xl text-4xl;
    display: flex;
    letter-spacing: 5px;
}
</style>