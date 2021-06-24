import { Section, HelperDiv, Form, Input, InputButton, BackButton } from '../../UI/Auth/index'
import { Link } from 'react-router-dom'

export default function ResetForm() {
    return (
        <Section>
            <HelperDiv>
                <h2><i>Registration</i></h2>
            </HelperDiv>

            <Form>
                <Input
                    type='text'
                    placeholder='Email'
                />
                <InputButton><i>Send Link</i></InputButton>
            </Form>

            
            <Link style={{ textDecoration: 'none' }} to='/login'>
                <BackButton>
                    <i>Back</i>
                </BackButton>
            </Link>

        </Section>)
}