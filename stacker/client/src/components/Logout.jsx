import { useDispatch } from "react-redux";
import { logout } from '../app/reducer/authentication'
const Logout = () => {
    const dispatch = useDispatch();

    const handeLogout = () => {
        console.log(`yes`)
        dispatch(logout());
    }

    return (
        <>
            <button onClick={() => handeLogout()}>Logout</button>
        </>
    )
}

export default Logout;