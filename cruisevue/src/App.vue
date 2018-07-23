<template>
  <div class="app-container">
    <header class="app-hd">
      <div>
        <div class="menu-btn">
          <div>
            <button @click="toggleMu" class="btn square" style="background: white;"> <span style="color:black;" class="icon-navicon"></span> </button>     
          </div>            
        </div>
      </div>
      <img class="logo" src='./assets/logo.svg' alt="logo"/>
      <div> 
          <button class="btn square" style="background: white;">  </button>     
      </div>            
    </header>
    <div class="app-main">
      <div :style="{display: toggleMenu?'inline-block':'none'}" class="app-menu">
          <div class="app-menu-close">
            <button @click="toggleMu" class="btn square" style="background:#2D4054;"><span style="color:white;">x</span></button>     
          </div>
          <Sidenav></Sidenav>
          <div class="app-his">
            <History :historyData="historyData" ></History>
          </div>

      </div>
      <div class="app-side">
          <Sidenav></Sidenav>
          <div class="app-his">
            <History :historyData="historyData" />
          </div>
      </div>
      <div class="app-body">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Btn from '@/components/Btn.vue';
import Sidenav from '@/components/Sidenav.vue';
import History from '@/components/History.vue';
import { mapState } from 'vuex';

export default {
  name: 'app',
  components: { Btn, Sidenav, History },
  computed: {
    localComputed () { },
    ...mapState(['toggleMenu','historyData','windowWidth'])
  },
  mounted: function () {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      // console.log(window.innerWidth)
      this.$store.commit('changeWindowWidth', window.innerWidth)
      if ((this.windowWidth>1024)&&this.toggleMenu){
          this.toggleMu()
      }
    },
    toggleMu(){
      console.log('toggleMenu')
      this.$store.commit('toggleMenu')
    },
  }
}
</script>
<style lang='scss'>
@import "./assets/main.scss";
@import "./assets/fonts.css";


.btn {
    height: 30px;
    border: none;
    // line-height: 30px;
    font-size: 14px;
    padding-left: 1em;
    padding-right: 1em;
    color: white;
}

.square {
    height: 30px;
    border: none;
    width: 30px;
    font-size: 18px;
    color: white;
    padding: 0;
}


.exact-active-class {
    color: #00B4CF;
    background: #435466;
}
.exact-active-class-1 {
    color: #00B4CF;
    border-bottom: 3px solid #00B4CF;
}


.app-head {
  height: 40px;
  box-shadow: 0 2px 3px #faf4f4;
}

.logo {
  width: 80px;
  height: 50px;
}

.app-container {
  background: #ece9e9;
}

.app-hd {
  background: white;
  height: 50px;
  line-height: 50px;
  box-shadow: 0 2px 3px lightgrey;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.app-main {
  position: relative;
  margin: 0 auto;
  max-width: 1024px;
  min-height: 100vh;
}

.app-side {
  position: relative;
  display: inline-block;
  vertical-align: top;
  background: #2d4054;
  width: 25%;
  min-height: 100vh;
}
.app-his {
  position: absolute;
  bottom: 10px;
}
.app-body {
  position: relative;
  padding: 8px 12px;
  display: inline-block;
  vertical-align: top;
  width: 75%;
}
.app-menu {
  position: fixed;
  top: 0px;
  left: 0px;
  vertical-align: top;
  background: #2d4054;
  width: 60vw;
  min-height: 100vh;
  z-index: 1000;
}

.menu-btn {
  display: none;
}

/* for responsive layout 响应式布局 */
@media screen and (max-width: 1024px) {
  .app-side {
    display: none;
  }
  .app-body {
    position: relative;
    padding: 8px 12px;
    display: inline-block;
    vertical-align: top;
    width: 100%;
  }
  .menu-btn {
    display: block;
  }
}

.app-menu-close {
  text-align: right;
  padding: 5px;
}

@media screen and (max-width: 768px) {
  .app-body {
    position: relative;
    padding: 2px;
    display: inline-block;
    vertical-align: top;
    width: 100%;
  }
  .col-sm-0 {
    display: none;
  }
  .col-sm-2-1 {
    display: inline-block;
    vertical-align: top;
    width: 50%;
  }
  .col-sm-2-2 {
    display: inline-block;
    vertical-align: top;
    width: 100%;
  }

  .col-sm-3-1 {
    display: inline-block;
    vertical-align: top;
    width: 33.33%;
  }
  .col-sm-3-2 {
    display: inline-block;
    vertical-align: top;
    width: 66.66%;
  }
  .col-sm-3-3 {
    display: inline-block;
    vertical-align: top;
    width: 100%;
  }

  .move-d {
    top: 55px;
  }
  .move-u {
    top: -55px;
  }
  .search-input-input {
    position: relative;
    border: none;
    height: 30px;
    width: 96%;
    padding: 0px;
    margin: 0px;
  }

  .search-input-icon {
    display: inline-block;
    position: absolute;
    left: 20px;
    top: 17px;
    font-size: 16px;
    color: gray;
    z-index: 10;
  }
}
@media screen and (min-width: 768px) {
  .col-lg-0 {
    display: none;
  }
  .col-lg-2-1 {
    display: inline-block;
    vertical-align: top;
    width: 50%;
  }
  .col-lg-2-2 {
    display: inline-block;
    vertical-align: top;
    width: 100%;
  }
  .col-lg-3-1 {
    display: inline-block;
    vertical-align: top;
    width: 33.33%;
  }
  .col-lg-3-2 {
    display: inline-block;
    vertical-align: top;
    width: 66.66%;
  }
  .col-lg-3-3 {
    display: inline-block;
    vertical-align: top;
    width: 100%;
  }
  .col-lg-4-1 {
    display: inline-block;
    vertical-align: top;
    width: 25%;
  }
  .col-lg-4-2 {
    display: inline-block;
    vertical-align: top;
    width: 50%;
  }
  .col-lg-4-3 {
    display: inline-block;
    vertical-align: top;
    width: 75%;
  }
  .col-lg-4-4 {
    display: inline-block;
    vertical-align: top;
    width: 100%;
  }
}

.search-bar {
  width: 100%;
  position: relative;
  padding: 10px 5px;
}
.search-nav {
  position: relative;
}
.search-bar .link {
  display: inline-block;
  height: 50px;
  background: white;
  line-height: 50px;
  border-right: 1px solid #ece9e9;
  text-align: center;
  color: inherit;
  font-size: 14px;
}
.search-input {
  position: relative;
  height: 50px;
  line-height: 50px;
  background: white;
}
.search-input-input {
  display: inline-block;
  position: relative;
  border: 1px solid #ece9e9;
  height: 30px;
  background: #ece9e9;
  padding: 0 5px;
  margin: 0 10px;
}

.search-input-icon {
  display: inline-block;
  position: absolute;
  left: 20px;
  top: 17px;
  font-size: 16px;
  color: gray;
  z-index: 10;
}

.search-right {
  padding-right: 10px;
  text-align: right;
  height: 50px;
  line-height: 50px;
  background: white;
}

.center-center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.comp-link [class*="icon-"] {
  vertical-align: baseline;
}
[class*="icon-"] {
  vertical-align: -15%;
}

.idle-logo {
  font-size: 80px;
  opacity: 0.2;
  color: white;
}
.building-logo {
  animation: building-logo-spin infinite 2s linear;
  -webkit-animation: building-logo-spin infinite 2s linear;
  font-size: 80px;
  opacity: 0.2;
  color: white;
}

@keyframes building-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
