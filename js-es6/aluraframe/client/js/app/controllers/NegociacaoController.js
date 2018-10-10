class NegociacaoController {

    constructor() {
        //performance
        let $ = document.querySelector.bind(document);
                
        this._inputData = $('#data');
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._listaNegociacoes = new ListaNegociacoes();
    }

    adiciona(event) {
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criarNegociacao());
        this._limpaFormulario();

        console.log(this._listaNegociacoes);
    }

    _criarNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();   
    }
}