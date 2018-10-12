class NegociacoesView {

    constructor(placeholder) {
        this._placeholder = placeholder;
    }
    
    update(listaNegociacoes) {
        this._placeholder.innerHTML = this.template(listaNegociacoes);
    }

    template(listaNegociacoes) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
        
            <tbody>
            ${listaNegociacoes.negociacoes.map(n=>`

                <tr>
                    <td>${DateHelper.dataParaTexto(n.data)}</td>
                    <td>${n.quantidade}</td>
                    <td>${n.valor}</td>
                    <td>${n.volume}</td>
                </tr>

            `).join("")}
            </tbody>
        
            <tfoot>
                <tr>
                    <td colspan="3"></td>
                    <td>${listaNegociacoes.negociacoes.reduce((acc, negociacao) => acc + negociacao.volume, 0.0)}</td>
                </tr>
            </tfoot>
        </table>
        `;
    }
}