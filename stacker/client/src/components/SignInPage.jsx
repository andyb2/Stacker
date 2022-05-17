import spotify from '../logos/spotify.png'
import './styles/SignInPage.css'
const SignInPage = () => {
    const LOGIN = 'http://localhost:8888/spotify/login';
    return (
        <div className='sign-in'>
            <div className='spotify-login'>
            <img src={spotify} alt="spotify logo" className='spotify-logo'></img>
            <a href={LOGIN} className='btn-login btn-ref'>Login</a>
            </div>
        </div>
    )
}

export default SignInPage;