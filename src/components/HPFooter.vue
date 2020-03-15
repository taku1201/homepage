<template>
    <div v-bind:class="[$style.footer]" id="footer">
        <p v-bind:class="[$style.copyright]">© 2020 John Doe</p>
    </div>
</template>

<script>
</script>

<style module>
.footer {
    display: block;
    height: 60px;
    margin-top: 30px;
}

.copyright {
    color: #333333;
    font-family: 'Lato', 'Noto Sans JP', 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
    font-size: 1.2em;
}
</style>
