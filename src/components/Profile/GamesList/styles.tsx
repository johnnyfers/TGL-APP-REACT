import styles from 'styled-components'


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

export const ButtonsDiv = styles.div`
    display: flex;
    justify-content: space-between;

`
export const Span = styles.span`
    font-size: 1.5rem;
    font-weight: bold;
`