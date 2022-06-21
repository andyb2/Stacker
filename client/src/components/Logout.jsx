import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from '../app/reducer/authentication';
const Logout = () => {
    const dispatch = useDispatch();

    const handeLogout = () => {
        dispatch(logout());
    }

    return (
        <>
            <NavLink to='/'>
                <button onClick={() => handeLogout()}>Logout</button>
            </NavLink>
        </>
    )
}

export default Logout;