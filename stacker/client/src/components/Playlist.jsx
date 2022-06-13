import { useSelector } from "react-redux";
import './styles/Playlist.css';
import PlaylistImage from "./PlaylistImage";

const Playlist = () => {
    const playlists = useSelector((state) => state.spotify.playlists);
    console.log(playlists)
    return (
        <div className='playlist-container'>
            <h1 className='spotify-color-white playlist-header'>Playlists</h1>
            <div className="playlist-main">
                {playlists &&
                    playlists.items.map(({ images, name, id, external_urls }) => {
                        return (
                            <a key={id} href={external_urls.spotify} target="_blank" rel="noreferrer">
                            <div className="playlist-card">
                                { images.length ? <img className="playlist-image" src={images[0].url} alt="playlist art" /> : <PlaylistImage /> }
                                <div className='playlist-name color-grey'>{name}</div>
                            </div>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Playlist