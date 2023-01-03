import React, { useState, useEffect }from "react"
import switchOff from "../assets/switchOff.png"
import switchOn from "../assets/switchOn.png"
import lightOff from "../assets/lightOff.png"
import lightOn from "../assets/lightOn.png"
//Psuedocode:
// utilize useState to pass the values of the button, light switch, and the light bulb
// you will need one for each aspect of the challenge
// create a function that changes the color of the background and the text within the button using the useState hooks
// create an if statement that will update the images in the boxes based on the status of the switch by using the intial values listed above and the strictly equals operator 
// once the images have been imported from the assets folder, call on them within the if and else statements 
// use an else statement to handles/updates the off status of the function displaying the off images
// in css create a flexbox container to align the boxes and center them on the page
// incorporate a button within the body along with 2 other boxes that will house the images imported above
//within these boxes you will utilize the onclick method to toggle the switchStatus function 
const  LightSwitch = () =>{
const [toggleButton, setToggleButton] = useState("Off")
const [toggleLight, setToggleLight] = useState(lightOff)
const [backgroundStatus, setbackgroundStatus] = useState(switchOff)
const [buttonColor, setButtonColor] = useState("White")
const colorChange = (buttoncolor) => {
  setButtonColor(buttoncolor)
}
  useEffect(() => {
    document.body.style.backgroundColor = buttonColor
  }, [buttonColor])
const switchStatus = () => {
  if (backgroundStatus === (switchOff)){
    setbackgroundStatus(switchOn)
    setToggleLight(lightOn)
    setToggleButton("On")
  
} else {
    setbackgroundStatus(switchOff)
    setToggleLight(lightOff)
    setToggleButton("Off")
    }
  }
  return (
    <>
    <div class="flexbox-container ">
      <div className="onoffbox" onClick={switchStatus}>
        <button onClick = {() => {colorChange("yellow")}}>
          {toggleButton}</button>
      </div>
      <div className="lightswitchbox" onClick={switchStatus} style={{ backgroundImage: "url(" + backgroundStatus + ")", backgroundPosition: 'center', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      </div>

      <div className="lightpicbox" onClick={switchStatus} style={{ backgroundImage: "url(" + toggleLight + ")", backgroundPosition: 'center', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      </div>

    </div>
    
    </>
  )
}

export default LightSwitch
