<template>
    <footer class="footer">
        <div class="footer__content"></div>
        <div class="footer__copyright">
            <div class="footer__copyright-line"></div>
            <div class="footer__copyright-text">
                <span>Xvault</span>
                <span class="no-wrap">© 2024</span>
            </div>
        </div>
    </footer>
</template>

<script setup>
</script>

<style lang="scss">

.footer {
    padding: 64px 24px;
}

.footer__copyright {
    max-width: 1200px;
    margin: 64px auto 0;
}

.footer__copyright-line {
    width: 100%;
    height: 1px;
    background-color: var(--primary-dull);
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