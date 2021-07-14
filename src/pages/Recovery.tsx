import Apresentation from "../components/AuthForms/Apresentation";
import RecoveryForm from "../components/AuthForms/Recovery";
import { Container } from "../components/UI/Auth";

export default function Recovery() {
    return (
        <Container>
            <Apresentation/>
            <RecoveryForm></RecoveryForm>
        </Container>
    )
}