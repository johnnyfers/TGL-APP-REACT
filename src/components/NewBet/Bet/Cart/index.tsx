import { EmptyCart, H2, Strong, Save, DivInsideCart, SideCartDiv, DivClassSpan, SpanNameGame, SpanDelete } from "./styles";
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../../../store/cart-slice'
import { gamesActions } from "../../../../store/games-slice";

interface RootState {
    cart: {
        cartItem: {
            id: string
            items: number[]
            price: number
            type: string
            color: string
        }[],
        totalPrice: number
    }
}

export default function Cart() {
    const dispatch = useDispatch()

    let cartItem: {
        id: string
        items: number[]
        price: number
        type: string
        color: string
    }[] = useSelector((state: RootState) => state.cart.cartItem)

    let totalPrice: number = useSelector((state: RootState) => state.cart.totalPrice)

    const deleteRow = (id: string, price: number) => {
        dispatch(cartActions.deleteItemFromCart({ id, price }))
    }

    const saveGame = (game: {}[]) => {
        if(totalPrice < 30){
            return alert('O valor minimo é de 30 reais')
        }
        
        dispatch(gamesActions.receiveDataFromCart({game}))
        dispatch(cartActions.clearCart())

        alert('jogo salvo com sucesso')
    }

    return (
        <>
            <h2>CART</h2>

            <div>
                {cartItem.map((item: {
                    id: string
                    items: number[]
                    price: number
                    type: string
                    color: string
                }) =>
                    <DivInsideCart key={Math.random().toString()}>
                        <SpanDelete onClick={(): void => deleteRow(item.id, item.price)}>
                            <img alt='trash' src="https://image.flaticon.com/icons/png/512/2782/2782872.png" width="20" height="20" />
                        </SpanDelete>

                        <SideCartDiv color={item.color}>
                            <div>{item.items.join(', ')}</div>
                            <DivClassSpan>
                                <SpanNameGame color={item.color}>{item.type}</SpanNameGame>
                                <span>{item.price.toFixed(2).replace('.', ',')}</span>
                            </DivClassSpan>
                        </SideCartDiv>
                    </DivInsideCart>)
                }
            </div>

            <EmptyCart>
                {cartItem.length < 1 && 'Carrinho vazio'}
            </EmptyCart>

            <H2>
                <Strong> CART </Strong>  TOTAL: R$ <span>{totalPrice.toFixed(2).replace('.', ',')}</span>
            </H2>

            <Save onClick={(): void => saveGame(cartItem)}>SAVE</Save>
        </>
    )
}