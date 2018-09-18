class Negociacao {

    constructor(date, quantidade, valor) {
        this._data = new Date(date.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); //congela o objeto para edição
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}