import React, { Component } from 'react'

class PrimaryButton extends Component {
    constructor(props){
        super(props)
    }
  render() {
    this.text=this.props.text
    this.class=" "+this.props.className
    return (
      <a className={'px-6 py-2 rounded-md bg-zinc-900 text-white'+this.class}>{this.text}</a>
    )
  }
}
export default class DefaultButton extends Component {
    constructor(props){
        super(props)
    }
  render() {
    this.text=this.props.text
    this.class=" "+this.props.className
    return (
      <a className={'px-6 py-2 rounded-md bg-white text-zinc-900 shadow-black shadow-sm '+this.class}>{this.text}</a>
    )
  }
}
export {PrimaryButton,DefaultButton}
