import {CartButtons, CompleteOrClearButtons, AddCart} from './styles'

const BetButtons: React.FC<{onClearGame: () => void, onCompleteGame: ()=> void}> = (props) => {
    return (
        <CartButtons>
            <div>
                <CompleteOrClearButtons onClick={props.onCompleteGame}>Complete Game</CompleteOrClearButtons>
                <CompleteOrClearButtons onClick={props.onClearGame}>Clear Game</CompleteOrClearButtons>
            </div>
            <AddCart>Add To Cart</AddCart>
        </CartButtons>
    )
}

export default BetButtons