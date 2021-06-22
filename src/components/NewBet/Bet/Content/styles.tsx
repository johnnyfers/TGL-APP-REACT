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
export const SelectGame = styles.button`
    border: 3px solid ${props => props.color};
    border-radius: 20px;
    padding: 10px 30px 10px 30px;
    font-weight: 900;
    margin-right: 30px;
    font-size: 12px;
    color: ${props => props.color};
`