import React, { Component } from "react";
import ilustracia from "../staticImage/illustrations/Ilustracia_backgroundless.png";
import ilustracia2 from "../staticImage/illustrations/Ilustracia_backgroundless2.png";
import ilustracia3 from "../staticImage/illustrations/Ilustracia_backgroundless3.png";
import vektor1 from "../staticImage/vectors/Vector-1.png";
import vektor2 from "../staticImage/vectors/Vector-2.png";
import vektor3 from "../staticImage/vectors/Vector-3.png";
import vektor4 from "../staticImage/vectors/Vector-4.png";
import icon1 from "../staticImage/icons/DOG-icon.png";
import icon2 from "../staticImage/icons/HAND&HEART.png";
import icon3 from "../staticImage/icons/HOUSE.png";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className=" mx-auto ">
          <div className="flex flex-no-wrap mx-auto background">
            <div className="flex-none w-6/12 m-auto m-16" >
              <h1 className="text-left text-4xl font-bold text-white ml-40">
                Zoznámte sa so svojím
                <br /> ideálnym psím spoločníkom
              </h1>
              <p className="text-lg text-white ml-40">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </p>
              <button className="text-white font-semibold text-center bg-orange px-8 py-2 m-2 rounded-full py-2 px-8 ml-40">
                Nájsť psíka
              </button>
            </div>
            <div className="flex-none w-6/12 mx-auto">
              <img src={ilustracia} alt="Logo" />
            </div>
          </div>
          <div className="flex flex-no-wrap mx-auto background2">
            <div className="flex-none w-6/12 m-auto">
              <img src={ilustracia2} alt="Logo" />
            </div>
            <div className="flex-none w-6/12  m-auto ">
              <h1 className="text-left text-4xl justify-center font-bold text-white mr-40">
                HAU TU ? (blog)
              </h1>
              <p className="text-lg text-white justify-center mr-40">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </p>
              <button className="text-white font-semibold text-center bg-orange px-8 py-2 m-2 rounded-full py-2 px-8 mr-40">
                Viac
              </button>
            </div>
          </div>
          <div className="flex flex-no-wrap m-auto background3">
            <div className="flex w-10/12 m-auto ">
              <div className= "text-left justify-left flex1">
              <h1 className="text-left flex1 text-4xl font-bold text-white justify-left ml-40">
                Ako pomáhame?
              </h1>
              <p className="text-left flex1 text-lg text-white flex1 justify-left ml-40 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </p>
              </div>
              <div className="text-lg text-white flex3 justify-left">
              <img src={icon2} alt="Logo" />
              </div>
              <div className="text-lg text-white flex3 justify-left">
              <img src={icon3} alt="Logo" />
              </div>
              <div className="text-lg text-white flex3 justify-left">
              <img src={icon1} alt="Logo" />
              </div>
              
            </div>
          </div>
          <div className="flex flex-no-wrap m-auto">
            <div className="flex-none w-3/12 m-auto ">
              <h1 className="text-left text-4xl font-bold pod mr-40">
                Podujatia
              </h1>
              <p className="text-lg mr-40">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </p>
              <button className="text-white font-semibold text-center bg-orange px-8 py-2 m-2 rounded-full py-2 px-8">
                Ďalšie podujatia
              </button>
            </div>
          </div>

          <div className="flex flex-no-wrap m-auto background4">
            <div className="flex-none w-6/12 m-auto">
              <h1 className="text-left text-4xl font-bold text-white ml-40">
                Finančná pomoc
              </h1>

              <p className="text-lg text-white ml-40">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </p>
              <button className="text-white font-semibold text-center bg-orange px-8 py-2 m-2 rounded-full py-2 px-8 ml-40">
                Viac
              </button>
            </div>
            <div className="flex-none w-6/12 mx-auto">
              <img src={ilustracia3} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
