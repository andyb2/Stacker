import { useSelector } from "react-redux";
import './styles/UsersTopArtist.css';
const UsersTopArtist = () => {
    const topArtists = useSelector(state => state.spotify.topArtist);
    console.log(topArtists)
    return (
            <div className="top-artist-conatiner">
                <h1 style={{color: 'white'}}>Top Artists</h1>
                { topArtists && 
                    topArtists.items.map((artist) => {
                        return (
                            <a style={{textDecoration: 'none'}} href={artist.external_urls.spotify} target="_blank">
                                <div className="artist-card" style={{padding: '1rem', maxWidth: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                        <img src={`${artist.images[0].url}`} style={{height: '150px', marginBottom: '1rem', borderRadius: '2px'}}/>
                                        <div className="artist-name">{artist.name}</div>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
    )
}

export default UsersTopArtist