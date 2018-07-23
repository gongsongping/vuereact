<template>
    <div>
      <div :style="styles.card" class="col-lg-3-1 col-sm-2-1">
          
          <div :style="styles.building">
              <div :style="styles.tl">building</div>
              <div class="building-logo" :style="styles.md"> <span class="icon-cog"></span> </div>
              <div :style="styles.br">{{building}}</div>
          </div>
      </div>
      <div :style="styles.card" class="col-lg-3-1 col-sm-2-1">
          <div :style="styles.idle">
              <div :style="styles.tl">idle</div>                        
              <div class="idle-logo" :style="styles.md"> <span class="icon-coffee"></span> </div>
              <div :style="styles.br">{{idle}}</div>
          </div>
      </div>
      <div :style="styles.card" class="col-lg-3-1 col-sm-2-2">
          <div :style="styles.type" class="center-center">
              <div class="center-center col-lg-3-3 col-sm-3-1">
                  <div :style="styles.subtype1" class="center-center col-lg-3-1 col-sm-3-3">All</div>
                  <div :style="styles.subtype2" class="center-center col-lg-3-1 col-sm-3-3"></div>
                  <div :style="styles.subtype3" class="center-center col-lg-3-1 col-sm-3-3">{{tall}}</div>
              </div>
              <div class="center-center col-lg-3-3 col-sm-3-1">
                  <div :style="styles.subtype1" class="center-center col-lg-3-1 col-sm-3-3">Physical</div>
                  <div :style="styles.subtype2" class="center-center col-lg-3-1 col-sm-3-3"></div>
                  <div :style="styles.subtype3" class="center-center col-lg-3-1 col-sm-3-3">{{physical}}</div>
              </div>
              <div class="center-center col-lg-3-3 col-sm-3-1">
                  <div :style="styles.subtype1" class="center-center col-lg-3-1 col-sm-3-3">Virtual</div>
                  <div :style="styles.subtype2" class="center-center col-lg-3-1 col-sm-3-3"></div>
                  <div :style="styles.subtype3" class="center-center col-lg-3-1 col-sm-3-3">{{virtual}}</div>
              </div>
          </div>
      </div>
      <div class="search-bar">
          <div class="search-nav col-lg-3-1 col-sm-2-2 move-d">
              <router-link class="link col-lg-3-1 col-sm-3-1" exact-active-class="exact-active-class-1" to="/projects/all"  replace>
                  All
              </router-link>
              <router-link class="link col-lg-3-1 col-sm-3-1" exact-active-class="exact-active-class-1" to="/projects/physical" replace>
                  Physical
              </router-link>
              <router-link class="link col-lg-3-1 col-sm-3-1" exact-active-class="exact-active-class-1" to="/projects/virtual" >
                  Virtual
              </router-link>
          </div>
          <div class="search-input col-lg-3-1 col-sm-2-2 move-u">
              <span class="search-input-icon icon-search"></span>
              <input class="search-input-input" type="text"/>
          </div>
          <div class="search-right col-lg-3-1 col-sm-0">
              <span :style="styles.icon1" class="icon-th-card"></span> &nbsp;&nbsp;
              <span :style="styles.icon2" class="icon-th-list"></span> 
          </div>
      </div>
      <router-view :key='$route.params.category' />

  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex';

export default {
  name: 'agent',
  components: { },
  data: function () {
    let styles = {
        card: { padding: '5px',  position: 'relative',  height: '18vh' },
        tl:{position:'absolute', top: '8px', left: '8px', fontSize:'18px'},
        br:{position:'absolute', bottom: '0px', right: '10px', fontSize:'48px'},
        md: {textAlign: 'center' },
        building:{background:'#FF9A2A', height:'100%'},
        idle:{background:'#7FBC39', height:'100%'},
        type:{background:'white', height:'100%'},
        subtype1:{fontSize:'12px'},
        subtype2:{height:'2em'},
        subtype3:{fontSize:'20px', fontWeight:'500'},
        icon1:{fontSize:'20px'},
        icon2:{color:'#00B4CF', fontSize:'20px'}
    }
    return {
      styles: styles,
      sall:0,
      building:0,
      idle:0, 
      tall:0, 
      physical:0, 
      virtual:0
    }
  },
  computed: mapState(['proData']),
  created:function () {
    let proData = this.proData
    // let sall=0,building=0,idle=0, tall=0, physical=0, virtual=0
    this.sall = proData.length
    this.tall = proData.length
    proData.forEach(p => {
        if (p.type==='physical') {this.physical+=1}
        if (p.type==='virtual') {this.virtual+=1}
        if (p.status==='building') {this.building+=1}
        if (p.status==='idle') {this.idle+=1}
    });
  },
  mounted:function () {
    this.$router.push({ path: '/projects/all' })
  },
  methods: {
    te(){
      console.log('teeee')
    },
  }
}

</script>

<style>
    
</style>

