import React, { Component } from 'react'
import logo from "../data/img/fav.png"
import { PrimaryButton } from './Widget'


export default class Login extends Component {
  render() {
    return (
      <section className='flex justify-center mt-52'><div className="w-96 py-7 rounded-md shadow-lg shadow-zinc-400 justify-center flex">
        <div className='flex flex-col items-center'>
        <div className='w-20'><img src={logo} alt="" /></div>
        <div className="justify-center flex"><div className="text-2xl">Sign In</div></div>
        <div className='flex flex-col py-10 space-y-4'>
        <div className="flex bg-gradient-to-tr from-purple-400 to-purple-700 via-purple-400 pb-1 rounded">
            <input type="text" placeholder='Email or Username' className='placeholder:text-center w-48  focus:outline-none'/>
            </div>
            <div className="flex bg-gradient-to-tr from-purple-400 to-purple-700 via-purple-400 pb-1 rounded">
            <input type="text" placeholder='Password' className='placeholder:text-center w-48  focus:outline-none'/>
            </div>
            <div className='flex justify-center py-8'>
                <PrimaryButton text="Sign In" className="cursor-pointer">
                    </PrimaryButton>
                    </div>
            </div>
            <div>Do not have account?<a href="" className='text-blue-500 cursor-pointer hover:underline'> Sign Up</a></div>
        </div>
        </div></section>

    )
  }
}
