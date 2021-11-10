import React from 'react';
import {userType} from './types';

function User({ user }) {
  return (
    <div>
      <h1>{user.firstName} {user.lastName}</h1>
      <ul>
        <li>Role: {user.role}</li>
      </ul>
    </div>
  )
}

User.propTypes = {
  // Reference centralized PropType declaration. Clean. 👍
  user: userType
};

export default User;
