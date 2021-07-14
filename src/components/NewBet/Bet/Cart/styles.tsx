import styles from 'styled-components'

export const EmptyCart = styles.p`
    align-self: center;
`

export const H2 = styles.h2`
    color: grey;
`
export const Strong = styles.strong`
    color: rgb(90, 86, 86);
`
export const Div = styles.div`
    max-height: 22rem;
    overflow-y: auto;
`

export const Save = styles.div`
    background-color: rgba(218, 205, 205, 0.555);
    border-top: 1px solid rgba(0, 0, 0, 0.123);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    color: rgb(21, 230, 150);
    font-weight: 900;
    cursor: pointer;
    font-size: 1.8rem;
    margin: -10px;
    padding: 10px;
    margin-top: 10px;
`

export const DivInsideCart = styles.div`
    display: flex;
    align-items: center;
`
export const SideCartDiv = styles.div`
    border-left: 4px solid${props => props.color};
    border-radius: 10px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    margin-bottom: 10px;
    overflow-x: auto;
    word-break: break-all;
`
export const DivClassSpan = styles.div`
    display: flex;
    justify-content: space-between;
`
export const SpanNameGame = styles.span`
    color: ${props => props.color};
`

export const SpanDelete = styles.span`
    cursor: pointer;
`


