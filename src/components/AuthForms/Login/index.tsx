import { Section, HelperDiv, Form, Input, InputButton, BackButton } from '../../UI/Auth/index'
import { Span } from "./styles";
import { Link, useHistory } from 'react-router-dom'
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../../store/auth-slice'

import Swal from 'sweetalert2'


type RootState = {
    auth: {
        isLogged: boolean
    }
}

export default function LoginForm() {
    const history = useHistory()
    const dispatch = useDispatch()

    const isLogged = useSelector((state: RootState) => state.auth.isLogged)

    const emailInputRef = useRef<HTMLInputElement>(null)
    const passwordInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        let enteredEmail = emailInputRef.current?.value
        let enteredPassword = passwordInputRef.current?.value

        if (!enteredEmail && !enteredPassword) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Preencha todos os campos!',
            })
        }

        dispatch(authActions.login({ email: enteredEmail, password: enteredPassword }))

        if (isLogged) {
            return history.push('/games')
        }

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email ou senha incorretos!',
        })
    }

    return (
        <Section>
            <HelperDiv>
                <h2><i>Authentication</i></h2>
            </HelperDiv>

            <Form onSubmit={submitHandler}>
                <Input
                    type='email'
                    placeholder='Email'
                    ref={emailInputRef}
                />
                <Input
                    type='password'
                    placeholder='Password'
                    ref={passwordInputRef}
                />
                <Link style={{ textDecoration: 'none' }} to='/reset'>
                    <Span> I Forgot My Password</Span>
                </Link>
                <InputButton><i>Log In</i></InputButton>
            </Form>


            <Link style={{ textDecoration: 'none' }} to='/register'>
                <BackButton>
                    <i>Sign Up</i>
                </BackButton>
            </Link>

        </Section>)
}