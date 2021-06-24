import Layout from "../UI/Layout";
import NewBetContent from "./Bet/Content";
import Cart from "./Bet/Cart";
import { Card1, Card2 } from "./styles";

export default function NewBetContainer(){
    return (
        <Layout>
            <Card1>
                <NewBetContent/>
            </Card1>
            <Card2>
                <Cart/>
            </Card2>
        </Layout>
    )
}