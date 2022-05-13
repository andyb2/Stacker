import React, { useEffect } from "react";
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
        <div>
            {   user && 
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <img src={`${user.images[0].url}`} alt="users spotify profile" style={{height: '150px', borderRadius: '100px', padding:'1rem'}}></img>
                        <div style={{padding: '0.5rem', color: 'white'}}>{user.display_name}</div>
                        <div style={{display:'flex', gap: '5rem', padding:'0.5rem'}}>
                            <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                                <div style={{color: '#1DB954'}}>{user.followers.total}</div>
                                <div style={{color: 'grey', fontSize: '15px'}}>FOLLOWERS</div>
                            </div>
                            <div onClick={()=> renderFollowers()} style={{display: 'flex', flexDirection:'column', alignItems:'center', cursor: 'pointer'}}>
                                <div style={{color: '#1DB954'}}>{following && following.artists.total}</div>
                                <div style={{color: 'grey', fontSize: '15px'}}>FOLLOWING</div>
                            </div>
                        </div>
                        <div style={{color: '#1DB954'}}>{user.product}</div>
                    </div>
            }
        </div>
    )
}

export default User;