import Home from './Pages/Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NavBarComp from './components/NavBar'
import { FooterComp } from './components/Footer'
function App() {
  return (
    <div>
    <Router>
    <NavBarComp/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <FooterComp/>
    </Router>
    </div>
  )
}

export default App
