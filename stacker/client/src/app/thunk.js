import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { getParam } from "../utils";
import { setSpotifyData } from "./reducer/spotify";
import { setToken } from "./reducer/authentication";

const checkForToken = () => {
    const token = JSON.parse(localStorage.getItem('spotify_token'));
    const access = (token && token.access_token) || null;
    return access ? token.access_token : null
}

const { access_token } = getParam();

const headers = {
    Authorization: `Bearer ${access_token ? access_token : checkForToken()}`,
    'Content-Type': 'application/json',
}

const endpoints = [
    'https://api.spotify.com/v1/me',
    'https://api.spotify.com/v1/me/following?type=artist',
    'https://api.spotify.com/v1/me/player/recently-played?limit=50',
    'https://api.spotify.com/v1/me/top/artists',
    'https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=long_term',
    'https://api.spotify.com/v1/me/playlists',
]

const stateName = [
    'user',
    'following',
    'recent',
    'topArtist',
    'topSongs',
    'playlists'
]

export const bulkSpotifyCall = createAsyncThunk(
    'spotify/bulkRequest',
    async (placeholder, thunkAPI) => {
        try {
            const response = await axios.all(endpoints.map(endpoint => axios.get(endpoint, { headers })));
            const spotify = {}
            const currentTime = Date.now();
            for (const data in response) {
                spotify[stateName[data]] = response[data].data
            }
            localStorage.setItem('spotify_data', JSON.stringify({spotify, timeStamp: currentTime}));
            thunkAPI.dispatch(setSpotifyData(spotify));
        } catch (error) {
            console.error(error)
        }
    }
)

export const refreshToken = createAsyncThunk(
    'authentication/refresh',
    async (refresh_token, thunkAPI) => {
        try {
            const { data } = await axios.post('http://localhost:8888/spotify/refresh_token', { refresh_token });
            thunkAPI.dispatch(setToken(data));
        } catch (error) {
            console.error(error);
        }
    }
)

