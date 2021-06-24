import { useEffect, useState } from "react";
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

export default function GamesPage() {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:3005/types')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])

    return (
        <Layout>
            <CardGame>
                <RecentGames>
                    <DivHelper>
                        <h2>Recent Games</h2>
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
            </CardGame>
        </Layout>
    )
}