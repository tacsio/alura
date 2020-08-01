import React, { useState, useEffect } from "react";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import { Link, useHistory } from "react-router-dom";

import { create } from "../../../repositories/video";
import { getAll } from "../../../repositories/categoria";

import useForm from "../../../hooks/useForm";

export default function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);

  const [video, handleFormData, clearForm] = useForm({
    titulo: "Padrao",
    url: "https://www.youtube.com/watch?v=33-yD97G9FA",
    categoria: "Front End",
  });

  useEffect(() => {
    getAll().then((data) => {
      setCategorias(data);
    });
  }, []);

  function handleSubmit() {
    const { id } = categorias.find(
      (categoria) => categoria.titulo === video.categoria
    );

    create({ ...video, categoriaId: id }).then(() => {
      history.push("/");
    });
  }
  return (
    <PageDefault>
      <h1>Cadastro vídeo.</h1>

      <form>
        <FormField
          id="id_video"
          label="Título do vídeo"
          type="text"
          value={video.titulo}
          onChange={(e) => handleFormData("titulo", e.target.value)}
        />

        <FormField
          id="id_url"
          label="Url"
          type="text"
          value={video.url}
          onChange={(e) => handleFormData("url", e.target.value)}
        />

        <FormField
          id="id_categoria"
          label="Categoria"
          type="text"
          value={video.categoria}
          suggestions={categorias.map(({ titulo }) => titulo)}
          onChange={(e) => handleFormData("categoria", e.target.value)}
        />
        <Button onClick={handleSubmit}>Cadastrar</Button>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}
