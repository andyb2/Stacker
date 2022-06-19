import { useSelector } from "react-redux"
import ProfileImage from "./ProfileImage";
import './styles/Following.css';
const Following = () => {
    const artists = useSelector((state) => state.spotify.data.following.artists);

    return (
        <div className="following-container">
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