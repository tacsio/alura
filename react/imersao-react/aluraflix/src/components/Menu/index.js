import React from "react";
import "./Menu.css";

import logo from "../../assets/logo.png";
import Button from "../Button";

export default function Menu() {
  return (
    <nav className="Menu">
      <img src={logo} alt="AluraFlix" className="Logo" />

      <Button className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
}
