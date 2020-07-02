import React from "react";
import { Form } from "react-final-form";
import { Field } from "react-final-form";

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
    <div className="">
      <div className="md:flex md:items-center md:justify-center md:mx-auto md:py-10 md:px-10 md:space-x-1 
                      sm:justify-center sm:items-center sm:space-y-10  sm:mb-10 sm:mt-10">
        <div className="xl:flex-1 xl:px-4 xl:py-2 xl:m-2 xl:w-1/6 xl:justify-left xl:text-left xl:mt-10
                        lg:flex-1                        lg:w-1/6 lg:justify-left xl:text-left
                        md:flex-1                        md:w-1/6 md:justify-left xl:text-left
                        sm:flex-1                        sm:w-6/6 sm:justify-center sm:text-center
                                                                                                ">
          <h1 className="text-black text-lg font-bold ">O nás</h1>
          <div className="no-underline hover:underline text-blue-500 text-base mt-1">
            Nájdite sa online
          </div>
          <div className="no-underline hover:underline text-blue-500 text-base mt-1">
            Zvierací ombudsman
          </div>
          <div className="no-underline hover:underline text-blue-500 text-base mt-1">
            Partneri
          </div>
        </div>
        <div className="xl:flex-1 xl:px-4 xl:py-2 xl:m-2 xl:w-1/6 xl:justify-left xl:text-left xl:mt-0
                        lg:flex-1                        lg:w-1/6 lg:justify-left xl:text-left
                        md:flex-1                        md:w-1/6 md:justify-left xl:text-left
                        sm:flex-1                        sm:w-6/6 sm:justify-center sm:text-center
                                                                                                ">
          <h1 className="text-black text-lg font-bold ">Útulky</h1>
          <div className="no-underline hover:underline text-blue-500 text-base mt-1">
            Ako adoptovať
          </div>
          <div className="no-underline hover:underline text-blue-500 text-base mt-1">
            Zoznam útulkov
          </div>
        </div>
        <div className="xl:flex-1 xl:px-4 xl:py-2 xl:m-2 xl:w-1/6 xl:justify-left xl:text-left xl:mt-0
                        lg:flex-1                        lg:w-1/6 lg:justify-left xl:text-left
                        md:flex-1                        md:w-1/6 md:justify-left xl:text-left
                        sm:flex-1                        sm:w-6/6 sm:justify-center sm:text-center
                                                                                                ">
          <h1 className="text-black text-lg font-bold ">Sociálne siete</h1>
          <div className="backgroundFooter1 xl:w-1/6 lg:w-1/6 md:w-1/6 float-left py-3 sm:ml-64 xl:ml-0 sm:mt-5 xl:mt-0"></div>
          <div className="xl:w-5/6 lg:w-5/6 md:w-5/6 px-4 ml-3 no-underline  hover:underline text-blue-500 text-base sm:mr-64 xl:mr-0 sm:mt-5 xl:mt-0">
            Facebook
          </div>
        </div>
        <div className="xl:flex-1 xl:px-4 xl:py-2 xl:m-2 xl:w-3/6 xl:justify-left xl:text-left
                        lg:flex-1                        lg:w-3/6 lg:justify-left xl:text-left
                        md:flex-1                        md:w-3/6 md:justify-left xl:text-left
                        sm:flex-1                        sm:w-6/6 sm:justify-center sm:text-center
                                                                                                ">
          <h1 className="text-black text-2xl font-bold ">Newsletter</h1>
          <div className="no-underline text-black-500 xl:text-justify xl:ml-0 text-base xl:mr-10 
                                                       sm:text-center sm:ml-10 sm:mr-10">
            Začnite odoberať náš newsletter, aby ste boli informovaný o
            zbierkach a podujatiach, ktoré organizujú útulky.
          </div>
          <div className="mt-5 sm:ml-32 sm:mr-32 xl:ml-0 xl:mr-0">
            <Form
              onSubmit={onSubmit}
              render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values,
              }) => (
                <form onSubmit={handleSubmit} className=" xl:mx-auto mt-10">
                  <div className="xl:w-11/12 lg:w-11/12 md:w-11/12 border-b border-black my-4">
                    <Field
                      className="focus:outline-none my-2"
                      name="Odoslať"
                      component="input"
                      type="text"
                      placeholder="Váš e-mail"
                    />
                    <div className="backgroundFooter2 float-right"></div>
                  </div>
                  
                </form>
              )}
            />
          </div>
        </div>
      </div>

      <div className="xl:flex backgroundFooter3 ">
        <div className=" xl:flex-1 xl:justify-center text-white text-center px-4 py-2 xl:m-2">
          Súbory cookies
        </div>
        <div className="xl:flex-1 xl:justify-center text-white text-center px-4 py-2 xl:m-2">
          Ochrana osobných údajov
        </div>
        <div className="xl:flex-1 xl:justify-center text-white text-center px-4 py-2 xl:m-2">
          Všeobecné podmienky
        </div>
      </div>
    </div>
  );
};

export default Footer;
