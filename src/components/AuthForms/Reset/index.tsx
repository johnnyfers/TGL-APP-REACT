import { Section, HelperDiv, Form, Input, InputButton, BackButton } from '../../UI/Auth/index'

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

            <BackButton><i>Back</i></BackButton>

        </Section>)
}