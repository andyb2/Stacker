import React from "react";
import './styles/User.css';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileImage from "./ProfileImage";

const User = () => {
    const { user, following } = useSelector((state) => state.spotify);
    
    return (
        <>
            {   
                user && 
                    <div className='user-main'>
                        { 
                            user.images.length 
                                ? <img className='user-profile-image' src={`${user.images[0].url}`} alt="users spotify profile"/> 
                                : <ProfileImage username={user.display_name}  br={'100px'} h={'150px'} f={'75px'}/>
                        }
                        <h1 className='user-profile-name margin-top'>{user.display_name}</h1>
                        <div className='user-follow margin-top'>
                            <div className='follow-container'>
                                <div className='spotify-color-green'>{user.followers.total}</div>
                                <div className='follow-size color-grey'>FOLLOWERS</div>
                            </div>
                            <div className='follow-container'>
                                <NavLink to='/following' style={{textDecoration: 'none'}}>
                                    <div className='following-total spotify-color-green'>{following && following.artists.total}</div>
                                    <div className='follow-size color-grey'>FOLLOWING</div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default User;