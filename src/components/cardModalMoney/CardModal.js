import React, { Component } from "react";
import { FaTrash } from "react-icons/fa";
import "./CardModalMoney.css";

export class CardModal extends Component {
  render() {
    const { img, title, price } = this.props.card;

    return (
      <>
        <div className="card-modal">
          <img src={`./img/${img}`} alt={title} />
          <h2 className="modal-title">{title}</h2>
          <span>
            <FaTrash
              className="delete-icon"
              onClick={() => this.props.onDelete(this.props.card.id)}
            />
          </span>
          <p className="modal-price">{price} $</p>
        </div>
      </>
    );
  }
}

export default CardModal;
