import React, { Component } from 'react';
import User from '../user/User';
import css from './users.module.css';

export default class Users extends Component {
    render() {
        const { users } = this.props;
        return (
            <div>
                <div className={css.usersDiv}>
                    <ul className={css.usersList}>
                        {users.map(user => {
                            return <User user={user} key={user.id} userKey={user.id} rate={user.rate} price={user.price} />
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

