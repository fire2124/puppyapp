import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getDogDetail } from "../services/dogService";
import { Form } from "react-final-form";
import FormTextField from "../components/common/formTextField";
import ilustracia from "../staticImage/shallow/shallow-focus-photo-of-long-coated-dog-3361722 1.png";

class AdoptionRequests extends Component {
  state = {
    dog: null,
  };

  onSubmit = async (values) => {
    // try {
    //   let response = await this.context.login(values);
    //   if(response){
    //     this.props.history.push("/");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
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
            <div className="backgroundAllDogs">
              <div className="xl:flex xl:flex-no-wrap xl:m-auto">
                <div className="justify-center ml-64 mb-64">
                  <img
                    src={ilustracia}
                    alt="Logo"
                    width="176"
                    height="auto"
                    className=" xl:mt-20 xl:ml-32 max-w-none"
                  />
                </div>
                <div>
                  <div className="justify-center ml-20 mt-16">
                    <div className="xl:text-left text-4xl font-bold text-white  ">
                      <p> {dog.name} </p>
                    </div>
                    <div className="xl:flex xl:flex-no-wrap xl:m-auto text-white">
                      <div className="justify-start  mt-2">
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
                      <div className="justify-center ml-40 mt-2">
                        <div className="xl:text-left  ">
                          <div className="mt-4">
                            {" "}
                            <strong>Pohlavie:</strong> {dog.genderName}{" "}
                          </div>
                          <div className="xl:flex xl:flex-no-wrap xl:m-auto mt-4">
                            <div className=" flex w-1/3 mt-4">
                              <strong>Farba:</strong>
                            </div>
                            <div className=" flex w-2/3 mt-4">
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
                <div className="xl:text-white xl:ml-40 mt-20">
                  <div className="xl:justify-start">
                    <div className="xl:text-left text-2xl font-bold font-sm ">
                      Útulok Centrum psíkov
                    </div>
                    <div className="xl:text-left  mt-5">
                      <strong>Adresa:</strong> Levočská 23, 080 01 Prešov
                    </div>
                    <div className="xl:text-left  mt-5">
                      <strong>E-mail:</strong> u.centrumpsikov@gmail.com
                    </div>
                    <div className="xl:text-left  mt-5">
                      <strong>Tel:</strong> +421 915 569 321
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-center">
              <div className="justify-center ml-40">
                <div className="xl:flex-none xl:w-6/12 xl:m-auto xl:m-16  xl:mt-16">
                  <h1 className="text-justify text-3xl font-bold pod mr-48 ">
                    Adopčný formulár
                  </h1>
                  <p className="text-lg mt-5 mr-48 text-justify">
                    Tento formulár slúži na požiadanie o adopciu psíka. Naozaj
                    zvážte či máte vhodné podmienky pre psíka, ktorého ste si
                    vybrali. Nie je potrebné vyplniť všetky informácie online,
                    avšak pri osobnom stretnutí s konkrétnym útulkom budete
                    povinný pre spracovanie Vašej žiadosti o adopciu, poskytnúť
                    tieto informácie dodatočne. Informácie, ktoré uvediete musia
                    byť pravdivé a aktuálne.
                  </p>
                </div>
                <div className="xl:flex-none xl:w-6/12 xl:m-auto xl:m-16  xl:mt-16">
                  <h1 className="text-justify text-3xl font-bold pod mr-48 ">
                    Záväzné podmienky pre adopciu
                  </h1>
                  <p className="text-lg mt-5 mr-48 text-justify">
                    1. V prípade, že zviera (pes alebo mačka) bude bývať vonku,
                    potrebuje zateplenú búdu adekvátnych rozmerov.
                  </p>{" "}
                  <p className="text-lg mt-5 mr-48 text-justify">
                    2. V prípade, že ste si zvolili psa do bytu, musí byť
                    pravidelne venčený. Ak bude na vodítku, musí mať dĺžku
                    minimálne 2 metre, nesmie byť držaný na reťazi.
                  </p>{" "}
                  <p className="text-lg mt-5 mr-48 text-justify">
                    {" "}
                    3. Pes aj mačka sú spoločenské zvieratá, samota im
                    neprospieva, preto je potrebné aby ste sa im dostatočne
                    venovali. Ak by mal byť psík dlhšiu dobu osamote z dôvodu
                    Vašich pracovných povinností, je dôležité aby mal
                    zabezpečené hračky, poprípade inú možnosť na zábavu.
                  </p>{" "}
                  <p className="text-lg mt-5 mr-48 text-justify">
                    4. Psík v byte potrebuje svoj peliešok, svoje útočisko, kam
                    sa môže schovať, poprípade kam ho odporučíte v prípade
                    neposlušnosti, miesto, ktoré považuje za “svoje”. Ak chcete,
                    aby Vás pes poslúchal, je nevyhnutné aby ste sa mu
                    dostatočne venovali. Nikdy nenútime psa poslúchať trestom!
                  </p>{" "}
                  <p className="text-lg mt-5 mr-48 text-justify">
                    5. Pes musí mať nepretržitý prístup k čistej pitnej vode a
                    musí byť pravidelne, denne, kŕmený. O vhodnom krmive Vás
                    radi informujeme, ale dostatočné informácie Vám ponúkne aj
                    ošetrujúci veterinár.{" "}
                  </p>{" "}
                  <p className="text-lg mt-5 mr-48 text-justify">
                    6. Každý pes musí absolvovať pravidelné prehliadky u
                    veterinára - či už kontrola zdravotného stavu, alebo
                    nepovinné, či zo zákona povinné očkovania - minimálne raz do
                    roka, keď to jeho zdravotný stav nevyžaduje inak, ďalej
                    pravidelné odčervovanie, starostlivosť o psíka v rámci
                    zbavovania sa parazitov, starostlivosť o chrup atď…{" "}
                  </p>{" "}
                  <p className="text-lg mt-5 mr-48 text-justify">
                    7. Ak ste si vybrali šteniatko, alebo nemáte dostatočné
                    skúsenosti so psami, odporúčame aby ste si najprv
                    naštudovali potrebné informácie pre jeho chov. Je tiež
                    dôležité, aby ste mali dostatočné informácie o jeho povahe,
                    charaktere, správaní, aby ste ľahšie porozumeli jeho
                    správaniu, signálom.
                  </p>{" "}
                  <p className="text-lg mt-5 mr-48 text-justify">
                    {" "}
                    8. Odporúčame chodiť k jednému veterinárovi, ktorý bude
                    poznať zdravotnú genézu Vášho psíka.
                  </p>
                </div>

                <div className="xl:flex-none xl:w-6/12 xl:m-auto xl:mt-5">
                  <p className=" mt-5 mr-48 text-justify text-red-600">
                    V prípade zistenia zanedbania starostlivosti o psa, týrania
                    psa alebo v prípade držania psa na reťazi a obmedzovania
                    jeho voľnosti bude táto skutočnosť oznámená Regionálnej
                    veterinárnej a potravinovej správe a nadobúdateľ ponesie
                    právne následky. V takomto prípade má útulok právo nárokovať
                    si na spätné prevzatie psa bez akejkoľvek náhrady a
                    nadobúdateľ je povinný vydať toto zviera.
                  </p>
                </div>
                <div className="xl:flex-none xl:w-6/12 xl:m-auto mt-2">
                  <div className="xl:flex xl:flex-no-wrap ">
                    <div className="justify-start">
                      <div className="xl:text-left  ">
                        <Form
                          onSubmit={this.onSubmit}
                          render={({
                            handleSubmit,
                            form,
                            submitting,
                            pristine,
                            values,
                          }) => (
                            <form onSubmit={handleSubmit}>
                              <div className="xl:flex mt-8">
                                <div className="xl:w-6/12 flex-1 ">
                                  <div>
                                    <FormTextField
                                      name="UserName"
                                      label="Meno*"
                                      text="Meno"
                                      type="text"
                                      className="bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
                                    />
                                  </div>
                                  <div>
                                    <FormTextField
                                      name="Adresa"
                                      label="Adresa"
                                      text="Adresa"
                                      type="text"
                                      className="bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
                                    />
                                  </div>
                                  <div>
                                    <FormTextField
                                      name="Číslo OP"
                                      label="Číslo OP"
                                      text="Číslo"
                                      type="text"
                                      className="bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
                                    />
                                  </div>
                                </div>
                                <div className="xl:w-6/12 flex-1 ml-8">
                                  <div>
                                    <FormTextField
                                      name="Email"
                                      label="E-mail*"
                                      text="E-mail"
                                      type="text"
                                      className="bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
                                    />
                                  </div>
                                  <div>
                                    <FormTextField
                                      name="Date of birth"
                                      label="Dátum narodenia"
                                      text="Dátum narodenia"
                                      type="text"
                                      className="bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
                                    />
                                  </div>
                                  <div>
                                    <FormTextField
                                      name="Phone Number"
                                      label="Tel. č.*"
                                      text="Heslo"
                                      type="text"
                                      className="bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
                                    />
                                  </div>
                                </div>
                              </div>
                            </form>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:flex-none xl:w-6/12 xl:m-auto">
                  <p className=" mt-5 mr-48 text-justify text-red-600">
                    * políčka označené hviezdičkou sú povinné, ostatné je možné
                    vyplniť dodatočne ručne priamo do zmluvy o adopcii
                  </p>
                </div>
                <div className="xl:flex-none xl:w-6/12 xl:m-auto xl:mt-8">
                  <p className=" mt-5 mr-48 text-justify">
                    Tieto podmienky som si prečítal, porozumel im a súhlasím s
                    nimi.
                  </p>
                </div>

                <div className="xl:flex-none xl:w-6/12 xl:m-auto xl:mt-8">
                  <p className="text-orange mt-5 mr-48 text-justify ">
                    Súhlasím so spracovaním osobných údajov, aby v zmysle zákona
                    č. 18/2018 Z. z. o ochrane osobných údajov a o zmene a
                    doplnení niektorých zákonov (ďalej len "zákon o ochrane
                    osobných údajov") spracovávala moje poskytnuté osobné údaje,
                    za účelom spracovania adopcie a uchovávania dokumentov o
                    adopcii.
                  </p>
                </div>
                
                <div className="text-orange font-semibold font-sm text-center bg-orange-400 m-2 inline-block mt-20 xl:w-6/12">
                  <Link to="/allDogs"> Späť </Link>
                  <Link
                    className="text-white font-semibold text-center bg-orange px-8 py-2 m-2 rounded-full py-2 px-8 mt-10 ml-20"
                    to="/adoptionForm"
                  >
                    Odoslať
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default AdoptionRequests;
