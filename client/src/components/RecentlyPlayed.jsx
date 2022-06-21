import './styles/RecentlyPlayed.css';
import { useSelector } from "react-redux";
import { convertMStoMinutes } from '../utils';

const RecentlyPLayed = () => {
    const recent = useSelector((state) => state.spotify.recent);

    return (
        <div className='recent-container'>
            <h1 className='spotify-color-white recent-header'>Recently Played</h1>
            { recent && 
                recent.items.map(({ track }, idx) => {
                    return (
                        <a key={`recent ${track.id} ${idx}`} href={track.external_urls.spotify} target="_blank" rel="noreferrer">
                            <div className='recent-row'>
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
                        </a>
                    )
                })
            }
        </div>
    )
}

export default RecentlyPLayed;