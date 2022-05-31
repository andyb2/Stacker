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
                            <div style={{display: 'flex', gap: '1rem'}}>
                                <img src={`${track.album.images[0].url}`} alt='album cover' style={{height: '50px'}}/>
                                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', flexShrink: '4'}}>
                                    <div style={{color: 'white', fontSize: '16px'}}>{track.name}</div>
                                    <div style={{color: 'grey', fontSize: '13px'}}>{track.artists[0].name}</div>
                                </div>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', paddingRight: '0.5rem'}}>
                                <div style={{color: 'grey', fontSize: '16px'}}>{convertMStoMinutes(track.duration_ms)}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RecentlyPLayed;