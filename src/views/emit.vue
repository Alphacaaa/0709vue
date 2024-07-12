<script>
import emitChild from '../components/emitComponent.vue'
export default{
    data(){
        return {
            getChildVal : "",
            childChange:"parent"
        }
    },
    components:{
        emitChild,
    },
    methods:{
        childFun(params){
            console.log(params)
            this.getChildVal = params;
        }
    },
    beforeCreate(){
        console.log("beforeCreate")
    },
    created(){
        console.log("created")
    },
    beforeMount(){
        console.log("beforeMount")
    },
    mounted(){
        console.log("mounted")
    }
}
</script>

<template>
    <emitChild @childMsg="this.childFun"
    v-model:fromChild="this.childChange"/>
    <h2>{{ this.getChildVal }}</h2>
    <h1>{{ this.childChange }}</h1>
</template>

<style scoped></style>