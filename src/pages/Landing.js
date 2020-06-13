import React, { Component } from "react";
import ilustracia from "../staticImage/illustrations/Ilustracia_backgroundless.png";
import ilustracia2 from "../staticImage/illustrations/Ilustracia_backgroundless2.png";
import ilustracia3 from "../staticImage/illustrations/Ilustracia_backgroundless3.png";
import group1 from "../staticImage/group/Group 165.png";
import group2 from "../staticImage/group/Group 166.png";
import group3 from "../staticImage/group/Group 167.png";
import group4 from "../staticImage/group/Group 168.png";
import group5 from "../staticImage/group/Group 169.png";
import group6 from "../staticImage/group/Group 171.png";

import icon1 from "../staticImage/icons/DOG-icon.png";
import icon2 from "../staticImage/icons/HAND&HEART.png";
import icon3 from "../staticImage/icons/HOUSE.png";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className=" mx-auto ">
          <div className="flex flex-no-wrap mx-auto background">
            <div className="flex-none w-6/12 m-auto m-16">
              <h1 className="text-left text-4xl font-bold text-white ml-40">
                Zoznámte sa so svojím
                <br /> ideálnym psím spoločníkom
              </h1>
              <p className="text-lg text-white ml-40">
                Spájame útulky, psíkov a rodiny na jednom mieste. Uľahčujeme
                celý proces výberu Vášho nového člena rodiny prostredníctvom
                jedinečného dotazníka a samotnej ONLINE adopcie.
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
                Neviete ako vycvičiť Vášho psíka? Ako prebieha proces adopcie? S
                týmito otázkami ale aj s mnohými ďaľšími Vám radi pomôžeme. Na
                našom blogu nájdete veľa užitočných článkov, ktoré Vás naučia,
                ako sa čo najlepšie postarať o svojho štvornohého priateľa.
              </p>
              <button className="text-white font-semibold text-center bg-orange px-8 py-2 m-2 rounded-full py-2 px-8 mr-40">
                Viac
              </button>
            </div>
          </div>
          <div className="flex flex-no-wrap m-auto background3">
            <div className="flex w-10/12 m-auto ">
              <div className="text-left justify-left flex1">
                <h1 className="text-left flex1 text-4xl font-bold text-white justify-left ml-40">
                  Ako pomáhame?
                </h1>
                <p className="text-left flex1 text-lg text-white flex1 justify-left ml-40 ">
                  Prostredníctvom tohto projektu sa snažíme nachádzať vhodný
                  domov útulkáčom a tým zlepšiť situáciu v útulkoch v rámci
                  celého Slovenska.
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
            <div class="md:flex md:items-center md:justify-start mx-auto py-10 px-10 space-x-40 space-x-1">
              <div class="flex-1 px-4 py-2 m-2">
                <div class="no-underline hover:underline text-blue-500 text-base">
                  <img src={group1} alt="Logo" />
                  <br />
                </div>
                <div class="no-underline hover:underline text-blue-500 text-base">
                  <img src={group2} alt="Logo" />
                </div>
              </div>
              <div class="flex-1 px-4 py-2 m-2">
                <div class="no-underline hover:underline text-blue-500 text-base">
                  <img src={group3} alt="Logo" />
                  <br />
                </div>
                <div class="no-underline hover:underline text-blue-500 text-base">
                  <img src={group4} alt="Logo" />
                </div>
              </div>
              <div class="flex-1 px-4 py-2 m-2">
                <div class="no-underline hover:underline text-blue-500 text-base">
                  <img src={group5} alt="Logo" />
                  <br />
                </div>
                <div class="no-underline hover:underline text-blue-500 text-base">
                  <img src={group6} alt="Logo" />
                </div>
              </div>
            </div>

            <div className="flex-none w-3/12 m-auto ">
              <h1 className="text-left text-4xl font-bold pod mr-40">
                Podujatia
              </h1>
              <p className="text-lg mr-40">
                Sme tu pre združenia a útulky, ktoré denne bojujú o prežitie a
                na riešenie mnohých problémov nemajú čas ani ľudské kapacity.
                Preto im chceme uľahčiť prácu aj pomocou týchto akcií. Pridajte
                sa k nám a pomôžte tak psíkom na Slovensku.
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
                Peňažné dary pre útulky znamenajú viac možností pre psíkov.
                Každé euro pomôže našim psíkom zlepšiť ich osud alebo zachrániť
                život.
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
