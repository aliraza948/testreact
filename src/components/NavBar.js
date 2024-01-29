import React,{useState} from "react";
import logo from "../data/img/fav.png"
import 'jquery-ui/ui/effects/effect-slide'
import $ from "jquery"
import {FaHome,FaBoxOpen, FaRegEnvelopeOpen, FaUserAlt} from "react-icons/fa" 
import {LuSettings2} from "react-icons/lu" 
//import { Route,Routes,BrowserRouter } from "react-router-dom";
//import PropTypes from 'prop-types'

class SideBarContentController extends React.Component{
  constructor(props){
    super(props)
    this.iconClass="py-3 flex pl-2"
    //this.sideMenuActive=""
    //this.sideMenuActive="home"
    this.sideMenuActive="home"
    this.ActiveClass="bg-white text-zinc-900"
    this.isHandler=false
   
  }
  render(){
    const handleClick=(e)=>{
    this.sideMenuActive=e
    this.setState({})
  }
  this.isThereContent=this.props.haveContent
    this.fontStyle={"font-size":"20px"}
    this.StyleForIcon=this.isThereContent?{"font-size":"14px","padding-left":"5px"}:{};
    this.isEnableSidebar=this.props.isEnableSidebar
    this.home=this.isThereContent?" Home":""
    this.openbox=this.isThereContent?" Order":""
    this.envelop=this.isThereContent?" Message":""
    this.setting=this.isThereContent?" Settings":""
    this.User=this.isThereContent?" Profile":""
    this.SideBarHeight="200vh"
    const sizeController=()=>{}
    if(window.innerWidth>690 && window.innerWidth<760){
      this.SideBarHeight="70rem"

    }else if(760<window.innerWidth && 1200>window.innerWidth){
      this.SideBarHeight="100rem"
    }
    else if(767<window.innerWidth && 1200>window.innerWidth){
      this.SideBarHeight="100rem"
    }
    else if(1200<window.innerWidth){
      this.SideBarHeight="75rem"
    }
    if(!this.isHandler){
      window.addEventListener('resize',sizeController)
      this.isHandler=true
    }
    sizeController()
  return(
    
    <>{this.isEnableSidebar?
    <div className={` bg-zinc-900 absolute `+this.props.vis} style={{height:this.SideBarHeight}} id="sideBar" ref={this.props.fr}>
          {this.props.content}
    <div className="flex flex-col pt-5 text-white" >
      <div style={this.fontStyle} className={this.iconClass+" "+(this.sideMenuActive==="home"?this.ActiveClass:"")}   onClick={()=>handleClick('home')}>
        <FaHome/>
        <div style={this.StyleForIcon}>{this.home}</div>
      </div>
      <div style={this.fontStyle} className={this.iconClass+" "+(this.sideMenuActive==="order"?this.ActiveClass:"")}   onClick={()=>handleClick('order')}>
        <FaBoxOpen/>
        <div style={this.StyleForIcon}>{this.openbox}</div>
        
      </div>
      <div style={this.fontStyle} className={this.iconClass+" "+(this.sideMenuActive==="message"?this.ActiveClass:"")}   onClick={()=>handleClick('message')}>
        <FaRegEnvelopeOpen/>
        <div style={this.StyleForIcon}>{this.envelop}</div>
      </div>
      <div style={this.fontStyle} className={this.iconClass+" "+(this.sideMenuActive==="settings"?this.ActiveClass:"")}   onClick={()=>handleClick('settings')}>
        <LuSettings2/>
        <div style={this.StyleForIcon}>
        {this.setting}
        </div>
        
      </div>
      <div style={this.fontStyle} className={this.iconClass+" "+(this.sideMenuActive==="profile"?this.ActiveClass:"")}   onClick={()=>handleClick('profile')}>
        <FaUserAlt/>
        <div style={this.StyleForIcon}>{this.User}</div>   
      </div>

    </div></div>:""}
    </>
  )
}}
/*function SideBar(props){
    return(
        <div className={`px-2 bg-zinc-900 `+props.vis} style={{height:"100vh"}} id="sideBar" ref={props.fr}>
          {props.content}
        </div>
    )}*/
class NavBar extends React.Component {
  constructor(props){
    super(props)
    this.refSideBar=React.createRef()
    this.iconOf=React.createRef()
    this.visble="visible"
    this.visibleSideBar="visible"
    this.isMin=false
    this.vir="v"
    if(this.isMin){
      this.visibleSideBar="visible w-32"

    }else if(!this.isMin){
      this.visibleSideBar="visible w-10"
    }
    }
    static defaultProps= {
      isEnableSidebar:false
    }
    render (){
      const toggleVisibleOfSidebar=()=>{
        if(this.isMin){
          this.visibleSideBar="visible w-10"
          this.vir="s"
          this.isMin=false
        }else if(!this.isMin){
          this.visibleSideBar="visible w-32"
          this.vir="v"
          this.isMin=true
        }
        this.setState({})
   
      }
      this.isEnableSidebar=this.props.isEnableSidebar
      return(
        <>
          <nav className="bg-zinc-900 flex justify-between">
          
          <img src={logo} alt="" className="w-14 ml-2" onClick={toggleVisibleOfSidebar} ref={this.iconOf}/>
          {/*<div className="flex"><input type="text" className='ml-4 rounded-l-sm p-1'/><button type='button' className='text-white rounded-r-sm bg-gradient-to-t from-zinc-700 via-zinc-900 to-zinc-700 px-4'>Press it</button> </div>*/}
         </nav>
         <SideBarContentController vis={this.visibleSideBar} fr={this.refSideBar} haveContent={this.isMin} isEnableSidebar={this.isEnableSidebar}/>
        </>
      )
    };
  }

/*NavBar.propTypes={
    btntext : PropTypes.string,
}
NavBar.defaultProps={
    btntext : "Cookie"
}*/
export {NavBar}