import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { getParam } from "../utils";
import { getUser, getFollowing, getRecent } from "./reducer/spotify";
import { user, following } from "../endpointResponses";
import { createCacheKeyComparator } from "reselect/es/defaultMemoize";

const { access_token } = getParam();

const headers = { 
    Authorization: `Bearer ${access_token}`,
    'Content-Type': 'application/json', 
}

export const userDataRequest = createAsyncThunk(
    'spotify/getUserData',
    async (placeholder, thunkAPI) => {
        try {
            const data = user
            // const { data } = await axios.get('https://api.spotify.com/v1/me', { headers } );
            console.log(`[USER]`, data)
            thunkAPI.dispatch(getUser(data));
        } catch (error) {
            console.error(error);
        }
    }
)

export const userGetFollowing = createAsyncThunk(
    'spotify/getFollowing',
    async (placeholder, thunkAPI) => {
        try {
            const data = following
            // const { data } = await axios.get('https://api.spotify.com/v1/me/following?type=artist', { headers } )
            console.log(`[FOLLOWING]`, data)
            thunkAPI.dispatch(getFollowing(data));
        } catch (error) {
            console.error(error);
        }
    }
)

export const getRecentlyPlayed = createAsyncThunk(
    'spotify/getRecent',
    async (placeholder, thunkAPI) => {
        try {
            const { data } = await axios.get('https://api.spotify.com/v1/me/player/recently-played', {headers} );
            console.log(`[RECENT]`, data)
            thunkAPI.dispatch(getRecent(data));
        } catch(error) {
            console.error(error);
        }
    }
)
