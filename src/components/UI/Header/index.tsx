import { Header, Li, Ul, Title, Home } from './styles'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authActions } from '../../../store/auth-slice'

const MainHeader = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    const logoutHandler = () => {
        dispatch(authActions.logout())
    }

    return (
        <Header>
            <Ul>
                <Link to='/newbet'>
                    <Li>
                        <Title>TLG</Title>
                    </Li>
                </Link>

                {(location.pathname !== '/games') &&
                    <Link to='/games'>
                        <Li>
                            <Home>Home</Home>
                        </Li>
                    </Link>
                }
                {(location.pathname === '/games') &&
                    <Link to='/games'>
                        <Li>
                            <Home></Home>
                        </Li>
                    </Link>
                }
            </Ul>

            <Ul>
                <Link to='/reset'><Li>Account</Li></Link>
                <Link to='/login'><Li onClick={(): void => logoutHandler()}> Logout <img alt='arrow' src="https://image.flaticon.com/icons/png/512/545/545682.png" width="20" height="20"></img></Li></Link>
            </Ul>
        </Header>
    )
}

export default MainHeader