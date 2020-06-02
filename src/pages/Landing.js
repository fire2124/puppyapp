import React, { Component } from "react";
import ilustracia from "../staticImage/Ilustracia_backgroundless.png"

class Landing extends Component {

  render() {
    return (
      <div>
        <div className="container mx-auto">
        <div className="flex flex-no-wrap mx-auto">
          <div className="flex-none w-6/12 m-auto">
            <h1 className="text-left text-4xl font-bold">Zoznámte sa so svojím<br/> ideálnym psím spoločníkom</h1>
            <p className="text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            <button className="text-orange p-2 bg-regal-blue">Nájsť psíka</button>
          </div>
          <div className="flex-none w-6/12 mx-auto">
            <img src={ilustracia} alt="Logo" />
          </div>
        </div>
        </div>
      </div>
    )}
  }

export default Landing;
