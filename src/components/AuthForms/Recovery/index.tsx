import { Section, HelperDiv, Form, Input, InputButton, BackButton } from '../../UI/Auth/index'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../../../store/auth-slice'
import Swal from 'sweetalert2'

export default function RecoveryForm() {
    const dispatch = useDispatch()
    const tokenInputRef = useRef<HTMLInputElement>(null)
    const passwordInputRef = useRef<HTMLInputElement>(null)
    const passwordConfirmationInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        let token = tokenInputRef.current?.value
        let password = passwordInputRef.current?.value
        let passwordConfirmation = passwordConfirmationInputRef.current?.value

        if(!token || !password || !passwordConfirmation){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill the empty fields!',
            })
        }

        dispatch(authActions.recoverPassword({token, password, passwordConfirmation}))
    
        tokenInputRef!.current!.value = ''
        passwordInputRef!.current!.value = ''
        passwordConfirmationInputRef!.current!.value = ''
    }

    return (
        <Section>
            <HelperDiv>
                <h2><i>Registration</i></h2>
            </HelperDiv>

            <Form onSubmit={submitHandler}>
                <Input
                    type='text'
                    placeholder='token'
                    ref={tokenInputRef}
                />
                <Input
                    type='password'
                    placeholder='new password'
                    ref={passwordInputRef}
                />
                <Input
                    type='password'
                    placeholder='confirm password'
                    ref={passwordConfirmationInputRef}
                />
                <InputButton><i>Recover Password</i></InputButton>
            </Form>

            <Link style={{ textDecoration: 'none' }} to='/login'>
                <BackButton>
                    <i>Back</i>
                </BackButton>
            </Link>

        </Section>)
}