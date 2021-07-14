import styles from 'styled-components'

export const Avatar = styles.img`
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    margin-bottom: 1rem;
`

export const FormProfile = styles.form`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InputProfile = styles.input`
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: none;
    font-weight: bold;
    border-radius: 0.5rem;
`

export const ProfileCardButton = styles.button`
    border: none;
    width: 50%;
    padding: 0.5rem;
    font-weight: bold;
    border-radius: 0.5rem;
    background:  ${props => props.color};

    &:hover{
        background: rgb(21, 230, 150);
        transicion: 0.5s;
        color: white;
    }
`