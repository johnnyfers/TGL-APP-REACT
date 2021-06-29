import { createSlice } from '@reduxjs/toolkit'

type ItemsType = {
    cartItem: {}[],
    cartItemFiltered: {}[]
}

const initialState: ItemsType = {
    cartItem: [],
    cartItemFiltered: []
}

const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        receiveDataFromCart(state, action) {
            const game: {}[] = action.payload.game
            
            state.cartItem.push({game})
        },
        
        filterGames(state, action){
            const gameType: string = action.payload.gameType

            state.cartItemFiltered = state.cartItem.filter((item: any)=> item.filter((item: any)=> item.type === gameType))
        }
    }
})

export const gamesActions = gamesSlice.actions

export default gamesSlice