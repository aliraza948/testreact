import {useState,useEffect,Component} from 'react'
import landingImge from "../data/img/l4.webp"
import UiPath from "../data/img/ui_path.webp"
import Selenium from "../data/img/Selenium.webp"
import TestingImage from "../data/img/Testing.webp"
import GoogleScript from "../data/img/google_script.webp"
import UiVision from "../data/img/uivision.webp"
import TypeWriterEffect from 'react-typewriter-effect';
import DefaultButton, {PrimaryButton} from "./Widget"
import {FaBell,FaChartPie} from "react-icons/fa"
import {ImLab} from "react-icons/im"
import {BiSupport} from "react-icons/bi"
import logo from "../data/img/fav.png"

 
class LandindPageImage extends Component{
    constructor(props){
        super(props)
        this.state={
            isMounted:true
        }
    }
    render(){
        
        this.state={
            isMounted:true
        }
        return(
            <><section>
            <div className="md:py-72 py-28 px-12 md:px-32 bg-cover bg-center" style={{"background-image":"url("+landingImge+")"}}>
            <tagline className="md:text-5xl text-xl text-nowrap">
              <TypeWriterEffect
            textStyle={{ fontFamily: 'Red Hat Display' }}
            startDelay={100}
            cursorColor="black"
           
            typeSpeed={100}
            multiTextLoop={true}
            multiText={["Are You Tired from Routine Work?","So, Just Reach Out Automation"]}
        />
          </tagline>
          <div className='pt-5 md:pt-20'>
           <PrimaryButton text="Sign Up" className="cursor-pointer"></PrimaryButton><DefaultButton text="Sign In" className="ml-4 cursor-pointer"></DefaultButton></div>
          </div></section>
            </>
        )
    }
}
class ServiceSection extends Component {
  render() {
    return (
      <section>
      <div className='flex flex-wrap justify-evenly p-3'>
        <div className='flex flex-col rounded-md border shadow-sm flex-shrink-0'><div><img src={UiVision} alt="" className='w-52 md:w-72 rounded-t-sm'/></div><div className='py-3 px-3 w-52 md:w-72'><strong>Ui Vision</strong> is chrome Extension which is use to Automate Browser And Computer</div></div>
        <div className='flex flex-col rounded-md border shadow-sm flex-shrink-0'><div><img src={UiPath} alt="" className='w-52 md:w-72 rounded-t-sm'/></div><div className='py-3 px-3 w-52 md:w-72'><strong>UiPath</strong> software which is use to automate task with high performance with extra Features</div></div>
        <div className='flex flex-col rounded-md border shadow-sm flex-shrink-0'><div><img src={GoogleScript} alt="" className='w-52 md:w-72 rounded-t-sm'/></div><div className='py-3 px-3 w-52 md:w-72'><strong>Google Script</strong> powerful combination for automation of google apps like Gmail or Calender etc</div></div>
        <div className='flex flex-col rounded-md border shadow-sm flex-shrink-0'><div><img src={Selenium} alt="" className='w-52 md:w-72 rounded-t-sm'/></div><div className='py-3 px-3 w-52 md:w-72'><strong>Selenium Webdriver</strong> use to create high Performance Automation by using web element</div></div>
      </div>
      </section>
    )
  }
}

class TestingSection extends Component {
  render() {

    return (
      <section className='flex flex-wrap justify-center py-8 bg-zinc-900 text-white' id='TestingSect'>
          <div className='md:w-1/2 w-full flex justify-center'><div className='w-52'><img src={TestingImage} alt="" /></div></div>
          <div className='md:w-1/2 w-full flex items-center md:border-l-2 px-9 border-zinc-200'><div><div className='text-2xl'>How it will make easy your Task?</div><div className=' leading-7'>RPA automation streamlines and accelerates tasks, providing unparalleled efficiency. By automating repetitive processes, it eliminates manual errors, enhances precision, and allows your workforce to focus on strategic, value-added activities. Embrace RPA to revolutionize your workflow and make complex tasks effortlessly manageable.</div></div></div>
      </section>
    )
  }
}

