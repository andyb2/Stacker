import { useSelector } from "react-redux";

const UsersTopArtist = () => {
    const topArtists = useSelector(state => state.spotify.topArtist)
    console.log(topArtists)
    return (
        <div style={{height: '100%', display: 'flex'}}>
            { topArtists && 
                topArtists.items.map((artist) => {
                    return (
                        <div style={{maxWidth: '150px', maxHeight: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <img src={`${artist.images[0].url}`} style={{height: '150px', borderRadius: '100px'}}/>
                            <p style={{color: 'white'}}>{artist.name}</p>
                            <div style={{color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                <p>Followers</p>
                                <p>{artist.followers.total}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UsersTopArtist