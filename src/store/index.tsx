import { configureStore } from "@reduxjs/toolkit";

import newbetSlice from './newbet-slice'

const store = configureStore({
    reducer: { newBet: newbetSlice.reducer }
})

export default store