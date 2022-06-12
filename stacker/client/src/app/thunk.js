import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { getParam } from "../utils";
import { getUser, getFollowing, getRecent, getTopArtist, getTopSongs, getPlaylist } from "./reducer/spotify";
import { user, following } from "../endpointResponses";

const { access_token } = getParam();

const headers = {
    Authorization: `Bearer ${access_token}`,
    'Content-Type': 'application/json',
}

export const userDataRequest = createAsyncThunk(
    'spotify/getUserData',
    async (placeholder, thunkAPI) => {
        try {
            // const data = user
            const { data } = await axios.get('https://api.spotify.com/v1/me', { headers });
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
            // const data = following
            const { data } = await axios.get('https://api.spotify.com/v1/me/following?type=artist', { headers })
            // console.log(`[FOLLOWING]`, data)
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
            const { data } = await axios.get('https://api.spotify.com/v1/me/player/recently-played?limit=50', { headers });
            // console.log(`[RECENT]`, data)
            thunkAPI.dispatch(getRecent(data));
        } catch (error) {
            console.error(error);
        }
    }
)

export const getUserTopArtists = createAsyncThunk(
    'spotify/getTopArtist',
    async (placeholder, thunkAPI) => {
        try {
            const { data } = await axios.get('https://api.spotify.com/v1/me/top/artists', { headers });
            thunkAPI.dispatch(getTopArtist(data));
        } catch (error) {
            console.error(error);
        }
    }
)

export const getUserTopSongs = createAsyncThunk(
    'spotify/getTopArtist',
    async (placeholder, thunkAPI) => {
        try {
            const { data } = await axios.get('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=long_term', { headers });
            console.log(data)
            thunkAPI.dispatch(getTopSongs(data));
        } catch (error) {
            console.error(error);
        }
    }
)

export const getUserPlaylists = createAsyncThunk(
    'spotify/getPlaylist',
    async (placeholder, thunkAPI) => {
        try {
            const { data } = await axios.get('https://api.spotify.com/v1/me/playlists', { headers });
            console.log(`PLAYLISTS`, data)
            thunkAPI.dispatch(getPlaylist(data))
        } catch (error) {
            console.error(error);
        }
    }
)