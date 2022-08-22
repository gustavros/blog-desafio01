import { Heart } from "phosphor-react";
import React from "react";

const Footer = () => {
  return (
    <div className="text-center bg-zinc-200">
      <h1 className="text-xl">
        Feito com ❤ por{" "}
        <a
          href="https://github.com/gustavros"
          target="_blank"
          className="text-purple-900 pb-2"
        >
          Gustavo Santana
        </a>
      </h1>
    </div>
  );
};

export default Footer;
