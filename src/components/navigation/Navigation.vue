<template>
    <div class="tab">
        <div class="tab-item">
            <router-link to="/">{{tab1}}</router-link>
            </div>
            <div class="tab-item">
            <router-link to="/vueAxiosTest">{{tab2}}</router-link>
            </div>
            <div class="tab-item">
            <router-link to="/portalTransform">{{tab3}}</router-link>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .tab {
        display: flex;
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);

    .tab-item {
        flex: 1;
        text-align: center;

        & > a {
            display: block;
            text-decoration: none;
            font-size: 14px;
            color: #333;

            &.active {
                color: rgb(240, 20, 20);
                font-weight: bold;
            }
        }
    }
}
</style>

<script>
export default {
    data() {
        return {
            tab1: 'portal-default',
            tab2: 'test2',
            tab3: 'portal-transform'
        }
    }
}
</script>