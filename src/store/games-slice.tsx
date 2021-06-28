import { createSlice } from '@reduxjs/toolkit'

type ItemsType = {
    cartItem: {
        game: {}[],
        dateString: string
    }[]
}

const initialState: ItemsType = {
    cartItem: []
}

const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        receiveDataFromCart(state, action) {
            const game: {}[] = action.payload.game
            
            let date = new Date();
            let dateString = date.getDate() +  "/0" + (date.getMonth() + 1) + "/" + date.getFullYear();

            state.cartItem.push({game, dateString})
        }
    }
})

export const gamesActions = gamesSlice.actions

export default gamesSlice