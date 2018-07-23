## 同一个项目分别用ReactJS和Vue.js实现的简单比较
这是一个实验性的项目, 目的是用构建同一个项目的方式比较两个前端架构的优劣. 这种比较是很主观的, 只代表我个人的喜好. 项目有基本的路由跳转, state全局管理, css响应式(自适应desktop,tablet,phone), 列表渲染, 增删改查等. 两个架构都采用'全家桶'模式, Vue.js包括vue-router,vuex等, ReactJS包括react-router,redux等.

____

## react-router和vue-router  
- vue-router 的配置

```js
export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Agent,
            children: [
                { 
                    path: 'projects/:category',
                    component: Project,
                }
            ]
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Agent,
        },
    ]
})

<router-link to="/projects/all"  replace> All </router-link>
<router-view :key='$route.params.category' /> `(此处要使用:key,否则view无法刷新)`

```
- react-router 的配置

```python
<NavLink to="/dashboard" > </NavLink>
<Route path="/dashboard" component={Dashboard} />

```
react-router的配置要比vue-router的灵活一些, 再看如何处理login, auth等.

```python
vue-router
routers.beforeEach((to, from, next)=>{
})
react-router
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
            }} />
    )} />
)
```

## vuex和redux
vuex和redux的作用都是在一个地方统一管理state, 让组件与组件之间的通信变得更容易, 当项目变得庞大的时候, 它们的必要性就体现出来了.  
- vuex的配置
```JavaScript
export default new Vuex.Store({
    state: {
        windowWidth: 0,
        toggleMenu: false,
    },
    mutations: {
        changeToggleMenu(state){
            state.toggleMenu = !state.toggleMenu
        },
        changeWindowWidth(state, data){
            state.windowWidth = data
        },
    },
})
使用时
import { mapState, mapMutations } from 'vuex';

{
    data(){},
    computed: {
        ...mapState(['windowWidth','toggleMenu'])
    },
    methods:{
        ...mapMutations(['changeToggleMenu','changeWindowWidth'])
    }
}
这样就可以直接使用
this.toggleMenu,
this.windowWidth,
this.changeToggleMenu(),
this.changeWindowWidth(),

```
- redux的配置要繁琐一些, 要配合react-redux使用
```js
export const CHANGE_WINDOW_WIDTH = 'CHANGE_WINDOW_WIDTH';
export const CHANGE_TOGGLE_MENU = 'CHANGE_TOGGLE_MENU';

export function changeWindowWidth (data) {
    return {type: CHANGE_WINDOW_WIDTH ,data:data}
};
export function changeToggleMenu (data) {
    return {type: CHANGE_TOGGLE_MENU ,data:data}
};

function windowWidth (
    state =  0,
    action = {}
) {
    switch (action.type) {
        case CHANGE_WINDOW_WIDTH:
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
            return !state
        default:
            return state
    }
};

const reducers = combineReducers({windowWidth,toggleMenu})
import { createStore } from 'redux'
const store =  createStore(reducers)
ReactDOM.render(
    <Provider store={store}>
        <Router basename="/proj/cruise/build">
        <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById("root")
);

在使用时,在具体的components里面
import { connect } from 'react-redux';
const mapStateToProps = (state, ownProps) => {
    const {windowWidth,toggleMenu,historyData} = state
    return {windowWidth,toggleMenu,historyData}
};

const mapDispatchToProps = {
    changeWindowWidth,
    changeToggleMenu,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

mapStateToProps, mapDispatchToProps 的作用是把state, dispatch map映射到components的props里, 这样就可以在props里直接获得
this.props.toggleMenu,
this.props.windowWidth,
this.props.changeToggleMenu(),
this.props.changeWindowWidth(),
```
redux的配置相对比较复杂, 有时甚至让人产生困惑, vuex的配置则相对比较简单.

## css的处理, vue single file components 和 react  styled-components
- vue使用single file components, 把html,css,js放在一个file里面,使写代码变得方便很多, 如下
```
<template>
<div class="comp-his">
    <h4>History</h4>
    </div>
</template>

<script>
export default { 
    name: 'History',
    data(){},
}
</script>

<style scoped>
.comp-his {
    color: #999;
    padding-left: 25px;
}
</style>
```
- react 使用styled-components也可以把css放到js文件里, 它不同于inline css.
```
import React from 'react';
import styled from 'styled-components';

const His = styled.div`
    color: #999;
    padding-left: 25px;
`
export default function History (props) {
    return <His>
        <h4>History</h4>
    </His>
}
```

## 开发效率
总体上来说, Vue.js的开发效率要比ReactJs高一点, ReactJs写代码的愉悦感要好一些, 仅为个人观点.
