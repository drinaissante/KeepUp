import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/projects/Projects.jsx'
import Upload from './pages/projects/Upload.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home />} />

        <Route path='/projects' element={<Projects /> } />
        
        <Route path='/projects/upload' element={<Upload /> } /> 
        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
