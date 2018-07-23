// import {CHANGE_WINDOW_WIDTH,CHANGE_TOGGLE_MENU,CHANGE_CHOSEN_PLUS,CHANGE_PRODATA} from './actionTypes';

export const CHANGE_WINDOW_WIDTH = 'CHANGE_WINDOW_WIDTH';
export const CHANGE_TOGGLE_MENU = 'CHANGE_TOGGLE_MENU';
export const CHANGE_CHOSEN_PLUS = 'CHANGE_CHOSEN_PLUS';
export const CHANGE_PRODATA = 'CHANGE_PRODATA';
export const CHANGE_HISTORY_DATA = 'CHANGE_HISTORY_DATA';

export function changeWindowWidth (data) {
    return {type: CHANGE_WINDOW_WIDTH ,data:data}
};
export function changeToggleMenu (data) {
    return {type: CHANGE_TOGGLE_MENU ,data:data}
};
export function changeChosenPlus (data) {
    return {type: CHANGE_CHOSEN_PLUS ,data:data}
};
export function changeProData (data) {
    return {type: CHANGE_PRODATA ,data:data}
};


// console.log( toggleMenu(9) )