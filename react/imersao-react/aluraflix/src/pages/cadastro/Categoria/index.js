import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";

export default function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "#000",
  };

  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState(valoresIniciais);

  function handleSubmit(event) {
    event.preventDefault();

    if (categoria.nome) {
      setCategorias([...categorias, categoria]);
      setCategoria(valoresIniciais);
    }
  }

  function handleFormData(key, value) {
    setCategoria({
      ...categoria,
      [key]: value,
    });
  }

  return (
    <PageDefault>
      <h1>Cadastro categoria: </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria: "
          type="text"
          value={categoria.nome}
          onChange={(e) => handleFormData("nome", e.target.value)}
        />

        <FormField
          label="Descricao: "
          type="textarea"
          value={categoria.descricao}
          onChange={(e) => handleFormData("descricao", e.target.value)}
        />

        <FormField
          label="Cor: "
          type="color"
          value={categoria.cor}
          onChange={(e) => handleFormData("cor", e.target.value)}
        />
        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.nome}>
            {categoria.nome}
            {categoria.descricao}
            {categoria.cor}
          </li>
        ))}
      </ul>

      <Link to="/cadastro/video">Cadastrar Vídeo</Link>
    </PageDefault>
  );
}
