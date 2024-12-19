import { LandingPage, NewOurProducts,  OurServices, Outcome, TechStack } from './pages/index.js'
import './App.css'
import { TypeEffectComponent, LogoCorousel, MapComponent } from './components'
import Services from './pages/services/Services'
import WorkSatisfaction from './pages/workSatisfaction/WorkSatisfaction'

// import Outcome from './pages/outcome/Outcome'

function App() {
  return (
    <>
    {/* <div className='bg-[--main-bg-color]'> */}

      <LandingPage />
      <LogoCorousel />
      <Outcome />
      {/* <Work /> */}
      <OurServices />
      <WorkSatisfaction />
      <NewOurProducts />
      <TypeEffectComponent />
      {/* <OurProducts /> */}
      <Services />
      <TechStack />
      <MapComponent />
    {/* </div> */}
    </>
  )
}

export default App
