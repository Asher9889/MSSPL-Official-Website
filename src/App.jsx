import { LandingPage, OurProducts, Outcome, TechStack } from './pages'

import './App.css'
import { TypeEffectComponent } from './components'
import Services from './pages/services/Services'
// import Outcome from './pages/outcome/Outcome'

function App() {
  return (
    <>
      <LandingPage />
      <Outcome />
      

      <TypeEffectComponent />
      <OurProducts />
      <Services />
      <TechStack />
    </>
  )
}

export default App
