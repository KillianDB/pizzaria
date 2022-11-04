var usuarios = require("./databases/usuarios.json");

function listar(){
    console.table(usuarios, ['id' , 'nome' , 'email'])
}

function salvar(usuarios){
    const fs = require("fs");
    fs.writeFileSync("./databases/usuarios.json", JSON.stringify(usuarios))
}

function cadastrar({}){
    usuarios.indexOf({
        id: 22,
        nome: "Nome do Usuário",
        email: "email@dousuario.com",
        senha: "$2b$10$/DyrZvGhcHHQ4PgSKgDhtexKiNTl3QKnYpLPI.pl1gv4VFtQHFvKy",
        enderecos: ["Rua dos usuários, nº 256. Usuariolândia-BA"],
        formasDePagamento: []
    }
);
if(usuarios.indexOf = -1){
}else{
    usuarios.push({
        id: 22,
        nome: "Nome do Usuário",
        email: "email@dousuario.com",
        senha: "$2b$10$/DyrZvGhcHHQ4PgSKgDhtexKiNTl3QKnYpLPI.pl1gv4VFtQHFvKy",
        enderecos: ["Rua dos usuários, nº 256. Usuariolândia-BA"],
        formasDePagamento: []
    }
)
}
}

function detalhar(idUsuario){
// Seu código aqui
}

function remover(idDoUsuarioParaRemover){
    var idUsuarioParaRemover = (usuarios.find(x => x.id === 2));
    usuarios.idDoUsuarioParaRemover.delete(idUsuarioParaRemover)
}


function alterar(novosDados, idUsuario){
    // Seu código aqui
}

function addEndereco(novoEndereco = "Rua A", idUsuario){
    var idUsuario = (usuarios.find(x => x.id === 2));
    idUsuarios.enderecos.push(novoEndereco)
}

function removerEndereco(posicaoDoEndereco, idUsuario){
    var idUsuario = (usuarios.find(x => x.id === 2));
    var posicaoDoEndereco = (usuarios.find(x => x.enderecos == 1))
    idUsuarios.enderecos.delete(posicaoDoEndereco)
}


function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario){
// Seu código aqui        
}

function addFormaDePagamento(novaFormaDePagamento = "000", idUsuario){
    var idUsuario = (usuarios.find(x => x.id === 2));
    idUsuarios.formasDePagamento.push(novaFormaDePagamento)
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario){
    var idUsuario = (usuarios.find(x => x.id === 2));
    var posicaoDaFormaDePagamento = (usuarios.find(x => x.formasDePagamento == 1))
    idUsuarios.formasDePagamento.delete(posicaoDaFormaDePagamento)
}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
}

const UsuariosServices = {
    cadastrar,
    listar,
    detalhar,
    remover,
    alterar,
    addEndereco,
    removerEndereco,
    alteraEndereco: alterarEndereco,
    addFormaDePagamento,
    removerFormaDePagamento,
    alterarFormaDePagamento
}

module.exports = UsuariosServices;