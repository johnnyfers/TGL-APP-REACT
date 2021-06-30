import { Header, Li, Ul, Title, Home } from './styles'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authActions } from '../../../store/auth-slice'

const MainHeader = () => {
    const dispatch = useDispatch()

    const logoutHandler = ()=> {
        dispatch(authActions.logout())
    }

    return (
        <Header>
            <Ul>
                <Li><Title>TLG</Title></Li>
                <Link to='/games'> <Li><Home>Home</Home></Li></Link>
            </Ul>

            <Ul>
                <Li>Account</Li>
                <Link to='/login'><Li onClick={():void => logoutHandler()}> Logout <img alt='arrow' src="https://image.flaticon.com/icons/png/512/545/545682.png" width="20" height="20"></img></Li></Link>
            </Ul>
        </Header>
    )
}

export default MainHeader