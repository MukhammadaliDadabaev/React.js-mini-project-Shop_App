import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// ICONS, FaShoppingBasket
import { TbChevronDown } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi";
import { BsCurrencyDollar } from "react-icons/bs";
import "./Nav.css";
import CardModal from "../cardModalMoney/CardModal";

// FUNC
const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach((money) => (summa += Number.parseFloat(money.price)));
  return (
    <div>
      {props.orders.map((card) => (
        <CardModal onDelete={props.onDelete} key={card.id} card={card} />
      ))}
      <p className="money">
        JAMI:&nbsp;&nbsp; {new Intl.NumberFormat().format(summa)}$
      </p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Tovarlar yo`q</h2>
    </div>
  );
};

function Nav(props) {
  // STATE
  let [cardOpen, setCardOpen] = useState(false);

  return (
    <header className="header">
      <ul className="wrapper ">
        <li className="active">
          <Link to="/">Women</Link>
        </li>
        <motion.li
          layout
          transition={{ duration: 0.75 }}
          initial={{ width: "0%" }}
          animate={{ width: "60%" }}
          className="item"
        >
          <Link to="/">Men</Link>
        </motion.li>
        <li>
          <Link to="/">Kids</Link>
        </li>
      </ul>
      <div className="top-icon">
        <Link to="/">
          <HiShoppingBag />
        </Link>
      </div>
      <ul className="wrapper">
        <li className="card-money">
          <Link to="/">
            <BsCurrencyDollar className="shop-card-money" />
          </Link>
        </li>
        <li className="round">
          <Link to="/">
            <TbChevronDown className="shop-card-down" />
          </Link>
        </li>
        <li className="karzina">
          <FaShoppingCart
            onClick={() => setCardOpen((cardOpen = !cardOpen))}
            className={`shop__nav-btn ${cardOpen && "active"}`}
          />
          <span className="shop_count">7</span>
        </li>
      </ul>
      {cardOpen && (
        <div className="shop-card">
          {props.orders.length > 0 ? showOrders(props) : showNothing()}
        </div>
      )}
    </header>
  );
}

export default Nav;
