import { Header, Li, Ul, Title, Home } from './styles'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authActions } from '../../../store/auth-slice'
import Swal from 'sweetalert2'

const MainHeader = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    const logoutHandler = () => {
        Swal.fire({
            title: 'Do you want to log out?',
            showCancelButton: true,
            confirmButtonText: `Yes`,
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(authActions.logout())
            }
        })
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
                {(location.pathname !== '/profile') &&
                    <Link to='/profile'>
                        <Li>Account</Li>
                    </Link>
                }

                <Li onClick={(): void => logoutHandler()}>
                    Logout <img alt='arrow' src="https://image.flaticon.com/icons/png/512/545/545682.png" width="20" height="20"></img>
                </Li>

            </Ul>
        </Header>
    )
}

export default MainHeader