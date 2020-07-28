import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

export default function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Cadastro categoria.</h1>

      <form action="">
        <label>
          Nome da Categoria:
          <input type="text" />
        </label>

        <button>Cadastrar</button>
      </form>

      <Link to="/cadastro/video">Cadastrar Vídeo</Link>
    </PageDefault>
  );
}
