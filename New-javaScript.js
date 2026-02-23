// Manipular arrays em JavaScript

// === Destructuring de Arrays ===
const frutas = ['Maçã', 'Banana', 'Laranja'];
const [primeira, segunda] = frutas; // primeira = 'Maçã', segunda = 'Banana'

// Pulando itens e definindo padrão
const [a,, c, d = 'Extra'] = [1, 2, 3];
// a = 1, c = 3, d = 'Extra'

// === Destructuring de Objetos ===
const pessoa = { nome: 'Ana', idade: 25 };
const { nome, idade } = pessoa; // nome = 'Ana', idade = 25

// Renomeando e valores padrão
const { nome: apelido, cargo = 'Visitante' } = pessoa; // apelido = 'Ana', cargo = 'Visitante'

// === Destructuring em Funções ===
function exibirUsuario({ nome, email }) {
    console.log(`User: ${nome}, Email: ${email}`);
}

const usuario = { nome: 'Lucas', email: 'lucas@example.com' };
exibirUsuario(usuario);

// === Spread Operator ===
// Arrays
const numeros = [1, 2, 3];
const copia = [...numeros]; // cópia independente

const lista1 = [1, 2];
const lista2 = [3, 4];
const combinados = [...lista1, ...lista2]; // [1,2,3,4]

// Objetos
const produto = { id: 1, preco: 50, status: 'estoque' };
const produtoAtualizado = { ...produto, preco: 99, status: 'vendido' };

// === Rest Operator ===
function somar(...numeros) {
    return numeros.reduce((total, n) => total + n, 0);
}
console.log(somar(10, 20, 30)); // retorna 60

// Rest com arrays e objetos
const [primeiro, ...resto] = ['A', 'B', 'C', 'D'];
// primeiro = 'A', resto = ['B','C','D']

const usuarioCompleto = { id: 1, senha: '123', nome: 'Ana' };
const { senha, ...usuarioSeguro } = usuarioCompleto; // usuarioSeguro = { id:1, nome:'Ana' }
