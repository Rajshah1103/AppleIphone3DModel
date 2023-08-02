import React, { useRef } from 'react'
import Nav from './components/Nav'
import Jumbotron from './components/Jumbotron'
import SoundSection from './components/SoundSection'
import DisplaySection from './components/DisplaySection'
import WebgiViewer from './components/WebgiViewer'
import Loader from './components/Loader'

const App = () => {
  const webgi = useRef();
  const contentRef = useRef();

  const handlePreview = () =>{
    webgi.current.triggerPreview();
  }

  return (
    <div>
      <div ref={contentRef} id='content'>
        <Loader/>
        <Nav/>
        <Jumbotron/>
        <SoundSection/>
        <DisplaySection triggerPreview = {handlePreview}/>
      </div>
        <WebgiViewer contentRef = {contentRef} ref={webgi}/>
    </div>
  )
}

export default App
