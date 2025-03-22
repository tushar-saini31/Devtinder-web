import {  useState } from 'react'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Profile from './profile'
import Body from './body'
import { Provider } from 'react-redux'
import appStore from './utils/appstore'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <Provider store={appStore}>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body/>}>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
   
    </Provider>
  )
}

export default App
