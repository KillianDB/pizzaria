var usuarios = require("../databases/usuarios.json");

function listar(){
    console.table(usuarios, ['id' , 'nome' , 'email'])
}

function salvar(usuarios){
    const fs = require("fs");
    fs.writeFileSync("./databases/usuarios.json", JSON.stringify(usuarios,null,4))
}

function cadastrar(novoUsuario){
    var novoUsuario = {id: 22,
        nome: "Nome do Usuário",
        email: "email@dousuario.com",
        senha: "$2b$10$/DyrZvGhcHHQ4PgSKgDhtexKiNTl3QKnYpLPI.pl1gv4VFtQHFvKy",
        enderecos: ["Rua dos usuários, nº 256. Usuariolândia-BA"],
        formasDePagamento: []}
    usuarios.indexOf(novoUsuario);
if(usuarios.indexOf != undefined){
    usuarios.push(novoUsuario)
}else{
    
}
salvar(usuarios)
}

function detalhar(idUsuarioDetalhar){
    var idUsuarioDetalhar = (usuarios.find(x => x.id === 2));
    console.log("Nome: " + idUsuarioDetalhar.nome);
    console.log("Email: " + idUsuarioDetalhar.email);
    console.table(idUsuarioDetalhar.enderecos);
    console.table(idUsuarioDetalhar.formasDePagamento)
}

function remover(idDoUsuarioParaRemover){
    var idUsuarioParaRemover = (usuarios.find(x => x.id === 2));
    delete usuarios.idDoUsuarioParaRemover;
    salvar(usuarios)
}


function alterar(novosDados, idUsuarioAlterar){
    var senhaCriptografada = bcrypt.hashSync(novosDados.senha, 10);
    var idUsuarioAlterar = usuarios.findIndex(usuarios => usuarios.id == idUsuarioAlterar)
    {
        idUsuarioAlterar.nome = novosDados.nome;
        idUsuarioAlterar.email = novosDados.email;
        idUsuarioAlterar.senha = senhaCriptografada;
    }
    salvar(usuarios)
}

function addEndereco(novoEndereco = "Rua A", idUsuarioAdd){
    var idUsuarioAdd = (usuarios.find(x => x.id === 2));
    idUsuarioAdd.enderecos.push(novoEndereco)
    salvar(usuarios)
}

function removerEndereco(posicaoDoEndereco, idUsuarioRemover){
    var idUsuarioRemover = (usuarios.find(x => x.id === 2));
    var posicaoDoEndereco = (usuarios.find(x => x.enderecos == 1));
    delete idUsuarioRemover.posicaoDoEndereco;
    salvar(usuarios)
}


function alterarEndereco(posicaoDoEndereco, novoEndereco = "Rua L", idUsuarioAlterarEndereco){
    var posicaoDoEndereco = (usuarios.find(x => x.enderecos == 1));
    {
        idUsuarioAlterarEndereco.endereco = novoEndereco.endereco;       
}
salvar(usuarios)
}

function addFormaDePagamento(novaFormaDePagamento = "000", idUsuarioAddPagamento){
    var idUsuarioAddPagamento = (usuarios.find(x => x.id === 2));
    idUsuarioAddPagamento.formasDePagamento.push(novaFormaDePagamento);
    salvar(usuarios)
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuarioRemoverPagamento){
    var idUsuarioRemoverPagamento = (usuarios.find(x => x.id === 2));
    var posicaoDaFormaDePagamento = (usuarios.find(x => x.formasDePagamento == 1));
    var idUsuarioRemoverPagamento = [1];
    delete idUsuarioRemoverPagamento.formasDePagamento;
    salvar(usuarios)
}

function alterarFormaDePagamento(posicaoDaFormaDePagamento,novaFormaDePagamento = "5678", idUsuarioAlterarPagamento){
    var posicaoDaFormaDePagamento = (usuarios.find(x => x.formasDePagamento == 1));
    {
        idUsuarioAlterarPagamento.formasDePagamento = novaFormaDePagamento.formasDePagamento;       
}
salvar(usuarios)
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