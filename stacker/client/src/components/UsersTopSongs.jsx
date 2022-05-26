import { useSelector } from "react-redux";

const UsersTopSongs = () => {
    const topSongs = useSelector((state) => state.spotify.topSongs);
    console.log(`TOP SONGS:`, topSongs)
    return (
        <div style={{color: 'white'}}>
            { topSongs &&
                 topSongs.items.map((songs) => {
                    return (
                        <div>
                            <div>{songs.artists[0].name}</div>
                            <div>{songs.name}</div>
                        </div>
                    )   
                })    
            }
        </div>
    )
}
export default UsersTopSongs