import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import CadastroVideo from "./pages/cadastro/Video";
import CadastroCategoria from './pages/cadastro/Categoria';

const notFound = () => <div>Not Found</div>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={notFound} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);
