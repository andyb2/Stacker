import { useSelector } from "react-redux";
import "./styles/UsersTopSongs.css";
import { convertMStoMinutes } from "../utils/index"

const UsersTopSongs = () => {
    const topSongs = useSelector((state) => state.spotify.topSongs);

    return (
        <div className="songs-parent">
            <h1 className="header-top-songs">Top Songs</h1>
            <div className="songs-container">          
                { topSongs &&
                    topSongs.items.map(({ id, album, name, artists, duration_ms }) => {
                        return (    
                            <div className="song-row" key={`${id}`}>
                                <div className="song-block">
                                    <img src={album.images[0].url} className="songs-image" alt="album cover" />
                                    <div className="song-info">
                                        <div className="song-name">{name}</div>
                                        <div className="song-artist">{artists[0].name}</div>
                                    </div>
                                </div>
                                <div className="song-time-length">
                                    <div>{convertMStoMinutes(duration_ms)}</div>
                                </div>
                            </div>
                        )
                    })  
                }
            </div>
        </div>
    )
}
export default UsersTopSongs