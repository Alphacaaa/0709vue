<script>
export default{
    data(){ //data:function
        return{
            test:"text",
            modelTest:"",
            modelRadio:"",
            modelCheck:[],
            modelSelect:""
        }
    }
}
</script>

<template>
    <!-- v-text -->
    <p v-text="this.test"></p>
    <p>{{ this.test }}</p>
    <p v-text="'使用單引號表示字串'"></p>
    <!-- v-model -->
    <input type="text" v-model="this.modelTest">
    <h1>{{ this.modelTest }}</h1>

    <!-- 單選 -->
    <label for="radio1">
        <input type="radio" id="radio1" v-model="this.modelRadio" value="收音機1" name="radio">收音機
    </label>
        <input type="radio" id="radio2" v-model="this.modelRadio" value="收音機2" name="radio">收音機
    <input type="radio" id="radio3" v-model="this.modelRadio" value="收音機3" name="radio">收音機
    <h1>{{ this.modelRadio }}</h1>
    <!-- 複選 -->
    <label for="meat1"></label>
    <input type="checkbox" id="meat1" v-model="this.modelCheck" value="肉1">肉1
    <label for="meat2"></label>
    <input type="checkbox" id="meat2" v-model="this.modelCheck" value="肉2">肉2
    <label for="meat3"></label>
    <input type="checkbox" id="meat3" v-model="this.modelCheck" value="肉3">肉3
    <h1>{{ this.modelCheck }}</h1>


    <!-- 下拉式選單 -->
    <select name="" id="" v-model="this.modelSelect">
        <option value="1">請選擇</option>
        <option value="2">1</option>
        <option value="3">2</option>
        <option value="4">3</option>
    </select>
    <h1>{{ this.modelSelect }}</h1>
</template>

<style>

</style>
