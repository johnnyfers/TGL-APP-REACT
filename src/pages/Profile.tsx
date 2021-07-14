import ProfileContainer from "../components/Profile";
import { Footer } from "../components/UI/Footer";
import MainHeader from "../components/UI/Header";

export default function Profile() {

    return (
        <>
            <MainHeader />
            <ProfileContainer/>
            <Footer> 
                Copyright 2020 Luby software&copy;
            </Footer>
        </>
    )

}