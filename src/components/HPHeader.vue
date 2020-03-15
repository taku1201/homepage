<template>
    <div v-bind:class="[$style.header]" id="header">
        <router-link v-bind:class="[$style.link]" to="/">
            <h1>portfolio</h1>
        </router-link>
    </div>
</template>

<script>
</script>

<style module>
.header {
    display: block;
    height: 60px;
    margin: 30px 0;
}

.link {
    color: #333333;
    font-family: 'Lato', 'Noto Sans JP', 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
    font-size: 1.4em;
    font-weight: bold;
    text-decoration: none;
}
</style>
