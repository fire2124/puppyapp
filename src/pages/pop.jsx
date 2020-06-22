import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import FormTextField from "../components/common/formTextField";

class Pop extends Component {
  render() {
    return (
      <div>
        <div className="modal">
          <a className="close">
            {/*onClick={close}*/}
            &times;
          </a>
          <div className="font-bold text-3xl flex flex-no-wrap mx-auto  justify-center mt-20 mb-10">
            Toto podujatie bolo úspešne
            <br />
            uložené do Vašich obľúbených
          </div>

          <div className="flex flex-no-wrap mx-auto justify-center mb-10">
            <NavLink
              className=" flex1 text-white font-semibold text-center bg-orange px-4 py-2 m-2 rounded-full py-2 px-4 inline-block"
              to="/"
            >
              Ďalej
            </NavLink>
          </div>
        </div>
        <div className="modal">
          <a className="close">
            {/*onClick={close}*/}
            &times;
          </a>
          <div className="font-bold text-3xl flex flex-no-wrap mx-auto  justify-center mt-20 mb-10">
            Tento psík bol úspešne uložený
            <br />
            do Vašich obľúbených
          </div>

          <div className="flex flex-no-wrap mx-auto justify-center mb-10">
            <NavLink
              className=" flex1 text-white font-semibold text-center bg-orange px-4 py-2 m-2 rounded-full py-2 px-4 inline-block"
              to="/"
            >
              Ďalej
            </NavLink>
          </div>
        </div>
        <div className="modal">
          <a className="close">
            {/*onClick={close}*/}
            &times;
          </a>
          <div className="font-bold text-3xl flex flex-no-wrap mx-auto  justify-center mt-20 mb-10">
            Tento článok bol úspešne
            <br />
            uložený do Vašich obľúbených
          </div>

          <div className="flex flex-no-wrap mx-auto justify-center mb-10">
            <NavLink
              className=" flex1 text-white font-semibold text-center bg-orange px-4 py-2 m-2 rounded-full py-2 px-4 inline-block"
              to="/"
            >
              Ďalej
            </NavLink>
          </div>
        </div>
        <div className="modal">
          <a className="close">
            {/*onClick={close}*/}
            &times;
          </a>
          <div className="font-bold text-3xl flex flex-no-wrap mx-auto  justify-center mt-20 mb-10">
           Zabudli ste svoje heslo?
          </div>
          <div className="xl:flex xl:flex-no-wrap xl:mx-auto  xl:justify-center mb-5">
            <div className="mx-10">
              <button class="flex1 my-5 text-2xl">Zadajte svoju e-mailovú adresu a my <br/>
              Vám pošleme link na obnovu Vášho hesla.</button>
            </div>
          
          </div>
          <div className="flex flex-no-wrap mx-auto justify-center mb-10">
            <NavLink
              className="flex1 text-orange font-semibold text-center bg-orange-400 px-4 py-2 m-2 rounded-full py-2 px-4 py-2 px-4 border-2 border-orange inline-block"
              to="/"
            >
              Späť
            </NavLink>
            <NavLink
              className=" flex1 text-white font-semibold text-center bg-orange px-4 py-2 m-2 rounded-full py-2 px-4 inline-block"
              to="/"
            >
              Odoslať
            </NavLink>
          </div>
        </div>
        <div className="modal">
          <a className="close">
            {/*onClick={close}*/}
            &times;
          </a>
          <div className="font-bold text-3xl flex flex-no-wrap mx-auto  justify-center mt-20 mb-10">
           Vaša registrácia
           <br/> prebehla úspešne
          </div>
          <div className="xl:flex xl:flex-no-wrap xl:mx-auto  xl:justify-center mb-5">
            <div className="mx-10">
              <button class="flex1 my-5 text-2xl">Môžete pokračovať na stránku alebo si vyplniť krátky dotazník, <br/>
              ktorý Vám pomôže nájsť si ideálneho domáceho miláčika.</button>
            </div>
          
          </div>
          <div className="flex flex-no-wrap mx-auto justify-center mb-10">
            <NavLink
              className="flex1 text-orange font-semibold text-center bg-orange-400 px-4 py-2 m-2 rounded-full py-2 px-4 py-2 px-4 border-2 border-orange inline-block"
              to="/"
            >
              Späť
            </NavLink>
            <NavLink
              className=" flex1 text-white font-semibold text-center bg-orange px-4 py-2 m-2 rounded-full py-2 px-4 inline-block"
              to="/"
            >
              Odoslať
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Pop;
