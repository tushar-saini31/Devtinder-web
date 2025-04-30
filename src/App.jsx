import {  useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './componenets/Login.jsx'
import Profile from './componenets/Profile.jsx'
import Body from './componenets/Body.jsx'
import { Provider } from 'react-redux'
import appStore from './utils/appStore.js'
import Feed from './componenets/Feed.jsx'
import Connections from './componenets/Connections.jsx'
import Requests from './componenets/Requests.jsx'
import Shimmer from './componenets/Shimmer.jsx'
import Chat from './componenets/chat.jsx'
import PrivacyAndPolicy from './componenets/PrivacyAndPolicy.jsx'
import TermAndConditions from './componenets/TermsAndConditions.jsx'
import CancellationPolicy from './componenets/CancellationAndRefundPolicy.jsx'
import CancellationAndRefund from './componenets/CancellationAndRefundPolicy.jsx'
import ShippingDelivery from './componenets/ShippingDelivery.jsx'
import ContactUs from './componenets/ContactUs.jsx'
import Premium from './componenets/Premium.jsx'

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
          <Route path="/connections" element={<Connections/>}/>
          <Route path="/requests" element={<Requests/>}/>
          <Route path="/shimmer-preview" element={<Shimmer />} />
          <Route path="/chat/:targetUserId" element={<Chat />} />
          <Route path="/PrivacyPolicy" element={<PrivacyAndPolicy />} /> 
          <Route path="/TermsAndConditions" element={<TermAndConditions />} /> 
          <Route path="/CancellationAndRefund" element={<CancellationAndRefund />} />
          <Route path="/ShippingAndDelivery" element={<ShippingDelivery />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Premium" element={<Premium />} />
      </Route>
    </Routes>
    </BrowserRouter>
   
    </Provider>
  );
}

export default App
