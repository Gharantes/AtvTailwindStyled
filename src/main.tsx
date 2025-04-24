import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import SearchRoute from './pages/search/SearchRoute'
import './main.css';
import TailwindDisplayRoute from './pages/display-w-tailwind/TailwindDisplayRoute';
import StyledDisplayRoute from './pages/display-w-styled/StyledDisplayRoute';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index path='/' element={<SearchRoute/>}></Route>
      <Route path='/Tailwind/:id' element={ <TailwindDisplayRoute/> }></Route>
      <Route path='/Styled/:id' element={ <StyledDisplayRoute/> }></Route>
    </Routes>
  </BrowserRouter>
)
