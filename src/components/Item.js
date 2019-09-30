import React from 'react';

function Item(props){
  return (
    <div className="item">
      <div className="item-group">
      <img src="http://placekitten.com/150/150" alt=""/>
      <div>
        <p className="item-name">{props.item.name}</p>
        <p className="item-sku">SKU: {props.item.sku}</p>
      </div>
      </div>
      
      <div className="item-quantity">{props.item.quantity}</div>
      <div className="item-price">{props.item.unitPrice}</div>

    </div>
  )
}

export default Item;