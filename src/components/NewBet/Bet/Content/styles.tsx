import styles from 'styled-components'

export const H1 = styles.h1`
    font-size: 30px;
    font-weight: unset;
    color: grey;
`

export const Strong = styles.strong`
    color: rgb(90, 86, 86);
`

export const Numbers = styles.div`
    width: 100%;
    margin-bottom: 20px;
`
//
export const SelectGame = styles.button`
    border: 3px solid ${props => props.color};
    background: ${props => props.background};
    border-radius: 20px;
    padding: 10px 30px 10px 30px;
    font-weight: 900;
    margin-right: 30px;
    font-size: 12px;
    color: ${props => props.color};
    
    &:hover{
        background: ${props => props.color};
        color: white;
        transition: 0.3s;
    }

    &:active {
        background: ${props => props.color};
        color: white;
        transition: 0.3s;
    } 

    @media (max-width: 500px){
        align-self: center;
        width: 20rem;
        margin-bottom: 0.5rem;
    }
`

export const NumberButtons = styles.button`
    background: ${props => props.color};
    color: white;
    width: 50px;
    height: 50px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 2px;
    border: none;
    font-weight: bold;
    font-size: 1.5rem;
    opacity: 0.8;
    margin: 5px;
`