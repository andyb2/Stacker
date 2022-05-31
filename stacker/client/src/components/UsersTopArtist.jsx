import { useSelector } from "react-redux";
import './styles/UsersTopArtist.css';
const UsersTopArtist = () => {
    const topArtists = useSelector(state => state.spotify.topArtist);
    console.log(topArtists)
    return (
            <div className="top-artist-conatiner">
                <h1 className="header-top-artist">Top Artists</h1>
                <div className="artist-main">
                { topArtists && 
                    topArtists.items.map((artist) => {
                        return (
                            <a href={artist.external_urls.spotify} target="_blank" rel="noreferrer">
                                <div className="artist-card">
                                        <img src={`${artist.images[0].url}`} alt="album cover" style={{height: '150px', marginBottom: '1rem', borderRadius: '2px'}}/>
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