import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Side = styled.div`
    padding-top: 20px;
`
const Nlink = styled(NavLink)`
    display: inline-block;
    width: 100%;
    padding-left: 15%;
    height: 45px;
    line-height: 45px;
    color: snow;
    font-size: 14px;
    &:hover {
        color:  #00B4CF;
    };
    & [class*="icon-"] {
        vertical-align: baseline;
    }
`

const Sidenav = (props)=> (
    <Side>
        <Nlink to="/dashboard"  activeStyle={{color: '#00B4CF', background: '#435466'}}  >
            <span className="icon-dashboard"></span> &nbsp;&nbsp; DASHBOARD
        </Nlink>

        <Nlink to="/" exact activeStyle={{color: '#00B4CF', background: '#435466'}} >
            <span className="icon-sitemap"></span> &nbsp;&nbsp; AGENT
        </Nlink>

        <Nlink to="/mycuise" activeStyle={{color: '#00B4CF', background: '#435466'}} >
            <span className="icon-boat"></span> &nbsp;&nbsp; MY CUISE
        </Nlink>

        <Nlink to="/help" activeStyle={{color: '#00B4CF', background: '#435466'}} >
            <span className="icon-life-bouy"></span> &nbsp;&nbsp; HELP
        </Nlink>

    </Side>
)

export default Sidenav;