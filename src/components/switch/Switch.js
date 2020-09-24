import React, { Component } from 'react';
import css from './switch.module.css';

export default class Switch extends Component {
    handleShowUsers = (event) => {
        this.props.onChange(event.target.checked);
    }
    render() {
        return (
            <div className={css.container}>
                <label className={css.switch}>
                    <input type="checkbox" onChange={this.handleShowUsers} />
                    <span className={`${css.slider} ${css.round}`}></span>
                </label>
            </div>
        );
    }
}

