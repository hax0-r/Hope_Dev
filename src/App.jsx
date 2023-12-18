import './App.css'
import './Components/PageFourCard/PageFourCard.css'
import './Components/ProcessCard/ProcessCard.css'
import './Pages/page1/Page1.css'
import './Components/Navbar/Navbar.css'
import './Components/PageSevenCard/PageSevenCard.css'
import './Components/Footer/Footer.css'
import Router from './Routes/Router'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Router />
      <Footer/>
    </>
  )
}

export default App
