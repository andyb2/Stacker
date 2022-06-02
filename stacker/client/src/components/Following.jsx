import { useSelector } from "react-redux"
import ProfileImage from "./ProfileImage";

const Following = () => {
    const artists = useSelector((state) => state.spotify.following.artists);

    return (
        <div>
            { artists
                 && artists.items.map(({ name, images, followers }, idx) => {
                    return (
                        <div className='spotify-color-white' key={`${name} ${idx}`}>
                            { 
                                images.length 
                                    ? <img src={`${images[0].url}`} alt='artists profile' style={{height: '150px'}} /> 
                                    : <ProfileImage username={name} br={'2px'} h={'150px'} />
                            }
                            <div>{name}</div>
                            <div>{`followers ${followers.total}`}</div>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Following