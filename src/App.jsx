import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Moon from './pages/Moon'
import Mars from './pages/Mars'
import Europa from './pages/Europa'
import Titan from './pages/Titan'
import Crew from './pages/Crew'
import Commander from './pages/Commander'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/destination' element={<Destination/>}>
        <Route index element={<Moon/>}/>
        <Route path='moon' element={<Moon/>}/>
        <Route path='mars' element={<Mars/>}/>
        <Route path='europa' element={<Europa/>}/>
        <Route path='titan' element={<Titan/>}/>
      </Route>
      <Route path='/crew' element={<Crew/>}>
        <Route index element={<Commander/>} />
        <Route path='commander' element={<Commander/>}/>
        <Route path='engineer' />
        <Route path='pilot' />
        <Route path='specialist' />
      </Route>
    </Routes>
  )
}

export default App
