import React from "react";
import Categories from "../Category/Categories";
import "./CardTitle.css";

const CardTitle = (props) => {
  return (
    <div className="nav-list">
      <div className="logo__nav">
        <h1>Ayollar libosi</h1>
      </div>
      <Categories chooseCategory={props.chooseCategory} />
    </div>
  );
};

export default CardTitle;
