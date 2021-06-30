import styles from 'styled-components'

export const CartButtons = styles.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 500px){
        flex-direction: column;
    }
`

export const CompleteOrClearButtons = styles.button`
    padding: 20px 30px 20px 30px;
    margin-right: 10px;
    background-color: white;
    border: 1px solid rgb(21, 230, 150);
    color: rgb(33, 241, 162);
    border-radius: 10px;
    font-weight: 900;

    &:hover{
        transition: 0.5s;
        color: white;
        background: rgb(21, 230, 150)
    }
`

export const AddCart = styles.button`
    padding: 10px 30px 10px 30px;
    background: rgb(33, 241, 162);
    border: 1px solid rgb(21, 230, 150);
    color: white;
    border-radius: 10px;
    font-weight: bold;
    text-align: center;

    @media (max-width: 500px){
        margin-top: 1rem;
        width: 20rem;
    }
`