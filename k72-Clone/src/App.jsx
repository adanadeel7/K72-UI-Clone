import './App.css'
import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Agence from './Pages/Agence'
import Projects from './Pages/Projects'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'


function App() {

  return (
    <div className='overflow-hidden'>
    <FullScreenNav/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/agence' element={<Agence/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
      </Routes>
    </div>
  )
}

export default App
