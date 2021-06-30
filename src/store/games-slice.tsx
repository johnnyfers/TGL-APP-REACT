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

            state.cartItemFiltered = state.cartItem.map((item: any)=> item.game.filter((item2: any)=> item2.type === gameType))
        },

        clearFilter(state){
            state.cartItemFiltered = []
        }
    }
})

export const gamesActions = gamesSlice.actions

export default gamesSlice