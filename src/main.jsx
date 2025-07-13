import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "./components/ui/provider"
import { BrowserRouter, Routes, Route } from "react-router";


import { Dashboard } from './dashboard'
import { Metas } from './pages/Metas';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/metas' element={<Metas />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
