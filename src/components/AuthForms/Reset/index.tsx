import { Section, HelperDiv, Form, Input, InputButton, BackButton } from '../../UI/Auth/index'
import { Link, useHistory } from 'react-router-dom'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../../../store/auth-slice'
import Swal from 'sweetalert2'

export default function ResetForm() {
    const history = useHistory()
    const dispatch = useDispatch()
    const emailInputRef = useRef<HTMLInputElement>(null)

    const goBack = () => {
        history.goBack()
    }

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        let enteredEmail = emailInputRef.current?.value

        if (!enteredEmail) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill the empty field!',
            })
        }

        dispatch(authActions.validateEmail({ email: enteredEmail }))
    }

    return (
        <Section>
            <HelperDiv>
                <h2><i>Registration</i></h2>
            </HelperDiv>

            <Form onSubmit={submitHandler}>
                <Input
                    type='email'
                    placeholder='Email'
                    ref={emailInputRef}
                />
                <InputButton><i>Send Link</i></InputButton>
            </Form>

            <BackButton onClick={(): void => goBack()}>
                <i>Back</i>
            </BackButton>

        </Section>)
}