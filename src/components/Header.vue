<script>
import { RouterLink } from 'vue-router'
export default{
    components:{
        RouterLink
    }
}
</script>

<template>
    <div class="headerArea">
        <RouterLink class="routeItem" to="/" >Home</RouterLink>
        <RouterLink class="routeItem" to="/VtextAndVmodel">VtextAndVmodel</RouterLink>
        <RouterLink class="routeItem" to="/VforAndVBind">VforAndVBind</RouterLink>
        <RouterLink class="routeItem" to="/VonAndVifAndVshow">VonAndVifAndVshow</RouterLink>
    </div>
</template>

<style scoped lang="scss">
.headerArea{
    width:100%;
    height: 100%;
    background-color: #e7e7e7;
    display: flex;
    align-items: center;
    .routeItem{
        color:rgb(84, 87, 87);
        margin:3%;
        font-size: 24px;
        text-decoration: none;
    }
}

</style>