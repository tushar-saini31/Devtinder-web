import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import feedReducer from "./feedSlice";  
import connectionReducer from "./ConnectionSlice"
import requestReducer from "./RequestSlice"
const appstore=configureStore({
    reducer:{
        user:userReducer,
        feed:feedReducer,
        connections: connectionReducer,
        requests:requestReducer,
    }
});
export default appstore;