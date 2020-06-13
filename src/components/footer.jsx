import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthorizationContext } from "../authorizationProvider";
import ilustracia from "../staticImage/illustrations/logo-odtlacok.png";

const Footer = () => {
  return (
    <div>
      <div class="md:flex md:items-center md:justify-start mx-auto py-10 px-10 space-x-40 space-x-1">
        <div class="flex-1 px-4 py-2 m-2">
          <h1 class="text-black text-lg font-bold ">O nás</h1>
          <div class="no-underline hover:underline text-blue-500 text-base">
            Nájdi sa
          </div>
          <div class="no-underline hover:underline text-blue-500 text-base">
            Zvierací obmusman
          </div>
          <div class="no-underline hover:underline text-blue-500 text-base">
            Partneri
          </div>
        </div>
        <div class="flex-1 px-4 py-2 m-2">
          <h1 class="text-black text-lg font-bold">Útulky</h1>
          <div class="no-underline hover:underline text-blue-500 text-base">
            Ako adoptovať
          </div>
          <div class="no-underline hover:underline text-blue-500 text-base">
            Zvierací obmusman
          </div>
        </div>
        <div class="flex-1 px-4 py-2 m-2">
          <h1 class="text-black text-lg font-bold">Sociálne siete</h1>
          <div class="no-underline hover:underline text-blue-500 text-base">
            Facebook
          </div>
        </div>
        <div class="flex-1 px-4 py-2 m-2">
          <h1 class="text-black text-2xl font-bold">Newsletter</h1>
          <div class="no-underline text-blue-500 text-base">
            Začnite odoberať náš newsletter, aby ste boli informovaný o
            zbierkach a podujatiach, ktoré organizujú útulky.
          </div>
        </div>
      </div>
      <div class="flex background3">
        <div class="flex-1 text-white text-center px-4 py-2 m-2">
          Súbory cookies
        </div>
        <div class="flex-1 text-white text-center px-4 py-2 m-2">
          Ochrana osobných údajov
        </div>
        <div class="flex-1 text-white text-center px-4 py-2 m-2">
          Všeobecné podmienky
        </div>
      </div>
    </div>
  );
};

Footer.contextType = AuthorizationContext;
export default Footer;
