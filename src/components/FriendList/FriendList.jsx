import React from 'react';
import Profile from 'components/Profile/Profile';

const FriendList = ({ friends, title, handlePrintProfile }) => {
  return (
    <div>
      <h1>Friend Book</h1>
      {friends.map(friend => {
        return (
          <Profile
            key={friend.id}
            name={friend.name}
            age={friend.age}
            isFavourite={friend.isFavourite}
            handlePrintProfile={handlePrintProfile}
          />
        );
      })}
    </div>
  );
};

export default FriendList;
