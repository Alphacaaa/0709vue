<script>
export default{
    data(){
        return{
            selectVal:"",
            radioVal:""
        }
    }
}
</script>

<template>
    <select name="" id="" v-model="this.selectVal">
        <option value="">請選擇</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="">C</option>
    </select>
    <h1 v-if="this.selectVal == 'A'">A</h1>
    <h1 v-else-if="this.selectVal=='B'">B</h1>
    <h1 v-else>空的</h1>

    <label for="">456</label>
    <input type="radio" v-model="this.radioVal" value="456" name="meat">
    <label for="">123</label>
    <input type="radio" v-model="this.radioVal" value="123" name="meat">
    <h1 v-show="this.radioVal =='456'">丁次</h1>
    <h1 v-show="this.radioVal =='123'">木葉丸</h1>
</template>

<style scoped lang="scss">

</style>