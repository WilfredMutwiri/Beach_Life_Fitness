import Home from './Pages/Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NavBarComp from './components/NavBar'
import { FooterComp } from './components/Footer'
import UpdatesPage from './Pages/Updates'
import EventsPage from './Pages/Events'
import ProductsPage from './Pages/Products'
import SessionsPage from './Pages/Sessions'
import ContactPage from './Pages/Contact'
function App() {
  return (
    <div>
    <Router>
    <NavBarComp/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/updates' element={<UpdatesPage/>}/>
        <Route path='/events' element={<EventsPage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/sessions' element={<SessionsPage/>}/>
        <Route path='/contacts' element={<ContactPage/>}/>
      </Routes>
      <FooterComp/>
    </Router>
    </div>
  )
}

export default App
