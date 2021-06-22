import { configureStore } from "@reduxjs/toolkit";

import newbetSlice from './newbet-slice'

const store = configureStore({
    reducer: {newbet: newbetSlice.reducer}
})

export default store