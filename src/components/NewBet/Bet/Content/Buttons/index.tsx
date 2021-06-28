import {CartButtons, CompleteOrClearButtons, AddCart} from './styles'

const BetButtons: React.FC<{onClearGame: () => void, onCompleteGame: ()=> void, onAddToCart: ()=> void}> = (props) => {
    return (
        <CartButtons>
            <div>
                <CompleteOrClearButtons onClick={props.onCompleteGame}>Complete Game</CompleteOrClearButtons>
                <CompleteOrClearButtons onClick={props.onClearGame}>Clear Game</CompleteOrClearButtons>
            </div>
            
            <AddCart onClick={props.onAddToCart}>Add To Cart</AddCart>
        </CartButtons>
    )
}

export default BetButtons