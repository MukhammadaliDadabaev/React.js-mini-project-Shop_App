import React, { Component } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./Product.css";

export class ProductCard extends Component {
  render() {
    const { img, title, price, desc } = this.props.card;
    return (
      <div className="products">
        <div className="product__img">
          <img
            src={`./img/${img}`}
            alt={title}
            onClick={() => this.props.onCardFullmodal(this.props.card)}
          />
          <h2 className="product__title">{title}</h2>
          <h4 className="product__info">{desc}</h4>
          <p className="product__price">{price} $</p>
          <span>
            <AiOutlineShoppingCart
              onClick={() => this.props.onAdd(this.props.card)}
            />
          </span>
        </div>
      </div>
    );
  }
}

export default ProductCard;
