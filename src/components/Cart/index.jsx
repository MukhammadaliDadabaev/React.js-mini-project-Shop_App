import React, { Component } from "react";
import CardFullModal from "../CardFullModal/CardFullModal";
import data from "../data";
import Nav from "../Header/Nav";
import Product from "../product/Product";
import CardTitle from "../Title/CardTitle";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentCategor: [],
      data,
      cardFullModal: false,
      fullCardModal: {},
    };
    this.state.currentCategor = this.state.data;
    this.addToorder = this.addToorder.bind(this);
    this.deletCardModal = this.deletCardModal.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onCardFullmodal = this.onCardFullmodal.bind(this);
  }

  render() {
    return (
      <>
        <Nav orders={this.state.orders} onDelete={this.deletCardModal} />
        <CardTitle chooseCategory={this.chooseCategory} />
        <section>
          <Product
            items={this.state.currentCategor}
            onAdd={this.addToorder}
            onCardFullmodal={this.onCardFullmodal}
          />
        </section>

        {this.state.cardFullModal && (
          <CardFullModal
            fullCardModal={this.state.fullCardModal}
            onAdd={this.addToorder}
            onCardFullmodal={this.onCardFullmodal}
          />
        )}
      </>
    );
  }
  // card-add modal func
  addToorder(item) {
    let isInArray = false;
    this.state.orders.forEach((card) => {
      if (card.id === item.id) isInArray = true;
    });
    if (!isInArray)
      this.setState({
        orders: [...this.state.orders, item],
      });
  }

  // card-delet modal func
  deletCardModal(id) {
    this.setState({
      orders: this.state.orders.filter((card) => card.id !== id),
    });
  }

  // search-card-list
  chooseCategory(categorName) {
    if (categorName === "all") {
      this.setState({ currentCategor: this.state.data });
      return;
    }

    this.setState({
      currentCategor: this.state.data.filter(
        (categ) => categ.category === categorName
      ),
    });
  }

  // cardFullModal func
  onCardFullmodal(card) {
    this.setState({ fullCardModal: card });
    this.setState({ cardFullModal: !this.state.cardFullModal });
  }
}

export default Card;
