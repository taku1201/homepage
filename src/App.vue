<template>
    <div v-bind:class="[$style.container, $style.font]" id="app">
        <HPHeader></HPHeader>
        <router-view />
        <HPFooter></HPFooter>
    </div>
</template>

<script>
import HPHeader from '@/components/HPHeader.vue'
import HPFooter from '@/components/HPFooter.vue'

export default {
    name: 'App',
    components: {
        HPHeader,
        HPFooter
    },
    metaInfo: {
        title: 'portfolio',
        titleTemplate: '%s | portfolio'
    }
}
</script>

<style module>
.font {
    font-family: 'Lato', 'Noto Sans JP', 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
}
.container {
    background-color: #ffffff;
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
}
</style>
