import { createSlice } from '@reduxjs/toolkit'

type ItemsType = {
    cartItem: {
        id: string
        items: number[]
        price: number
        type: string
        color: string
        maxNumber: number
    }[],
    totalPrice: number
}

const initialState: ItemsType = {
    cartItem: [{
        id: '000',
        items: [],
        price: 0,
        type: '',
        color: '',
        maxNumber: 0
    }],
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
            const maxNumber: number = action.payload.maxNumber

            if (numbersGame.length === maxNumber) {
                let id = Math.random().toString()

                state.totalPrice += price

                state.cartItem.push({
                    id: id,
                    items: numbersGame,
                    price: price,
                    type: name,
                    color: color,
                    maxNumber: maxNumber
                })
            }else{
                alert('Coloque todos os numeros')
            }

        },

        deleteItemFromCart(state, action) {
            const id = action.payload.id
            const price = action.payload.price

            state.totalPrice -= price

            state.cartItem = state.cartItem.filter(item => item.id !== id)
        },

        cleatInitialState(state) {
            if (state.cartItem[0].price === 0 || state.cartItem[0].price) {
                state.cartItem.pop()
            }
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice