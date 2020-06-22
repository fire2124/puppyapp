import { NavLink } from "react-router-dom";
import React, { Component } from "react";

import ilustracia from "../staticImage/dot/CLOCK-1.png";
import ilustracia2 from "../staticImage/dot/CLOCK-2.png";
import ilustracia3 from "../staticImage/dot/CLOCK-3.png";
import ilustracia4 from "../staticImage/dot/HOUSE.png";
import ilustracia5 from "../staticImage/dot/FLAT.png";
import ilustracia6 from "../staticImage/dot/TREE.png";
import ilustracia7 from "../staticImage/dot/KID-ICON.png";
import ilustracia8 from "../staticImage/dot/BABY-ICON.png";
import dog from "../staticImage/dot/DOG-MALE.png";
import cat from "../staticImage/dot/CAT.png";
import duck from "../staticImage/dot/DUCK.png";

class Popups extends Component {
  render() {
    return (
      <div>
        <div className="modal">
          <a className="close">
            {/*onClick={close}*/}
            &times;
          </a>
          <div className="font-bold text-3xl flex flex-no-wrap mx-auto  justify-center mt-20 mb-10">
            Koľko hodín denne máte
            <br />
            na staroslivosť o psa?
          </div>
          <div className="xl:flex xl:flex-no-wrap xl:mx-auto  xl:justify-center mb-5">
            <div className="mx-10">
              <button class="flex1 my-5 text-2xl">0 - 1 hodina</button>
              <img src={ilustracia} alt="Logo" width="70px" className="ml-10" />
            </div>
            <div className="mx-10">
              <button class="flex1 my-5 text-2xl">1 - 3 hodiny</button>
              <img
                src={ilustracia2}
                alt="Logo"
                width="70px"
                className="ml-10"
              />
            </div>
            <div className="mx-10">
              <button class="flex1 my-5 text-2xl">3 a viac hodín</button>
              <img
                src={ilustracia3}
                alt="Logo"
                width="70px"
                className="ml-10"
              />
            </div>
          </div>
          <div className="flex flex-no-wrap mx-auto justify-end">
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
            Psík bude bývať:
          </div>
          <div className="flex flex-no-wrap mx-auto  justify-center mb-5">
            <div className="mx-10">
              <button class="flex1 my-5 text-2xl">v Dome</button>
              <img src={ilustracia4} alt="Logo" width="70px" className="" />
            </div>
            <div className="mx-10">
              <button class="flex1 my-5 text-2xl">v Byte</button>
              <img src={ilustracia5} alt="Logo" width="70px" className="" />
            </div>
            <div className="mx-10">
              <button class="flex1 my-5 text-2xl">v Exteriéri</button>
              <img src={ilustracia6} alt="Logo" width="70px" className="ml-5" />
            </div>
          </div>
          <div className="flex flex-no-wrap mx-auto justify-end">
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
              Ďalej
            </NavLink>
          </div>
        </div>
        <div className="modal">
           {/*<a className="close">
           onClick={close}
            &times;
          </a>*/}
          <div className="font-bold text-3xl flex flex-no-wrap mx-auto justify-center mt-20 mb-10">
            Koľko členov má <br /> Vaša domácnosť?
          </div>
          <div className="flex flex-no-wrap mx-auto justify-center mb-5">
            <div className="mx-10">
              <button class="flex1 my-5 text-2xl">v Dome</button>
              <img src={ilustracia7} alt="Logo" width="70px" className="" />
            </div>
          </div>
          <div className="flex flex-no-wrap mx-auto justify-center mb-5">
            <div className="justify-between input-group plus-minus-input">
              <div class="input-group-button">
                <button
                  type="button"
                  class="button hollow circle flex1"
                  data-quantity="minus"
                  data-field="quantity"
                >
                  <i class="fa fa-minus" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div className="justify-between">
              <input
                class="text-center input-group-field flex1"
                type="number"
                name="quantity"
                value="0"
              />
            </div>
            <div class="justify-between input-group plus-minus-input">
              <div class="input-group-button flex1">
                <button
                  type="button"
                  class="button hollow circle"
                  data-quantity="plus"
                  data-field="quantity"
                >
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-no-wrap mx-auto justify-end">
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
              Ďalej
            </NavLink>
          </div>
        </div>
        <div className="modal">
          <a className="close">
            {/*onClick={close}*/}
            &times;
          </a>
          <div className="font-bold text-3xl flex flex-no-wrap mx-auto justify-center mt-20 mb-10">
            Koľko detí do 6 rokov žije
            <br />
            vo Vašej domácnosti?
          </div>
          <div className="flex flex-no-wrap mx-auto justify-center mb-5">
            <div className="mx-10">
              <button class="flex1 my-5 text-2xl">v Dome</button>
              <img src={ilustracia8} alt="Logo" width="70px" className="" />
            </div>
          </div>
          <div className="flex flex-no-wrap mx-auto justify-center mb-5">
            <div className="justify-between input-group plus-minus-input">
              <div class="input-group-button">
                <button
                  type="button"
                  class="button hollow circle flex1"
                  data-quantity="minus"
                  data-field="quantity"
                >
                  <i class="fa fa-minus" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div className="justify-between">
              <input
                class="text-center input-group-field flex1"
                type="number"
                name="quantity"
                value="0"
              />
            </div>
            <div class="justify-between input-group plus-minus-input">
              <div class="input-group-button flex1">
                <button
                  type="button"
                  class="button hollow circle"
                  data-quantity="plus"
                  data-field="quantity"
                >
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-no-wrap mx-auto justify-end">
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
              Ďalej
            </NavLink>
          </div>
        </div>
        <div className="modal">
          <a className="close">
            {/*onClick={close}*/}
            &times;
          </a>
          <div>
            <div className="font-bold text-3xl flex flex-no-wrap mx-auto justify-center mt-20 mb-10">
              Máte doma aj iné zvieratá?
            </div>
            <div className="xl:flex xl:flex-no-wrap xl:mx-auto xl:justify-between xl:mb-5">
              <div className="w-1/3 xl:ml-40 ml-32">
                <div className="mx-10 ml-20">
                  <p class="flex1 my-5 text-2xl">Pes</p>
                  <img src={dog} alt="Logo" width="100px" />
                </div>
                <div className="flex flex-no-wrap mx-auto justify-left mb-5">
                  <div className="justify-between input-group plus-minus-input">
                    <div class="input-group-button">
                      <button
                        type="button"
                        class="button hollow circle flex1"
                        data-quantity="minus"
                        data-field="quantity"
                      >
                        <i class="fa fa-minus" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                  <div className="justify-between">
                    <input
                      class="text-center input-group-field flex1"
                      type="number"
                      name="quantity"
                      value="0"
                    />
                  </div>
                  <div class="justify-between input-group plus-minus-input">
                    <div class="input-group-button flex1">
                      <button
                        type="button"
                        class="button hollow circle"
                        data-quantity="plus"
                        data-field="quantity"
                      >
                        <i class="fa fa-plus" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/3 xl:ml-40 ml-32">
                <div className="mx-10 ml-20">
                  <p class="flex1 my-5 text-2xl justify-right">Mačka</p>
                  <img src={cat} alt="Logo" width="100px" className="" />
                </div>
                <div className="flex flex-no-wrap justify-right mb-5">
                  <div className="justify-between input-group plus-minus-input">
                    <div class="input-group-button">
                      <button
                        type="button"
                        class="button hollow circle flex1"
                        data-quantity="minus"
                        data-field="quantity"
                      >
                        <i class="fa fa-minus" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                  <div className="justify-between">
                    <input
                      class="text-center input-group-field flex1"
                      type="number"
                      name="quantity"
                      value="0"
                    />
                  </div>
                  <div class="justify-between input-group plus-minus-input">
                    <div class="input-group-button flex1">
                      <button
                        type="button"
                        class="button hollow circle"
                        data-quantity="plus"
                        data-field="quantity"
                      >
                        <i class="fa fa-plus" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/3 xl:ml-40 ml-32">
                <div className="mx-10 ml-20">
                  <p class="flex1 my-5 text-2xl">Iné</p>
                  <img src={duck} alt="Logo" width="100px" />
                </div>

                <div className="flex flex-no-wrap mx-auto justify-left mb-5">
                  <div className="justify-between input-group plus-minus-input">
                    <div class="input-group-button">
                      <button
                        type="button"
                        class="button hollow circle flex1"
                        data-quantity="minus"
                        data-field="quantity"
                      >
                        <i class="fa fa-minus" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                  <div className="justify-between">
                    <input
                      class="text-center input-group-field flex1"
                      type="number"
                      name="quantity"
                      value="0"
                    />
                  </div>
                  <div class="justify-between input-group plus-minus-input">
                    <div class="input-group-button flex1">
                      <button
                        type="button"
                        class="button hollow circle"
                        data-quantity="plus"
                        data-field="quantity"
                      >
                        <i class="fa fa-plus" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-no-wrap mx-auto justify-end">
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
              Ďalej
            </NavLink>
          </div>
        </div>
        <div className="modal">
          <a className="close">
            {/*onClick={close}*/}
            &times;
          </a>
          <div className="font-bold text-3xl flex flex-no-wrap mx-auto justify-center mt-20 mb-10">
            Koľko máte skúsenosti so
            <br />
            starostlivosťou o psíka?
          </div>
          <div className=" xl:flex  xl:flex-no-wrap  xl:mx-auto  xl:justify-center  xl:mb-5">
            <div className="mx-10">
              <p class="flex1 my-5 text-2xl">Začiatočník</p>
            </div>
            <div className="mx-10">
              <p class="flex1 my-5 text-2xl">Skúsený</p>
            </div>
            <div className="mx-10">
              <p class="flex1 my-5 text-2xl">Chovateľ</p>
            </div>
          </div>
          <div className="flex flex-no-wrap mx-auto justify-end">
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
              Ďalej
            </NavLink>
          </div>
        </div>
        <div className="modal">
          <a className="close">
            {/*onClick={close}*/}
            &times;
          </a>
          <div className="font-bold text-3xl flex flex-no-wrap mx-auto justify-center mt-20 mb-10">
            Ako ďaleko ste ochotný ísť
            <br />
            si vyzdvihnúť psíka?
          </div>
          <div className=" xl:flex  xl:flex-no-wrap  xl:mx-auto  xl:justify-center mb-5">
            <div className="mx-10">
              <p class="flex1 my-5 text-2xl">0 - 10 km</p>
            </div>
            <div className="mx-10">
              <p class="flex1 my-5 text-2xl">10 - 100km</p>
            </div>
            <div className="mx-10">
              <p class="flex1 my-5 text-2xl">100 a viac km</p>
            </div>
          </div>
          <div className="flex flex-no-wrap mx-auto justify-end">
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
              Ďalej
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Popups;
