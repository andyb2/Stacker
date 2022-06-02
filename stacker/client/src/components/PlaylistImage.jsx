import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const PlaylistImage = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faMusic} size={'xl'} height={'150px'} color={'grey'} />
        </div>
    )
}

export default PlaylistImage