<template>
    <div id="contents">
        <p v-for="item in data" v-bind:key="item.name">
            {{item.name}}
        </p>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>
    import {getTestData} from '@/api/apis.js'
    export default {
        data() {
            return  {
                data: null
            }
        },
        methods: {
            getTest() {
                getTestData()
                .then((res) => {
                    this.data = res.data
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
            }
        },
        mounted() {
            this.getTest()
        }
    }
</script>
