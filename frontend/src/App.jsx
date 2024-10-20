import Home from './Pages/Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NavBarComp from './components/NavBar'
import { FooterComp } from './components/Footer'
import UpdatesPage from './Pages/Updates'
function App() {
  return (
    <div>
    <Router>
    <NavBarComp/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/updates' element={<UpdatesPage/>}/>
      </Routes>
      <FooterComp/>
    </Router>
    </div>
  )
}

export default App
