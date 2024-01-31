import PropTypes from "prop-types";
import React, { Component } from "react";

import { IoCloseOutline } from "react-icons/io5";
import { PiMessengerLogo } from "react-icons/pi";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import $ from "jquery";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { FaBoxOpen } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
/**
 * Random Component
 * @augments {Component<Props, State>}
 * @text for content of Button
 * @onClick event on click
 * @href is link
 */
class PrimaryButton extends Component {
  static propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    href: PropTypes.string,
  };
  render() {
    this.text = this.props.text;
    this.click = this.props.onClick;
    this.class = " " + this.props.className;
    return (
      <a
        className={
          "px-6 py-2 rounded-md bg-zinc-900 text-white shadow-black shadow-sm " +
          this.class
        }
        href={this.props.href}
        onClick={this.click}
      >
        {this.text}
      </a>
    );
  }
}
export default class DefaultButton extends Component {
  static propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    href: PropTypes.string,
  };
  render() {
    this.text = this.props.text;
    this.click = this.props.onClick;
    this.class = " " + this.props.className;
    return (
      <a
        className={
          "px-6 py-2 rounded-md bg-white text-zinc-900 shadow-black shadow-sm " +
          this.class
        }
        href={this.props.href}
        onClick={this.click}
      >
        {this.text}
      </a>
    );
  }
}
/**
 * Random Component
 * @augments {Component<Props, State>}
 * @LeftColmn is Left side
 * @Main is center
 * @Right is Right
 */
class Template extends Component {
  static propTypes = {
    LeftColumn: PropTypes.element,
    MainColumn: PropTypes.element,
    RightColumn: PropTypes.element,
  };

  constructor(props) {
    super(props);
    this.isPopoverOpen = false;
    this.ActiveNav = "message";
    this.state = {
      isNavButtonVisible: true,
    };
  }

  render() {
    const SwitchNav = (e) => {
      this.ActiveNav = e;
      this.setState({});
    };
    const Tooltip = (Trigger, Content) => (
      <Popup
        contentStyle={{
          background: "#141414",
          color: "white",
          textAlign: "center",
        }}
        arrowStyle={{ color: "#141414" }}
        on={["hover"]}
        trigger={(open) => <span>{Trigger}</span>}
        position="right center"
        closeOnDocumentClick
      >
        <span> {Content} </span>
      </Popup>
    );
    const { isNavButtonVisible } = this.state;
    return (
      <section className="flex h-screen flex-shrink-0">
        {/**  first colum */}
        <div className="lg:flex bg-white  hidden w-1/4 ">
          <div className="flex-col flex w-full h-full">
            <div className="flex text-white w-full ">
              <div className="flex h-20 w-full  bg-zinc-900"></div>
            </div>
            <div className="flex w-full h-full">
              <div
                className="flex space-y-7 pt-8 flex-col h-full w-10 bg-zinc-900 text-2xl"
                data-nav
              >
                {Tooltip(
                  <div
                    className={`px-2 py-2 shadow-md ${
                      this.ActiveNav === "support"
                        ? "text-black bg-white"
                        : "text-white"
                    }`}
                    onClick={() => {
                      SwitchNav("support");
                    }}
                  >
                    <BiSupport />
                  </div>,
                  "Call Support"
                )}
                {Tooltip(
                  <div
                    className={`px-2 py-2 shadow-md ${
                      this.ActiveNav === "order"
                        ? "text-black bg-white"
                        : "text-white"
                    }`}
                    onClick={() => {
                      SwitchNav("order");
                    }}
                  >
                    <FaBoxOpen />
                  </div>,
                  "Active Order"
                )}
                {Tooltip(
                  <div
                    className={`px-2 py-2 flex shadow-md ${
                      this.ActiveNav === "cancel"
                        ? "text-black bg-white"
                        : "text-white"
                    }`}
                    onClick={() => {
                      SwitchNav("cancel");
                    }}
                  >
                    <div className="flex">
                      <FaBoxOpen />
                    </div>
                    <div className="flex text-red-500 absolute">
                      <IoCloseOutline />
                    </div>
                  </div>,
                  "Cancel Order"
                )}
                {Tooltip(
                  <div
                    className={`px-2 py-2 shadow-md ${
                      this.ActiveNav === "home"
                        ? "text-black bg-white"
                        : "text-white"
                    }`}
                    onClick={() => {
                      SwitchNav("home");
                    }}
                  >
                    <FaHome />
                  </div>,
                  "Home"
                )}
                {Tooltip(
                  <div
                    className={`px-2 py-2 shadow-md ${
                      this.ActiveNav === "message"
                        ? "text-black bg-white"
                        : "text-white"
                    }`}
                    onClick={() => {
                      SwitchNav("message");
                    }}
                  >
                    <PiMessengerLogo />
                  </div>,
                  "Messenger"
                )}
              </div>
              <div className="flex w-0 items-center h-full">
                <div
                  className="flex absolute ml-3"
                  onClick={(e) => {
                    const a = $("div[data-nav]");
                    this.setState((prevState) => ({
                      isNavButtonVisible: !prevState.isNavButtonVisible,
                    }));
                    if (a.hasClass("flex")) {
                      a.removeClass("flex");
                      a.addClass("hidden");
                    } else {
                      a.addClass("flex");
                      a.removeClass("hidden");
                    }

                    console.log("hi");
                  }}
                >
                  {isNavButtonVisible ? (
                    <div className=" hover:text-2xl">
                      <MdOutlineKeyboardDoubleArrowLeft />
                    </div>
                  ) : (
                    <div className="hover:text-2xl">
                      <MdOutlineKeyboardDoubleArrowRight />
                    </div>
                  )}
                </div>
              </div>
              <div className="flex w-full h-full">
              <div className="flex  m-2 border border-zinc-300 shadow-md p-3  rounded-md">
            {" "}
            <div className="flex flex-col h-full w-full pt-4">
              {this.props.LeftColumn}
            </div>
          </div>
              </div>
            </div>
          </div>
        </div>
        {/**  first colum end */}
        {/**  secound colum */}
        <div className="flex flex-col bg-white lg:w-1/2 w-full  ">
          <div className="flex lg:h-20 h-24  w-full bg-zinc-900 text-white flex-shrink-0 lg:static fixed mb-auto">
            <div className="flex flex-col items-center justify-end w-full">
              <div className="flex h-28 overflow-x-scroll w-full justify-center scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-track-zinc-400 lg:hidden">
                <div className="flex space-x-4"></div>
              </div>
              <div className="flex mt-auto">
                <div
                  className="flex lg:text-2xl lg:py-3 w-full"
                  data-active-chat
                >
                  Edwerd Gergion
                </div>
              </div>
              <div className="flex">{this.MainColumn}</div>
            </div>
          </div>
        </div>
        {/**  secound colum end */}
        {/**  third colum */}
        <div className="lg:flex hidden bg-white w-1/4 h-full  lg:flex-col">
          <div className="flex h-20 w-full bg-zinc-900 text-white  flex-shrink-0"></div>
          <div className="flex m-2 border border-zinc-300 shadow-md p-3 h-full rounded-md overflow-y-auto">
            {" "}
            <div className="flex flex-col w-full pt-4">
              {this.props.RightColumn}
            </div>
          </div>
        </div>
        {/**  third colum end */}
      </section>
    );
  }
}
export { PrimaryButton, DefaultButton, Template };
