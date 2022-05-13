import React, { useState } from "react";
import { useSelector } from "react-redux";
import Logout from "../components/Logout";
import User from "../components/User";
import Following from "../components/Following";
import './Home.css'
const Home = () => {
    const [ userFollowingActive, setUserFollowingActive ] = useState(false);
    return (
        <div>
            { ( !userFollowingActive && <User setUserFollowingActive={setUserFollowingActive}/> ) || <Following userFollowingActive={userFollowingActive} /> }
            {/* <Logout /> */}
        </div>
    )
}

export default Home;