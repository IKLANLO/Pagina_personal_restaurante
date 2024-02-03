import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Reserve from './components/Reserve/Reserve'
import Home from './components/Home/Home'
import Header from './components/Header/Header'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/reserve' element={<Reserve />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
