import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import './Playlist.css';

const PlaylistImage = () => {
    return (
        <div>
            <FontAwesomeIcon className='playlist-image' icon={faMusic} size={'xl'} color={'grey'} />
        </div>
    )
}

export default PlaylistImage