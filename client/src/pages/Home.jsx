import React, { useEffect, useRef } from "react";
import '../components/styles/Home.css';
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import { bulkSpotifyCall, refreshToken } from "../app/thunk";
import { checkLocalStorage } from "../utils";
import { setDimension } from "../app/reducer/viewport";
import { setSpotifyData } from "../app/reducer/spotify";
import { checkToken } from "../utils";
import User from "../components/User";
import Following from "../components/Following";
import Sidebar from "../components/Sidebar";
import RecentlyPlayed from "../components/RecentlyPlayed";
import UsersTopArtist from "../components/UsersTopArtist";
import UsersTopSongs from "../components/UsersTopSongs";
import Playlist from "../components/Playlist";
import RecentlyPLayed from "../components/RecentlyPlayed";
import ViewPortWidth from "../components/ViewPortWidth";
import { isAuth } from "../app/reducer/authentication";

const Home = () => {
    const auth = useSelector((state) => state.token.active);
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const viewPort = useSelector((state) => state.dimension)
    const main = useRef();

    useEffect(() => {
        const getUsersData = () => {
            const dataInLocalStorage = checkLocalStorage();
            !dataInLocalStorage ? dispatch(bulkSpotifyCall()) : dispatch(setSpotifyData(dataInLocalStorage.spotify))
            dispatch(setDimension(window.innerWidth));
        }
        getUsersData();
    }, [auth]);

    useEffect(() => {
        const checkTokenTimer = checkToken();
        if (checkTokenTimer.refresh_token) dispatch(refreshToken(checkTokenTimer.refresh_token));
        dispatch(isAuth());
        main.current.scrollTo(0, 0);
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