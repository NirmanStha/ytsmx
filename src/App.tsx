
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import Details from './pages/Details'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotAvailable from './pages/NotAvailable'
import Search from './pages/Search'


function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<Details />} />
          <Route path='/search_results/:searchKey' element={<Search />} />
          <Route path='*' element={<NotAvailable />} />

        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
// 