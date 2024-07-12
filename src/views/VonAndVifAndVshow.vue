<script>
import vifshow from '../components/VifAndVshowComponent.vue'
import von from '../components/VonComponent.vue'
import model from '../components/SlotModel.vue'
export default{
    components:{
        vifshow,
        von,
        model,
    }
}
</script>

<template>
    <vifshow />
    <von />
    <model>
        Funny
        <template v-slot:title>
            這是標題
        </template>
    </model>
</template>

<style scoped lang="scss">

</style>