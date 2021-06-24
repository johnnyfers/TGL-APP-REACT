import {Section, HelperDiv, Form, Input,InputButton, BackButton } from '../../UI/Auth/index'
import { Span} from "./styles";


export default function LoginForm() {
    return (
        <Section>
            <HelperDiv>
                <h2><i>Authentication</i></h2>
            </HelperDiv>

            <Form>
                <Input
                    type='text'
                    placeholder='Email' 
                /> 
                <Input
                    type='password'
                    placeholder='Password' 
                /> 
                <Span> I Forgot My Password</Span>
                <InputButton><i>Log In</i></InputButton>
            </Form>

            <BackButton><i>Sign Up</i></BackButton>

            

        </Section>)
}