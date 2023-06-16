
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import Details from './pages/Details'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {


  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie_details/:id(\\d+)' element={<Details />} />


        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
