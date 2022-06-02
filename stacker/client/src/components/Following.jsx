import { useSelector } from "react-redux"
import ProfileImage from "./ProfileImage";

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
                                    : <ProfileImage username={user.name} br={'2px'} h={'150px'} />
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