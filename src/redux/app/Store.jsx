import  {configureStore} from "@reduxjs/toolkit";
import cartSlice from "../fetures/cartSlice";
export const store =configureStore({
    reducer:{
        allcart:cartSlice
    }
})
export default store;
