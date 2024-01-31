import { Template } from "./Widget";
import React, { Component } from "react";
import selenium from "../data/img/Selenium.webp";
import sampleUser from "../data/img/ui_path.webp";
import {IoMdMore} from 'react-icons/io'
import Popup from 'reactjs-popup';
import {FaPen,FaTrash} from 'react-icons/fa6'
import $ from 'jquery'
export default class Main extends Component {
  render() {
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
      const userBoardFinal=<><div className="flex w-full px-4 ">
      <div className="flex flex-col w-full items-center space-y-3 flex-shrink-0 ">
        {userBoard}
        {userBoard}
        {userBoard}
      </div>
    </div></>
    const OrderContent = [
      {
        id: "90AF45FS8",
        d: "01:09 21/07/2003",
        r: "Elivia Bard",
        t: "r",
        s: "d",
        m: "Delived",
      },
      {
        id: "90AF45FS8",
        d: "01:09 21/07/2003",
        r: "Elivia Bard",
        t: "r",
        s: "r",
        m: "Placed",
      },
      {
        id: "90AF45FS8",
        d: "01:09 21/07/2003",
        r: "Elivia Bard",
        t: "r",
        s: "h",
        m: "",
      },
      {
        id: "90AF45FS8",
        d: "01:09 21/07/2003",
        r: "Elivia Bard",
        t: "r",
        s: "d",
        m: "Delived",
      },
      {
        id: "90AF45FS8",
        d: "01:09 21/07/2003",
        r: "Elivia Bard",
        t: "r",
        s: "d",
        m: "Delived",
      },
    ];
    const Order = OrderContent.map((i) => (
      <>
        <div className=" h-28 w-full flex rounded-md shadow-md">
          <div className="flex p-3 flex-col w-full">
            <div className="flex">
              <div className="flex  w-full">
                <div className="flex w-1/2 text-xl">#{i.id}</div>
                <div className="flex w-1/2">
                  <div className="flex ml-auto">{i.d}</div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col w-16 rounded-full border">
                {" "}
                <img src={selenium} alt="" />
              </div>
            </div>
          </div>
        </div>
      </>
    ));
    const FinalOrder = (
      <>
        <div className="flex flex-col p-1 w-full">{Order}</div>
      </>
    );
    const Main = <></>;
    const Right = <></>;
    return (
      <>
        <Template LeftColumn={userBoardFinal} RightColumn={userBoardFinal}  />{" "}
      </>
    );
  }
}