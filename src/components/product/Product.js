import React, { Component } from "react";

import "./Product.css";
import ProductCard from "./ProductCard";

export class Product extends Component {
  render() {
    return (
      <main>
        {this.props.items.map((card) => (
          <ProductCard
            key={card.id}
            card={card}
            onAdd={this.props.onAdd}
            onCardFullmodal={this.props.onCardFullmodal}
          />
        ))}
      </main>
    );
  }
}

export default Product;
