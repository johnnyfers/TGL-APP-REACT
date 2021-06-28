import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";

import newbetSlice from './newbet-slice'

const store = configureStore({
    reducer: { newBet: newbetSlice.reducer, cart: cartSlice.reducer }
})

export default store