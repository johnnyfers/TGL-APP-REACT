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
    'max_number': number
    'min_cart_value': number,
}

interface RootState {
    games: {
        cartItem: {}[],
        cartItemFiltered: {}[]
    }
}

export default function GamesPage() {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };

    const dispatch = useDispatch()

    const [items, setItems] = useState([])
    const [games, setGames] = useState([])

    const [buttonActive, setButtonActive] = useState('')

    const gameItems: {}[] = useSelector((state: RootState) => state.games.cartItem)
    const cartItemFiltered: {}[] = useSelector((state: RootState) => state.games.cartItemFiltered)

    useEffect(() => {
        axios
            .get('http://localhost:8000/games')
            .then(res => {
                setItems(res.data)
            })

        axios
            .get('http://localhost:8000/bets?page=1&listNumber=10',
                config
            )
            .then(res => {
                setGames(res.data.data)
            })


    }, [])

    const filterGames = (gameType: string, games: {}[]) => {
        setButtonActive(gameType)
        dispatch(gamesActions.filterGames({ gameType, games }))
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
                                    onClick={(): void => filterGames(item.type, games)}
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
                    {games && cartItemFiltered.length <= 0 && games.map((game: any, index: number) =>
                        <UlGameItem key={index} color={game.games.color}>
                            <Li>{game.numbers}</Li>
                            <Li><SpanInsideLi>{game.date_string}</SpanInsideLi> <SpanInsideLi> - (R${game.total_price.toFixed(2).replace('.', ',')})</SpanInsideLi></Li>
                            <Li color={game.games.color}>{game.games.type}</Li>
                        </UlGameItem>
                    )}
                    {cartItemFiltered.length > 0 && cartItemFiltered.map((game: any, index: number) =>
                        <UlGameItem key={index} color={game.games.color}>
                        <Li>{game.numbers}</Li>
                        <Li><SpanInsideLi>{game.date_string}</SpanInsideLi> <SpanInsideLi> - (R${game.total_price.toFixed(2).replace('.', ',')})</SpanInsideLi></Li>
                        <Li color={game.games.color}>{game.games.type}</Li>
                    </UlGameItem>
                    )
                    }
                </div>
            </CardGame>
        </Layout>
    )
}