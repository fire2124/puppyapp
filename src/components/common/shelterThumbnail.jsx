import React, { Component } from "react";
import "../../assets/add.scss"
import pic1 from "../../staticImage/shelter1.png";
import pic2 from "../../staticImage/shelter2.png";
import pic3 from "../../staticImage/shelter3.png";
import pic4 from "../../staticImage/shelter3.png";


class ShelterThumbnail extends Component {
  render() {
    let ilustracia2;

    let i = Math.floor(Math.random() * 4); // returns a random integer from 0 to 9
      console.log(i);

      switch (i) {
        case 0:
          ilustracia2 = pic1;
          break;
        case 1:
          ilustracia2 = pic2;
          break;
        case 2:
          ilustracia2 = pic3;
          break;
        case 3:
          ilustracia2 = pic4;
          break;
        default:
        // code block
      }

    return (
        
      <div >
        <img width="248" height="248" src={ilustracia2} alt="Snow" />
        <div className="thumbnailText text-left">{this.props.shelterName}</div>
      </div>
    );
  }
}

export default ShelterThumbnail;
