import React, { Component } from 'react';
import Switch from '../switch/Switch';
import css from './showUsers.module.css';

export default class ShowUsers extends Component {
    onSwitchChanged = (type) => {
        this.props.onChange(type);
    };
    render() {
        return (
            <div className={css.showUsers}>
                <label> Mostrar usuários: </label>
                <Switch onChange={this.onSwitchChanged} />
            </div>
        );
    }
}

