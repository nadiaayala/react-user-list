import React, { Component } from 'react';
import css from '../users/users.module.css'
import Info from '../info/Info';


export default class User extends Component {
    render() {
        const { user, userKey, rate, price } = this.props;
        return (
            <li key={userKey} className={css.card}>
                <div className={css.container}>
                    <img src={user.picture} className={css.thumbnail} />
                    <p> {user.name}</p>
                </div>
                <div className={css.container}>
                    <Info rate={rate} price={price}/>
                </div>
            </li>
        );
    }
}

