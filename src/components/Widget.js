import React, { Component } from 'react'
import PropTypes from 'prop-types'


class PrimaryButton extends Component {
   /** 
         @param {Object} props
         @param {string}
         @param {Function}
         @param {number}
         
        *
        */
    constructor(props){
        super(props)
       
        
    }
  render() {
    this.text=this.props.text
    this.click=this.props.onClick
    this.class=" "+this.props.className
    return (
      <a className={'px-6 py-2 rounded-md bg-zinc-900 text-white shadow-black shadow-sm '+this.class}  onClick={this.click}>{this.text}</a>
    )
  }
}
export default class DefaultButton extends Component {
    constructor(props){
        super(props)
    }
  render() {
    this.text=this.props.text
    this.click=this.props.onClick
    this.class=" "+this.props.className
    return (
      <a className={'px-6 py-2 rounded-md bg-white text-zinc-900 shadow-black shadow-sm '+this.class} onClick={this.click}>{this.text}</a>
    )
  }
}
PrimaryButton.propTypes={
  text: PropTypes.string
}
export {PrimaryButton,DefaultButton}
