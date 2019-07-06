<template>
    <div class="m-home-page">
        <h1 id="headline" class="demo-text">ReAlign.pro</h1>

        <div class="m-seasons-area">
            🍖🍹🚬🧔
        </div>

        <div class="m-github-area">
            <a
                v-for="(item, index) in targets"
                :key="index"
                :href="item.url"
                v-tooltip="Object.assign({ content: item.tip }, tipAttrs)"
                target="_blank">
                <img :src="item.img"/>
            </a>
        </div>
    </div>
</template>

<script>
    import Shinejs from 'shine.js';

    export default {
        name: 'home-page',
        data() {
            return {
                tipAttrs: {
                    placement: 'bottom',
                    classes: ['info'],
                    targetClasses: ['it-has-a-tooltip'],
                    offset: 0,
                },
                targets: [
                    {
                        tip: '杂记：什么都有，什么都没有',
                        url: 'https://blog.realign.pro',
                        img: `https://img.shields.io/badge/${'blog'}-${'雜 記'}-success.svg?style=for-the-badge&color=${'f0769a'}&labelColor=${'34495e'}`,
                    },
                    {
                        tip: '其它：待续...',
                        url: '',
                        img: `https://img.shields.io/badge/${'other'}-${'其 它'}-success.svg?style=for-the-badge`,
                    },
                ],
            };
        },
        mounted() {
            const shine = new Shinejs.Shine(document.getElementById('headline'));

            function handleMouseMove(event) {
                shine.light.position.x = event.clientX;
                shine.light.position.y = event.clientY;
                shine.draw();
            }

            window.addEventListener('mousemove', handleMouseMove, false);
        },
    }
</script>

<style lang="less" scoped>
@font-face {
    src: url(https://fontfacekit.github.io/open-sans/fonts/ExtraBold/OpenSans-ExtraBold.woff2?v=1.101);
    font-family: Open Sans;
    font-weight: 800;
    font-style: normal;
}
.m-home-page {
    .demo-text {
        display: table;
        position: absolute;
        width: 100%;
        height: auto;
        top: 50%;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        margin-top: -1.4em;
        color: #fcfcfc;
        text-align: center;
        text-shadow: 0 1px #ccc, 1px 0 #ccc, -1px 0 #ccc, 0 -1px #ccc;

        font-size: 8em;
        font-family: "Open Sans", sans-serif;
        font-weight: 800;

        letter-spacing: -0.02em;
        line-height: 1.2em;
    }

    .m-seasons-area {
        position: fixed;
        top: 51%;
        left: 0;
        width: 100%;
        height: 40px;
        font-size: 32px;
        letter-spacing: 20px;
        text-align: center;
    }

    .m-github-area {
        position: fixed;
        top: 60%;
        bottom: 20px;
        left: 0;
        width: 100%;
        height: 40px;
        text-align: center;
        & > a {
            margin-right: 12px;
            &:last-child {
                margin-right: 0;
            }
        }
    }
}
</style>
