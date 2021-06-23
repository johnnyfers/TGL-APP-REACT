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

        completeGame(state, action){
            const color: string = action.payload.color
            const maxNumber: number = action.payload.maxNumber
            const range: number = action.payload.range
            const arrayHelper: any[] = action.payload.arrayHelper
            
            while(state.items.length < maxNumber){
                let match = Math.ceil(Math.random() * (range - 0) + 1)
                
                arrayHelper.forEach((item) => {
                    if (match === item.value && !item.getAttribute('clicked')) {
                        item.setAttribute('clicked', 'true')
                        item.style.background = `${color}`
                        state.items.push(item.value)
                        return state.items
                    }
                })

            }
        }
    }
})

export const newbetActions = newbetSlice.actions

export default newbetSlice