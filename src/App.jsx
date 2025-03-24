import {  useState } from 'react'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './componenets/Login.jsx'
import Profile from './componenets/Profile.jsx'
import Body from './componenets/Body.jsx'
import { Provider } from 'react-redux'
import appStore from './utils/appstore'
import Feed from './componenets/Feed.jsx'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <Provider store={appStore}>
    <BrowserRouter basename="/">
    <Routes>
          <Route path="/" element={<Body/>}>
          <Route index element={<Feed />} /> 
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
   
    </Provider>
  );
}

export default App
