import React, { Component } from 'react'
import InputCustomizado from './InputCustomizado';
import Submit from './Submit';
import $ from 'jquery';
import PubSub from 'pubsub-js';
import TratadorError from './TratadorError';

export default class LivroBox extends Component {
    constructor() {
        super();
        //variavel de estado do react
        this.state = { lista: [] };
    }

    //metodo da classe Component
    componentDidMount() {

        var headers = new Headers();
        headers.append('Accept', 'application/json');

        var init = {
        method: 'GET',
        headers: headers,
        mode: 'cors'
        };

        fetch('http://sheltered-plateau-42257.herokuapp.com/api/livros', init)
        .then((response) => response.json())
        .then((json) => this.setState({ lista: json }));

        PubSub.subscribe('lista-livros', (topic, listaLivros) => this.setState({lista: listaLivros}));
    }

    render() {
        return (
            <div>
            <div className="header">
                <h1>Cadastro de Livros</h1>
            </div>
            <div className="content" id="content">
              <FormularioLivro />
              <TabelaLivros lista={this.state.lista}/>
            </div>
          </div>
        );
    }

}

class FormularioLivro extends Component {

    constructor() {
      super();
      this.state = { titulo: '', preco: '', autor: '' };
  
      //binding declared funcions
      this.limpaForm = this.limpaForm.bind(this);
      this.enviaForm = this.enviaForm.bind(this);
      this.setTitulo = this.setTitulo.bind(this);
      this.setPreco = this.setPreco.bind(this);
      this.setAutor = this.setAutor.bind(this);
    }
  
    limpaForm() {
      this.setState({ titulo: '', preco: '', autor: '' });
    }
  
    enviaForm(evento) {
      evento.preventDefault();
  
      $.ajax({
        url: 'http://sheltered-plateau-42257.herokuapp.com/api/livros',
        contentType: 'application/json',
        dataType: 'json',
        type: 'post',
        data: JSON.stringify({ titulo: this.state.titulo, preco: this.state.preco, autor: this.state.autor }),
        success: function (response) {
          PubSub.publish('lista-livros',response);
          this.limpaForm();
        }.bind(this),
        error: function (response) {
          if(response.status === 400){
            new TratadorError().publicaErros(response.responseJSON);
          }
        },
        beforeSend: function() {
          PubSub.publish('limpa-erro', {});
        }
      });
    }
  
    setTitulo(evento) {
      this.setState({ titulo: evento.target.value })
    }
  
    setPreco(evento) {
      this.setState({ preco: evento.target.value })
    }
  
    setAutor(evento) {
      this.setState({ autor: evento.target.value })
    }
  
    render() {
      return (
        <div className="content-subhead">
        <div className="pure-form pure-form-aligned">
          <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm} method="post">
            <InputCustomizado id="titulo" label="Título" type="text" name="titulo" value={this.state.titulo} onChange={this.setTitulo} />
            <InputCustomizado id="preco" label="Preço" type="number" name="preco" value={this.state.preco} onChange={this.setPreco} />
            <InputCustomizado id="autor" label="Autor" type="text" name="autor" value={this.state.autor} onChange={this.setAutor} />
            <Submit label="Gravar" />
          </form>
        </div>
        </div>
      );
    }
  }
  
  class TabelaLivros extends Component {
  
    render() {
      return (
        <div>
          <table className="pure-table">
            <thead>
              <tr>
                <th>Título</th>
                <th>Preço</th>
                <th>Autor</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.lista.map(function (livro) {
                  return (
                    <tr key={livro.id}>
                      <td>{livro.titulo}</td>
                      <td>{livro.preco}</td>
                      <td>{livro.autor}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      );
    }
  }