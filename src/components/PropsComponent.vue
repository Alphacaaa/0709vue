<script>
export default{
    data(){
        return{

        }
    },
    props:[
        "giveChildMsg",
        "giveChildObj",
        "name",
        "type"
    ]
}
</script>

<template>
    <h1>父層傳來的{{ this.giveChildMsg }}</h1>
    <input type="text" v-model="this.giveChildObj.name">
    <h1>子層x{{ this.giveChildObj }}</h1>
    <h1>子層type{{ this.type }}</h1>
</template>

<style scoped lang="scss">

</style>