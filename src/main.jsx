import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "./components/ui/provider"
import {  Routes, Route, HashRouter } from "react-router";


import { Dashboard } from './dashboard'
import { Metas } from './pages/Metas';
import { Anual } from './pages/anual';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/metas' element={<Metas />}></Route>
          <Route path='/anual' element={<Anual />}></Route>
        </Routes>
      </HashRouter>
    </Provider>
  </StrictMode>,
)
