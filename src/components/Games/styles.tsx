import styles from 'styled-components'

export const CardGame = styles.section`
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    margin-bottom: 20px;

    @media (max-width: 500px){
        margin-left: -4rem;
        flex-direction: column;
        width: 20rem;
        justify-content: center;
    }
`

export const Card2 = styles.section`
    width: 25%;
    box-sizing: border-box;
    display: flex;
`

export const RecentGames = styles.div`
    margin-top: 2rem;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 500px){
        margin-bottom: 1rem;
        flex-direction: column;
        width: 20rem;
        justify-content: center;
        text-align: center;
    }
`

export const Span = styles.span`
    margin-right: 1rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
`

export const DivHelper = styles.div`
    display: flex;
    width: 70%;
    box-sizing: border-box;
    align-items: center;

    @media (max-width: 500px){
        margin-bottom: 1rem;
        flex-direction: column;
        width: 20rem;
        justify-content: center;
    }
`

export const UlGameItem = styles.ul`
    border-left: 0.35rem solid ${props => props.color};
    margin-bottom: 1.5rem;
    list-style: none;
    padding-left: 0.5rem;
    font-style: italic;
`
export const Li = styles.li`
    margin-bottom: 0.7rem;
    font-weight: bold;
    color: ${props => props.color};
`
export const SpanInsideLi = styles.span`
    opacity: 0.7;
    font-weight: unset;
    font-size: 0.9rem;
`