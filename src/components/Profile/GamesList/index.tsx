import axios from "axios"
import { useEffect, useState } from "react"
import { Li, SpanInsideLi, UlGameItem, ButtonsDiv, Span } from "./styles";

export default function GamesList() {
    const [page, setPage] = useState(1)
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };

    const [games, setGames] = useState([])
    const [meta, setMeta] = useState({ current_page: 1, last_page: 1 })

    const nextPage = () => {
        if (meta.current_page !== meta.last_page) {
            setPage((prev) => prev + 1)
        }

    }

    const previousPage = () => {
        if (page > 1) {
            setPage((prev) => prev - 1)
        }
    }

    useEffect(() => {
        axios.get(
            `http://localhost:8000/bets?page=${page}&listNumber=5`,
            config
        )
            .then(response => {
                setMeta(response.data.meta)
                setGames(response.data.data)
            })
    }, [page])

    return (
        <>
            <h1>All Games</h1>

            <div>

                {games &&
                    games.map((game: any, index: number) =>
                        <UlGameItem key={index} color={game.games.color}>
                            <Li>{game.numbers}</Li>
                            <Li><SpanInsideLi>{game.date_string}</SpanInsideLi> <SpanInsideLi> - (R${game.total_price.toFixed(2).replace('.', ',')})</SpanInsideLi></Li>
                            <Li color={game.games.color}>{game.games.type}</Li>
                        </UlGameItem>
                    )
                }
            </div>

            <ButtonsDiv>
                <button
                    onClick={(): void => previousPage()}>
                    <img
                        alt="prev"
                        width="20"
                        src="https://image.flaticon.com/icons/png/512/271/271220.png" />
                </button>

                <Span>{meta.current_page} / {meta.last_page}</Span>

                <button
                    onClick={(): void => nextPage()}>
                    <img
                        width="20"
                        alt="next"
                        src="https://image.flaticon.com/icons/png/512/271/271228.png" />
                </button>
            </ButtonsDiv>
        </>
    )
}