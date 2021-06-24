import { Section, HelperDiv, Form, Input, InputButton, BackButton } from '../../UI/Auth/index'

export default function RegisterForm() {
    return (
        <Section>
            <HelperDiv>
                <h2><i>Registration</i></h2>
            </HelperDiv>

            <Form>
                <Input
                    type='text'
                    placeholder='Name'
                />
                <Input
                    type='text'
                    placeholder='Email'
                />
                <Input
                    type='password'
                    placeholder='Password'
                />

                <InputButton><i>Register</i></InputButton>
            </Form>

            <BackButton><i>Back</i></BackButton>

        </Section>)
}