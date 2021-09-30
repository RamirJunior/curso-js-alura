const cliente = {
    nome: "Junior",
    idade: 38,
    cpf: "00598732155",
    email: "junior@email.com",
    fones: ["111111111111","222222222222222","333333333333"],
    dependentes: [{
        nome: "Hadassa",
        parentesco: "Filha",
        dataNasc: "22/09/2029"
    }]
}

cliente.dependentes.push({
    nome:"Asaph",
    parentesco:"Filho",
    dataNasc:"10/04/2032"
})

//console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "10/04/2032")

console.log(filhaMaisNova[0].nome)


