import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Moon from './pages/Moon'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/destination' element={<Destination/>}>
        <Route index element={<Moon/>}/>
        <Route path='moon' element={<Moon/>}/>
      </Route>
    </Routes>
  )
}

export default App
