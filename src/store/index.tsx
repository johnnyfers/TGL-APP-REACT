import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
import gamesSlice from "./games-slice";

import newbetSlice from './newbet-slice'

const store = configureStore({
    reducer: {
        newBet: newbetSlice.reducer,
        cart: cartSlice.reducer,
        games: gamesSlice.reducer,
        auth: authSlice.reducer
    }
})

export default store