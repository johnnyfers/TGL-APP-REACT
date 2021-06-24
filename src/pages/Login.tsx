import Apresentation from '../components/AuthForms/Apresentation'
import LoginForm from '../components/AuthForms/Login'
import {Container} from '../components/UI/Auth/index'

export default function Login() {

    return (
        <Container>
            <Apresentation/>
            <LoginForm></LoginForm>
        </Container>
    )

}