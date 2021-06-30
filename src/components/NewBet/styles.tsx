import styles from 'styled-components'

export const Card1 = styles.section`
    width: 60%;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    @media (max-width: 500px){
        text-align: center;
        align-self: center;
        width: 20rem;
    }
`
export const Card2 = styles.section`
    width: 25%;
    height: 50%;
    background-color: white;
    padding: 10px;
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 500px){
        margin-top: 2rem;
        align-self: center;
        width: 20rem;
        padding: 0.5rem;
    }
`