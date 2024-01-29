import React, { Component, createRef, useState } from "react";
import {PrimaryButton,DefaultButton} from './Widget.js'
import { GrSend, GrEmoji } from "react-icons/gr";
import sampleUser from "../data/img/ui_path.webp";
import EmojiPicker from "emoji-picker-react";
import { Popover } from "react-tiny-popover";
import { IoCheckmarkDone, IoCheckmarkOutline,IoCloseOutline} from "react-icons/io5";
import {IoMdMore} from 'react-icons/io'
import {FaReply} from 'react-icons/fa'
import {PiShieldWarning,PiInfoBold,PiPlus} from 'react-icons/pi'
import {MdOutlineDangerous,MdOutlineScreenShare} from 'react-icons/md'
import ReactStars from "react-rating-stars-component"
import ReactCountryFlag from "react-country-flag"
import $ from "jquery";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import {FaPen,FaTrash} from 'react-icons/fa6'

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.heightOfMessageBox = "2rem";
    this.isPopoverOpen = false;
    this.TxtBox = React.createRef();
    this.ActiveChat = React.createRef();
    this.rating=2.5
  }

  render() {
    const keyInMessage = (e) => {
      const v = e.target.value;
      var j = v.split("\n");
      this.heightOfMessageBox = j.length + 1 + "rem";
      this.setState({});
    };
    const chat = [
      { data: "how are you?", t: "p1" },
      { data: "I'm fine?", t: "p2" },
      { data: "You are great person?", t: "p1" },
      {data:"why its happening",s:'w'},
      {data:"why its happening",s:'d'},
      {data:"why its happening",s:'i'},
      { data: "Well that's fine how can i help you?", t: "p2" },
      { data: "I'm away from my home", t: "p1" },
      { data: "So i just came few hour ago", t: "p1" },
      { data: "Let we talk on project", t: "p1" },
      {
        data: "I'm at dinner table so i will call back to you after 10 min",
        t: "p2",
      },
      
    ];

    const user = [
      { im: sampleUser, name: "Albert", lt: "1min ago",lm:" I'm ready to do",s:true },
      { im: sampleUser, name: "Vegar", lt: "40min ago" ,lm:"When it will ready" ,s:true },
      { im: sampleUser, name: "Gorgious", lt: "now",lm:"My Be we will cover its today",s:true },
      { im: sampleUser, name: "Almeena Walf", lt: "6days ago",lm:"let's talk about human nature",s:false },
      { im: sampleUser, name: "Kneez Ether", lt: "10min ago" ,lm:"Do you know how to proceed on this project" ,s:false },
      { im: sampleUser, name: "Donald Edward", lt: "1yr ago" ,lm:"whats your mind about its how we can proceed quickly" ,s:true },
      { im: sampleUser, name: "Micha Thril", lt: "3days ago" ,lm:"is is harmful for you" ,s:true },
      { im: sampleUser, name: "Edvina Zac", lt: "15min ago" ,lm:"Thanks you " ,s:false },
      { im: sampleUser, name: "Morac Gildeo", lt: "2sec ago" ,lm:"How you will proceed its" ,s:true },
    ];
    const userBoard = user.map((i) => (
      <>
        <div
          className="flex w-10 lg:w-full"
          data-person={i.name}
          onClick={() => {
            $("div[data-active-Chat]").text(i.name);
          }}
        > 
          <div className="flex lg:w-full w-10" >
            <div className="flex-col flex w-10 flex-shrink-0 lg:h-10"><div className="flex rounded-full border"><img src={i.im} alt="" /></div><div className="w-full truncate">{i.name}</div></div>
            <div className="lg:flex pl-2 flex-col w-full min-w-32 hidden ">
              <div className="flex flex-row justify-start w-full"><div className="flex w-52 truncate">{i.name}</div><div className="lg:flex w-full"><small className="ml-auto mr-1">{i.lt=="now"?<div className="flex w-3 h-3 rounded-full border border-zinc-900 bg-green-500"></div>:i.lt}</small></div></div>
              <div className="lg:flex w-full "><div className="flex w-3/4 truncate">{i.s &&("Me:")}{i.lm}</div><div className="flex w-3" onMouseEnter={(e)=>{const a=$(e.target).children('div[data-more]');
           if(a.hasClass('hidden')){
            a.addClass('flex')
            a.removeClass('hidden')
           }else if(!a.hasClass('flex')){
              a.addClass('flex')
              a.removeClass('hidden')
           }
          
            //console.log("Enter in Region")
          }} onMouseLeave={(e)=>{const a=$(e.target).children('div[data-more]');
          if(a.hasClass('flex')){
            a.addClass('hidden')
            a.removeClass('flex')
            
          }else if(a.hasClass('hidden')){
            a.addClass('hidden')   
            a.removeClass('flex')
            
          }
            
           // console.log("Leave to Region")
          }}>
              <Popup trigger={<div className="hidden text-2xl" data-more><IoMdMore/></div>}
position="right bottom"
on="click"
closeOnDocumentClick
mouseLeaveDelay={300}
mouseEnterDelay={0}
contentStyle={{ padding: '7px 7px', border: 'none' }}
arrow={false}>
                 <div className="menu">
<div className="flex w-full px-3 hover:bg-gray-200 rounded-md"><div className="flex w-3/4">Edit</div><div className="flex ml-auto py-1"><FaPen/></div></div>
<div className="flex w-full px-3 hover:bg-gray-200 rounded-md"><div className="flex w-3/4">Delete</div><div className="flex ml-auto py-1"><FaTrash/></div></div>

</div></Popup>
                </div></div>
            </div>
          </div>
          
        </div>
        <div className=" border w-3/4 hidden lg:block border-zinc-900"></div>
      </>
    ));
    const chatItems = chat.map((it) => (
      <>
        {it.t === "p1" && (
          <div className="flex justify-end py-1" onMouseEnter={(e)=>{const a=$(e.target).children('div[data-more]');
           if(a.hasClass('hidden')){
            a.addClass('flex')
            a.removeClass('hidden')
           }else if(!a.hasClass('flex')){
              a.addClass('flex')
              a.removeClass('hidden')
           }
          
            //console.log("Enter in Region")
          }} onMouseLeave={(e)=>{const a=$(e.target).children('div[data-more]');
          if(a.hasClass('flex')){
            a.addClass('hidden')
            a.removeClass('flex')
            
          }else if(a.hasClass('hidden')){
            a.addClass('hidden')   
            a.removeClass('flex')
            
          }
            
           // console.log("Leave to Region")
          }}>
           <Popup trigger={<div className="hidden" data-more><div className="flex py-3 text-xl"><IoMdMore/></div></div>}
      position="left bottom"
      on="click"
      closeOnDocumentClick
      mouseLeaveDelay={300}
      mouseEnterDelay={0}
      contentStyle={{ padding: '7px 7px', border: 'none' }}
      arrow={false}>
                           <div className="menu">
        <div className="flex w-full px-3 hover:bg-gray-200 rounded-md"><div className="flex w-3/4">Edit</div><div className="flex ml-auto py-1"><FaPen/></div></div>
        <div className="flex w-full px-3 hover:bg-gray-200 rounded-md"><div className="flex w-3/4">Delete</div><div className="flex ml-auto py-1"><FaTrash/></div></div>
        <div className="flex w-full px-3 hover:bg-gray-200 rounded-md"><div className="flex w-3/4">Reply</div><div className="flex ml-auto py-1"><FaReply/></div></div>
        <div className="flex w-full px-3 hover:bg-gray-200 rounded-md"><div className="flex w-3/4">Forward</div><div className="flex ml-auto py-1"><MdOutlineScreenShare/></div></div>

      </div></Popup>

            
            <div className="flex flex-col w-3/4">
              <div className="flex   bg-slate-300 p-3 rounded-md shadow-md">
                {it.data}
              </div>
              <div className="flex justify-end">
                <IoCheckmarkDone />
              </div>
            </div>
          </div>
        )}
        {it.t === "p2" && (
          <div className="flex py-1">
            <div className="flex flex-col w-3/4">
              <div className="flex bg-zinc-900 text-white p-3 rounded-md shadow-md">
                {it.data}
              </div>
              <div className="flex justify-end">
                <IoCheckmarkOutline />
              </div>
            </div>
          </div>
        )}
        {it.t!="p2" && it.t!="p1" &&(<div className="flex py-1 justify-center">
            <div className="flex flex-col w-3/4 ">
              <div className={`flex flex-col items-center  p-3 rounded-md shadow-md ${it.s=='w'?"text-black bg-yellow-400":""}${it.s=='i'?"text-black bg-blue-400":""}${it.s=='d'?"text-white bg-red-400":""}`}>
                <div className="flex text-2xl flex-col">{it.s=="w" &&(<div className="flex items-center"><PiShieldWarning/>Warning </div>)}{it.s=="i" &&(<div className="flex items-center"><PiInfoBold/>Inform</div>)}{it.s=="d" &&(<div className="flex items-center"><MdOutlineDangerous/>Danger</div>)}</div>
                <div className="flex">{it.data}</div>
              </div>
            </div>
          </div>)}
      </>
    ));
    const notesContent=[
      {t:'Bevina',c:'we will discuss its later now just save it',d:'01/20/2024'},
      {t:'Bevina',c:'we will discuss its later now just save it',d:'01/20/2024'},
      {t:'Bevina',c:'we will discuss its later now just save it',d:'01/20/2024'},
      {t:'Bevina',c:'we will discuss its later now just save it',d:'01/20/2024'},
      {t:'Bevina',c:'we will discuss its later now just save it',d:'01/20/2024'},
      {t:'Bevina',c:'we will discuss its later now just save it',d:'01/20/2024'},
      {t:'Bevina',c:'we will discuss its later now just save it',d:'01/20/2024'},
      {t:'Bevina',c:'we will discuss its later now just save it',d:'01/20/2024'},
      {t:'Bevina',c:'we will discuss its later now just save it',d:'01/20/2024'},
      {t:'Bevina',c:'we will discuss its later now just save it',d:'01/20/2024'},
      {t:'Bevina',c:'we will discuss its later now just save it',d:'01/20/2024'},
      {t:'Bevina',c:'we will discuss its later now just save it',d:'01/20/2024'},
    ]
    const notes= notesContent.map((b)=>(
      <> <div className="flex w-full h-20 border rounded-md shadow-md">
      <div className="flex-col px-3 w-full py-2">
        <div className="flex w-full">
          <div className="flex w-3/4 truncate text-xl">
            {b.t}</div>
            <div className="flex">{b.d}</div>
            </div><div className="flex">
              <div className="flex truncate w-3/4">{b.c}</div><div className="flex ml-auto text-xl py-2"><Popup trigger={<div><IoMdMore/></div>}
position="left bottom"
on="click"
closeOnDocumentClick
mouseLeaveDelay={300}
mouseEnterDelay={0}
contentStyle={{ padding: '7px 7px', border: 'none' }}
arrow={false}>
                 <div className="menu">
<div className="flex w-full px-3 hover:bg-gray-200 rounded-md"><div className="flex w-3/4">Edit</div><div className="flex ml-auto py-1"><FaPen/></div></div>
<div className="flex w-full px-3 hover:bg-gray-200 rounded-md"><div className="flex w-3/4">Delete</div><div className="flex ml-auto py-1"><FaTrash/></div></div>

</div></Popup></div></div>
            
            </div> </div></>
    ))
    const togglePopover = () => {
      if (this.isPopoverOpen) {
        this.isPopoverOpen = false;
      } else {
        this.isPopoverOpen = true;
      }
    };

    return (
      <section className="flex lg:p-1 p-0 h-screen flex-shrink-0">
        {/**  first colum */}
        <div className="lg:flex bg-gray-100 shadow-inner hidden w-1/4 h-full rounded-l-lg border-zinc-500 lg:border-l-2 lg:border-y-2">
          <div className="flex-col flex w-full">
            <div className="flex text-white w-full rounded-tl-lg">
              <div className="flex h-20 w-full rounded-tl-lg bg-zinc-900">
                
              </div>
            </div>
            <div className="flex w-full px-4 overflow-y-scroll scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-zinc-400">
              <div className="flex flex-col w-full items-center space-y-3 ">
                {userBoard}
                {userBoard}
                {userBoard}
              </div>
            </div>
          </div>
        </div>
        {/**  first colum end */}
        {/**  secound colum */}
        <div className="flex flex-col bg-gray-100 lg:w-1/2 w-full rounded-md lg:rounded-none h-full lg:border-x-0 lg:border-t-2 lg:border-zinc-500 ">
          <div className="flex lg:h-20 h-24  w-full bg-zinc-900 text-white flex-shrink-0 lg:static fixed mb-auto">
            <div className="flex flex-col items-center justify-end w-full">
              <div className="flex h-28 overflow-x-scroll w-full justify-center scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-track-zinc-400 lg:hidden">
                <div className="flex space-x-4">{userBoard}</div>
              </div>
              <div className="flex mt-auto">
                <div className="flex lg:text-2xl lg:py-3 w-full" data-active-chat>
                  Edwerd Gergion
                  
                </div>
              
              </div>
            </div>
          </div>

          <div className="  px-2 flex flex-grow overflow-y-scroll items-center lg:pt-96 pt-96 scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-zinc-500">
            <div className="flex w-full flex-col lg:m-0 space-y-2 lg:mt-0 mt-0 lg:pt-0 pt-64 pb-14 sm:pb-0 sm:pt-0">
              {chatItems}
            </div>
          </div>
          <div className="flex py-2 w-full mt-auto bg-zinc-900 text-white justify-center lg:relative fixed left-0 bottom-0">
            <div className="flex flex-col justify-start text-white text-2xl">
              <Popover
                align="end"
                isOpen={this.isPopoverOpen}
                positions={["top"]}
                content={
                  <EmojiPicker
                    onEmojiClick={(e, v) => {
                      this.TxtBox.current.value += e.emoji;
                      this.setState({});
                    }}
                    theme="dark"
                  />
                }
              >
                <button
                  onClick={() => {
                    togglePopover();
                    this.setState({});
                  }}
                >
                  <GrEmoji />
                </button>
              </Popover>
            </div>
            <div
              className="flex max-h-40"
              style={{ height: this.heightOfMessageBox }}
            >
              <div className="flex text-black px-2">
                <textarea
                  contentEditable="true"
                  type="text"
                  className="focus:outline-none rounded-lg lg:w-80 w-70 placeholder:text-center px-1 scrollbar-thin scrollbar-thumb-zinc-200 scrollbar-track-zinc-500"
                  placeholder="Type Your Message.."
                  onKeyUp={keyInMessage}
                  ref={this.TxtBox}
                ></textarea>
              </div>
            </div>
            <div className="text-white text-2xl h-9 border-white border p-2 rounded-md flex">
              <button>
                <GrSend />
              </button>
              <div className="mx-1 text-sm lg:block hidden">Send</div>
            </div>
          </div>
        </div>
        {/**  secound colum end */}
        {/**  third colum */}
        <div className="lg:flex hidden bg-gray-100 w-1/4 h-full rounded-r-lg border-zinc-500 lg:border-r-2 lg:border-y-2 lg:flex-col">
          <div className="flex h-20 w-full bg-zinc-900 text-white rounded-tr-lg flex-shrink-0">
          </div>
          <div className="flex m-2 border border-zinc-300 shadow-md p-3 h-full rounded-md overflow-y-auto"> <div className="flex flex-col w-full pt-4">
        <div className="flex">
         <div className="flex flex-col ml-8 w-20 rounded-full border shadow-md"><img src={sampleUser} alt="" /></div>
         
        </div>
        <div className="flex flex-col pt-10 pl-1 space-y-3">
          <div className="flex text-2xl">
          Edwerd Gergion
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex">From  Germoney <div className="flex py-1 ml-auto"><ReactCountryFlag  countryCode="DE"  svg/></div></div>
          <div className="flex"> Rating</div>
          <div className="flex space-x-9">
            <div className="flex">
              <ReactStars count={5} size={28} activeColor="#141414" isHalf={true} value={this.rating} color="#8f8c8c"/>

              </div><div className="flex py-2 text-2xl">{this.rating}</div> 
               </div>
               <div className="flex"><div className="flex">Notes</div>
               <div className="flex py-1 ml-auto">
                <Popup trigger={<butto className="hover:text-zinc-900"><PiPlus/></butto>} contentStyle={{ backgroundColor: '#e5e7eb',borderRadius:"10px",padding:"0px" }} modal nested closeOnDocumentClick={false}>
                 {close=> <span>
                  <div className="modal">
                    <div className="header border-b border-zinc-900 py-1 pl-2 text-2xl flex">
                      Notes <div className="flex ml-auto text-2xl" onClick={close}>
                        <IoCloseOutline/></div>
                         </div>
                         <div className="content p-3">
                          <input className="w-full h-10 border rounded-md my-4 placeholder:pl-3" placeholder="Title" />
                          <textarea className="p-3 w-full overflow-y-scroll scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-zinc-400 h-32 placeholder:py-1 placeholder:px-1" contentEditable="true" placeholder="Write here"></textarea>
                          <div className="flex w-full justify-end space-x-10"><div className="flex"><PrimaryButton text="Save" className="mx-3"></PrimaryButton><DefaultButton text="Cancel" onClick={close} className="mx-3"></DefaultButton></div></div>
                 </div></div></span>
  }
                </Popup>
                </div>
               </div>
            
             
        </div>
        
        </div>
        <div className="flex flex-col overflow-y-scroll placeholder:text-center px-1 scrollbar-thin scrollbar-thumb-zinc-200 scrollbar-track-zinc-500">{notes}</div>
          </div>
          </div>
          
        </div>
        {/**  third colum end */}
      </section>
    );
  }
}
