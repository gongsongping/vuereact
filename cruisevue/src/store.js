import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const historyData = [
'bjstdmngbgr02/Acceptance_test', 
'bjstdmngbgr03/Acceptance_test', 
'bjstdmngbgr04/Acceptance_Test', 
'bjstdmngbgr05/Acceptance_test.....',
'bjstdmngbgr06/Acceptance_Test', 
'bjstdmngbgr07/Acceptance_Test', 
'bjstdmngbgr08/Acceptance_test', 
'bjstdmngbgr09/Acceptance_Test', 
'bjstdmngbgr11/Acceptance_test', 
'bjstdmngbgr12/Acceptance_Test', 
'bjstdmngbgr13/Acceptance_tes',
]


const proData = [
  {id:1,type:'physical', url:'bjstdmngbgr01.thoughtworks.om ', status:'idle', ip:'192.168.1.102', folder:'/var/ib/cruise-agent', resources: ['Firefox', 'Safari', 'Ubuntu', 'Chrome']},
  {id:2,type:'virtual', url:'bjstdmngbgr08.thoughtworks.om ', status:'building', ip:'192.168.1.243', folder:'/var/ib/cruise-agent', resources: ['Firefox', 'Safari', 'Ubuntu', 'Chrome']},
  {id:3,type:'physical', url:'bjstdmngbgr10.thoughtworks.om ', status:'idle', ip:'192.168.1.80', folder:'/var/ib/cruise-agent', resources: ['Firefox', 'Safari']},
  {id:4,type:'virtual', url:'bjstdmngbgr11.thoughtworks.om ', status:'building', ip:'192.168.1.117', folder:'/var/ib/cruise-agent', resources: ['Firefox', 'Safari', 'Ubuntu', 'Chrome']},
  {id:5,type:'virtual', url:'bjstdmngbgr15.thoughtworks.om ', status:'idle', ip:'192.168.1.110', folder:'/var/ib/cruise-agent', resources: []},
  {id:6,type:'physical', url:'bjstdmngbgr17.thoughtworks.om ', status:'building', ip:'192.168.1.122', folder:'/var/ib/cruise-agent', resources: ['Firefox', 'Safari', 'Ubuntu', 'Chrome']},
  {id:7,type:'physical', url:'bjstdmngbgr18.thoughtworks.om ', status:'idle', ip:'192.168.1.13', folder:'/var/ib/cruise-agent', resources: ['Firefox', 'Chrome']},
  {id:8,type:'virtual', url:'bjstdmngbgr20.thoughtworks.om ', status:'idle', ip:'192.168.1.120', folder:'/var/ib/cruise-agent', resources: ['Ubuntu', 'Chrome']},
]

export default new Vuex.Store({
  state: {
    windowWidth: undefined,
    toggleMenu: false,
    historyData: historyData,
    proData: proData,
    chosenPlus: 0,
  },
  mutations: {
    toggleMenu(state){
      state.toggleMenu = !state.toggleMenu
    },
    changeWindowWidth(state, data){
      state.windowWidth = data
    },
    chosenPlus(state, data){
      state.chosenPlus = data
    },
    changeResources(state, data){
      let proData = state.proData
      let idx = proData.findIndex((e)=> e.id === data.id)
      proData[idx] = data
      state.proData = proData
    }
  },
  actions: {

  }
})
