import React, { Component } from "react";
import ilustracia from "../staticImage/Ilustracia_backgroundless.png";
import ilustracia2 from "../staticImage/Ilustracia_backgroundless2.png";
import ilustracia3 from "../staticImage/Ilustracia_backgroundless3.png";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="container mx-auto">
          <div className="flex flex-no-wrap mx-auto">
            <div className="flex-none w-6/12 m-auto">
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
          <div className="flex flex-no-wrap mx-auto">
            <div className="flex-none w-6/12 m-auto">
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
