import { createStore, combineReducers } from "redux";
import {CHANGE_WINDOW_WIDTH,CHANGE_TOGGLE_MENU,CHANGE_CHOSEN_PLUS,CHANGE_PRODATA,CHANGE_HISTORY_DATA} from './actions';

let historyDataInit = [
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


let proDataInit = [
  {id:1,type:'physical', url:'bjstdmngbgr01.thoughtworks.om ', status:'idle', ip:'192.168.1.102', folder:'/var/ib/cruise-agent', resources: ['Firefox', 'Safari', 'Ubuntu', 'Chrome']},
  {id:2,type:'virtual', url:'bjstdmngbgr08.thoughtworks.om ', status:'building', ip:'192.168.1.243', folder:'/var/ib/cruise-agent', resources: ['Firefox', 'Safari', 'Ubuntu', 'Chrome']},
  {id:3,type:'physical', url:'bjstdmngbgr10.thoughtworks.om ', status:'idle', ip:'192.168.1.80', folder:'/var/ib/cruise-agent', resources: ['Firefox', 'Safari']},
  {id:4,type:'virtual', url:'bjstdmngbgr11.thoughtworks.om ', status:'building', ip:'192.168.1.117', folder:'/var/ib/cruise-agent', resources: ['Firefox', 'Safari', 'Ubuntu', 'Chrome']},
  {id:5,type:'virtual', url:'bjstdmngbgr15.thoughtworks.om ', status:'idle', ip:'192.168.1.110', folder:'/var/ib/cruise-agent', resources: []},
  {id:6,type:'physical', url:'bjstdmngbgr17.thoughtworks.om ', status:'building', ip:'192.168.1.122', folder:'/var/ib/cruise-agent', resources: ['Firefox', 'Safari', 'Ubuntu', 'Chrome']},
  {id:7,type:'physical', url:'bjstdmngbgr18.thoughtworks.om ', status:'idle', ip:'192.168.1.13', folder:'/var/ib/cruise-agent', resources: ['Firefox', 'Chrome']},
  {id:8,type:'virtual', url:'bjstdmngbgr20.thoughtworks.om ', status:'idle', ip:'192.168.1.120', folder:'/var/ib/cruise-agent', resources: ['Ubuntu', 'Chrome']},
]

function proData (
    state = proDataInit,
    action = {}
) {
    switch (action.type) {
        case CHANGE_PRODATA:
            let proData = [...state]
            let idx = proData.findIndex((e)=>{return e.id == action.data.id})
            // console.log('acttiondata-index--'+ typeof idx +action.data.id+'-'+idx);
            proData[idx] = action.data
            console.log(proData[idx]);
            return proData
        default:
            return state
    }
};

function historyData (
    state = historyDataInit,
    action = {}
) {
    switch (action.type) {
        case CHANGE_HISTORY_DATA:
        default:
            return state
    }
};

function windowWidth (
    state =  0,
    action = {}
) {
    switch (action.type) {
        case CHANGE_WINDOW_WIDTH:
            console.log('window-width'+action.data)
            return action.data;
        default:
            return state;
    }
};

function toggleMenu (
    state = false,
    action = {}
) {
    switch (action.type) {
        case CHANGE_TOGGLE_MENU:
            console.log('toggle-menu'+action.data)
            return !state
        default:
            return state
    }
};

function chosenPlus (
    state = 0,
    action = {}
) {
    switch (action.type) {
        case CHANGE_CHOSEN_PLUS:
            console.log('chosen-plus'+action.data)
            return  action.data
        default:
            return state
    }
};

const reducers = combineReducers({proData,historyData,windowWidth,toggleMenu,chosenPlus})
// const reducers = combineReducers({proData:proData,historyData:historyData,windowWidth:windowWidth,toggleMenu:toggleMenu,chosenPlus:chosenPlus})

export default reducers

// const store = createStore(reducers);



// export default store;
