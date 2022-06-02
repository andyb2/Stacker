import { useSelector } from "react-redux"

const Following = () => {
    const artists = useSelector((state) => state.spotify.following.artists);
    return (
        <div>
            { artists
                 && artists.items.map((user, idx) => {
                    return (
                        <div className='spotify-color-white' key={`${user.name} ${idx}`}>
                            { 
                                user.images.length 
                                    ? <img src={`${user.images[0].url}`} alt='artists profile' style={{height: '150px'}}></img> 
                                    : "0" 
                            }
                            <div>{user.name}</div>
                            <div>{`followers ${user.followers.total}`}</div>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Following