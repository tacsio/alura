import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Button from "../Button";
import "./Menu.css";

export default function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={logo} alt="AluraFlix" className="Logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  );
}
