import { useSelector } from "react-redux";

const Playlist = () => {
    const playlists = useSelector((state) => state.spotify.playlists)
    return (
        <div>
            {playlists &&
                playlists.items.map(({images, name, tracks}) => {
                    return (
                        <div>
                            { images.length ? <img src={images[0].url} alt="playlist art" /> : 'none' }
                            <div style={{color: '#DEDEDE'}}>{name}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Playlist