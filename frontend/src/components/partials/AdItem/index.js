import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from './styled';

export default (props) => {
    let price = '';

    if (props.data.priceNegotiable) {
        price = "Preço Negociável";
    } else {
        price = `R$ ${props.data.price}`;
    }

    return(
    <Item className="adItem">
        <Link to={`/ad/${props.dataid}`}>
            <div className="itemImage">
                <img src={props.data.image} alt=""/>
            </div>
            <div className="itemName">{props.data.title}</div>
            <div className="itemPrice">{price}</div>        
        </Link>
    </Item>
    );
}