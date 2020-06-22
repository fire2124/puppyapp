import React, { Component } from "react";
import ilustracia from "../staticImage/illustrations/Ilustracia_backgroundless.png";
import ilustracia2 from "../staticImage/illustrations/Ilustracia_backgroundless2.png";
import ilustracia3 from "../staticImage/illustrations/Ilustracia_backgroundless3 – Register.png";
import group1 from "../staticImage/group/Group 165.png";
import group2 from "../staticImage/group/Group 166.png";
import group3 from "../staticImage/group/Group 167.png";
import group4 from "../staticImage/group/Group 168.png";
import group5 from "../staticImage/group/Group 169.png";
import group6 from "../staticImage/group/Group 171.png";
import { Link } from "react-router-dom";
import icon1 from "../staticImage/icons/DOG-icon.png";
import icon2 from "../staticImage/icons/HAND&HEART.png";
import icon3 from "../staticImage/icons/HOUSE.png";

class Landing extends Component {
  render() {
    return (
      <div className=" xl:mx-auto ">
        <div className="xl:flex xl:flex-no-wrap xl:m-auto background1">
          <div className="xl:flex-none xl:w-6/12 xl:m-auto xl:m-16">
            <h1 className="xl:text-left text-4xl font-bold text-white xl:ml-40 xl:mt-20">
              Zoznámte sa so svojím
              <br /> ideálnym psím spoločníkom
            </h1>
            <p className="text-lg text-white xl:ml-40 mt-5 ">
              Spájame útulky, psíkov a rodiny na jednom mieste. Uľahčujeme celý
              proces výberu Vášho nového člena rodiny prostredníctvom
              jedinečného dotazníka a samotnej ONLINE adopcie.
            </p>
            <div className="mt-5">
              <Link
                className="text-white font-semibold text-center bg-orange px-8 py-2 m-2 rounded-full py-2 px-8 xl:ml-40 mt-10"
                to="/allDogs"
              >
                Nájsť psíka
              </Link>
            </div>
          </div>
          <div className="flex-none w-6/12 mx-auto ml-10 xl:mt-20">
            <img src={ilustracia} alt="Logo" />
          </div>
        </div>
        <div className=" xl:flex xl:flex-no-wrap background2 xl:my-56 my-4">
          <div className="flex1 w-6/12 ml-56 xl:mt-24">
            <div className="text-left justify-left xl:flex1">
              <img src={ilustracia2} alt="Logo" />
            </div>
          </div>
          <div className="container-fluid flex1 w-6/12 xl:mt-20">
            <h1 className="text-left text-4xl justify-left font-bold text-white xl:mt-32 ml-64 ">
              HAU TU ? (blog)
            </h1>
            <p className="text-left text-lg text-white justify-left  mt-5 ml-64">
              Neviete ako vycvičiť Vášho psíka? Ako prebieha proces adopcie? S
              týmito otázkami ale aj s mnohými ďaľšími Vám radi pomôžeme. Na
              našom blogu nájdete veľa užitočných článkov, ktoré Vás naučia, ako
              sa čo najlepšie postarať o svojho štvornohého priateľa.
            </p>
            <button className="text-white font-semibold text-center bg-orange px-8 py-2 m-2 rounded-full py-2 px-8 mr-40 mt-5 ml-64">
              Viac
            </button>
          </div>
        </div>
        <div className=" xl:flex xl:flex-no-wrap xl:m-auto background3">
          <div className="xl:flex xl:w-6/12  xl:my-56">
            <div className="text-left justify-left flex1">
              <h1 className="text-left flex1 text-4xl font-bold text-white justify-left ml-40">
                Ako pomáhame?
              </h1>
              <p className="text-left flex1 text-lg text-white flex1 justify-left ml-40 mt-5">
                Prostredníctvom tohto projektu sa snažíme nachádzať vhodný domov
                útulkáčom a tým zlepšiť situáciu v útulkoch v rámci celého
                Slovenska.
              </p>
            </div>
          </div>
          <div className="xl:flex w-6/12 xl:ml-48 xl:my-56">
            <div className="xl:w-1/3 mr-16 justify-left ">
              <img
                src={icon2}
                alt="Logo"
                width="80px"
                className="xl:justify-center ml-20 "
              />
              <p className="text-center  text-xl font-bold text-white justify-left mt-4">
                196
              </p>
              <p className="text-center  text-lg text-white  justify-left  mt-5 ">
                psíkov potrebuje <br />
                súrne domov
              </p>
            </div>
            <div className="xl:w-1/3 xl:mr-16 justify-left ">
              <img
                src={icon3}
                alt="Logo"
                width="80px"
                className="xl:justify-center ml-20 "
              />
              <p className="text-center  text-xl font-bold text-white justify-left mt-4">
                12 458
              </p>
              <p className="text-center  text-lg text-white  justify-left  mt-5 ">
                psíkov si našlo
                <br />
                nový domov
              </p>
            </div>
            <div className="xl:w-1/3 mr-16 justify-left">
              <img
                src={icon1}
                alt="Logo"
                width="80px"
                className="justify-center ml-20 "
              />
              <p className="text-center  text-xl font-bold text-white justify-left mt-4">
                10 869
              </p>
              <p className="text-center  text-lg text-white  justify-left  mt-5 ">
                psíkov hľadá <br />
                rodinu
              </p>
            </div>
          </div>
        </div>
        <div className="xl:flex xl:flex-no-wrap xl:m-auto xl:my-40">
          <div className="xl:flex xl:flex-no-wrap xl:m-auto xl:w-7/12 xl:justify-center xl:ml-20 ml-32">
            <div class=" xl:ml-20 xl:py-10 xl:px-2 xl:space-x-1 xl:w-4/12 ">
              <div class="xl:py-2 xl:m-2">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src={group1} alt="Logo" />
                    </div>
                    <div class="flip-card-back">
                      <img src={group6} alt="Logo" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="py-2 m-2">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src={group3} alt="Logo" />
                    </div>
                    <div class="flip-card-back">
                      <img src={group6} alt="Logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:py-10 px-2 xl:space-x-1 xl:w-4/12 ">
              <div class="py-2 m-2">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src={group2} alt="Logo" />
                    </div>
                    <div class="flip-card-back">
                      <img src={group6} alt="Logo" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="py-2 m-2">
                <div class="flip-card  ">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src={group4} alt="Logo" />
                    </div>
                    <div class="flip-card-back">
                      <img src={group6} alt="Logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="xl:py-10 px-2 xl:space-x-1 xl:w-4/12 ">
              <div class="py-2 m-2">
                <div class="flip-card  ">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src={group6} alt="Logo" />
                    </div>
                    <div class="flip-card-back">
                      <img src={group6} alt="Logo" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="py-2 m-2">
                <div class="flip-card  ">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src={group5} alt="Logo" />
                    </div>
                    <div class="flip-card-back">
                      <img src={group6} alt="Logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mx-20 xl:mt-32 w-5/12">
            <div className="xl:flex-none xl:m-auto xl:mr-32">
              <h1 className="text-left text-4xl font-bold pod mr-40">
                Podujatia
              </h1>
              <p className="text-lg mt-5">
                Sme tu pre združenia a útulky, ktoré denne bojujú o prežitie a
                na riešenie mnohých problémov nemajú čas ani ľudské kapacity.
                Preto im chceme uľahčiť prácu aj pomocou týchto akcií. Pridajte
                sa k nám a pomôžte tak psíkom na Slovensku.
              </p>
              <button className="text-white font-semibold text-center bg-orange px-8 py-2 m-2 rounded-full py-2 px-8 mt-5">
                Ďalšie podujatia
              </button>
            </div>
          </div>
        </div>

        <div className="xl:flex xl:flex-no-wrap xl:m-auto background4">
          <div className="xl:flex-none xl:w-6/12 xl:m-auto">
            <h1 className="xl:text-left text-4xl font-bold text-white xl:ml-40 mt-5">
              Finančná pomoc
            </h1>

            <p className="xl:text-lg text-white xl:ml-40 xl:mr-40">
              Peňažné dary pre útulky znamenajú viac možností pre psíkov. Každé
              euro pomôže našim psíkom zlepšiť ich osud alebo zachrániť život.
            </p>
            <button className="text-white font-semibold xl:text-center bg-orange px-8 py-2 m-2 rounded-full py-2 px-8 ml-40 mt-5">
              Viac
            </button>
          </div>
          <div className="xl:flex-none xl:w-6/12 xl:mx-auto">
            <img src={ilustracia3} alt="Logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
