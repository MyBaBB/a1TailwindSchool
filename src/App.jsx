// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import BackTop from './components/BackTop'
function App() {

  return (
<div>
   
   <Sidenav />
   <Main />
   <Work />
   <Projects /> 
   <Contact />
   <BackTop />
</div>

  )
}

export default App
