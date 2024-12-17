import { LandingPage, OurProducts, OurServices, Outcome, TechStack, Work } from './pages'

import './App.css'
import { TypeEffectComponent } from './components'
import Services from './pages/services/Services'
// import Outcome from './pages/outcome/Outcome'

function App() {
  return (
    <>
      <LandingPage />
      <Outcome />
      <Work />
      <OurServices />
      <TypeEffectComponent />
      <OurProducts />
      <Services />
      <TechStack />
    </>
  )
}

export default App
