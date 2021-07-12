import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import Swal from "sweetalert2";

type LoginTypes = {
    users: {}[],
    isLogged: boolean
}

const initialState: LoginTypes = {
    users: [{ email: localStorage.getItem('email'), password: localStorage.getItem('password') }],
    isLogged: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signUp: (state, action) => {
            let name: string = action.payload.name
            let password: string = action.payload.password
            let email: string = action.payload.email

            axios.post('http://localhost:8000/users', {
                    name,
                    password,
                    email,
                    password_confirmation: password
                })

            state.users.push({ name, password, email })

            localStorage.setItem('name', name)
            localStorage.setItem('email', email)
            localStorage.setItem("password", password);

            state.isLogged = true
        },

        login: (state, action) => {
            let password: string = action.payload.password
            let email: string = action.payload.email

            if (localStorage.getItem('email') === email && localStorage.getItem('password') === password) {
                state.isLogged = true
            }
        },

        logout: (state) => {
            state.isLogged = false

            localStorage.removeItem('email')
            localStorage.removeItem("password");
        },

        validateEmail: (state, action) => {
            let email: string = action.payload.email

            if (email === localStorage.getItem('email')) {
                Swal.fire(
                    'Senha redefinida!',
                    'Sua senha foi redefinida',
                    'success'
                )
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email não existe!',
                })
            }
        }
    }
})

export const authActions = authSlice.actions

export default authSlice