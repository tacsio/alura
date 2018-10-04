class NegociacaoController {

    constructor() {
        //performance
        let $ = document.querySelector.bind(document);
        
        this._inputData = $('#data');
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
    }

    adiciona(event) {
        event.preventDefault();

        let data = new Date(...
            this._inputData.value
            .split('-')
            .map((val, index) => {
                return val - index % 2
            }));

        data = new Date(...
            this._inputData.value
            .split('-')
            .map((val, index) => val - index % 2));
        
        let negociacao = new Negociacao(
            new Date(this._inputData.value.replace('-', ',')),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        console.log(negociacao);
    }
}