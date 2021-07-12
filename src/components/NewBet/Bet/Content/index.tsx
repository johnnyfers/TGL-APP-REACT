import BetButtons from './Buttons'
import { H1, Strong, Numbers, SelectGame, NumberButtons } from './styles'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
import { newbetActions } from '../../../../store/newbet-slice'
import { cartActions } from '../../../../store/cart-slice'
import Swal from 'sweetalert2'

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        background?: string;
    }
}

type ItemTypes = {
    type: string
    description: string
    range: number
    price: number
    color: string
    'max-number': number
    'min-cart-value': number
}

let myArray: any[] = []

interface RootState {
    newBet: {
        items: number[],
        color: string
    },
    cart: {
        cartItem: {}[]
    }
}

export default function NewBetContent() {
    let myItems: number[] = useSelector((state: RootState) => state.newBet.items)

    const dispatch = useDispatch()

    const [gameDescription, setGameDescription] = useState('')
    const [gameName, setGameName] = useState('')
    const [gameRange, setGameRange] = useState(0)
    const [gamePrice, setGamePrice] = useState(0)
    const [gameColor, setGameColor] = useState('')
    const [gameMaxNumber, setGameMaxNumber] = useState(0)
    const [items, setItems] = useState([])

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/games')
            .then((res) => setItems(res.data))
    }, [dispatch])

    const clearGame = () => {
        dispatch(newbetActions.clearGame())
    }

    const completeGame = (maxNumber: number, range: number) => {
        if (myItems.length === maxNumber) {
            clearGame()
            dispatch(newbetActions.completeGame({ maxNumber, range }))
        }
        dispatch(newbetActions.completeGame({ maxNumber, range }))
    }

    const gameHandler = (index: number) => {
        clearGame()

        setGameName(items[index]['type'])
        setGameDescription(items[index]['description'])
        setGameRange(items[index]['range'])
        setGamePrice(items[index]['price'])
        setGameColor(items[index]['color'])
        setGameMaxNumber(items[index]['max_number'])
    }

    const selectButtonHandler = (value: number, maxNumber: number, gamePrice: number, gameName: string, gameColor: string) => {
        dispatch(newbetActions.addItemToArray({ value, maxNumber, gamePrice, gameName }))
    }

    const buttons = () => {
        myArray = []

        for (let i = 1; i <= gameRange; i++) {
            myArray.push(
                <NumberButtons
                    color={myItems.find(item => item === i) ? gameColor : 'gray'}
                    onClick={() => selectButtonHandler(i, gameMaxNumber, gamePrice, gameName, gameColor)}
                    key={i}
                    value={i}>
                    {i < 10 ? `0${i}` : i}
                </NumberButtons>
            )
        }

        return myArray
    }

    const addToCart = (numbersGame: number[], gamePrice: number, gameName: string, color: string, maxNumber: number) => {
        if (numbersGame.length !== maxNumber) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Marque todos os números referentes ao jogo, agora faltam serem marcados ${maxNumber - numbersGame.length} números`,
            })
        }

        dispatch(cartActions.receiveDataFromNewBEt({ numbersGame, gamePrice, gameName, color }))

        clearGame()
    }

    useEffect(() => {
        if (items.length) {
            gameHandler(0)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items])

    return (
        <>
            <H1><Strong>NEW BET</Strong> FOR <span>{items && gameName}</span></H1>
            <h3> Choose a game</h3>

            <div>
                {items && items.map((item: ItemTypes, index: number) =>
                    <SelectGame key={index} onClick={() => gameHandler(index)} background={(gamePrice === item.price) ? item.color : 'white'} color={(gamePrice !== item.price) ? item.color : 'white'} >{item.type}</SelectGame>
                )}
            </div>

            <h4>Fill your bet </h4>
            <p>{items && gameDescription}</p>

            <Numbers>
                {items && buttons()}
            </Numbers>

            <BetButtons
                onAddToCart={() => addToCart(myItems, gamePrice, gameName, gameColor, gameMaxNumber)}
                onCompleteGame={() => completeGame(gameMaxNumber, gameRange)}
                onClearGame={clearGame}
            />
        </>
    )
}