import {CartButtons, CompleteOrClearButtons, AddCart} from './styles'

export default function BetButtons(){
    return (
        <CartButtons>
            <div>
                <CompleteOrClearButtons>Complete Game</CompleteOrClearButtons>
                <CompleteOrClearButtons>Clear Game</CompleteOrClearButtons>
            </div>
            <AddCart>Add To Cart</AddCart>
        </CartButtons>
    )
}