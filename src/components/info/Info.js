import React, { Component } from 'react';
import css from './info.module.css';
import Star from './star.png';

export default class Info extends Component {
    render() { 
        const {rate, price, id} = this.props;
        let stars = [];
        for(let i = 0; i<= rate; i++ ){
            stars.push(<img src={Star} className={css.star}/>);
        }
        return ( 
            <div className={css.container}>
                <p> São Paulo </p>
                <p> {`R$ ${price}/h`}</p>
                {stars}
            </div>
         );
    }
}
 
