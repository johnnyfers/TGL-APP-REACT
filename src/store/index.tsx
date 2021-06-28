import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import gamesSlice from "./games-slice";

import newbetSlice from './newbet-slice'

const store = configureStore({
    reducer: {
        newBet: newbetSlice.reducer,
        cart: cartSlice.reducer,
        games: gamesSlice.reducer
    }
})

export default store