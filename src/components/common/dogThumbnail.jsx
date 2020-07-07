import React, { Component } from "react";
import "../../assets/add.scss"
import pic1 from "../../staticImage/shallow/shallow-focus-photo-of-long-coated-dog-3361722 1.png";
import pic2 from "../../staticImage/shallow/shallow 3.png";
import pic3 from "../../staticImage/hautu/brown-and-white-short-coated-puppy-1805164.png";
import pic4 from "../../staticImage/hautu/close-up-photography-of-adult-black-and-white-short-coat-dog-733416.png";
import pic5 from "../../staticImage/shallow/shallow 2.png";
import pic6 from "../../staticImage/shallow/shallow 4.png";
import pic7 from "../../staticImage/shallow/shallow 5.png";

class DogThumbnail extends Component {
  render() {
    let ilustracia2;

    let i = Math.floor(Math.random() * 8); // returns a random integer from 0 to 9
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
        case 4:
          ilustracia2 = pic5;
          break;
        case 5:
          ilustracia2 = pic6;
          break;
        case 6:
          ilustracia2 = pic7;
          break;
        case 7:
          ilustracia2 = pic1;
          break;
        case 8:
          ilustracia2 = pic2;
          break;
        default:
        // code block
      }

      //  if (this.props.dogs.photo) {
      //   ilustracia2 = `data:image/png;base64,${this.props.dogs.photo};`;
      //   console.log(ilustracia2);
      // } 
    return (
      <div >
        {/* <img width="248" height="248" src={this.props.image} alt="Snow" /> */}
        <img width="248" height="248" src={ilustracia2} alt="Snow" />

        <div className="thumbnailText text-left">{this.props.dogName}</div>
      </div>
    );
  }
}

export default DogThumbnail;
