import { LandingPage, NewOurProducts,  Outcome, TechStack } from './pages/index.js'

import './App.css'
import { ContactUs, SplashCursor, TypeEffectComponent } from './components'
import Services from './pages/services/Services'
import WorkSatisfaction from './pages/workSatisfaction/WorkSatisfaction'
// import Outcome from './pages/outcome/Outcome'


function App() {

  

  return (
    <>
    {/* <div className='bg-[--main-bg-color]'> */}
      <SplashCursor />
      <LandingPage />
     
      {/* <OurProducts /> */}
      <Outcome />
      <NewOurProducts />

      {/* <Work /> */}
      {/* <OurServices /> */}
      <WorkSatisfaction />
      <TypeEffectComponent />
      <Services />
      <TechStack />
      {/* <MapComponent /> */}
      <ContactUs />
    {/* </div> */}
    </>
  )
}

export default App


