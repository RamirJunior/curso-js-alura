const cliente = {
    nome: "Junior",
    idade: 30,
    cpf: "00598732155",
    email: "junior@email.com"
}

const chaves = ["nome","idade","cpf","email"]

//console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))

console.log(cliente["conta"])