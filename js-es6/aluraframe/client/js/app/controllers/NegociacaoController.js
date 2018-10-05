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
        
        let data =  DateHelper.textoParaData(this._inputData.value);
        
        let negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        let textoData = DateHelper.dataParaTexto(negociacao.data);
        console.log(textoData);
    }
}