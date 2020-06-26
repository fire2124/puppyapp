import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getDogDetail } from "../services/dogService";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ilustracia from "../staticImage/hautu/article1/close-up-photography-of-adult-black-and-white-short-coat-dog-733416 (1).png";

// import ilustracia from "../staticImage/hautu/brown-and-white-short-coated-puppy-1805164.png";
import image from "../staticImage/shallow/shallow 2.png";
import image2 from "../staticImage/shallow/shallow 3.png";
import image3 from "../staticImage/shallow/shallow 4.png";
import image4 from "../staticImage/shallow/shallow 5.png";

import yes from "../staticImage/16px/Path.png";
import no from "../staticImage/16px/icn-close.png";

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

      return (
        <div className="dogProfile-full">
          <div className="dogProfile">
            <div className="backgroundUserProfile">
              <div className="xl:flex xl:flex-no-wrap xl:m-auto">
                <div className="justify-start xl:ml-64 mb-64">
                  <img
                    src={ilustracia}
                    alt="Logo"
                    width="auto"
                    height="auto"
                    className=" xl:mt-20 xl:ml-32"
                  />
                </div>
                <div>
                  <div className="justify-center ml-64 mt-20">
                    <div className="xl:text-left text-4xl font-bold text-white  ">
                      <p> Ahoj! Ja som {dog.name}. </p>
                    </div>
                    <div className="xl:text-left text-white text-justify mr-64 w-7/12">
                      <p>
                        {" "}
                        Som veselá a hravá fenka, ktorá si vyžaduje veľa
                        pozornosti. Som vhodná k ľuďom, ktorí majú čas a chuť
                        naplno sa mi venovať a naučiť ma novým trikom. Rada
                        skúmam svoje okolie a rozumiem si aj s inými domácimi
                        zvieratkami.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="xl:flex xl:flex-no-wrap xl:m-auto">
                    <div className="justify-start xl:ml-64 xl:mt-24">
                      <div className="xl:text-left text-lg text-orange font-bold font-sm bg-orange-400">
                        Útulok Centrum psíkov
                      </div>
                      <div className="xl:text-left  ">
                        Levočská 23, 080 01 Prešov
                      </div>
                    </div>
                  </div>
                  <div className="xl:flex xl:flex-no-wrap xl:m-auto">
                    <div className="justify-start xl:ml-64 mt-10">
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
{/* 
                    <div className="xl:flex xl:flex-no-wrap xl:m-auto ">
                  <div className=" mr-5">
                    <div className="flex mt-5"> */}
                      
                    <div className="justify-center ml-40 mt-10">
                      <div className="xl:text-left  ">
                        <div className="mt-4">
                          {" "}
                          <strong>Pohlavie:</strong> {dog.genderName}{" "}
                        </div>
                        <div className="xl:flex xl:flex-no-wrap xl:m-auto  mt-4">
                          <div className=" flex w-1/2 mt-4">
                            <strong>Farba:</strong>
                          </div>
                          <div className=" flex w-1/2 mt-4">
                            {dog.colorNames.map((name) => (
                              <div className="ml-2">{name}, </div>
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
                <div className="justify-between text-lg font-bold pod ml-8">
                  Zdravotný stav
                </div>
                <div className="xl:flex xl:flex-no-wrap xl:m-auto ">
                  <div className="w-1/2 mr-5">
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
                <div className="mt-5 mx-16"> - {dog.additionalInfo} </div>
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
              <Link to="/allDogs"> Späť </Link>
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
