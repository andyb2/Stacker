import './styles/RecentlyPlayed.css';
import { useSelector } from "react-redux";

const RecentlyPLayed = () => {
    const recent = useSelector((state) => state.spotify.recent);
    
    const converMStoMinutes = (ms) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = ((ms % 60000) / 1000).toFixed(0);
        return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`
      }

    return (
        <div className='recent-container'>
            { recent && 
                recent.items.map((songs, idx) => {
                    return (
                        <div className='recent-row' key={`${songs.track.id} ${idx}`}>
                            <div style={{display: 'flex', gap: '1rem'}}>
                                <img src={`${songs.track.album.images[0].url}`} alt='album cover' style={{height: '50px'}}/>
                                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                    <div style={{color: 'white'}}>{songs.track.name}</div>
                                    <div style={{color: 'grey'}}>{songs.track.artists[0].name}</div>
                                </div>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', paddingRight: '0.5rem'}}>
                                <div style={{color: 'grey'}}>{converMStoMinutes(songs.track.duration_ms)}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RecentlyPLayed;