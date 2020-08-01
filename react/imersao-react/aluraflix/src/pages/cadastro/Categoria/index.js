import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";
import PageDefault from "../../../components/PageDefault";
import Button from "../../../components/Button";

import useForm from "../../../hooks/useForm";

export default function CadastroCategoria() {
  const valoresIniciais = {
    titulo: "",
    descricao: "",
    cor: "#FFFFFF",
  };

  const [categorias, setCategorias] = useState([]);
  const [categoria, handleFormData, clearForm] = useForm(valoresIniciais);

  useEffect(() => {
    const URL = "http://localhost:8080/categorias";

    fetch(URL).then(async (response) => {
      const json = await response.json();
      setCategorias([...json]);
    });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    if (categoria.titulo) {
      setCategorias([...categorias, categoria]);
      clearForm();
    }
  }

  return (
    <PageDefault>
      <h1>Cadastro categoria: </h1>

      <form>
        <FormField
          id="id_categoria"
          label="Título da Categoria"
          type="text"
          value={categoria.titulo}
          onChange={(e) => handleFormData("titulo", e.target.value)}
        />

        <FormField
          id="id_descricao"
          label="Descricao"
          type="textarea"
          value={categoria.descricao}
          onChange={(e) => handleFormData("descricao", e.target.value)}
        />

        <FormField
          id="id_cor"
          label="Cor"
          type="color"
          value={categoria.cor}
          onChange={(e) => handleFormData("cor", e.target.value)}
        />
        <Button onClick={handleSubmit} type="button">
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && <div>Loading...</div>}

      <ul>
        {categorias.map((it) => (
          <li style={{ color: it.cor }} key={it.titulo}>
            {it.titulo}
          </li>
        ))}
      </ul>

      <Link to="/cadastro/video">Cadastrar Vídeo</Link>
    </PageDefault>
  );
}
