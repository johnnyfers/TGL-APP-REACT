import NewBetContainer from "../components/NewBet";
import { Footer } from "../components/UI/Footer";
import MainHeader from "../components/UI/Header";

export default function NewBet() {
    return (
        <>
            <MainHeader />
            <NewBetContainer />
            <Footer> 
                Copyright 2020 Luby software&copy;
            </Footer>
        </>
    )
}