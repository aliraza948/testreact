import {useState,useEffect,Component} from 'react'
import landingImge from "../data/img/l4.png"
import landingImge2 from "../data/img/l2.jpeg"
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
      <div className='flex justify-center p-3'>
        <div className='flex flex-col rounded-md border shadow-sm'><div><img src={landingImge2} alt="" className='w-52 md:w-72 rounded-t-sm'/></div><div>Ali</div></div>
        <div className='flex flex-col rounded-md border shadow-sm'><div><img src={landingImge2} alt="" className='w-52 md:w-72 rounded-t-sm'/></div><div>Ali</div></div>
      </div>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <><LandindPageImage></LandindPageImage>
      <ServiceSection></ServiceSection>
      </>
      
    )
  }
}
export default Home
