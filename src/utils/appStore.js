import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import feedReducer from "./feedSlice";  
import connectionReducer from "./ConnectionSlice"
const appstore=configureStore({
    reducer:{
        user:userReducer,
        feed:feedReducer,
        connections: connectionReducer,
    }
});
export default appstore;