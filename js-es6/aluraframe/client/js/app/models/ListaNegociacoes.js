class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    get total() {
        let total = 0;
        this._negociacoes.forEach(n => total += n.volume);
        return total;
    }

}