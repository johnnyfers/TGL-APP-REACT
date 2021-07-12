import { createSlice } from '@reduxjs/toolkit'

type ItemsType = {
    cartItem: {
        id: string
        items: number[] | string
        price: number
        type: string
        color: string
        dateString: string
    }[],
    totalPrice: number
}

const initialState: ItemsType = {
    cartItem: [],
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        receiveDataFromNewBEt(state, action) {
            const numbersGame: number[] = action.payload.numbersGame
            const price: number = action.payload.gamePrice
            const name: string = action.payload.gameName
            const color: string = action.payload.color

            let id = Math.random().toString()
            
            let date = new Date();
            let dateString = date.getDate() +  "/0" + (date.getMonth() + 1) + "/" + date.getFullYear();

            state.totalPrice += price

            state.cartItem.push({
                id: id,
                items: numbersGame.toString(),
                price: price,
                type: name,
                color: color,
                dateString: dateString
            })
        },

        deleteItemFromCart(state, action) {
            const id = action.payload.id
            const price = action.payload.price

            state.totalPrice -= price

            state.cartItem = state.cartItem.filter(item => item.id !== id)
        },

        clearCart(state){
            state.totalPrice = 0
            state.cartItem = []
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice