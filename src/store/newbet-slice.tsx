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
    name: 'newBet',
    initialState,
    reducers: {
        addItemToArray(state, action) {
            const newItem: number = action.payload.value
            const maxNumber: number = action.payload.maxNumber
            const price: number = action.payload.gamePrice
            const name: string = action.payload.gameName

            state.price = price
            state.type = name

            const existingItem = state.items.find((item) => item === newItem)

            if (!existingItem && state.items.length < maxNumber) {
                state.items.push(newItem)
                console.log(state.items.map((element) => element))
            }
            if (existingItem) {
                state.items.splice( state.items.indexOf(newItem), 1)
                console.log(state.items.map((element) => element))
            }
        },

        clearGame(state) {
            state.items = []
            state.price = 0
            state.type = ''
        },

        completeGame(state, action) {
            const maxNumber: number = action.payload.maxNumber
            const range: number = action.payload.range

            while (state.items.length < maxNumber) {
                let newItem = Math.ceil(Math.random() * (range - 1) + 1)
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