const cliente = {
    nome: "Junior",
    idade: 38,
    cpf: "00598732155",
    email: "junior@email.com",
    fones: ["111111111111","222222222222222","333333333333"],
    dependentes: [{
        nome: "Hadassa",
        parentesco: "Filha",
        dataNasc: "22/09/2029"},
    {
        nome:"Asaph",
        parentesco:"Filho",
        dataNasc:"10/04/2032"
    }],
    saldo:100,
    depositar:function(valor){
        this.saldo += valor
    },
    sacar:function(valor){
        this.saldo -= valor
    },
}

cliente.depositar(50)

console.log(cliente)

cliente.sacar(20)

console.log(cliente)
