import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import SearchRoute from './pages/search/SearchRoute'
import DisplayRoute from './pages/display/DisplayRoute'
import './main.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index path='/' element={<SearchRoute/>}></Route>
      <Route path='/users/:id' element={<DisplayRoute/>}></Route>
    </Routes>
  </BrowserRouter>
)
