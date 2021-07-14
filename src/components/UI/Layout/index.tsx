import styles from 'styled-components'

const Layout = styles.div`
    margin-top: 2rem;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    padding-left: 6.5rem;
    padding-right: 6.5rem;

    @media (max-width: 500px){
        margin: 0;
        flex-direction: column;
    }
`
export default Layout