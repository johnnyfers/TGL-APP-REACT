import styles from 'styled-components'

export const Card1 = styles.section`
    width: 30%;
    background-color: rgb(94, 86, 86, 0.3);;
    padding: 1rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px){
        margin-top: 2rem;
        align-self: center;
        width: 20rem;
        padding: 0.5rem;
    }
`

export const Card2 = styles.section`
    width: 70%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding-left: 7rem;

    @media (max-width: 500px){
        text-align: center;
        align-self: center;
        width: 20rem;
    }
`