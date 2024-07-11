<script>
export default{
    data(){
        return{
            arr:[1,2,3,4,5,6,7,8,9]
        }
    }
}
</script>

<template>
    <div class="vforOne" v-for="(item,index) in this.arr">
        <p>Lorem i1232141f.{{ index }}</p>
    </div>

    <!-- select -->
    <select class="vfortwo" >
        <option value="1"></option>
        <option value="2" v-for="item in this.arr">{{item}}</option>
        <option value="3"></option>
    </select>
</template>

<style scoped lang="scss">
.vforOne{
    width: 100px;
    height: 200px;
}
</style>