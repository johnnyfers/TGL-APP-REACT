import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SelectGame } from "../NewBet/Bet/Content/styles";
import Layout from "../UI/Layout";
import { RecentGames, CardGame, Span, DivHelper } from "./styles";

type ItemTypes = {
    type: string
    description: string
    range: number
    price: number
    color: string
    'max-number': number
    'min-cart-value': number
}

interface RootState {
    games: {
        cartItem: {}[]
    }
}

export default function GamesPage() {
    const [items, setItems] = useState([])
    const gameItems: {}[] = useSelector((state: RootState) => state.games.cartItem)

    useEffect(() => {
        fetch('http://localhost:3005/types')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])

    const showRecentGames = ()=> {
        console.log(gameItems)
    }

    return (
        <Layout>
            <CardGame>
                <RecentGames>
                    <DivHelper>
                        <h2 onClick={(): void => showRecentGames()}>Recent Games</h2>
                        <Span>filters</Span>
                        <div>
                            {items && items.map((item: ItemTypes, index: number) =>
                                <SelectGame key={index} color={item.color} >{item.type}</SelectGame>
                            )}
                        </div>
                    </DivHelper>
                    <Link
                        to='/newbet'
                        style={{
                            textDecoration: 'none',
                            color: 'green',
                            fontWeight: 'bold',
                            fontSize: '2rem;'
                        }}>
                        New Bet
                    </Link>
                </RecentGames>
                <ul>
                    {/* {gameItems && gameItems.map((item) =>
                        <li>{item}</li>
                    )} */}
                </ul>
            </CardGame>
        </Layout>
    )
}