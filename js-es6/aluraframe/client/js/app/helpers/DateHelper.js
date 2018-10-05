class DateHelper {

    constructor() {
        //lança erro ao tentar criar uma instância da classe apenas com métodos estáticos
        throw new Error("DateHelper não pode ser instanciada.");
    }

    //Métodos estáticos
    static textoParaData(texto) {

        let regex = /\d{4}-\d{2}-\d{2}/

        if(!regex.test(texto)) {
            throw new Error("Data em formato inválido.")
        }

        //option 1
        let data = new Date(...texto
            .split('-')
            .map((val, index) => {
                return val - index % 2
            }));

        //option 2
        data = new Date(...texto
            .split('-')
            .map((val, index) => val - index % 2));

        //option 3
        data = new Date(texto.replace('-', ','));

        return data;
    }

    static dataParaTexto(data) {
        let textoData = `${data.getDate()}/${(data.getMonth()+1)}/${data.getFullYear()}`;

        return textoData;
    }
}