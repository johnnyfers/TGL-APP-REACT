
import styles from "styled-components";

export const Container = styles.div`
    margin-top: 5rem;
    display: flex;
    justify-content: space-around;

    @media (max-width: 400px){
        margin-top: 0;
        flex-direction: column;
    }
`

export const Section = styles.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    box-sizing: border-box;
`

export const HelperDiv = styles.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`

export const Form = styles.form`
    display:  flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 1rem 0rem 1rem 0rem;
    width: 18rem;
    background: white;

    @media (max-width: 400px){
        align-self: center;
    }
`

export const Input = styles.input`
    outline: none;
    border: none;
    border-bottom: 1px solid rgba(94, 86, 86, 0.5);;
    padding: 1rem;
    font-size: 1rem;
    font-weight: bold;
`

export const InputButton = styles.button`
    background: white;
    border: none;
    margin-top: 2rem;
    padding: 1rem;
    font-size: 2rem;
    font-weight: bold;
    color: #04F404;
`

export const BackButton = styles.button`
    background: none;
    border: none;
    padding: 1rem;
    font-size: 2rem;
    font-weight: bold;
    color: rgb(94, 86, 86);
`