import { Section, HelperDiv, Form, Input, InputButton, BackButton } from '../../UI/Auth/index'
import { Link, useHistory } from 'react-router-dom'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../../store/auth-slice'

import Swal from 'sweetalert2'


type RootState = {
    auth: {
        error: boolean
    }
}

export default function RegisterForm() {
    const history = useHistory()
    const dispatch = useDispatch()

    const error = useSelector((state: RootState) => state.auth.error)

    const nameInputRef = useRef<HTMLInputElement>(null)
    const emailInputRef = useRef<HTMLInputElement>(null)
    const passwordInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        let enteredName = nameInputRef.current?.value
        let enteredEmail = emailInputRef.current?.value
        let enteredPassword = passwordInputRef.current?.value

        if (!enteredName || !enteredEmail || !enteredPassword) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Preencha todos os campos!',
            })
        }

        dispatch(authActions.signUp({ name: enteredName, email: enteredEmail, password: enteredPassword }))
    }

    return (
        <Section>
            <HelperDiv>
                <h2><i>Registration</i></h2>
            </HelperDiv>

            <Form onSubmit={submitHandler}>
                <Input
                    type='text'
                    placeholder='Name'
                    ref={nameInputRef}
                />
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

                <InputButton><i>Register</i></InputButton>
            </Form>

            <Link style={{ textDecoration: 'none' }} to='/login'>
                <BackButton>
                    <i>Back</i>
                </BackButton>
            </Link>

        </Section>)
}