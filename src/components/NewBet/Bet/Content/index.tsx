import BetButtons from './Buttons'
import { H1, Strong, Numbers, SelectGame } from './styles'
import {useEffect, useState} from 'react'

type ItemTypes = {
    type: string
    description: string
    range: number
    price: number
    color: string
    'max-number': number
    'min-cart-value':number
}

export default function NewBetContent() {
    const [typeIndex, setTypeIndex] = useState(0)
    const [gameDescription, setGameDescription] = useState(null)
    const [gameName, setGameName] = useState(null)
    const [gameRange, setGameRange] = useState(0)
    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3005/types')
            .then(res => res.json())
            .then(data =>{
                setItems(data)
            })
    },[])

    const gameHandler = (index: number)=>{
        setGameName(items[index]['type'])
        setGameDescription(items[index]['description'])
        setGameRange(items[index]['range'])

        return setTypeIndex(index)
    }

    const buttons = ()=> {
        for(let i = 0; i < gameRange; i++){
            (<button>{i}</button>)
        }
    }
   
    return (
        <>
            <H1><Strong>NEW BET</Strong> FOR <span>{items && gameName}</span></H1>
            <h3> Choose a game</h3>
            
            <div>
            {items && items.map((item: ItemTypes, index: number)=> 
                <SelectGame key={index} onClick={()=>gameHandler(index)} color={item.color} >{item.type}</SelectGame>
            )}
            </div>
            
            <h4>Fill your bet </h4>

            <p>{items && gameDescription}</p>

            <Numbers>
               {typeIndex !== 0 && buttons}
            </Numbers>

            <BetButtons />
        </>
    )
}