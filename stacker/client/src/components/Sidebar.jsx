import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Sidebar.css';
import SpotifyLogo from '../logos/spotify-logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faMicrophoneLines,faClockRotateLeft, faUser, faBarsStaggered} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div style={{cursor: 'pointer', paddingTop: '1rem', paddingBottom: '1rem'}}>
                <SpotifyLogo />
            </div>
            <div className='nav-buttons' style={{gap: '0.5rem', display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                <NavLink to='/' style={{textDecoration: 'none'}}>
                    <div className='icon-holder'>
                        <FontAwesomeIcon icon={faUser} size={'xl'} color={'grey'} />
                        <p className='sidebar-titles'>Profile</p>
                    </div>
                </NavLink>
                <NavLink to='/topArtist' style={{textDecoration: 'none'}}>
                    <div className='icon-holder'>
                        <FontAwesomeIcon icon={faMusic} size={'xl'} color={'grey'} />
                        <p className='sidebar-titles'>Top Artists</p>
                    </div>
                </NavLink>
                <NavLink to='topSongs' style={{textDecoration: 'none'}}>
                    <div className='icon-holder'>
                        <FontAwesomeIcon icon={faMicrophoneLines} size={'xl'} color={'grey'} />
                        <p className='sidebar-titles'>Top Songs</p>
                    </div>
                </NavLink>
                <div className='icon-holder'>
                    <FontAwesomeIcon icon={faClockRotateLeft} size={'xl'} color={'grey'} />
                    <p className='sidebar-titles'>Recent</p>
                </div>
                <NavLink to="/playlists" style={{textDecoration: 'none'}}>
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