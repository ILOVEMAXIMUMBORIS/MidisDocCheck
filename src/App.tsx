import { Routes, Route } from 'react-router-dom'

import PrintApp from './printer'
import MainPage from './MainPage'


function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/print' element={<PrintApp />} />
    </Routes>
  )
}

export default App;