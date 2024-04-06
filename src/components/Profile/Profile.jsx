import React from 'react';
import css from './Profile.module.css';

const Profile = ({
  id,
  name,
  age,
  isFavourite = false,
  className = '',
  handlePrintProfile,
 
}) => {
  return (
    <p
      style={{
        backgroundColor: isFavourite ? 'blanchedalmond' : 'transparent',
      }}
      className={css.friendProfile}
    >
      {isFavourite && '❤️'} Hello, <span className={css.name}>{name}</span>.
      Your age is: {age}.
      <button onClick={()=>handlePrintProfile(name, age)}>
        Print Name and Age
      </button>
    </p>  
  );
};

export default Profile;
