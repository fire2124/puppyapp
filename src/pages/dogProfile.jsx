import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getDogDetail } from "../services/dogService";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pic1 from "../staticImage/shallow/shallow-focus-photo-of-long-coated-dog-3361722 1.png";
import pic2 from "../staticImage/shallow/shallow 3.png";
import pic3 from "../staticImage/hautu/brown-and-white-short-coated-puppy-1805164.png";
import pic4 from "../staticImage/hautu/close-up-photography-of-adult-black-and-white-short-coat-dog-733416.png";
import pic5 from "../staticImage/shallow/shallow 2.png";
import pic6 from "../staticImage/shallow/shallow 4.png";
import pic7 from "../staticImage/shallow/shallow 5.png";


import image from "../staticImage/shallow/shallow 2.png";
import image2 from "../staticImage/shallow/shallow 3.png";
import image3 from "../staticImage/shallow/shallow 4.png";
import image4 from "../staticImage/shallow/shallow 5.png";
import yes from "../staticImage/16px/Path.png";
import no from "../staticImage/16px/icn-close.png";

let ilustracia2 = "";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

class DogProfile extends Component {
  state = {
    dog: null,
  };

  async componentDidMount() {
    const {
      match: { params },
    } = this.props;
    let response = await getDogDetail(params.dogId);
    if (response) {
      const { data } = response;
      this.setState({ dog: data });
    }
  }

