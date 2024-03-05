<template>
    <div class="landing-container">
        <landing-preloader-text-shuffle></landing-preloader-text-shuffle>
        <div class="main main-landing">
            <landing-nav :options="navBarOptions"></landing-nav>
            <main class="section-hero py-16 w-screen h-screen">
                <div class="intro-background"></div>
                <div class="container md:pb-4 mx-auto pt-14 px-6 z-10">
                    <div class="grid lg:grid-cols-12 grid-cols-1 md:gap-x-20 md:gap-y-16">
                        <div class="lg:col-span-12 md:text-center md:col-span-7 lg:order-none col-span-12 pb-4 order-2">
                            <h1 class="landing__title">Take control of your finances <br>today!</h1>
                            <div class="landing__caption">Track your daily expenses and manage your money with ease.</div>
                            <div class="landing__actions md:justify-center">
                                <div class="landing__button button button-primary" @click="launchApp">Sign Up</div>
                                <div class="landing__button button button-secondary">Learn More</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div class="section-faq py-16">
                <landing-faq></landing-faq>
            </div>
            <landing-footer></landing-footer>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, getCurrentInstance } from 'vue';
import LandingPreloaderTextShuffle from './@components/LandingPreloaderTextShuffle.vue';
import LandingNav from './@components/LandingNav.vue';
import LandingFaq from './@components/LandingFaq.vue';
import LandingFooter from './@components/LandingFooter.vue';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import circle from '@/assets/circle.png'

const app = getCurrentInstance();

// region ref
const home = ref();
const about = ref();
const solutions = ref();
const blog = ref();

// region computed
const router = computed(() => {
    return app.appContext.config.globalProperties.$router;
});

const navBarOptions = computed(() => {
    return [
        // {
        //     id: 1,
        //     displayName: "Home",
        //     action: () => { home.value.scrollIntoView({ behavior: "smooth" }) }
        // },
        // {
        //     id: 2,
        //     displayName: "About us",
        //     action: () => { about.value.scrollIntoView({ behavior: "smooth" }) }
        // },
        // {
        //     id: 3,
        //     displayName: "Solutions",
        //     action: () => { solutions.value.scrollIntoView({ behavior: "smooth" }) }
        // },
        // {
        //     id: 4,
        //     displayName: "Blog",
        //     action: () => { blog.value.scrollIntoView({ behavior: "smooth" }) }
        // }
    ]
});

// region methods
const goToApp = () => {
    router.value.push({
        name: "ApplicationIndexPage"
    })
};

const goToAuth = () => {
    router.value.push({
        name: "AuthIndexPage"
    })
};

const launchApp = () => {
    if (localStorage.getItem("jwtToken"))
        goToApp();
    else
        goToAuth();
};

onMounted(() => {
    // Load your texture here
    const textureLoader = new THREE.TextureLoader();
    const imgTex = textureLoader.load(circle);

    // Set up scene
    const scene = new THREE.Scene();

    // Set up camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // Camera position x, y ,z
    camera.position.set(0, 100, 0);
    

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor( 0xffffff, 0 );
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.querySelector('.intro-background').appendChild(renderer.domElement);

    // Set up controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enabled = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = -0.2;
    
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    window.addEventListener('resize', () =>
    {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    // Function to generate points
    function generatePoints() {
        const count = 100;
        const sep = 3;
        let positions = [];

        for (let xi = 0; xi < count; xi++) {
            for (let zi = 0; zi < count; zi++) {
                let x = sep * (xi - count / 2);
                let z = sep * (zi - count / 2);
                let y = graph(x, z);
                positions.push(x, y, z);
            }
        }

        return new Float32Array(positions);
    }

    // Function to update points
    function updatePoints(positions) {
        let i = 0;
        for (let xi = 0; xi < count; xi++) {
            for (let zi = 0; zi < count; zi++) {
                let x = sep * (xi - count / 2);
                let z = sep * (zi - count / 2);
                positions[i + 1] = graph(x, z);
                i += 3;
            }
        }
    }

    // Function to define the graph
    function graph(x, z) {
        return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
    }

    // Set up points
    const count = 100;
    const sep = 3;
    let t = 0;
    let f = 0.002;
    let a = 3;
    let positions = generatePoints();

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
        map: imgTex,
        color: 0x00AAFF,
        size: 0.5,
        sizeAttenuation: true,
        transparent: false,
        alphaTest: 0.5,
        opacity: 1.0,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        t += 15;
        updatePoints(positions);
        geometry.attributes.position.needsUpdate = true;
        controls.update();
        renderer.render(scene, camera);
    }

    animate();
})

</script>

<style lang="scss">

.section-hero {
    display: flex;
    justify-content: center;
    align-items: center;
}

.intro-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.intro-background > canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.landing__content {
    height: 100%;
}

.landing__section {
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding: 12rem 0;
}

.landing__about {
    grid-template-columns: repeat(2, 1fr);
}

.landing__cta {
    width: 49%;
}

.landing__assets {
    width: 40.5%;
    padding-left: 5rem;
}

.landing__attraction {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.landing__actions {
    display: flex;
    flex-direction: row;
    gap: 16px;
    padding-top: 8px;
}

.landing__button {
    text-align: center;
}

/* For large devices */
@media only screen and (min-width: 1150px) {
    .landing__attraction {
        padding: 0 8rem;
    }
}

/* For medium devices */
@media only screen and (min-width: 768px) {
    .landing__section--hero {
        padding: 48px 24px;
    }
}

@media only screen and (max-width: 576px) {
    .landing__attraction {
        text-align: start;
        align-items: normal;
    }
}

/* For small devices */
@media only screen and (max-width: 320px) {
}

</style>