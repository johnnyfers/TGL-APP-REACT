import Layout from "../UI/Layout";
import ProfileCard from "./ProfileCard";
import { Card1, Card2 } from "./styles";

export default function ProfileContainer() {
    return (
        <Layout>
            <Card1>
                <ProfileCard/>
            </Card1>
            <Card2>
                
            </Card2>
        </Layout>
    )
}