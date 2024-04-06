import FriendList from 'components/FriendList/FriendList';
import { Component } from 'react';

const friendData = [
  { id: 'dfgdfg1', name: 'Alisa', age: 21, isFavourite: true },
  { id: '2drgdfg', name: 'Jack', age: 20, isFavourite: false },
  { id: 'drgdrfg4', name: 'Alex', age: 23, isFavourite: false },
  { id: 'd5ddrgdrg', name: 'Lisa', age: 21, isFavourite: true },
  { id: 'dfgdrg6', name: 'Robin', age: 26, isFavourite: false },
  { id: '7dfgdrg', name: 'Madelin', age: 25, isFavourite: true },
  { id: 'dfgdg8', name: 'Arthur', age: 16, isFavourite: false },
  { id: '9dfgdrg', name: 'Andrius', age: 28, isFavourite: false },
];

export class App extends Component {
  handleClick(evt) {
    console.log(evt.currentTarget);
  }

  handlePrintProfile = (name, age) => {
    console.log('profile', name, age);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        <FriendList
          handlePrintProfile={this.handlePrintProfile}
          friends={friendData}
        />
        ;
      </div>
    );
  }
}
