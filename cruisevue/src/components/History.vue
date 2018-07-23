<template>
<div class="comp-his">
    <h4>History</h4>
        <ul>
            <li v-for="(h,i) in historyData" :key="i" class="comp-his-li">{{h}}</li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default { 
    name: 'History',
    props:['historyData'],
}
</script>

<style scoped>
.comp-his {
    color: #999;
    padding-left: 25px;
}
.comp-his-li {
    font-size: 12px;
    text-overflow: ellipsis;
}
.comp-his-li:hover {
    color: #00B4CF;
}
</style>

