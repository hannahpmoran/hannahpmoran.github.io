import React from 'react';
import '../App.css'; // Import the CSS file

function IDCard({ profilePicture, name, bio }) {
    return (
        <div className="id-card" style= {{ gap: '20px', justifyContent: 'space-evenly', display: 'flex', padding: '5px'}}>
            {/* Profile Picture */}
            <img
                src={profilePicture}
                alt={`${name}'s profile`}
                className="profile-picture"
            />
            <div>
                {/* Name */}
                <h2 className="name">{name}</h2>

                {/* Bio */}
                <p className="bio">{bio}</p>

            </div>

        </div>
    );
}

export default IDCard;
