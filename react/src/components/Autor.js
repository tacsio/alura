import React, { Component } from 'react';
import InputCustomizado from './InputCustomizado';
import Submit from './Submit';
import $ from 'jquery';
import PubSub from 'pubsub-js';
import TratadorError from './TratadorError';

//high order component
export default class AutorBox extends Component {
  
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
  
      fetch('http://sheltered-plateau-42257.herokuapp.com/api/autores', init)
        .then((response) => response.json())
        .then((json) => this.setState({ lista: json }));
  
      PubSub.subscribe('lista-autores', (topic, listaAutores) => this.setState({lista: listaAutores}));
      
      // fetch('http://cdc-react.herokuapp.com/api/autores', init)
      //   .then(function (response) {
      //     response.json().then(function(json){
      //       this.setState({lista:json});
      //     }.bind(this));
      //   }.bind(this)
      // );
    }
 
    render() {
      return (
        <div>
          <div className="header">
              <h1>Cadastro de Autores</h1>
          </div>
          <div className="content" id="content">
            <FormularioAutor />
            <TabelaAutores lista={this.state.lista}/>
          </div>
        </div>
      );
    }
  }

class FormularioAutor extends Component {

  constructor() {
    super();
    this.state = { nome: '', email: '', senha: '' };

    //binding declared funcions
    this.limpaForm = this.limpaForm.bind(this);
    this.enviaForm = this.enviaForm.bind(this);
    this.setNome = this.setNome.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setSenha = this.setSenha.bind(this);
  }

  limpaForm() {
    this.setState({ nome: '', senha: '', email: '' });
  }

  enviaForm(evento) {
    evento.preventDefault();

    $.ajax({
      url: 'http://sheltered-plateau-42257.herokuapp.com/api/autores',
      contentType: 'application/json',
      dataType: 'json',
      type: 'post',
      data: JSON.stringify({ nome: this.state.nome, email: this.state.email, senha: this.state.senha }),
      success: function (response) {
        PubSub.publish('lista-autores',response);
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

  setNome(evento) {
    this.setState({ nome: evento.target.value })
  }

  setEmail(evento) {
    this.setState({ email: evento.target.value })
  }

  setSenha(evento) {
    this.setState({ senha: evento.target.value })
  }

  render() {
    return (
      <div className="content-subhead">
      <div className="pure-form pure-form-aligned">
        <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm} method="post">
          <InputCustomizado id="nome" label="Nome" type="text" name="nome" value={this.state.nome} onChange={this.setNome} />
          <InputCustomizado id="email" label="Email" type="email" name="email" value={this.state.email} onChange={this.setEmail} />
          <InputCustomizado id="senha" label="Senha" type="password" name="senha" value={this.state.senha} onChange={this.setSenha} />
          <Submit label="Gravar" />
        </form>
      </div>
      </div>
    );
  }
}

class TabelaAutores extends Component {

  render() {
    return (
      <div>
        <table className="pure-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.lista.map(function (autor) {
                return (
                  <tr key={autor.id}>
                    <td>{autor.nome}</td>
                    <td>{autor.email}</td>
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