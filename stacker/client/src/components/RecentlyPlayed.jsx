import { useSelector } from "react-redux";

const RecentlyPLayed = () => {
    const recent = useSelector((state) => state.spotify.recent)
    console.log(`TEST`, recent.items[0].track.album.images[0].url)
    return (
        <div style={{border: '1px solid white', maxWidth: '1000px', minWidth:'950px'}}>
            { recent && 
                recent.items.map((songs) => {
                    return (
                        <div style={{display: 'flex', flexDirection: 'row', gap: '1rem', marginBottom: '1rem', maxWidth: '350px', border: '1px solid red'}}>
                            <img src={`${songs.track.album.images[0].url}`} style={{height: '50px'}}/>
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                <div style={{color: 'white'}}>{songs.track.name}</div>
                                <div style={{color: 'grey'}}>{songs.track.artists[0].name}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RecentlyPLayed;