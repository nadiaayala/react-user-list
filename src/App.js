import React, { Component } from 'react';
import css from './App.module.css';
import ShowUsers from './components/showUsers/ShowUsers';
import Users from './components/users/Users';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      showUsers: false
    }
  }

  async componentDidMount() {
    const res = await fetch('https://randomuser.me/api/?nat=br&results=10&inc=gender,name,phone,picture,login,picture');
    const json = await res.json(); 
    let users = json.results.map(element => {
      return {
        name: `${element.name.first} ${element.name.last}`,
        picture: element.picture.medium,
        id: element.login.uuid,
        rate: Math.floor((Math.random() * 5) + 1),
        price: Math.floor((Math.random() * (50 - 40) + 40))

      }
    });
    //Sort users according to their rates
    users.sort((a, b) => (b.rate > a.rate) ? 1 : -1);
    this.setState({
      users: users
    });
  }
  
  showUsersChanged = (type) => {
    this.setState({
      showUsers: type ? true : false,
    });
  }

  render() {
    const { users, showUsers } = this.state;
    return (
      <div className={css.app}>
        <ShowUsers onChange={this.showUsersChanged} />
        {showUsers && <Users users={users} />}
      </div>
    )
  }
};