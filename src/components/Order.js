import { Template } from "./Widget";
import React, { Component } from "react";
import selenium from "../data/img/Selenium.webp";
export default class Order extends Component {
  render() {
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
    const Left = (
      <>
        <div className="flex flex-col p-1 w-full">{Order}</div>
      </>
    );
    const Main = <></>;
    const Right = <></>;
    return (
      <>
        <Template LeftColumn={Left} />{" "}
      </>
    );
  }
}
