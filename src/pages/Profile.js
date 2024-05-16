// Profile.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { username } = useParams();

  return (
    <div>
      <h2>{username}'s Profile</h2>
      <br /><br />
      <p>This is the {username}'s profile page.</p>
      <br /><br />
    </div>
  );
};

export default Profile;
