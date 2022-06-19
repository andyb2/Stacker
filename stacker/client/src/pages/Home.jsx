import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "../components/User";
import Following from "../components/Following";
import '../components/styles/Home.css';
import Sidebar from "../components/Sidebar";
import RecentlyPlayed from "../components/RecentlyPlayed";
import UsersTopArtist from "../components/UsersTopArtist";
import { userDataRequest,
         userGetFollowing,
         getRecentlyPlayed,
         getUserTopArtists,
         getUserTopSongs, 
         getUserPlaylists,
        bulkSpotifyCall } from "../app/thunk";
import { setLocalStorageObject } from '../app/reducer/spotify';
import { setDimension } from "../app/reducer/viewport";
import { Routes, Route, useLocation } from "react-router-dom";
import UsersTopSongs from "../components/UsersTopSongs";
import Playlist from "../components/Playlist";
import RecentlyPLayed from "../components/RecentlyPlayed";
import ViewPortWidth from "../components/ViewPortWidth";
import { useState } from "react";

const Home = () => {
    const auth = useSelector((state) => state.token.active);
    const spotify = useSelector(state => state.spotify)
    const [completed, setCompleted] = useState(false)
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const viewPort = useSelector((state) =>state.dimension)
    const main = useRef();

    useEffect(() => {
        const getUsersData = () => {
            dispatch(userDataRequest());
            dispatch(userGetFollowing());
            dispatch(getRecentlyPlayed());
            dispatch(getUserTopArtists());
            dispatch(getUserTopSongs());
            dispatch(getUserPlaylists());
            // dispatch(bulkSpotifyCall());
            dispatch(setDimension(window.innerWidth));
        }
        getUsersData();
        setCompleted(true)

    }, [auth]);

    useEffect(() => {
        const currentTime = Date.now();
        const spotifyData = {
            spotify,
            timeStamp: currentTime,
        }
        localStorage.setItem('spotify_data', JSON.stringify(spotifyData));
    }, [completed])

    useEffect(() => {
        main.current.scrollTo(0, 0)
    }, [pathname]);
  
    return (
        <div className="home-grid">
            <ViewPortWidth />
            <Sidebar />
                <div className='main' ref={main}>
                        <Routes>
                            <Route exact path="/" element={
                                <>
                                <User />
                                    {
                                        viewPort.dimension > 696 ?
                                            <div style={{display: 'flex', width: '100%', gap: '1rem', justifyContent: 'center'}}>
                                                <RecentlyPlayed /> 
                                                <UsersTopArtist /> 
                                            </div>
                                            : <RecentlyPlayed />
                                    }
                                </>
                            }/>
                            <Route exact path="/following" element={<Following />} />
                            <Route exact path="/topArtist" element={<UsersTopArtist />} />
                            <Route exact path="/topSongs" element={<UsersTopSongs />} />
                            <Route exact path="/playlists" element={<Playlist />} />
                            <Route exact path="/recent" element={<RecentlyPLayed />} />
                        </Routes>
                </div>
        </div>
    )
}

export default Home;