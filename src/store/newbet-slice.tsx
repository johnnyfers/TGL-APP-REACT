import {createSlice} from '@reduxjs/toolkit'

type initialItemsType = {
        items: number[]
        price: number
        type: string
}

const initialState: initialItemsType = {
    items: [],
    price: 2.5,
    type: 'lotofacil'
}

const newbetSlice = createSlice({
    name: 'newbet',
    initialState,
    reducers: {
        addItemToArray(state, action){
            const newItem: number = action.payload.value
            const maxNumber: number = action.payload.maxNumber

            const existingItem = state.items.find((item) => item === newItem)

            if(!existingItem && state.items.length < maxNumber){
                state.items.push(newItem)
                console.log(state.items.map((element)=> element))
            }
        },

        clearGame(state){
            state.items = []
        },

        completeGame(){

        }

    }
})

export const newbetActions = newbetSlice.actions

export default newbetSlice