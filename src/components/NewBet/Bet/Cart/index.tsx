import {
    EmptyCart,
    H2,
    Strong,
    Save,
    DivInsideCart,
    SideCartDiv,
    DivClassSpan,
    SpanNameGame,
    SpanDelete,
    Div
} from "./styles";

import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../../../store/cart-slice'
import { gamesActions } from "../../../../store/games-slice";
import Swal from "sweetalert2";

interface RootState {
    cart: {
        cartItem: {
            game_id: number,
            idKey: string
            numbers: number[] | string
            total_price: number
            type: string
            color: string
        }[],
        totalPrice: number
    }
}

export default function Cart() {
    const dispatch = useDispatch()

    let cartItem: {
        game_id: number,
        idKey: string
        numbers: number[] | string
        total_price: number
        type: string
        color: string
    }[] = useSelector((state: RootState) => state.cart.cartItem)

    let totalPrice: number = useSelector((state: RootState) => state.cart.totalPrice)

    const deleteRow = (idKey: string, total_price: number) => {
        dispatch(cartActions.deleteItemFromCart({ idKey, total_price }))
    }

    const saveGame = (game: {}[]) => {
        if (totalPrice < 30) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'O valor mínimo para salvar um jogo é de 30 reais!',
            })
            return
        }

        dispatch(gamesActions.receiveDataFromCart({ game }))
        dispatch(cartActions.clearCart())

        Swal.fire(
            'Jogo Salvo com Sucesso!',
            'Seu jogo foi salvo e você pode chegar indo na página de games!',
            'success'
        )
    }

    return (
        <>
            <h2>CART</h2>

            <Div>
                {cartItem.map((item: {
                    game_id: number
                    idKey: string
                    numbers: number[] | string
                    total_price: number
                    type: string
                    color: string
                }) =>
                    <DivInsideCart key={Math.random().toString()}>
                        <SpanDelete onClick={(): void => deleteRow(item.idKey, item.total_price)}>
                            <img alt='trash' src="https://image.flaticon.com/icons/png/512/2782/2782872.png" width="20" height="20" />
                        </SpanDelete>

                        <SideCartDiv color={item.color}>
                            <div>{item.numbers}</div>
                            <DivClassSpan>
                                <SpanNameGame color={item.color}>{item.type}</SpanNameGame>
                                <span>{item.total_price.toFixed(2).replace('.', ',')}</span>
                            </DivClassSpan>
                        </SideCartDiv>
                    </DivInsideCart>)
                }
            </Div>

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