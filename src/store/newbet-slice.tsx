import {createSlice} from '@reduxjs/toolkit'

/* type ItemTypes = {
    type: string
    description: string
    range: number
    price: number
    color: string
    'max-number': number
    'min-cart-value':number
} */

const newbetSlice = createSlice({
    name: 'newbet',
    initialState: {
        items: [0],
        price: 2.5,
        type: 'lotofacil',
    },
    reducers: {
        
        addItemToArray(state, action){
            const newItem: number = action.payload
            const existingItem = state.items.find((item) => item === newItem)

            if(!existingItem){
                state.items.push(newItem)
                console.log(state.items.length)
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