  render() {
    if (this.state.dog === null) {
      return "Loading";
    } else {
      const { dog } = this.state.dog;
      console.log(dog);

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

       if (dog.photo) {
        ilustracia2 = `data:image/png;base64,${dog.photo};`;
        console.log(ilustracia2);
      } 
      return (
        <div className="dogProfile-full">
          <div className="dogProfile">
            <div className="backgroundUserProfile">
              <div className="xl:flex xl:flex-no-wrap xl:m-auto">
                <div className="justify-start xl:ml-64 mb-64">
                  <img
                    src={ilustracia2}
                    alt="Logo"
                    width="448px"
                    height="448px"
                    className=" xl:mt-20 xl:ml-32 max-w-none"
                  />
                </div>
                <div>
                  <div className="justify-center ml-40 mt-20">
                    <div className="xl:text-left text-4xl font-bold text-white  ">
                      <p> Ahoj! Ja som {dog.name}. </p>
                    </div>
                    <div className="xl:text-left text-white text-justify mt-5 mr-64 w-7/12">
                      <p>
                        {" "}
                        {dog.additionalInfo}{" "}
                        {/* Som veselá a hravá fenka, ktorá si vyžaduje veľa pozornosti.
                         Som vhodná k ľuďom, ktorí majú čas sa mi naplno venovať a naučiť ma
                         novým trikom. Rada skúmam svoje okolie a rozumiem si aj s inými domácimi
                         zvieratkami. */}
                      </p>
                    </div>
                  </div>
                  <div className="xl:flex xl:flex-no-wrap xl:m-auto">
                    <div className="justify-start xl:ml-40 xl:mt-24">
                      <div className="xl:text-left text-lg text-orange font-bold font-sm bg-orange-400">
                        Útulok Centrum psíkov
                      </div>
                      <div className="xl:text-left  ">
                        Levočská 23, 080 01 Prešov
                      </div>
                    </div>
                  </div>
                  <div className="xl:flex xl:flex-no-wrap xl:m-auto">
                    <div className="justify-start xl:ml-40 mt-2">
                      <div className="xl:text-left  ">
                        <p className="mt-4">
                          {" "}
                          <strong>Veková kategória:</strong> {dog.ageName}{" "}
                        </p>
                        <p className="mt-4">
                          {" "}
                          <strong>Rasa:</strong> {dog.breedName}{" "}
                        </p>
                        <p className="mt-4">
                          {" "}
                          <strong>Srsť:</strong> {dog.furTypeName}{" "}
                        </p>
                      </div>
                    </div>
                    <div className="justify-center ml-40 mt-2">
                      <div className="xl:text-left  ">
                        <div className="mt-4">
                          {" "}
                          <strong>Pohlavie:</strong> {dog.genderName}{" "}
                        </div>
                        <div className="xl:flex xl:flex-no-wrap xl:m-auto mt-4">
                          <div className=" flex w-1/3 mt-4">
                            <strong>Farba:</strong>
                          </div>
                          <div className=" flex w-2/3 mt-4">
                            {dog.colorNames.map((name) => (
                              <div className="ml-5">{name}, </div>
                            ))}
                          </div>
                        </div>
                        <p className="mt-4">
                          {" "}
                          <strong>Veľkosť:</strong> {dog.sizeName}{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-64 justify-center flex">
              <div className=" xl:mt-20">
                <div className="justify-between text-lg font-bold pod ml-16">
                  Zdravotný stav
                </div>
                <div className="xl:flex xl:flex-no-wrap xl:m-auto ">
                  <div className="w-1/2 mr-5 ml-10">
                    <div className="flex mt-5">
                      {" "}
                      {dog.dewormed === true && (
                        <img src={yes} alt="Logo" width="auto" />
                      )}{" "}
                      {dog.dewormed === false && (
                        <img src={no} alt="Logo" width="auto" />
                      )}
                      <div className="ml-5">Odčervenie</div>
                    </div>
                    <div className="flex mt-5">
                      {" "}
                      {dog.castrated === true && (
                        <img src={yes} alt="Logo" width="auto" />
                      )}{" "}
                      {dog.castrated === false && (
                        <img src={no} alt="Logo" width="auto" />
                      )}
                      <div className="ml-5">Vykastrovanie</div>
                    </div>
                  </div>
                  <div className="w-1/2 ml-5">
                    <div className="flex mt-5">
                      {" "}
                      {dog.chipped === true && (
                        <img src={yes} alt="Logo" width="auto" />
                      )}{" "}
                      {dog.chipped === false && (
                        <img src={no} alt="Logo" width="auto" />
                      )}
                      <div className="ml-5">Čipovanie</div>
                    </div>
                    <div className="flex mt-5">
                      {" "}
                      {dog.castrated === true && (
                        <img src={yes} alt="Logo" width="auto" />
                      )}{" "}
                      {dog.castrated === false && (
                        <img src={no} alt="Logo" width="auto" />
                      )}
                      <div className="ml-5">Kastrácia</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" xl:mt-20 mx-10">
                <div className="justify-between text-lg font-bold pod mx-16 ">
                  Povaha:
                </div>
                <div className="mt-5 ">
                  {dog.behaviorTraitNames.map((name) => (
                    <div className="mt-5 mx-16">- {name}</div>
                  ))}
                </div>
              </div>
              <div className=" xl:mt-20 mx-5">
                <div className="justify-between text-lg font-bold pod mx-16">
                  Ďalšie informácie
                </div>
                <div className="mt-5 mx-16"> </div>
              </div>
              <div className=" xl:mt-20 mx-5">
                <div className="justify-between text-lg font-bold pod mx-16">
                  Vhodný k:
                </div>
                <div className=" mt-5 ">
                  {dog.compatibilityNames.map((name) => (
                    <div className="mt-5 mx-16">- {name}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-orange font-semibold font-sm text-center bg-orange-400 m-2 inline-block mt-20 ml-64">
              <Link to="/allDogs"> {"<"} Späť </Link>
              <Link
                className="text-white font-semibold text-center bg-orange px-8 py-2 m-2 rounded-full py-2 px-8 mt-10 ml-20"
                to={`/adoptionForm/${dog.id}`}
              >
                Adoptovať
              </Link>
            </div>
          </div>

          <div className="App mt-10">
            <div className="container-fluid ">
              <div className="row justify-center ">
                <div className=" xl:flex-none xl:w-8/12 xl:mt-8 ml-64 px-64">
                  <h1 className="text-justify text-2xl font-bold text-black mr-48">
                    Ďalšie články, ktoré by sa Vám mohli páčiť
                  </h1>
                </div>
                <div className="flex2 xl:justify-center xl:w-7/12 xl:ml-64 xl:col-md-12 xl:px-0 xl:mt-8  ">
                  <Carousel
                    className="xl:ml-64"
                    swipeable={true}
                    responsive={responsive}
                    centerMode={true}
                  >
                    <div className="">
                      <img src={image} alt="image"></img>
                    </div>
                    <div className="">
                      <img src={image2} alt="image"></img>
                    </div>
                    <div className="">
                      <img src={image3} alt="image"></img>
                    </div>
                    <div className="">
                      <img src={image4} alt="image"></img>
                    </div>
                    <div className="">
                      <img src={image} alt="image"></img>
                    </div>
                    <div className="">
                      <img src={image2} alt="image"></img>
                    </div>
                    <div className="">
                      <img src={image3} alt="image"></img>
                    </div>
                    <div className="">
                      <img src={image4} alt="image"></img>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default DogProfile;
