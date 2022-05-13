import React, { useState } from "react";
import User from "../components/User";
import Following from "../components/Following";
import '../components/styles/Home.css';
import Sidebar from "../components/sidebar/Siderbar";
const Home = () => {
    const [ userFollowingActive, setUserFollowingActive ] = useState(false);
    return (
        <>
        <Sidebar />
        <div style={{display: 'flex', justifyContent: 'end', width: '100%'}}>
            <div className='main'>
                { ( !userFollowingActive && <User setUserFollowingActive={setUserFollowingActive}/> ) || <Following userFollowingActive={userFollowingActive} /> }
            </div>
        </div>
        </>
    )
}

export default Home;