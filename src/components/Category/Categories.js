import React, { Component } from "react";
import "./Categories.css";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "Barchasi",
        },
        {
          key: "qalin-j",
          name: "Qalin jemferlar",
        },
        {
          key: "sariq-j",
          name: "Sariq jemferlar",
        },
        {
          key: "oq-jem",
          name: "Oq jemferlar",
        },
        {
          key: "sumka",
          name: "Sumkalar",
        },
        {
          key: "qora-j",
          name: "Qora jemferlar",
        },
        {
          key: "oq-xal",
          name: "Oq xalatlar",
        },
        {
          key: "xalat",
          name: "Halatlar",
        },
      ],
    };
  }

  render() {
    return (
      <div className="categories">
        {this.state.categories.map((categname) => (
          <div
            key={categname.key}
            onClick={() => this.props.chooseCategory(categname.key)}
          >
            {categname.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
