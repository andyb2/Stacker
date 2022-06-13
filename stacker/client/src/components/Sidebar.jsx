import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './styles/Sidebar.css';
import SpotifyLogo from '../logos/spotify-logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic,
         faMicrophoneLines,
         faClockRotateLeft, 
         faUser, 
         faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const viewPortWidth = useSelector((state) => state.dimension );
    const screenSize = viewPortWidth.dimension

    return (
        <div className="sidebar">
            <div className='sidebar-spotify-logo'>
                <SpotifyLogo />
            </div>
            <div className='nav-buttons'>
                <NavLink to='/' className={({ isActive }) => `${isActive && screenSize > 912 ? 'nav-active' : 'nav-style'}`}>
                    <div className='icon-holder'>
                        <FontAwesomeIcon icon={faUser} size={'xl'} color={'grey'} />
                        <p className='sidebar-titles'>Profile</p>
                    </div>
                </NavLink>
                <NavLink to='/topArtist' className={({ isActive }) => `${isActive && screenSize > 912 ? 'nav-active' : 'nav-style'}`}>
                    <div className='icon-holder'>
                        <FontAwesomeIcon icon={faMusic} size={'xl'} color={'grey'} />
                        <p className='sidebar-titles'>Top Artists</p>
                    </div>
                </NavLink>
                <NavLink to='/topSongs' className={({ isActive }) => `${isActive && screenSize > 912 ? 'nav-active' : 'nav-style'}`}>
                    <div className='icon-holder'>
                        <FontAwesomeIcon icon={faMicrophoneLines} size={'xl'} color={'grey'} />
                        <p className='sidebar-titles'>Top Songs</p>
                    </div>
                </NavLink>
                <NavLink to='/recent' className={({ isActive }) => `${isActive && screenSize > 912 ? 'nav-active' : 'nav-style'}`}>
                <div className='icon-holder'>
                    <FontAwesomeIcon icon={faClockRotateLeft} size={'xl'} color={'grey'} />
                    <p className='sidebar-titles'>Recent</p>
                </div>
                </NavLink>
                <NavLink to="/playlists" className={({ isActive }) => `${isActive && screenSize > 912 ? 'nav-active' : 'nav-style'}`}>
                <div className='icon-holder'>
                    <FontAwesomeIcon icon={faBarsStaggered} size={'xl'} color={'grey'} />
                    <p className='sidebar-titles'>Playlist</p>
                </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar