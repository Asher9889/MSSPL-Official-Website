import { LandingPage, NewOurProducts, Outcome, TechStack } from './pages/index.js'

import './App.css'
import { TypeEffectComponent } from './components'
import Services from './pages/services/Services'
import WorkSatisfaction from './pages/workSatisfaction/WorkSatisfaction'
// import Outcome from './pages/outcome/Outcome'


function App() {

  

  return (
    <>
    {/* <div className='bg-[--main-bg-color]'> */}

      <LandingPage />
     
      <Outcome />
      {/* <Work /> */}
      {/* <OurServices /> */}
      <WorkSatisfaction />
      <NewOurProducts />
      <TypeEffectComponent />
      {/* <OurProducts /> */}
      <Services />
      <TechStack />
      {/* <MapComponent /> */}
      {/* <ContactUs /> */}
    {/* </div> */}
    </>
  )
}

export default App


