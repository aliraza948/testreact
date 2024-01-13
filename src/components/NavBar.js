import React,{useState} from "react";
//import PropTypes from 'prop-types'

function MsgChecker(props){
    const [text,setT]=useState("number")
    const update=(e)=>{
      setT(e.target.value);
    }
    return(
        <>
        <h1>{props.heading}</h1>
        <textarea name="ali" id="" cols="30" rows="8" onChange={update} value="ali"></textarea>
        <button>Click Me Now!</button>
        <p>{text}</p>
        <p className="py-3 bg-purple-600 text-white">{text.length} Character {text.split(" ").length} words</p>
        </>
    );
}
function AboutUs(){
    return(
        <>
        <h1>Ali</h1>
        <p>So, Now you will know about my and my ability knowledge so just come Here</p>
        </>
    )
}
function ContactUs(){
    return(
        <>
        <h1>Phone</h1>
        <p>Our phone number will be privately</p>
        </>
    )
}

/*NavBar.propTypes={
    btntext : PropTypes.string,
}
NavBar.defaultProps={
    btntext : "Cookie"
}*/
export {MsgChecker,ContactUs,AboutUs}