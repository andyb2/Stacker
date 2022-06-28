import { useSelector } from "react-redux"
import ProfileImage from "./ProfileImage";
import './styles/Following.css';
const Following = () => {
    const artists = useSelector((state) => state.spotify.following.artists);
    const viewPort = useSelector((state) => state.dimension)
    console.log(viewPort)
    return (
        <div className="following-container">
            <h1 className='following-header'>Following</h1>
            <div className="following-main">
                { artists
                    && artists.items.map(({ name, images, followers, external_urls }, idx) => {
                        return (
                            <div className='spotify-color-white following-card' key={`${name} ${idx}`}>
                                <a href={external_urls.spotify} target="_blank" rel="noreferrer">
                                    { 
                                        images.length 
                                            ? <img src={`${images[0].url}`} className='following-image' alt='artists profile' /> 
                                            : <ProfileImage username={name} br={'2px'} h={'150px'}/>
                                    }
                                    <div className='following-name'>{name}</div>
                                    <div className='following-name'>{`followers ${followers.total}`}</div>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default Following