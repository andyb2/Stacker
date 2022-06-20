export const getParam = () => {
    const hashParams = {};
    let e, r = /([^&;=]+)=?([^&;]*)/g,
        sub = window.location.hash.substring(1);
    while (e = r.exec(sub)){
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
}

export const convertMStoMinutes = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`
  }

  export const checkLocalStorage = () => {
      const data = JSON.parse(localStorage.getItem('spotify_data'));
      const currentTime = Date.now();
      if (data && currentTime - data.timeStamp > 300000) return null;
      return data;
  }

  export const checkToken = () => {
      const data = JSON.parse(localStorage.getItem('spotify_token'));
      const currentTime = Date.now();
      const fiftyNineMinutes = 3540000;
      if (data && currentTime - data.timeStamp > fiftyNineMinutes) return { refresh_token: data.refresh_token };
      return true;
  }