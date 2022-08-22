import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Heart } from "phosphor-react";
import React from "react";

const News = () => {
  const DateFormatted = format(new Date(), "ii' de 'MMM', 'yyyy", {
    locale: ptBR,
  });

  return (
    <div className="max-w-full w-[900px] m-auto flex flex-col gap-12 p-5 ">
      <div className="bg-[#ffffff] p-5 mt-24 rounded-md ">
        <div className="flex justify-between">
          <span className="text-gray-600">{DateFormatted}</span>
          <Heart
            size={32}
            className="text-[#574AE8] hover:text-red-600 cursor-pointer"
          />
        </div>
        <div>
          <h1 className="text-2xl text-gray-900 mt-5 mb-1 cursor-pointer">
            Agora é oficial: o Windows 11 está vindo
          </h1>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus
            vel diam fringilla, eu ullamcorper ex iaculis.
          </p>
        </div>
      </div>
      <div className="bg-[#ffffff] p-5 rounded-md">
        <div className="flex justify-between">
          <span className="text-gray-600">{DateFormatted}</span>
          <Heart
            size={32}
            className="text-[#574AE8] hover:text-red-600 cursor-pointer"
          />
        </div>
        <div>
          <h1 className="text-2xl text-gray-900 mt-5 mb-1 cursor-pointer">
            Tim Berners-Lee vai leiloar código-fonte da web
          </h1>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus
            vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor
            justo. Vestibulum nisl orci, lacinia venenatis leo sit amet,
            pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et,
            interdum ullamcorper libero.
          </p>
        </div>
      </div>
      <div className="bg-[#ffffff] p-5 rounded-md">
        <div className="flex justify-between">
          <span className="text-gray-600">{DateFormatted}</span>
          <Heart
            size={32}
            className="text-[#574AE8] hover:text-red-600 cursor-pointer"
          />
        </div>
        <div>
          <h1 className="text-2xl text-gray-900 mt-5 mb-1 cursor-pointer">
            Tem Firefox novo no pedaço e você vai querer migrar
          </h1>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vestibulum auctor est.
          </p>
        </div>
      </div>
      <div className="bg-[#ffffff] p-5 rounded-md">
        <div className="flex justify-between">
          <span className="text-gray-600">{DateFormatted}</span>
          <Heart
            size={32}
            className="text-[#574AE8] hover:text-red-600 cursor-pointer"
          />
        </div>
        <div>
          <h1 className="text-2xl text-gray-900 mt-5 mb-1 cursor-pointer">
            John McAfee, criador do antivírus McAfee, morre
          </h1>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus
            vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor
            justo. Vestibulum nisl orci, lacinia venenatis leo sit amet,
            pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et,
            interdum ullamcorper libero.
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
