import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SelectGame } from "../NewBet/Bet/Content/styles";
import Layout from "../UI/Layout";
import { Li, SpanInsideLi, UlGameItem, RecentGames, CardGame, Span, DivHelper } from "./styles";
import { gamesActions } from '../../store/games-slice'

type ItemTypes = {
    type: string
    description: string
    range: number
    price: number
    color: string
    'max-number': number
    'min-cart-value': number,
}

interface RootState {
    games: {
        cartItem: {}[],
        cartItemFiltered: {}[]
    }
}

export default function GamesPage() {
    const dispatch = useDispatch()
    const [items, setItems] = useState([])

    const gameItems: {}[] = useSelector((state: RootState) => state.games.cartItem)
    const cartItemFiltered: {}[] = useSelector((state: RootState) => state.games.cartItemFiltered)

    useEffect(() => {
        fetch('http://localhost:3005/types')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])

    const filterGames = (gameType: string) => {
        dispatch(gamesActions.filterGames(gameType))
        console.log(cartItemFiltered)
    }

    return (
        <Layout>
            <CardGame>
                <RecentGames>
                    <DivHelper>
                        <h2>Recent Games</h2>
                        <Span>filters</Span>
                        <div>
                            {items && items.map((item: ItemTypes, index: number) =>
                                <SelectGame onClick={(): void => filterGames(item.type)} key={index} color={item.color} >{item.type}</SelectGame>
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
                <div>
                    {gameItems && gameItems.map((item: any) =>
                        item.game.map((item: any, index: number) =>
                            <UlGameItem key={index} color={item.color}>
                                <Li>{item.items.join(', ')}</Li>
                                <Li><SpanInsideLi>{item.dateString}</SpanInsideLi> <SpanInsideLi> - (R${item.price.toFixed(2).replace('.', ',')})</SpanInsideLi></Li>
                                <Li color={item.color}>{item.type}</Li>
                            </UlGameItem>
                        )
                    )}
                </div>
            </CardGame>
        </Layout>
    )
}