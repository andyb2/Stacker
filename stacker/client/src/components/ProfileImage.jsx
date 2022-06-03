import React, { useState, useEffect } from "react";

const backgroundColor = {
    red: 'red',
    blue: 'blue',
    green: 'green',
    yellow: 'yellow',
    pink: 'pink',
    purple: 'purple',
    orange: 'orange',
}

const ProfileImage = ({ username, br, h, f }) => {
    const [ imageProperties, setImageProperties ] = useState({});
    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: h ? h : '20px',
        width: h ? h : '20px',
        borderRadius: br ? br : '0px',
        fontSize: f ? f : '75px',
        color: 'white',
    };

    useEffect(() => {
        const generateProfileImage = () => {
            const background = Object.keys(backgroundColor)[Math.floor(Math.random() * 6)];
            style.backgroundColor = background;
            const firstLetterOfUsername = username[0].toUpperCase();
            const properties = {
                letter: firstLetterOfUsername,
                styling: style,
            };
            setImageProperties(properties);
        }
        generateProfileImage();
    }, [username, br, h, f]);

    return (
        <div style={imageProperties.styling}>
            <p> {imageProperties.letter} </p>
        </div>
    )
}

export default ProfileImage