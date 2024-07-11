<script>
export default{
    data(){
        return{
            imgArr:[
                "https://th.bing.com/th/id/OIP.Yi4GMy4vu1LF7DwmZoyh3wAAAA?rs=1&pid=ImgDetMain",
                "https://th.bing.com/th/id/OIP.yxfHg6kcN1Op4yVxSYh9DQHaE8?w=1620&h=1080&rs=1&pid=ImgDetMain",
                "https://th.bing.com/th/id/R.b7b05caf2a87b76f23e5a6490b300b7a?rik=En1OW%2fDd9KZFEQ&riu=http%3a%2f%2ftmyun.com%2fjpeg%2fyun_6232.jpg&ehk=zn9g0ktVzgKelGlTYflxFx6na%2bt570tuB51MdK3cY2A%3d&risl=&pid=ImgRaw&r=0"
            ],
            clsArr:[]
        }
    }

    
}
</script>

<template>
<!-- v-bind跟標籤屬性雙向綁定 -->
    <div class="imgArea">
        <img :src="item" alt="" v-for="item in this.imgArr">
    </div>
    <label for="">blue</label>
    <input type="checkbox" value="blue" v-model="this.clsArr">
    <label for="">large</label>
    <input type="checkbox" value="large" v-model="this.clsArr">
    <label for="">underLine</label>
    <input type="checkbox" value="underLine" v-model="this.clsArr">
    <h1 :class="this.clsArr">Show</h1>
</template>

<style scoped lang="scss">
.imgArea{
    height: 1000px;
    width: 200px;   
    overflow-y:scroll;
    img{
        max-width: 100%;
    }
}
.blue{
    color: blue;
}
.large{
    font-size: 50px;
}
.underLine{
    text-decoration: underline;
}
</style>