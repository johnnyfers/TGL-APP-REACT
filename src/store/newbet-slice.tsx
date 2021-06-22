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
        items: [NaN],
    },
    reducers: {
        
        addItemToArray(state, action){
            const newItem: number = action.payload
            const existingItem = state.items.find((item) => item === newItem)

            if(!existingItem){
                state.items.push(newItem)
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