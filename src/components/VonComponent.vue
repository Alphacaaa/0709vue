<script>
export default{
    data(){
        return{
            vonTextOne:"vonTextOne",
        }
    },
    methods:{
        vonTestFun(){
            console.log(this.vonTextOne);
        },
        inputTestOn(){
            console.log(this.vonTextOne)
        }
    }
}
</script>

<template>
    <button type="button" v-on:click="this.vonTestFun()">button</button>
    <button type="button" @click="this.vonTestFun()">button</button>
    <input type="text"@input="this.inputTestOn()">
</template>

<style scoped lang="scss">

</style>