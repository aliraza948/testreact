import {useState,useEffect,Component} from 'react'
import landingImge from "../data/img/l4.webp"
import UiPath from "../data/img/ui_path.webp"
import Selenium from "../data/img/Selenium.webp"
import GoogleScript from "../data/img/google_script.webp"
import UiVision from "../data/img/uivision.webp"
import TypeWriterEffect from 'react-typewriter-effect';
import DefaultButton, {PrimaryButton} from "./Widget"

 
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
      <section className='flex flex-wrap'>
        <div className='w-full md:w-1/2 flex-shrink-0'><img src={} alt="" /></div>
        <div className='w-full md:w-1/2 flex-shrink-0'>ffffffffffffff</div>
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
      </>
      
    )
  }
}
export default Home
