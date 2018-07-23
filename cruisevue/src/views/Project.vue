<template>
    <div>
        <div v-for="(p,i) in projs" :key="i" class="outer"> 
            <div :style="{background:p.status==='building'?'#FF9A2A':'#7FBC39'}" class="leftborder col-lg-0"></div>
            <div class="proj col-lg-4-2 col-sm-2-2">
                <span class="icon-desktop"></span> &nbsp;{{p.url}}  &nbsp;&nbsp; <span class="col-sm-0"> <span :style="{padding:'2px',background:p.status==='building'?'#FF9A2A':'#7FBC39'}"> {{p.status}} </span> </span>
            </div>
            
            <div class="proj col-lg-4-1 col-sm-2-2">
                <span class="icon-info"></span>  &nbsp;  {{p.ip}}  
            </div>
            <div class="proj col-lg-4-1 col-sm-2-2">
                <span class="icon-folder"></span>  &nbsp;  {{p.folder}}
            </div>
        
            <div class="proj col-lg-3-2 col-sm-2-1">
                <span @click="$store.commit('chosenPlus', p.id)" class="plus icon-plus"></span> &nbsp;
                <span v-for="(r,ix) in p.resources" :key="ix" @click="delResources(p,r)"  :style="{padding:'2px',background:'#E1E4E6',border:'1px solid white'}">
                    <span>
                        {{r}}  &nbsp; <span class="icon-trash"></span>  &nbsp; 
                    </span>
                </span> 
                <div :style="{display:chosenPlus===p.id?'':'none'}" class="box arrow-box"> 
                    <div class="boxclose"> <span @click="$store.commit('chosenPlus',0)">x</span> </div>
                    <div>Separate multiple resource name with commas</div>
                    <div>   <input v-model="resource" class="boxinput" placeholder='e.g Chrome Firefox' type="text"/> </div>
                    <button style="background:#00B4CF;" class="btn" @click="addResources(p)" >add Resources</button>&nbsp;&nbsp;
                    <button style="background:#2D4054;" class="btn" @click="$store.commit('chosenPlus',0)" >&nbsp;&nbsp;&nbsp;&nbsp;Cancel&nbsp;&nbsp;&nbsp;&nbsp;</button>
                </div>
            
            </div>
            <div class="proj deny col-lg-3-1 col-sm-2-2">
                <button :style="{background:'#00B4CF',display: p.status==='building'?'':'none'}" class="btn">
                    <span class="icon-deny"></span>  &nbsp; deny
                </button>

            </div>

        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default { 
    name: 'Project',
    data: function () {
        return {  resource: '', projs:[]}
    },
    computed: mapState(['proData','chosenPlus']),
    created:function () {
    },
    mounted:function () {
        console.log('-------params-category'+this.$route.params.category);
        if (this.$route.params.category === 'all'){
            this.projs = this.proData
        }
        if (this.$route.params.category === 'physical'){
            this.projs = this.proData.filter((p)=> p.type==='physical')
        }
        if (this.$route.params.category === 'virtual'){
            this.projs = this.proData.filter((p)=> p.type==='virtual')
        }
    },
    methods: {
        addResources (p){
            if(!this.resource){ return alert("can't be empty")}
            let ar = Array.from(new Set( p.resources.concat(this.resource) ) )
            p.resources = ar
            this.$store.commit('changeResources', p)
            this.resource = ''
            this.$store.commit('chosenPlus', 0)
        },
        delResources (p,r){
            let confirm = window.confirm('Are you sure you wish to delete this item?')
            if (!confirm){return}
            let idx = p.resources.indexOf(r)
            p.resources.splice(idx,1)
            this.$store.commit('changeResources', p)
        }
    }
}
</script>

<style>

.outer {background:white; margin:5px; position:relative;}
.proj {padding:5px 5px 5px 10px; background:white; font-size:14px;line-height:30px; position:relative;}
.deny {text-align:right; color:white; }
/* display: pro.status===building?:none; */
.plus {background:#00B4CF; padding:4px; font-size:14px; color:white; position:relative;top:-1px;}
.empty {height:10px;}
.leftborder {position:absolute;top:0;left:0;z-index:10;width:3px;height:100%; }
/* background:pro.status===building?"'#FF9A2A":"#7FBC39"; */
.box {padding:10px;position:absolute;top:36px;z-index:110;width: 320px;}
.boxclose {padding:0 10px;text-align:right;font-size:20px;color:#00B4CF;}
.boxinput {border-radius:2px;border:1px solid lightgray;width:100%;height:30px;padding:0 5px;margin:5px 0 10px;}

.arrow-box {
/* position: relative; */
background: white;
border: 1px solid #00B4CF;
box-shadow: 0 3px 5px #817878;
}
.arrow-box:after, .arrow-box:before {
bottom: 100%;
left: 10px;
border: solid transparent;
content: " ";
height: 0;
width: 0;
position: absolute;
pointer-events: none;
}

.arrow-box:after {
border-color: #00000000;
border-bottom-color: white;
border-width: 5px;
margin-left: -5px;
}
.arrow-box:before {
border-color: #00b4cf00;
border-bottom-color: #00B4CF;
border-width: 6px;
margin-left: -6px;
}

</style>

