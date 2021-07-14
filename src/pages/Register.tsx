import Apresentation from "../components/AuthForms/Apresentation";
import RegisterForm from "../components/AuthForms/Register";
import { Container } from "../components/UI/Auth";


export default function Register() {
    return (
        <Container>
            <Apresentation/>
            <RegisterForm></RegisterForm>
        </Container>
    )
}