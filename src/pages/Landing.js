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
        <div className="container mx-auto">
          <div className="flex flex-no-wrap mx-auto">
            <div className="flex-none w-6/12 m-auto">
              <img src={vektor1} alt="Logo" />
              <h1 className="text-left text-4xl font-bold text-orange">
                Zoznámte sa so svojím
                <br /> ideálnym psím spoločníkom
              </h1>
              <p className="text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </p>
              <button className="text-white font-semibold text-center bg-orange px-8 py-2 m-2 rounded-full py-2 px-8">
                Nájsť psíka
              </button>
            </div>
            <div className="flex-none w-6/12 mx-auto">
              <img src={ilustracia} alt="Logo" />
            </div>
          </div>
          <div className="flex flex-no-wrap mx-auto">
            <div className="flex-none w-6/12 m-auto">
              <img src={ilustracia2} alt="Logo" />
            </div>
            <div className="flex-none w-6/12 mx-auto ">
              <img src={vektor2} alt="Logo" />

              <h1 className="text-left text-4xl font-bold text-orange">
                HAU TU ? (blog)
              </h1>
              <p className="text-lg ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </p>
              <button className="text-white font-semibold text-center bg-orange px-8 py-2 m-2 rounded-full py-2 px-8">
                Viac
              </button>
            </div>
          </div>
          <img src={vektor3} alt="Logo" />
          <div className="flex flex-no-wrap mx-auto">
            <div className="flex-none w-6/12 mx-auto ">
              <h1 className="text-left text-4xl font-bold text-orange">
                Ako pomáhame?
              </h1>
              <p className="text-lg ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </p>
              <img src={icon1} alt="Logo" />
              <img src={icon2} alt="Logo" />
              <img src={icon3} alt="Logo" />
            </div>
          </div>
          <div className="flex flex-no-wrap mx-auto">
            <div className="flex-none w-6/12 mx-auto ">
              <h1 className="text-left text-4xl font-bold text-orange">
                Podujatia
              </h1>
              <p className="text-lg ">
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

          <div className="flex flex-no-wrap mx-auto">
            <div className="flex-none w-6/12 m-auto">
              <img src={vektor4} alt="Logo" />

              <h1 className="text-left text-4xl font-bold text-orange">
                Finančná pomoc
              </h1>

              <p className="text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </p>
              <button className="text-white font-semibold text-center bg-orange px-8 py-2 m-2 rounded-full py-2 px-8">
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
