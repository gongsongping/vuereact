import React, { Component } from "react";
import logo from './assets/logo.svg'
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import  Btn  from './components/Btn'
import  Sidenav  from './components/Sidenav'
import  History  from './components/History'
import Agent from "./views/Agent/Agent";
import { changeWindowWidth,changeToggleMenu } from './store/actions';
import styled from 'styled-components';


class App extends Component {

  // for responsive layout 响应式布局监听windowWidth
  handleResize = () => {
    // store.dispatch({ type: "changeWindowWidth", data: window.innerWidth })
    this.props.changeWindowWidth(window.innerWidth)
    console.log('handleResize'+this.props.windowWidth)
    if ((this.props.windowWidth>1024)&&this.props.toggleMenu){
        this.toggleMenu()
    }
  }
  
  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
    // this.props.history.push('/dashboard')
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  toggleMenu = ()=>{
    // store.dispatch({ type: "toggleMenu", data: '' })
    this.props.changeToggleMenu('')
  }

  render() {
    return (
      // <Router basename="/proj/cruise/build">
        <Container>
          <header className="app-hd">
            <div>
              <div onClick={this.toggleMenu} className="menu-btn">
                <Btn color="dark" bk='white'><span style={{color:'black'}} className="icon-navicon"></span></Btn>            
              </div>
            </div>
            <img className="logo" src={logo} alt="logo"/>
            <Btn color="dark" bk='white'></Btn>            
          </header>
          <div className="app-main">
            <div style={{display: this.props.toggleMenu?'inline-block':'none'}} className="app-menu">
                <div className="app-menu-close">
                  <Btn onClick={this.toggleMenu} bk='dark'><span style={{color:'white'}}>x</span></Btn>     
                </div>
                <Sidenav />
                <div className="app-his">
                  <History historyData={this.props.historyData} />
                </div>

            </div>
            <div className="app-side">
                <Sidenav />
                <div className="app-his">
                  <History historyData={this.props.historyData} />
                </div>
            </div>
            <div className="app-body">
              <Route path="/" component={Agent} />
              {/* <Route path="/" render={()=>{ Agent } } /> */}
            </div>
          </div>
        </Container>
      // </Router>
    );
  }
}

// export default App;


const mapStateToProps = (state, ownProps) => {
  // return { tableIndex: state.tableIndex, te: state.te  };
  // return { ...state  };
  const {windowWidth,toggleMenu,historyData} = state
  return {windowWidth,toggleMenu,historyData}
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return bindActionCreators({...actions}, dispatch);
// };

const mapDispatchToProps = {
  // ...actions,
  changeWindowWidth,
  changeToggleMenu,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


const Container = styled.div`
  background: #ece9e9;

  & .app-main {
    position: relative;
    margin: 0 auto;
    max-width: 1024px;
    min-height: 100vh;
  }

  & .logo {
    width: 80px;
    height: 50px;
  }

  & .app-hd {
    background: white;
    height: 50px;
    line-height: 50px;
    box-shadow: 0 2px 3px lightgrey;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .app-side {
    position: relative;
    vertical-align: top;
    background: #2D4054;
    width: 25%;
    min-height: 100vh;
    display: inline-block;
    @media screen and (max-width: 1024px) {
        display: none;
    }  
  }

  & .app-his {
    position: absolute;
    bottom: 10px;
  }
  & .app-body {
    position: relative;
    display: inline-block;
    vertical-align: top;
    padding: 8px 12px;
    width: 75%;
    @media screen and (max-width: 1024px) {
        padding: 8px 12px;
        width: 100%;
    }
    @media screen and (max-width: 768px) {
        padding: 2px;
        width: 100%;
    }
    
  }


  & .menu-btn {
    display:none;
    @media screen and (max-width: 1024px) {
      display: block;
    }
  }

  & .app-menu {
    position: fixed;
    top: 0px;
    left: 0px;
    vertical-align: top;
    background: #2D4054;
    width: 60vw;
    min-height: 100vh;
    z-index: 1000;
  }


  & .app-menu-close {
    text-align: right;
    padding: 5px;
  }

`