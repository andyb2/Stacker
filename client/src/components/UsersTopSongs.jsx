import { useSelector } from "react-redux";
import "./styles/UsersTopSongs.css";
import { convertMStoMinutes } from "../utils/index"

const UsersTopSongs = () => {
    const topSongs = useSelector((state) => state.spotify.topSongs);

    return (
        <div className="songs-container">
            <h1 className="header-top-songs">Top Songs</h1>
            <div className="songs-main">          
                { topSongs &&
                    topSongs.items.map(({ id, album, name, artists, duration_ms, external_urls }) => {
                        return (
                            <a key={id} href={external_urls.spotify} target="_blank" rel="noreferrer">    
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
                            </a>
                        )
                    })  
                }
            </div>
        </div>
    )
}
export default UsersTopSongs