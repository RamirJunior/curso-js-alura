const cliente = {
    nome: "Junior",
    idade: 30,
    cpf: "00598732155",
    email: "junior@email.com",
    fones: [111111111111,222222222222222,333333333333]
}

cliente.dependentes = {
    nome:"Sara",
    parentesco:"filha",
    dataNasc: "20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Clara"

console.log(cliente)