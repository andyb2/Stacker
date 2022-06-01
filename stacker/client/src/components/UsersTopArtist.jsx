import { useSelector } from "react-redux";
import './styles/UsersTopArtist.css';
const UsersTopArtist = () => {
    const topArtists = useSelector(state => state.spotify.topArtist);
    
    return (
            <div className="top-artist-conatiner">
                <h1 className="header-top-artist">Top Artists</h1>
                <div className="artist-main">
                { topArtists && 
                    topArtists.items.map((artist) => {
                        return (
                            <a href={artist.external_urls.spotify} target="_blank" rel="noreferrer">
                                <div className="artist-card">
                                    <img src={`${artist.images[0].url}`} className="artist-image" alt="album cover" />
                                    <div className="artist-name">{artist.name}</div>
                                </div>
                            </a>
                        )
                    })
                }
                </div>
            </div>
    )
}

export default UsersTopArtist