<template>
    <footer class="footer">
        <div class="footer__content grid">
            <div class="footer__newsletter">
                <div class="footer__logo"><i class='bx bxl-codepen'></i> X V A U L T</div>
                <div class="footer__newsletter-text">Join our newsletter to receive updates on new features and releases.</div>
                <div class="footer__subscribe">
                    <input type="text" class="newsletter__email" placeholder="johndoe@email.com">
                    <div class="button button--secondary button--small button-subscribe">Subscribe</div>
                </div>
            </div>
            <div class="footer__list grid">
                <div class="footer__list-menu">
                    <div class="footer__list-row column-title">About us</div>
                    <ul>
                        <li><a>Expense Tracker</a></li>
                        <li><a>Budget Planner</a></li>
                        <li><a>Financial Tips</a></li>
                        <li><a>Saving Strategies</a></li>
                    </ul>
                </div>
                <div class="footer__list-menu">
                    <div class="footer__list-row column-title">Contact us</div>
                    <ul>
                        <li><a>FAQs</a></li>
                        <li><a>Terms & Conditions</a></li>
                    </ul>
                </div>
                <div class="footer__list-menu">
                    <div class="footer__list-row column-title">Socials</div>
                    <ul>
                        <li><a href="https://discord.com/users/nyann1211" target="_blank"><i class='bx bxl-discord'></i>Discord</a></li>
                        <li><a href="https://linkedin.com/in/jia-sheng-hew" target="_blank"><i class='bx bxl-linkedin-square'></i>LinkedIn</a></li>
                        <li><a href="https://github.com/jasonhew98" target="_blank"><i class='bx bxl-github'></i>GitHub</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer__copyright">
            <div class="footer__copyright-line"></div>
            <div class="footer__copyright-text">
                <span class="product__name">X V A U L T</span>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref, reactive, computed, onMounted, getCurrentInstance } from 'vue';
</script>

<style lang="scss" scoped>

.footer {
    padding: 64px 0;
}

.footer__content {
    width: 1200px;
    grid-template-columns: 2fr 3fr;
    grid-column-gap: 24px;
    margin: 0 auto;
    justify-content: space-between;
}

.footer__logo {
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    align-items: center;
    padding-bottom: 16px;
}

.footer__logo i {
    font-size: var(--h2-font-size);
}

.footer__newsletter-text {
    padding-bottom: 16px;
}

.footer__list {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 24px;
    margin-left: auto;
    margin-right: auto;
}

.column-title {
    padding-bottom: 16px;
    margin-bottom: 8px;
}

.footer__list-menu {

    i {
        font-size: var(--h2-font-size);
    }

    li {
        display: flex;
        margin-bottom: 8px;
    }

    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
        font-size: var(--small-font-size);
    }
    
    a:hover {
        color: var(--primary-300);
    }
}

.footer__subscribe {
    display: flex;
    gap: 16px;

    .button-subscribe {
        text-align: center;
    }
}

.newsletter__email {
    width: 350px;
    padding: 8px 16px;
    font-size: var(--normal-font-size);
    outline: none;
}

.footer__copyright {
    max-width: 1200px;
    margin: 64px auto 0;
}

.footer__copyright-line {
    width: 100%;
    height: 1px;
    background-color: var(--primary-visible);
}

.footer__copyright-text {
    color: var(--dull);
    margin-top: 16px;
    text-align: center;
}

@media only screen and (max-width: 992px) {
}

@media only screen and (max-width: 768px) {
}

@media only screen and (max-width: 576px) {
}

@media only screen and (max-width: 350px) {
}

</style>