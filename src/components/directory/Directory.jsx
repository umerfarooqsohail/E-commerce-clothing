import React, { Component } from "react";
import "./Directory.scss";
import Menuitem from "../menu-item/Menuitem";
class Directory extends Component {
  constructor() {
    super();
    this.state = {
      section: [
        {
          title: "hat",
          imgurl: process.env.PUBLIC_URL + "/image/img1.png",
          id: 1,
          linkurl: "hats",
        },
        {
          title: "snaekers",
          imgurl: process.env.PUBLIC_URL + "/image/img2.png",
          id: 2,
          linkurl: "",
        },
        {
          title: "jackets",
          imgurl: process.env.PUBLIC_URL + "/image/img3.png",
          id: 3,
          linkurl: "",
        },
        {
          title: "women",
          imgurl: process.env.PUBLIC_URL + "/image/img4.jpg",
          size: "large",
          id: 4,
          linkurl: "",
        },
        {
          title: "men",
          imgurl: process.env.PUBLIC_URL + "/image/img5.jpg",
          size: "large",
          id: 5,
          linkurl: "",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.section.map(({ id, ...othersectionProps }) => (
          <Menuitem key={id} {...othersectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
