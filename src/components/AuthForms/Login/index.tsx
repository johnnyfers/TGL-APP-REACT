import { Section, HelperDiv, Form, Input, InputButton, BackButton } from '../../UI/Auth/index'
import { Span } from "./styles";
import { Link } from 'react-router-dom'


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