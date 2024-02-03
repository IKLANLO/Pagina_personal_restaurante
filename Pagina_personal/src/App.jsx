import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './component/Header/Header'
import Contact from './component/Contact/Contact'
import Home from './component/Home/Home'
import Project from './component/Project/Project'

const data = ['Buscador de películas', 'Quiz', 'Gráficas', 'Ecommerce', 'Social Media']

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<Contact />} />
        <Route path='/projects' element={<Project data={data}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
