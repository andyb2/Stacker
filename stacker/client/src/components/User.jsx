import React from "react";
import './styles/User.css'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileImage from "./ProfileImage";

const User = ({ setUserFollowingActive }) => {
    const { user, following } = useSelector((state) => state.spotify);
 
    // const renderFollowers = () => {
    //     setUserFollowingActive(prev => !prev)
    // }

    return (
        <>
            {   
                user && 
                    <div className='user-main'>
                        { 
                            user.images.length 
                                ? <img className='user-profile-image' src={`${user.images[0].url}`} alt="users spotify profile"/> 
                                : <ProfileImage username={user.display_name}/>
                        }
                        <h1 className='user-profile-name margin-top'>{user.display_name}</h1>
                        <div className='user-follow margin-top'>
                            <div className='follow-container'>
                                <div style={{color: '#1DB954'}}>{user.followers.total}</div>
                                <div style={{color: 'grey', fontSize: '15px'}}>FOLLOWERS</div>
                            </div>
                            <div className='follow-container'>
                                <NavLink to='/following' style={{textDecoration: 'none'}}>
                                    <div style={{color: '#1DB954', textAlign: 'center'}}>{following && following.artists.total}</div>
                                    <div style={{color: 'grey', fontSize: '15px'}}>FOLLOWING</div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default User;