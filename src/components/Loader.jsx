import React from 'react'
import AnimatedLogo from "../assets/images/logo-animated.gif"

const Loader = () => {
  return (
    <div>
        <div className='loader'>
            <img className='logo' src={AnimatedLogo} alt='apple loader'/>
        </div>
    </div>
  )
}

export default Loader