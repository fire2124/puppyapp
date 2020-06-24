import React from "react";
import { Form } from "react-final-form";
import { Field } from "react-final-form";
import ilustracia from "../staticImage/16px/Vector.png";

const Footer = () => {
  async function onSubmit(values) {
    try {
      let response = await this.context.login(values);
      if (response) {
        this.props.history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="md:flex md:items-center md:justify-start mx-auto py-10 px-10 space-x-1">
        <div className="flex-1 px-4 py-2 m-2  w-1/6">
          <h1 className="text-black text-lg font-bold ">O nás</h1>
          <div className="no-underline hover:underline text-blue-500 text-base">
            Nájdi sa
          </div>
          <div className="no-underline hover:underline text-blue-500 text-base">
            Zvierací obmusman
          </div>
          <div className="no-underline hover:underline text-blue-500 text-base">
            Partneri
          </div>
        </div>
        <div className="flex-1 px-4 py-2 m-2 w-1/6">
          <h1 className="text-black text-lg font-bold ">Útulky</h1>
          <div className="no-underline hover:underline text-blue-500 text-base">
            Ako adoptovať
          </div>
          <div className="no-underline hover:underline text-blue-500 text-base">
            Zvierací obmusman
          </div>
        </div>
        <div className="flex-1 px-4 py-2 m-2 w-1/6">
          <h1 className="text-black text-lg font-bold ">Sociálne siete</h1>
          <div className="no-underline hover:underline text-blue-500 text-base">
            Facebook
          </div>
        </div>
        <div className="flex-1 px-4 py-2 m-2 w-3/6 mr-20">
          <h1 className="text-black text-2xl font-bold ">Newsletter</h1>
          <div className="no-underline text-black-500 text-base ">
            Začnite odoberať náš newsletter, aby ste boli informovaný o
            zbierkach a podujatiach, ktoré organizujú útulky.
          </div>
          <div className="mt-5">
            <Form
              onSubmit={onSubmit}
              render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values,
              }) => (
                <form onSubmit={handleSubmit} className=" xl:mx-auto ">
                    <div className="w-11/12 border-b border-black my-4">
                      <Field
                        className="focus:outline-none"
                        name="Odoslať"
                        component="input"
                        type="text"
                        placeholder="Odoslať"
                      />
                    </div>
                  {/* <div className="w-1/12" >
                    <img src={ilustracia} alt="Logo"  />
                  </div> */}
                </form>
              )}
            />
          </div>
        </div>
      </div>

      <div className="flex background3 ">
        <div className=" w-3/12 justify-center flex-1 text-white text-center px-4 py-2 m-2">
          Súbory cookies
        </div>
        <div className="flex-1 justify-center text-white text-center px-4 py-2 m-2">
          Ochrana osobných údajov
        </div>
        <div className="flex-1 justify-center text-white text-center px-4 py-2 m-2">
          Všeobecné podmienky
        </div>
      </div>
    </div>
  );
};

export default Footer;
