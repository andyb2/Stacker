export const getParam = () => {
    const hashParams = {};
    let e, r = /([^&;=]+)=?([^&;]*)/g,
        sub = window.location.hash.substring(1);
    while (e = r.exec(sub)){
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
}