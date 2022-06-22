import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './styles/Sidebar.css';
import SpotifyLogo from '../logos/spotify-logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic,
         faMicrophoneLines,
         faClockRotateLeft, 
         faUser, 
         faBarsStaggered,
        faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../app/reducer/authentication';

const Sidebar = () => {
    const viewPortWidth = useSelector((state) => state.dimension );
    const screenSize = viewPortWidth.dimension

    const dispatch = useDispatch();

    const handeLogout = () => {
        dispatch(logout());
    }

    return (
        <div className="sidebar">
            <div className='sidebar-spotify-logo'>
                <NavLink to='/'>
                    <SpotifyLogo />
                </NavLink>
            </div>
            <div className='nav-buttons'>
                <NavLink to='/' className={({ isActive }) => `${isActive && screenSize > 925 ? 'nav-active' : 'nav-style'}`}>
                    <div className='icon-holder'>
                        <FontAwesomeIcon icon={faUser} size={`${screenSize < 341 ? `lg` : `xl`}`} color={'grey'} />
                        <p className='sidebar-titles'>Profile</p>
                    </div>
                </NavLink>
                <NavLink to='/topArtist' className={({ isActive }) => `${isActive && screenSize > 925 ? 'nav-active' : 'nav-style'}`}>
                    <div className='icon-holder'>
                        <FontAwesomeIcon icon={faMusic} size={`${screenSize < 341 ? `lg` : `xl`}`} color={'grey'} />
                        <p className='sidebar-titles'>{`${screenSize < 400 ? `Artists` : `Top Artists`}`}</p>
                    </div>
                </NavLink>
                <NavLink to='/topSongs' className={({ isActive }) => `${isActive && screenSize > 925 ? 'nav-active' : 'nav-style'}`}>
                    <div className='icon-holder'>
                        <FontAwesomeIcon icon={faMicrophoneLines} size={`${screenSize < 341 ? `lg` : `xl`}`} color={'grey'} />
                        <p className='sidebar-titles'>{`${screenSize < 400 ? `Songs` : `Top Songs`}`}</p>
                    </div>
                </NavLink>
                <NavLink to="/playlists" className={({ isActive }) => `${isActive && screenSize > 925 ? 'nav-active' : 'nav-style'}`}>
                    <div className='icon-holder'>
                        <FontAwesomeIcon icon={faBarsStaggered} size={`${screenSize < 341 ? `lg` : `xl`}`} color={'grey'} />
                        <p className='sidebar-titles'>Playlist</p>
                    </div>
                </NavLink>
                <NavLink to="/" className={() => `${screenSize > 925 ? '' : 'nav-style'}`}>
                    <div className='icon-holder' onClick={() => handeLogout()}>
                        <FontAwesomeIcon icon={faRightFromBracket} size={`${screenSize < 341 ? `lg` : `xl`}`} color={'grey'} />
                        <p className='sidebar-titles'>Logout</p>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar