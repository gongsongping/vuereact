import React, { Component } from "react";
import Label from '../../components/Label';
import  Btn  from '../../components/Btn'
import Agent from "../Agent/Agent";
import { connect } from 'react-redux';
import {changeProData,changeChosenPlus} from '../../store/actions';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';


const Proj = (props)=> {
    let pro = props.p
    let styles = {
        outer:{background:'white', margin:'5px', position:'relative'},
        proj: {padding:'5px 5px 5px 10px', background:'white', fontSize:'14px',lineHeight:'30px', position:'relative'},
        deny: {textAlign:'right', color:'white', display: pro.status==='building'?'':'none'},
        plus: {background:'#00B4CF', padding:'4px', fontSize:'14px', color:'white', position:'relative',top:'-1px'},
        empty: {height:'10px'},
        leftborder: {position:'absolute',top:'0',left:'0',zIndex:'10',width:'3px',height:'100%', background:pro.status==='building'?'#FF9A2A':'#7FBC39'},
        box: {padding:'10px',position:'absolute',top:'36px',zIndex:'100',width: '320px'},
        boxclose: {padding:'0 10px',textAlign:'right',fontSize:'20px',color:'#00B4CF'},
        boxinput: {borderRadius:'2px',border:'1px solid lightgray',width:'100%',height:'30px',padding:'0 5px',margin:'5px 0 10px'},
    }
    let value
    let handleChange = (event)=>{
        value = event.target.value
        // console.log(value);
    }
    let addResources = (p)=>{
        console.log(value);
        if(!value){ return alert("can't be empty")}
        let ar = Array.from(new Set( p.resources.concat(value) ) )
        p.resources = ar
        // store.dispatch({type:'changeProData', data:p})
        props.changeProData(p)
        value = ''
        // store.dispatch({type:'changeChosenPlus',data:0})
        props.changeChosenPlus(0)
    }
    let delResources = (p,r)=>{
        let confirm = window.confirm('Are you sure you wish to delete this item?')
        if (!confirm){ return }
        let idx = p.resources.indexOf(r)
        p.resources.splice(idx,1)
        console.log(p)
        // store.dispatch({type:'changeProData', data:p})
        props.changeProData(p)
    }
    return (
        <div style={styles.outer}> 
            <div style={styles.leftborder} className="col-lg-0"></div>
            <div style={styles.proj} className="col-lg-4-2 col-sm-2-2">
                <span className="icon-desktop"></span> &nbsp; {pro.url}  &nbsp;&nbsp; <span className="col-sm-0">  <Label bk={pro.status==='building'?'banana':'leaf'}> {pro.status} </Label> </span>
            </div>
            
            <div style={styles.proj} className="col-lg-4-1 col-sm-2-2">
                <span className="icon-info"></span>  &nbsp;  {pro.ip}  
            </div>
            <div style={styles.proj} className="col-lg-4-1 col-sm-2-2">
                <span className="icon-folder"></span>  &nbsp;  {pro.folder} 
            </div>
        
            <div style={styles.proj} className="col-lg-3-2 col-sm-2-1">
                <span onClick={()=>{ props.changeChosenPlus(pro.id) }} style={styles.plus} className="icon-plus"></span> &nbsp;
                {pro.resources.map((r,i)=>{
                    return  <span onClick={()=>{ delResources(pro,r) } } key={i} > <Label> {r}  {'\u00A0'} <span className="icon-trash"></span> </Label> {'\u00A0'} </span> 
                })} 
                
                <div style={Object.assign({},{display: props.chosenPlus===pro.id?'':'none'},styles.box)} className="arrow-box"> 
                    <div style={styles.boxclose}> <span onClick={()=>{ props.changeChosenPlus(0) }}>x</span> </div>
                    <div>Separate multiple resource name with commas</div>
                    <div>   <input onChange={handleChange} value={value} style={styles.boxinput} placeholder='e.g Chrome Firefox' type="text"/> </div>
                    <Btn onClick={()=>{ addResources(pro) }} bk="cyan">add Resources</Btn>&nbsp;&nbsp;
                    <Btn onClick={()=>{ props.changeChosenPlus(0) }} bk="dark">&nbsp;&nbsp;&nbsp;&nbsp;Cancel&nbsp;&nbsp;&nbsp;&nbsp;</Btn>
                </div>
            
            </div>
            <div style={Object.assign({},styles.proj, styles.deny)} className="col-lg-3-1 col-sm-2-2">
                <Btn bk="cyan">
                    <span className="icon-deny"></span>  &nbsp; deny
                </Btn>

            </div>

        </div>
    )    
}


class Project extends Component {
    componentDidMount (){
        console.log(this.props.match.url)
    }
    render (){
        let proData = this.props.proData
        // let proData = []
        if (this.props.match.params.category === 'physical'){
            proData = this.props.proData.filter((p)=> p.type==='physical')
        }
        if (this.props.match.params.category === 'virtual'){
            proData = this.props.proData.filter((p)=> p.type==='virtual')
        }
        return (
            <div>
                { proData.map((p,i)=>{
                        return <Proj {...this.props} p={p} key={i} /> 
                    })
                }
            </div>
        )
    }
}

// export default Project;

const mapStateToProps = (state, ownProps) => {
    // return { tableIndex: state.tableIndex, te: state.te  };
    const {proData,chosenPlus} = state
    return { proData,chosenPlus  };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return bindActionCreators({...actions}, dispatch);
// };

const mapDispatchToProps = {
    // ...actions,
    changeProData,
    changeChosenPlus,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Project);