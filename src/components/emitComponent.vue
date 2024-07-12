<script>
export default{
    data(){
        return{
            childrenMsg:"childVal"
        }
    },
    props:[
        'fromChild'
    ]
}
</script>

<template>
    <button type="button" @click="$emit('childMsg',this.childrenMsg)">button</button>
    <input type="text":value="this.fromChild" @input="$emit('update:fromChild',$event.target.value)">
</template>

<style scoped></style>