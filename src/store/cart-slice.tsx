import { createSlice } from '@reduxjs/toolkit'

type ItemsType = {
    cartItem: [{
        items: number[]
        price: number
        type: string
    }]
}

const initialState: ItemsType = {
    cartItem: [{
        items: [],
        price: 0,
        type: ''
    }]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        receiveDataFromNewBEt(state, action) {
            const numbersGame: number[] = action.payload.numbersGame
            const price: number = action.payload.gamePrice
            const name: string = action.payload.gameName

            state.cartItem.push({
                items: numbersGame,
                price: price,
                type: name
            })
        },

        deleteItemFromCart() {
            console.log('test')
        },

        getResult(){
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice