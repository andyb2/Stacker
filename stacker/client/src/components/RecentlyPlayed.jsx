import './styles/RecentlyPlayed.css';
import { useSelector } from "react-redux";
import { convertMStoMinutes } from '../utils';

const RecentlyPLayed = () => {
    const recent = useSelector((state) => state.spotify.recent);
    
    

    return (
        <div className='recent-container'>
            <h1 style={{color: 'white'}}>Recently Played</h1>
            { recent && 
                recent.items.map(({ track }, idx) => {
                    return (
                        <div className='recent-row' key={`${track.id} ${idx}`}>
                            <div className='recent-song-info'>
                                <img className='recent-song-image' src={`${track.album.images[0].url}`} alt='album cover'/>
                                <div className='recent-song-artist-name'>
                                    <div className='recent-track-name'>{track.name}</div>
                                    <div className='recent-track-artist'>{track.artists[0].name}</div>
                                </div>
                            </div>
                            <div className='recent-song-duration' >
                                <div>{convertMStoMinutes(track.duration_ms)}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RecentlyPLayed;