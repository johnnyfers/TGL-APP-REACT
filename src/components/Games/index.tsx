import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SelectGame } from "../NewBet/Bet/Content/styles";
import Layout from "../UI/Layout";
import { Li, SpanInsideLi, UlGameItem, RecentGames, CardGame, Span, DivHelper } from "./styles";
import { gamesActions } from '../../store/games-slice'
import axios from 'axios'

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
    const [buttonActive, setButtonActive] = useState('')

    const gameItems: {}[] = useSelector((state: RootState) => state.games.cartItem)
    const cartItemFiltered: {}[] = useSelector((state: RootState) => state.games.cartItemFiltered)

    useEffect(() => {
        axios
            .get('http://localhost:8000/games')
            .then(res => {
                setItems(res.data)
            })
    }, [])

    const filterGames = (gameType: string) => {
        setButtonActive(gameType)
        dispatch(gamesActions.filterGames({ gameType }))
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
                                <SelectGame
                                    background={(buttonActive === item.type) ? item.color : 'white'} color={(buttonActive !== item.type) ? item.color : 'white'}
                                    onClick={(): void => filterGames(item.type)}
                                    key={index} >
                                    {item.type}
                                </SelectGame>
                            )}
                        </div>
                    </DivHelper>
                    <Link
                        to='/newbet'
                        style={{
                            textDecoration: 'none',
                            color: 'green',
                            fontWeight: 'bold',
                            fontSize: '1.5rem'
                        }}>
                        New Bet
                    </Link>
                </RecentGames>
                <div>
                    {gameItems && cartItemFiltered.length <= 0 && gameItems.map((item: any) =>
                        item.game.map((item: any, index: number) =>
                            <UlGameItem key={index} color={item.color}>
                                <Li>{item.items.join(', ')}</Li>
                                <Li><SpanInsideLi>{item.dateString}</SpanInsideLi> <SpanInsideLi> - (R${item.price.toFixed(2).replace('.', ',')})</SpanInsideLi></Li>
                                <Li color={item.color}>{item.type}</Li>
                            </UlGameItem>
                        )
                    )}
                    {cartItemFiltered.length > 0 && cartItemFiltered.map((item: any) =>
                        item.map((item2: any, index: number) =>
                            <UlGameItem key={index} color={item2.color}>
                                <Li>{item2.items.join(', ')}</Li>
                                <Li>
                                    <SpanInsideLi>{item2.dateString}</SpanInsideLi>
                                    <SpanInsideLi> - (R${item2.price.toFixed(2).replace('.', ',')})</SpanInsideLi>
                                </Li>
                                <Li color={item2.color}>{item2.type}</Li>
                            </UlGameItem>)
                    )
                    }
                </div>
            </CardGame>
        </Layout>
    )
}