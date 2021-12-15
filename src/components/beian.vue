<template>
    <div class="m-beian">
        © 2019
        <a href="//realign.cn" rel="noopener" target="_blank">🔗Realign.cn</a>
        版权所有
        ICP证：
        <a
            href="https://beian.miit.gov.cn"
            rel="noopener"
            target="_blank"
        >浙ICP备19000351号-1</a>
        <div style="display:inline-block;margin:0 auto 0 3px;padding:0;">
            <a
                target="_blank"
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010802010599"
                style="display:inline-block;text-decoration:none;line-height:12px;"
            >
                <img src="//blog.realign.cn/images/others/beian.png" style="width:14px;vertical-align:top;" />
                <p
                    style="display:inline-block;line-height:16px;margin: 0px 0px 0px 5px; color:#939393;"
                >浙公网安备 33010802010600号</p>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'beian',
        data() {
            return {
                //
            };
        },
        mounted() {
            //
        },
        methods: {
            //
        },
    }
</script>

<style lang="less" scoped>
.m-beian {
    position: absolute;
    top: calc(100% - 30px);
    width: 100%;
    font-size: 12px;
    padding-bottom: 10px;
    color: #939393;
    a {
        color: #939393;
        text-decoration: none;
    }
}
</style>
