import { createSlice } from '@reduxjs/toolkit'

type ItemsType = {
    items: number[]
    price: number
    type: string
}

const initialState: ItemsType = {
    items: [],
    price: 0,
    type: ''
}

const newbetSlice = createSlice({
    name: 'newbet',
    initialState,
    reducers: {
        addItemToArray(state, action) {
            const newItem: number = action.payload.value
            const maxNumber: number = action.payload.maxNumber
            const price: number = action.payload.gamePrice
            const name: string = action.payload.gameName

            const existingItem = state.items.find((item) => item === newItem)

            if (!existingItem && state.items.length < maxNumber) {
                state.items.push(newItem)
                console.log(state.items.map((element) => element))
            }
            if (existingItem) {
                state.items.splice( state.items.indexOf(newItem), 1)
                console.log(state.items.map((element) => element))
            }

            /* if (state.items.length === maxNumber) {
                return {
                    items: state.items,
                    price: price,
                    type: name
                }
            } */
        },

        clearGame(state) {
            state.items = []
        },

        completeGame(state, action) {
            const color: string = action.payload.color
            const maxNumber: number = action.payload.maxNumber
            const range: number = action.payload.range
            const arrayHelper: any[] = action.payload.arrayHelper

            while (state.items.length < maxNumber) {
                let newItem = Math.ceil(Math.random() * (range - 0) + 1)
                const match = state.items.find((item) => item === newItem)

                if(!match){
                    state.items.push(newItem)
                }

            }

            console.log(state.items.map((element) => element))
        }
    }
})

export const newbetActions = newbetSlice.actions

export default newbetSlice