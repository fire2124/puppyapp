import React, { Component } from "react";
import { Form } from "react-final-form";
import { Field } from "react-final-form";
import ilustracia from "../staticImage/hautu/brown-and-white-short-coated-puppy-1805164.png";
import ilustracia2 from "../staticImage/hautu/close-up-photography-of-adult-black-and-white-short-coat-dog-733416.png";
import ilustracia3 from "../staticImage/hautu/FINANCNA_POMOC-IMAGE.png";
import ilustracia4 from "../staticImage/hautu/HAU-TO-IMAGE.png";
import ilustracia5 from "../staticImage/hautu/brown-and-white-short-coated-puppy-1805164.png";
import { Link } from "react-router-dom";

class HauTU extends Component {
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
      <div className=" xl:mx-auto ">
        <div className="xl:flex xl:flex-no-wrap xl:m-auto backgroundHAUTU">
          <div className=" xl:m-16">
            <h1 className="xl:text-left text-3xl font-bold text-white xl:ml-40 ">
              Hau TU? (blog)
            </h1>
            <p className="text-lg text-white xl:ml-40 mt-5 xl:mr-64">
              Neviete ako vycvičiť Vášho psíka? Ako prebieha proces adopcie? S
              týmito otázkami ale aj s mnohými <br />
              ďalšími Vám radi pomôžeme. Na našom blogu nájdete veľa užitočných
              článkov, ktoré Vás naučia, ako <br />
              sa čo najlepšie postarať o svojho štvornohého priateľa.
            </p>
            <div className="ml-40 mt-5">
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
                    <Field
                      className="houtuFinder"
                      name="hladat"
                      component="input"
                      type="text"
                      type="hladat"
                      placeholder=" Hľadať"
                    />
                  </form>
                )}
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="xl:flex xl:flex-no-wrap xl:m-auto xl:mt-16 ">
            <div className=" ml-64 xl:w-6/12 ">
              <img src={ilustracia} alt="Logo" />
            </div>
            <div className=" mr-64 xl:w-6/12">
              <h1 className="text-left text-3xl font-bold pod mr-40">
                Aké povinnosti sa spájajú s chovom zvieraťa?
              </h1>
              <p className="text-lg mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <Link
                to={`/article1`}
                className="text-orange font-semibold font-sm text-center bg-orange-400 m-2 inline-block mt-10"
              >Čítaj viac ></Link>
            </div>
          </div>
          <div className="xl:flex xl:flex-no-wrap xl:m-auto xl:mt-16 ">
            <div className=" ml-64 xl:w-6/12 ">
              <img src={ilustracia2} alt="Logo" />
            </div>
            <div className="mr-64 xl:w-6/12">
              <h1 className="text-left text-3xl font-bold pod mr-40">
                Ako prebieha adopcia ?
              </h1>
              <p className="text-lg mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button className="text-orange font-semibold font-sm text-center bg-orange-400 m-2 inline-block mt-10">
                Čítaj viac >
              </button>
            </div>
          </div>
          <div className="xl:flex xl:flex-no-wrap xl:m-auto xl:mt-16 ">
            <div className=" ml-64 xl:w-6/12 ">
              <img src={ilustracia3} alt="Logo" />
            </div>
            <div className="mr-64 xl:w-6/12">
              <h1 className="text-left text-3xl font-bold pod mr-40">
                Ako si vycvičím psíka?
              </h1>
              <p className="text-lg mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button className="text-orange font-semibold font-sm text-center bg-orange-400 m-2 inline-block mt-10">
                Čítaj viac >
              </button>
            </div>
          </div>
          <div className="xl:flex xl:flex-no-wrap xl:m-auto xl:mt-16 ">
            <div className=" ml-64 xl:w-6/12 ">
              <img src={ilustracia4} alt="Logo" />
            </div>
            <div className="mr-64 xl:w-6/12">
              <h1 className="text-left text-3xl font-bold pod mr-40">
                Čo urobiť ak môj psík ochorie?
              </h1>
              <p className="text-lg mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button className="text-orange font-semibold font-sm text-center bg-orange-400 m-2 inline-block mt-10">
                Čítaj viac >
              </button>
            </div>
          </div>
          <div className="xl:flex xl:flex-no-wrap xl:m-auto xl:mt-16 ">
            <div className=" ml-64 xl:w-6/12 ">
              <img src={ilustracia5} alt="Logo" />
            </div>
            <div className="mr-64 xl:w-6/12">
              <h1 className="text-left text-3xl font-bold pod mr-40">
                Základná staroslivosť <br />o psíka od A po Z
              </h1>
              <p className="text-lg mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button className="text-orange font-semibold font-sm text-center bg-orange-400 m-2 inline-block mt-10">
                Čítaj viac >
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HauTU;
