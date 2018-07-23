<template>
    <div class="comp-nav">
        <router-link exact-active-class="exact-active-class" class="comp-link" to="/dashboard"  >
            <span class="icon-dashboard"></span> &nbsp;&nbsp; DASHBOARD
        </router-link>
    
        <router-link exact-active-class="exact-active-class" class="comp-link" to="/" exact  >
            <span class="icon-sitemap"></span> &nbsp;&nbsp; AGENT
        </router-link>
    
        <router-link exact-active-class="exact-active-class" class="comp-link" to="/mycuise"  >
            <span class="icon-boat"></span> &nbsp;&nbsp; MY CUISE
        </router-link>
    
        <router-link exact-active-class="exact-active-class" class="comp-link" to="/help"  >
            <span class="icon-life-bouy"></span> &nbsp;&nbsp; HELP
        </router-link>
    </div>
</template>

<script>
export default { 
    name: 'Sidenav',
}
</script>

<style>

.comp-nav {
    padding-top: 20px;
}

.comp-link {
    display: inline-block;
    width: 100%;
    padding-left: 15%;
    height: 45px;
    line-height: 45px;
    color: snow;
    font-size: 14px;
}

.comp-link:hover {
    color:  #00B4CF;
}
</style>