class FeaturesSection extends Component {
  render() {
    return (
      <section>
        <div class="flex flex-wrap md:flex-row">

  <div class="w-full md:w-1/2">
    <div className=' text-zinc-900 py-28 px-20'> <div className=' text-2xl'>Provided Features by our services</div>
    
    <div className=' bg-zinc-300 px-10 rounded-md border-zinc-600 border-l-4 my-5 leading-6 py-9'>
    Transform your web presence with our top-notch services! Trust in our expertise in web scraping, RPA, and Python coding to enhance your site. We're here to make your online journey seamless and extraordinary – your success is our priority!
    </div>
    </div>
  </div>
  <div class="w-full md:w-1/2 flex-wrap flex">
 <div className='w-full md:w-1/2 '> 
 <div className='p-2 md:px-12 m-3 md:my-3 shadow-sm shadow-zinc-900 rounded-md'>
 <div className='border bg-green-200 w-fit p-2 my-3 text-2xl md:text-4xl text-green-600 '>
  <FaBell/>
  </div>
  <div className='text-xl'>Alert on Exceptions</div>
  <div className='py-7 line-clamp-2'>Absolutely thrilled about this fantastic feature! 🚀 Receive instant alert notifications on Telegram for exceptions or set personalized alerts on demand.</div>
  </div>
  </div>
  <div className='w-full md:w-1/2 '> 
 <div className='p-2 md:px-12 m-3 md:my-3 shadow-sm shadow-zinc-900 rounded-md'>
 <div className='border bg-red-200 w-fit p-2 my-3 text-2xl md:text-4xl text-red-600'>
  <FaChartPie/>
  </div>
  <div className='text-xl'>Statistics </div>
  <div className='py-7 line-clamp-2'>You Will get alert notifications on telegram in case of Exception or set alert on demand as required</div>
  </div>
  </div>

 <div className='w-full md:w-1/2 '> 
 <div className='p-2 md:px-12 m-3 md:my-3 shadow-sm shadow-zinc-900 rounded-md'>
 <div className='border bg-yellow-200 w-fit p-2 my-3 text-2xl md:text-4xl text-yellow-600'>
  <BiSupport/>
  </div>
  <div className='text-xl'>Support</div>
  <div className='py-5 line-clamp-2'>Our dedicated experts stand by you, ensuring success and overcoming challenges together. Your goals, our commitment.</div>
  </div>
  </div>
  <div className='w-full md:w-1/2 '> 
 <div className='p-2 md:px-12 m-3 md:my-3 shadow-sm shadow-zinc-900 rounded-md'>
 <div className='border bg-purple-200 w-fit p-2 my-3 text-2xl md:text-4xl text-purple-600'>
  <ImLab/>
  </div>
  <div className='text-xl'>Testing</div>
  <div className='py-5 line-clamp-2'>Elevate your product with our automated test cases. Unleash reliable quality assurance, ensuring perfection in every line of code.</div>
  </div>
  </div>
  </div>
</div>
      </section>
    )
  }
}


class FooterSection extends Component {
  render() {
    return (
      <section className='flex flex-wrap bg-zinc-800 text-white py-7 px-7'>
      <div className="flex md:w-1/4 justify-center"><div className="md:w-52 w-32"><img src={logo} alt="" /></div></div>
      <div className="flex md:w-1/4">b</div>
      <div className="flex md:w-1/4">c</div>
      <div className="flex md:w-1/4">d</div>
      </section>
    )
  }
}


class Home extends Component {
  render() {
    return (
      <><LandindPageImage></LandindPageImage>
      <ServiceSection></ServiceSection>
      <TestingSection></TestingSection>
      <FeaturesSection></FeaturesSection>
      <FooterSection></FooterSection>
      </>
      
    )
  }
}
export default Home
