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

const ProfileImage = ( {username} ) => {
    const [ imageProperties, setImageProperties ] = useState({});

    useEffect(() => {
        const generateProfileImage = () => {
            const background = Object.keys(backgroundColor)[Math.floor(Math.random() * 6)];
            const firstLetterOfUsername = username[0].toUpperCase();
            const properties = {
                letter: firstLetterOfUsername,
                styling: { 
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: background,
                    height: '150px',
                    width: '150px',
                    borderRadius: '100px',
                    fontSize: '75px',
                    color: 'white',
                }
            };
            setImageProperties(properties);
        }
        generateProfileImage();
    }, [username]);

    return (
        <div style={imageProperties.styling}>
            <p styling={{color: 'white'}}> {imageProperties.letter} </p>
        </div>
    )
}

export default ProfileImage