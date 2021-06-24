import { EmptyCart, H2, Strong, Save } from "./styles";

export default function Cart(){
    return (
        <>
            <h2>CART</h2>
            
            <div>Cart Content</div>

            <EmptyCart> carrinho vazio</EmptyCart>

            <H2> <Strong> CART </Strong>  TOTAL: R$ <span>0,00</span></H2>

            <Save>SAVE</Save>
        </>
    )
}