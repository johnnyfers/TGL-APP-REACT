import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Swal from 'sweetalert2'

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

            const config = {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            };

            axios.post(
                'http://localhost:8000/bets', {
                bets: game
            },
                config
            )

            state.cartItem.push({ game })
        },

        filterGames(state, action) {
            const gamesFiltered: {}[] = action.payload.games
            const gameType: string = action.payload.gameType

            console.log(gamesFiltered)

            state.cartItemFiltered = gamesFiltered.filter((games: any) => games.games.type === gameType)
        },

        clearFilter(state) {
            state.cartItemFiltered = []
        }
    }
})

export const gamesActions = gamesSlice.actions

export default gamesSlice