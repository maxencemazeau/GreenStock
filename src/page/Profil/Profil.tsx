import React from "react";
import Information from "../../components/Profil/Information";
import Historique from "../../components/Profil/Historique";

export default function Profil() {
  return (
    <div className="flex flex-wrap">
      <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
        <Information />
      </div>
      <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
        <Historique />
      </div>
    </div>
  );
}
