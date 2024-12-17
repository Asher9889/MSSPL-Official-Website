import { LandingPage, NewOurProducts, OurProducts, OurServices, Outcome, TechStack, Work } from './pages'

import './App.css'
import { TypeEffectComponent } from './components'
import Services from './pages/services/Services'
import WorkSatisfaction from './pages/workSatisfaction/WorkSatisfaction'
// import Outcome from './pages/outcome/Outcome'

function App() {
  return (
    <>
      <LandingPage />
      <Outcome />
      <Work />
      <OurServices />
      <WorkSatisfaction />
      <NewOurProducts />
      <TypeEffectComponent />
      <OurProducts />
      <Services />
      <TechStack />
    </>
  )
}

export default App
