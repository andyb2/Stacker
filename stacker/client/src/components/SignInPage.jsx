const SignInPage = () => {
    const LOGIN = 'http://localhost:8888/spotify/login';
    return (
        <div className='btn-sign-in'>
            <a href={LOGIN}>Login to Spotify</a>
        </div>
    )
}

export default SignInPage;