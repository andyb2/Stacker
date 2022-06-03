import { useSelector } from "react-redux";
import './styles/Playlist.css';
import PlaylistImage from "./PlaylistImage";
import { useEffect } from "react";

const Playlist = () => {
    const playlists = useSelector((state) => state.spotify.playlists);
    
    return (
        <div className='playlist-container'>
            <h1 className='spotify-color-white playlist-header'>Playlists</h1>
            <div className="playlist-main">
                {playlists &&
                    playlists.items.map(({ images, name }) => {
                        return (
                            <div className="playlist-card">
                                { images.length ? <img className="playlist-image" src={images[0].url} alt="playlist art" /> : <PlaylistImage /> }
                                <div className='playlist-name color-grey'>{name}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Playlist