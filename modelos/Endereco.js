class endereco {
    constructor(rua,numero,bairro,cidade)
    {
        this.rua = rua
        this.numero = numero
        this.bairro = bairro
        this.cidade = cidade
    }
    getRua (){
        return this.rua
    }
    setRua (rua){
        this.rua = rua
    }
    getNumero (){
        return this.numero
    }
    setNumero (numero){
        this.numero = numero
    }
    getBairro (){
        return this.bairro
    }
    setBairro (bairro){
        this.bairro = bairro
    }
    getCidade (){
        return this.cidade
    }
    setCidade (cidade){
        this.cidade = cidade
    }

}