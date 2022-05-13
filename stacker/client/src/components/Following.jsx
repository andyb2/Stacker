import { useSelector } from "react-redux"

const Following = ({ userFollowingActive }) => {
    const artists = useSelector((state) => state.spotify.following.artists);
    // console.log(`ART`, state.following.artists.items[0].images[0].url)
    return (
        <div>
            { userFollowingActive && artists.items.map((user, idx) => {
                return (
                    <div style={{color: 'white'}} key={`${user.name} ${idx}`}>
                       {user.images.length ? <img src={`${user.images[0].url}`} style={{height: '150px'}}></img> : "none"}
                        <div style={{color: 'white'}}>{user.name}</div>
                        <div style={{color: 'white'}}>{`followers ${user.followers.total}`}</div>
                    </div>
                )
            })}
        </div>
    )

}

export default Following