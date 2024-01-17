import React, { Component } from 'react'
import landingImge from "../data/img/landing.jpg"
class LandindPageImage extends Component{
    render(){
        return(
            <>
            <div className="md:py-72 sm:py-50 px-32 bg-cover bg-center" style={{"background-image":"url("+landingImge+")"}}>GOO</div>
            </>
        )
    }
}
class Home extends Component {
  render() {
    return (
      <><LandindPageImage></LandindPageImage></>
    )
  }
}
export default Home
