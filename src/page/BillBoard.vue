<template>
    <div class="bill">
        <div v-for="item in list" :key="item.index">
            <BillList :type='item'></BillList>
        </div>
    </div>
</template>
<script>
import BillList from '../components/Bill/BilList'
export default {
    data() {
        return {
            list:["1", "2", "11", "21", "22", "23", "24", "25"]
        }
    },
    components:{
        BillList
    }
}
</script>
<style lang="less" scoped>
.bill{
    margin-top: 50px;
} 
</style>