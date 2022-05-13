import React, { useEffect } from "react";
import './styles/User.css'
import { useSelector, useDispatch } from "react-redux";
import { userDataRequest, userGetFollowing } from "../app/thunk";

const User = ({ setUserFollowingActive }) => {
    const { user, following } = useSelector((state) => state.spotify);
    const dispatch = useDispatch();
 
    const renderFollowers = () => {
        setUserFollowingActive(prev => !prev)
    }
    
    useEffect(() => {
        const getUsersData = () => {
            dispatch(userDataRequest());
            dispatch(userGetFollowing());
        }
        getUsersData();
    }, [])

    return (
        <>
            {   user && 
                    <div className='user-main'>
                        <img className='user-profile-image' src={`${user.images[0].url}`} alt="users spotify profile"></img>
                        <h1 className='user-profile-name margin-top'>{user.display_name}</h1>
                        <div className='user-follow margin-top'>
                            <div className='follow-container'>
                                <div style={{color: '#1DB954'}}>{user.followers.total}</div>
                                <div style={{color: 'grey', fontSize: '15px'}}>FOLLOWERS</div>
                            </div>
                            <div className='follow-container' onClick={()=> renderFollowers()}>
                                <div style={{color: '#1DB954'}}>{following && following.artists.total}</div>
                                <div style={{color: 'grey', fontSize: '15px'}}>FOLLOWING</div>
                            </div>
                        </div>
                        <div className='margin-top' style={{color: '#1DB954'}}>{user.product}</div>
                    </div>
            }
        </>
    )
}

export default User;