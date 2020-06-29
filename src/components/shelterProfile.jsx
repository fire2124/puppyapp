import React from "react";
import useShelterProfileByAdmin from "./useShelterProfileByAdmin";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ilustracia from "../staticImage/shellterImage.png";
import image from "../staticImage/shelter/shel1.png";
import image2 from "../staticImage/shelter/shel2.png";
import image3 from "../staticImage/shelter/shel3.png";
import image4 from "../staticImage/shelter/shel2.png";
import yes from "../staticImage/16px/Path.png";
import no from "../staticImage/16px/icn-close.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function ShelterProfile() {
  const profile = useShelterProfileByAdmin();
  console.log(profile);

  if (profile === null) {
    return "Loading";
  } else {
    return (
      <div className="dogProfile-full">
        <div className="dogProfile">
          <div className="backgroundUserProfile">
            <div className="xl:flex xl:flex-no-wrap xl:m-auto">
              <div className="justify-start xl:ml-64 mb-64">
                <img
                  src={ilustracia}
                  alt="Logo"
                  width="auto"
                  height="auto"
                  className=" xl:mt-20 xl:ml-32 max-w-none"
                />
              </div>
              <div>
                <div className="justify-center ml-40 mt-20">
                  <div className="xl:text-left text-4xl font-bold text-white  ">
                    <p> Útulok {profile.name} </p>
                  </div>
                  <div className="xl:text-left text-white text-justify mt-5 mr-64 w-7/12">
                    <p>
                      {" "}
                      Sme súkromný útulok, snažiaci sa zvieratkám poskytnúť
                      najlepšie možné podmienky kým nájdu svoj nový domov. Našim
                      cieľom je nájsť psíkom nový domov.{" "}
                    </p>
                  </div>
                </div>
                <div className="xl:flex xl:flex-no-wrap xl:m-auto">
                  <div className="justify-start xl:ml-40 xl:mt-24">
                    <div className="xl:text-left text-lg text-orange font-bold font-sm bg-orange-400">
                      Zobraziť našich psíkov
                    </div>
                  </div>
                </div>
                <div className="xl:flex xl:flex-no-wrap xl:m-auto">
                  <div className="justify-start xl:ml-40 mt-2">
                    <div className="xl:text-left  ">
                      <p className="mt-4">
                        {" "}
                        <strong>Adresa</strong>
                        <div>{profile.city} </div>
                        <div>{profile.street} </div>
                      </p>
                    </div>
                  </div>
                  <div className="justify-center ml-40 mt-2">
                    <div className="xl:text-left  ">
                      <div className="mt-4 font-bold"> Otváracie hodiny </div>
                      <div className="xl:flex xl:flex-no-wrap xl:m-auto mt-2">
                        <div className=" flex-initial w-1/2 mt-2">
                          <strong>Po - Pia:</strong>
                        </div>
                        <div className=" flex-initial  mt-2 ml-1 -mr-6">
                          8:00 - 16:00
                        </div>
                      </div>
                      <div className="xl:flex xl:flex-no-wrap xl:m-auto mt-2">
                        <div className=" flex-initial  mt-2">
                          <strong>So:</strong>
                        </div>
                        <div className=" flex-initial  mt-2 ml-1">
                          8:00 - 16:00
                        </div>
                      </div>
                      <div className="xl:flex xl:flex-no-wrap xl:m-auto mt-2">
                        <div className=" flex-initial  mt-2">
                          <strong>Ne:</strong>
                        </div>
                        <div className=" flex-initial  mt-2 ml-1">
                          8:00 - 16:00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-64  ml-64">
            <div className=" xl:mt-20 ">
              <div className=" text-lg font-bold ml-32 ">Číslo účtu</div>
              <div className=" flex ml-32">
                <div className=" mt-10  ">
                  <strong>Č.Ú.:</strong> {profile.bankAccountNumber}
                </div>
                <div className="  mt-10 ml-32">
                  <strong>IBAN:</strong> {profile.iban}
                </div>
                <div className="  mt-10 ml-32">
                  <strong>DIC:</strong> {profile.dic}
                </div>
              </div>
            </div>
            <div className=" xl:mt-10 ">
              <div className=" text-lg font-bold ml-32">Kontakty:</div>
              <div className=" flex ml-32 ">
                <div className=" mt-10  ">
                  <strong>Email</strong>: u.strieska@gmail.com
                </div>
                <div className="  mt-10  ml-32">
                  <strong>Tel:</strong> {profile.phoneNumber}
                </div>
              </div>
            </div>
          </div>
          <div className="text-orange font-semibold font-sm text-center bg-orange-400 m-2 inline-block mt-20 ml-64">
            <Link to="/"> Späť </Link>
            <Link to={`/editShelterProfile`} className="ml-20">
              {" "}
              <button
                type="button"
                className="text-white font-semibold text-center bg-orange px-4 py-2 m-2 rounded-full py-2 px-4 my-8 "
              >
                {" "}
                Upraviť profil{" "}
              </button>{" "}
            </Link>
          </div>
        </div>

        <div className="App mt-10">
          <div className="container-fluid ">
            <div className="row justify-center ">
              <div className=" xl:flex-none xl:w-8/12 xl:mt-8 ml-64 px-64">
                <h1 className="text-justify text-2xl font-bold text-black mr-48">
                  Ďalšie útulky v okolí
                </h1>
              </div>
              <div className="flex2 xl:justify-center xl:w-7/12 xl:ml-64 xl:col-md-12 xl:px-0 xl:mt-8  ">
                <Carousel
                  className="xl:ml-64"
                  swipeable={true}
                  responsive={responsive}
                  centerMode={true}
                >
                  <div className="">
                    <img src={image} alt="image"></img>
                  </div>
                  <div className="">
                    <img src={image2} alt="image"></img>
                  </div>
                  <div className="">
                    <img src={image3} alt="image"></img>
                  </div>
                  <div className="">
                    <img src={image4} alt="image"></img>
                  </div>
                  <div className="">
                    <img src={image} alt="image"></img>
                  </div>
                  <div className="">
                    <img src={image2} alt="image"></img>
                  </div>
                  <div className="">
                    <img src={image3} alt="image"></img>
                  </div>
                  <div className="">
                    <img src={image4} alt="image"></img>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ShelterProfile;
