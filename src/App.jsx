import { LandingPage, Outcome } from './pages'

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
      <Services />
    </>
  )
}

export default App
