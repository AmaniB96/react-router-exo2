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
import Engineer from './pages/Engineer'
import Pilot from './pages/Pilot'
import Specialist from './pages/Specialist'

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
        <Route path='engineer' element={<Engineer/>} />
        <Route path='pilot' element={<Pilot/>} />
        <Route path='specialist' element={<Specialist/>} />
      </Route>
    </Routes>
  )
}

export default App
