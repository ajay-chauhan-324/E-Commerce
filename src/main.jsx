import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Pages/Home.jsx'
import Cart from './Components/Pages/Cart.jsx'
import MainLayout from './MainLayout.jsx'
import About from './Components/Pages/About.jsx'
import More from './Components/Pages/More.jsx'
import { Provider } from 'react-redux'
import { store } from './Store/Store.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={'/'} element={<Home />}/>
          <Route path={'/cart'} element={<Cart />}/>
          <Route path={'/about'} element={<About />}/>
          <Route path={'/more'} element={<More />}/>
        </Route>
      </Routes>
    
    </BrowserRouter>

    </Provider>
  </StrictMode>,
)
