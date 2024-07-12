<script>
import propsChild from '../components/PropsComponent.vue'
export default{
    data(){
        return{
            parentMsg:"parentVal",
            parentObj:{
                name:"米諾",
                type:"臘腸"
            }
        }
    },
    components:{
        propsChild,
    }
}
</script>

<template>
    <h1>父層本人{{this.parentMsg}}</h1>
    <h1>父層{{ this.parentObj }}</h1>
    <propsChild v-bind:giveChildMsg="this.parentMsg" 
                    :giveChildObj="this.parentObj" v-bind="this.parentObj"/>
</template>

<style scoped lang="scss">

</style>