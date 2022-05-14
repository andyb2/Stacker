import React from 'react'
import './Sidebar.css';
import SpotifyLogo from '../../logos/spotify-logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faMicrophoneLines,faClockRotateLeft, faUser, faBarsStaggered} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div style={{cursor: 'pointer', paddingTop: '1rem', paddingBottom: '1rem'}}>
                <SpotifyLogo />
            </div>
            <div className='nav-buttons' style={{gap: '0.5rem', display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                {/* <div className="test2" style={{gap: '1rem', display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>    */}
                    <div className='icon-holder'>
                        <FontAwesomeIcon icon={faUser} size={'xl'} color={'grey'} />
                        <p className='sidebar-titles'>Profile</p>
                    </div>
                    <div className='icon-holder'>
                        <FontAwesomeIcon icon={faMusic} size={'xl'} color={'grey'} />
                        <p className='sidebar-titles'>Top Artists</p>
                    </div>
                    <div className='icon-holder'>
                        <FontAwesomeIcon icon={faMicrophoneLines} size={'xl'} color={'grey'} />
                        <p className='sidebar-titles'>Top Songs</p>
                    </div>
                    <div className='icon-holder'>
                        <FontAwesomeIcon icon={faClockRotateLeft} size={'xl'} color={'grey'} />
                        <p className='sidebar-titles'>Recent</p>
                    </div>
                    <div className='icon-holder'>
                        <FontAwesomeIcon icon={faBarsStaggered} size={'xl'} color={'grey'} />
                        <p className='sidebar-titles'>Playlist</p>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}

export default Sidebar