import BetButtons from './Buttons'
import { H1, Strong, Numbers, SelectGame, NumberButtons } from './styles'
import { useEffect, useRef, useState } from 'react'

import { useDispatch } from 'react-redux'
import { newbetActions } from '../../../../store/newbet-slice'

type ItemTypes = {
    type: string
    description: string
    range: number
    price: number
    color: string
    'max-number': number
    'min-cart-value': number
}

let myArray = []

export default function NewBetContent() {
    const [isClicked, setIsClicked] = useState(false)
    const dispatch = useDispatch()
    const numberButtonsRef = useRef<HTMLButtonElement>(null)

    const [gameDescription, setGameDescription] = useState('')
    const [gameName, setGameName] = useState('')
    const [gameRange, setGameRange] = useState(0)
    const [gamePrice, setGamePrice] = useState(0)
    const [gameColor, setGameColor] = useState('')
    const [gameMaxNumber, setGameMaxNumber] = useState(0)
    const [gameMinCartValue, setGameMinCartValue] = useState(0)
    const [items, setItems] = useState([])

    const [gameIndex, setGameIndex] = useState(0)

    useEffect(() => {
        fetch('http://localhost:3005/types')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])

    const clearGame = ()=> {
        dispatch(newbetActions.clearGame())
    }

    const completeGame = ()=> {
        dispatch(newbetActions.completeGame(1))
    }

    const gameHandler = (index: number) => {
        clearGame()

        setGameName(items[index]['type'])
        setGameDescription(items[index]['description'])
        setGameRange(items[index]['range'])
        setGamePrice(items[index]['price'])
        setGameColor(items[index]['color'])
        setGameMinCartValue(items[index]['min-cart-value'])
        setGameMaxNumber(items[index]['max-number'])
    }
    

    const selectButtonHandler = (value: number, maxNumber: number) => {
        dispatch(newbetActions.addItemToArray({value: value, maxNumber: maxNumber}))

        console.log(numberButtonsRef)
        setIsClicked(true)
        setGameIndex(value)
    }

    const buttons = () => {
        myArray = []

        for (let i = 1; i <= gameRange; i++) {
            myArray.push(
                <NumberButtons
                    ref={numberButtonsRef}
                    color={(isClicked && gameIndex === i) ? `${gameColor}` : 'gray'}
                    onClick={() => selectButtonHandler(i, gameMaxNumber)}
                    key={i}
                    value={i}>
                    {i}
                </NumberButtons>)
        }
        console.log(myArray)

        return myArray
    }

    return (
        <>
            <H1><Strong>NEW BET</Strong> FOR <span>{items && gameName}</span></H1>
            <h3> Choose a game</h3>

            <div>
                {items && items.map((item: ItemTypes, index: number) =>
                    <SelectGame key={index} onClick={() => gameHandler(index)} color={item.color} >{item.type}</SelectGame>
                )}
            </div>

            <h4>Fill your bet </h4>
            <p>{items && gameDescription}</p>

            <Numbers>
                {
                    items && buttons()
                }
            </Numbers>

            <BetButtons onCompleteGame={completeGame} onClearGame={clearGame}/>
        </>
    )
}