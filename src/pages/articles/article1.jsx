import React, { Component } from "react";
import ilustracia from "../../staticImage/hautu/article1/1920_peso (1).png";
import ilustracia2 from "../../staticImage/hautu/article1/brown-and-white-short-coated-puppy-1805164 (1).png";
import ilustracia3 from "../../staticImage/hautu/article1/close-up-photography-of-adult-black-and-white-short-coat-dog-733416 (1).png";

import { Link } from "react-router-dom";

class Article1 extends Component {
  onSubmit = async (values) => {
    try {
      let response = await this.context.login(values);
      if (response) {
        this.props.history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="justify-center">
        <div className="xl:flex-none xl:w-12/12 xl:m-auto">
          <img src={ilustracia} alt="Logo" />
        </div>
        <div className="justify-center ml-40">
          <div className="xl:flex-none xl:w-6/12 xl:m-auto xl:m-16  xl:mt-16">
            <h1 className="text-justify text-3xl font-bold pod mr-48 ">
              S chovom zvieraťa sú spojené viaceré zákonné povinnosti, o ktorých
              by ste pred adopciou mali vedieť…
            </h1>
            <p className="text-lg mt-5 mr-48 text-justify">
              V zmysle zákona už zviera nie je vec. Živé zviera má osobitný
              význam a hodnotu ako živý tvor schopný vnímať. Vlastník je tak
              povinný zabezpečiť mu ochranu a pohodu, dobrý zdravotný stav,
              dostatočnú voľnosť pohybu, živé sociálne vzťahy a aktívne rozvíjať
              jeho danosti.
            </p>
          </div>
          <div className="xl:flex-none xl:w-6/12 xl:m-auto xl:m-16 xl:mt-8">
            <img src={ilustracia3} alt="Logo" />
          </div>
          <div className="xl:flex-none xl:w-6/12 xl:m-auto xl:m-16 xl:mt-8">
            <h1 className="text-justify text-2xl font-bold text-black mr-48">
              Vlastník alebo držiteľ psa je preto povinný:
            </h1>
            <p className="text-lg mt-5 mr-48 text-justify">
              zabrániť úniku zvieraťa, jeho neplánovanému rozmnožovaniu,
              prihlásiť psa do evidencie a oznamovať obci každú zmenu
              skutočností a údajov o psovi (najneskôr do 30 dní), rešpektovať
              zákazy vstupu alebo voľného pohybu, okamžite odstraňovať výkaly
              svojho psa, zabrániť útoku psa na človeka alebo iné zviera,
              predchádzať vzniku psom spôsobeným škodám na majetku a životnom
              prostredí, uvedomiť si, že za psa vždy zodpovedá držiteľ psa alebo
              osoba, ktorá nad psom vykonáva dohľad.
            </p>
          </div>

          <div className="xl:flex-none xl:w-6/12 xl:m-auto xl:mt-8">
            <img src={ilustracia2} alt="Logo" />
          </div>
          <div className="xl:flex-none xl:w-6/12 xl:m-auto xl:m-16 xl:mt-8">
            <p className="text-lg mt-5 mr-48 text-justify">
              Každý vlastník je na vlastné náklady povinný zabezpečiť
              identifikáciu (označenie) a registráciu psa.
            </p>
            <p className="text-lg mt-5 mr-48 text-justify">
              Takéto označenie musí vykonať veterinárny lekár aplikáciou
              čipového implantátu pred prvou zmenou vlastníka psa, najneskôr
              však do 12. týždňa života psa, čipom sa nedá zistiť prípadná
              poloha zatúlaného psa, obsahuje však informácie o zvierati a jeho
              vlastníkovi, ktoré tak umožňujú vrátiť stratené zviera v krátkom
              čase späť do rúk majiteľa. V prípade porušenia povinnosti trvale
              označiť psa čipom hrozí vlastníkovi pokuta vo výške 50 eur.
              Zároveň zákon súkromným veterinárom zakazuje neoznačené zviera
              ošetriť v prípade úrazu.
            </p>
            <p className="text-lg mt-5 mr-48 text-justify">
              Je teda najmä v záujme vlastníka, aby zákonom stanovené povinnosti
              nezanedbal.
            </p>
          </div>
          <div className="xl:flex-none xl:w-6/12 xl:m-auto xl:m-16 xl:mt-8">
            <Link
              to={`/hautu`}
              className="text-orange font-semibold font-sm text-center bg-orange-400 m-2 inline-block mt-10"
            >
              Späť
            </Link>

            <Link
              className="text-white font-semibold text-center bg-orange px-8 py-2 m-2 rounded-full py-2 px-8 mt-10"
              to="/allDogs"
            >
              Adoptovať
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Article1;
