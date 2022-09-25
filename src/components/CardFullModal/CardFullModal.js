import React, { Component } from "react";
import { GoEyeClosed } from "react-icons/go";
import "./CardFullModal.css";

export class CardFullModal extends Component {
  render() {
    const { img, title, price, desc } = this.props.fullCardModal;
    return (
      <div className="full__card-modal">
        <div>
          <img src={`./img/${img}`} alt={title} />
          <h1 className="product__t">{title}</h1>
          <p className="product__i">{desc}</p>
          <GoEyeClosed
            className="shop__img-btn"
            onClick={() => this.props.onCardFullmodal(this.props.fullCardModal)}
          />
          <h4 className="product__price">{price} $</h4>
        </div>
      </div>
    );
  }
}

export default CardFullModal;
