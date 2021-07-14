import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import Swal from "sweetalert2";

type LoginTypes = {
    users: {}[],
    isLogged: null | string,
    error: boolean,
}

const initialState: LoginTypes = {
    users: [{ email: localStorage.getItem('email'), password: localStorage.getItem('password') }],
    isLogged: localStorage.getItem('token'),
    error: true,

}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signUp: (state, action) => {
            let name: string = action.payload.name
            let password: string = action.payload.password
            let email: string = action.payload.email

            state.error = true

            axios.post('http://localhost:8000/users', {
                name,
                password,
                email
            })
                .catch(err => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Email already in use',
                    })
                    return err
                })

            state.error = false

            Swal.fire(
                'Account Created!',
                '<a href="http://localhost:3000/login">Press Here to Log In</a>',
                'success'
            )
        },

        login: (state, action) => {
            let password: string = action.payload.password
            let email: string = action.payload.email

            axios.post('http://localhost:8000/sessions', {
                password,
                email
            })
                .then(res => {
                    localStorage.setItem('token', res.data.token)
                })
                .catch(err => {
                    localStorage.removeItem('token')
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Email or Password are wrong',
                    })
                })

            state.isLogged = localStorage.getItem('token')
        },

        logout: (state) => {
            state.isLogged = null

            localStorage.removeItem('token')
        },

        validateEmail: (state, action) => {
            let email: string = action.payload.email

            axios.post('http://localhost:8000/reset', {
                email
            })
                .then((res) => {
                    Swal.fire(
                        'Password Reseting!',
                        'Check your email and follow the instructions to recover your password',
                        'success'
                    )
                })
                .catch(err => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: err,
                    })
                })

        },

        recoverPassword(state, action) {
            let token: string = action.payload.token
            let password: string = action.payload.password
            let password_confirmation: string = action.payload.passwordConfirmation

            axios.put('http://localhost:8000/reset', {
                token,
                password,
                password_confirmation
            })
                .then((res) => {
                    Swal.fire(
                        'Password Recoreved!',
                        '<a style="color: none;" href="http://localhost:3000/login">Click Here to log in with your new password</a>',
                        'success'
                    )
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: err,
                    })
                })
        }
    }
})

export const authActions = authSlice.actions

export default authSlice