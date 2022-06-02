import { useSelector } from "react-redux";
import './styles/Playlist.css';
import PlaylistImage from "./PlaylistImage";

const Playlist = () => {
    const playlists = useSelector((state) => state.spotify.playlists)
    return (
        <div>
            {playlists &&
                playlists.items.map(({ images, name }) => {
                    return (
                        <div>
                            { images.length ? <img className="playlist-image" src={images[0].url} alt="playlist art" /> : <PlaylistImage /> }
                            <div className='color-grey'>{name}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Playlist