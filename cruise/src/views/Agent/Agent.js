import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import Project from '../Project/Project';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';


class Agent extends Component {
    componentDidMount() {
        this.props.history.push('/projects/all')
    }
    render() {
        let proData = this.props.proData
        // let proData = []
        let sall=0,building=0,idle=0, tall=0, physical=0, virtual=0
        sall = proData.length
        tall = proData.length
        proData.forEach(p => {
            if (p.type==='physical') {physical+=1}
            if (p.type==='virtual') {virtual+=1}
            if (p.status==='building') {building+=1}
            if (p.status==='idle') {idle+=1}
        });
        return (
            <Agt>
                <div  className="card col-lg-3-1 col-sm-2-1">
                    <div  className="building">
                        <div  className="tl">building</div>
                        <div className="md building-logo"> <span className="icon-cog"></span> </div>
                        <div  className="br">{building}</div>
                    </div>
                </div>
                <div  className="card col-lg-3-1 col-sm-2-1">
                    <div  className="idle">
                        <div  className="tl">idle</div>                        
                        <div className="md idle-logo" > <span className="icon-coffee"></span> </div>
                        <div  className="br">{idle}</div>
                    </div>
                </div>
                <div  className="card col-lg-3-1 col-sm-2-2">
                    <div  className="type center-center">
                        <div className="center-center col-lg-3-3 col-sm-3-1">
                            <div  className="subtype1 center-center col-lg-3-1 col-sm-3-3">All</div>
                            <div  className="subtype2 center-center col-lg-3-1 col-sm-3-3"></div>
                            <div  className="subtype3 center-center col-lg-3-1 col-sm-3-3">{tall}</div>
                        </div>
                        <div className="center-center col-lg-3-3 col-sm-3-1">
                            <div  className="subtype1 center-center col-lg-3-1 col-sm-3-3">Physical</div>
                            <div  className="subtype2 center-center col-lg-3-1 col-sm-3-3"></div>
                            <div  className="subtype3 center-center col-lg-3-1 col-sm-3-3">{physical}</div>
                        </div>
                        <div className="center-center col-lg-3-3 col-sm-3-1">
                            <div  className="subtype1 center-center col-lg-3-1 col-sm-3-3">Virtual</div>
                            <div  className="subtype2 center-center col-lg-3-1 col-sm-3-3"></div>
                            <div  className="subtype3 center-center col-lg-3-1 col-sm-3-3">{virtual}</div>
                        </div>
                    </div>
                </div>
                <div className="search-bar">
                    <div className="search-nav col-lg-3-1 col-sm-2-2 move-d">
                        <NavLink className="link col-lg-3-1 col-sm-3-1" to={this.props.match.url + "projects/all"} activeStyle={{color: '#00B4CF', borderBottom: '3px solid #00B4CF'}} >
                            All
                        </NavLink>
                        <NavLink className="link col-lg-3-1 col-sm-3-1" to={this.props.match.url + "projects/physical"} activeStyle={{color: '#00B4CF', borderBottom: '3px solid #00B4CF'}}  >
                            Physical
                        </NavLink>
                        <NavLink className="link col-lg-3-1 col-sm-3-1" to={this.props.match.url + "projects/virtual"} activeStyle={{color: '#00B4CF', borderBottom: '3px solid #00B4CF'}}  >
                            Virtual
                        </NavLink>
                    </div>
                    <div className="search-input col-lg-3-1 col-sm-2-2 move-u">
                        <span className="search-input-icon icon-search"></span>
                        <input className="search-input-input" type="text"/>
                    </div>
                    <div className="search-right col-lg-3-1 col-sm-0">
                        <span  className="icon1 icon-th-card"></span> &nbsp;&nbsp;
                        <span  className="icon2 icon-th-list"></span> 
                    </div>
                </div>
                <Route path={this.props.match.url + "projects/:category"} component={Project} />
                {/* <Route path={this.props.match.url + "projects/:category"} render={()=> <Project {...this.props} /> } /> */}

            </Agt>
        );
    }   
}

// export default Agent;

const mapStateToProps = (state, ownProps) => {
    // return { tableIndex: state.tableIndex, te: state.te  };
    // return { ...state  };
    const {proData} = state
    return {proData}
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return bindActionCreators({...actions}, dispatch);
// };

// const mapDispatchToProps = {
// ...actions,
// };

export default connect(
mapStateToProps,
// mapDispatchToProps
  )(Agent);
    
const Agt = styled.div`
& .card{ 
    padding: 5px;  position: relative;  height: 18vh;
}
& .tl{
    position:absolute; top: 8px; left: 8px; font-size:18px;
}
& .br{
    position:absolute; bottom: 0px; right: 10px; font-size:48px;
}
& .md{
    text-align: center ;
}
& .building{
    background:#FF9A2A; height:100%;
}
& .idle{
    background:#7FBC39; height:100%;
}
& .type{
    background:white; height:100%;
}
& .subtype1{
    font-size:12px;
}
& .subtype2{
    height:2em;
}
& .subtype3{
    font-size:20px; font-weight:500;
}
& .icon1{
    font-size:20px;
}
& .icon2{
    color:#00B4CF; font-size:20px;
}

& .search-bar {
    width: 100%;
    position: relative;
    padding: 10px 5px;
    & .link {
        display: inline-block;
        height: 50px;
        background: white;
        line-height: 50px;
        border-right: 1px solid #ece9e9;
        text-align: center;
        color: inherit;
        font-size: 14px;
    }
}
& .search-nav {
    position: relative;
}

& .search-input {
    position: relative;
    height: 50px;
    line-height: 50px;
    background: white;
}

& .search-input-input {
    position: relative;
    height: 30px;
    display: inline-block;
    border: 1px solid #ece9e9;
    background: #ece9e9;
    padding: 0 5px;
    margin: 0 10px;
    @media screen and (max-width: 768px) {
        border: none;
        width: 96%;
        padding: 0px;
        // margin: 0px;
    }
}



& .search-input-icon {
    display: inline-block;
    position: absolute;
    left: 20px;
    top: 17px;
    font-size: 16px;
    color: gray;
    z-index: 10;
}


& .search-right {
    padding-right: 10px;
    text-align: right;
    height: 50px;
    line-height: 50px;
    background: white;
}
& .idle-logo {
    font-size: 80px;
    opacity: 0.2;
    color: white;
}
& .building-logo {
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

@media screen and (max-width: 768px) {

    & .move-d {
        top: 55px;
    }
    & .move-u {
        top: -55px;
    }

}


`