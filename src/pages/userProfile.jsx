import React from "react";
import { Link } from "react-router-dom";
import useProfile from "../components/useProfile";
import ilustracia from "../staticImage/Rectangle 213.png";
import ilustracia1 from "../staticImage/hautu/brown-and-white-short-coated-puppy-1805164.png";
import ilustracia2 from "../staticImage/hautu/close-up-photography-of-adult-black-and-white-short-coat-dog-733416.png";
import ilustracia3 from "../staticImage/hautu/FINANCNA_POMOC-IMAGE.png";
import ilustracia4 from "../staticImage/hautu/HAU-TO-IMAGE.png";
import ilustracia5 from "../staticImage/hautu/brown-and-white-short-coated-puppy-1805164.png";


function UserProfile() {
  const profile = useProfile();

  if (profile.profile == null) {
    return "Loading";
  } else {
    return (
      <div className=" xl:mx-auto ">
        <div className="xl:flex xl:flex-no-wrap xl:m-auto backgroundUserProfile">
          <div className="justify-start xl:ml-64">
            <img src={ilustracia} alt="Logo" className=" xl:mt-32" />
          </div>
          <div className="justify-start mt-32 ml-10">
            <div>
              <div className="text-left text-3xl font-bold text-white">
                {profile.profile.firstName} {profile.profile.lastName}
              </div>
              <div className="text-left text-2xl text-white">
                {profile.profile.email}
              </div>
            </div>

            <Link
              to={`/editUserProfile`}
              className="text-white font-semibold text-center bg-orange px-4 py-2 m-2 rounded-full py-2 px-4 inline-block mt-10"
            >
              <button type="button">Upraviť profil</button>
            </Link>
          </div>
        </div>
        <div className="ml-64 mt-16">
          <label className="text-left text-2xl font-bold pod mr-40">
            O mne
          </label>
          <hr/>
        </div>
        <div className="ml-64 mt-16">
          <label className="text-left text-2xl font-bold pod mr-40">
            Obľúbené
          </label>
          <hr/>
          <div className="">
          <div className="xl:flex xl:flex-no-wrap xl:m-auto xl:mt-16 ">
            <div className=" ml-64 xl:w-6/12 ">
              <img src={ilustracia1} alt="Logo" />
            </div>
            <div className=" mr-64 xl:w-6/12">
              <h1 className="text-left text-3xl font-bold pod mr-40">
                Aké povinnosti sa spájajú <br />s chovom zvieraťa?
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
                <img src={ilustracia2} alt="Logo" />
              </div>
              <div className="mr-64 xl:w-6/12">
                <h1 className="text-left text-3xl font-bold pod mr-40">
                  Ako prebieha adopcia ?
                </h1>
                <p className="text-lg mt-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
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
                  Základná staroslivosť <br/>
                  o psíka od A po Z
                </h1>
                <p className="text-lg mt-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <button className="text-orange font-semibold font-sm text-center bg-orange-400 m-2 inline-block mt-10">
                  Čítaj viac >
                </button>
              </div>
          </div>     
        </div>
        </div>
      </div>
    );
  }
}
export default UserProfile;
