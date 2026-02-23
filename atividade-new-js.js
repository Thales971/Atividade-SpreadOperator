
// 📘 Lista de Exercícios – Spread Operator
// Objetivo geral:
// Fixar o uso do Spread Operator (...) para copiar, combinar e modificar
// arrays e objetos, evitando efeitos colaterais e respeitando o princípio da
// imutabilidade.


// !🟢 NÍVEL 1 – Básico (Compreensão do Conceito)

//!1 - Copiando um Array
// Crie uma função copiarArray() que receba um array e retorne uma cópia dele usando
// Spread.
// 📌 Teste com:

const numeros = [1, 2, 3];

function copiarArray(arr) {
    return [...arr];
}

//!2 - Adicionando um Item sem Alterar o Original
// Crie uma função adicionarItem() que receba:
//   ● um array
//   ● um novo item
// E retorne um novo array com o item adicionado.
// 📌 Teste com:

const frutas = ["🍎 Maçã", "🍌 Banana"];

function adicionarItem(arr, item) {
    return [...arr, item];
}

// exemplo de uso
console.log(adicionarItem(frutas, "🍇 Uva"));
// → [ '🍎 Maçã', '🍌 Banana', '🍇 Uva' ]

console.log(frutas); // original permanece inalterado

// 3 - Combinando Arrays

//!3 - Combinando Arrays
// Crie uma função combinarArrays() que receba dois arrays e retorne um novo array com
// todos os elementos juntos.
// 📌 Teste com: [1, 2, 3] e [4, 5, 6]


function combinarArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

console.log(combinarArrays([1, 2, 3], [4, 5, 6]));
// → [1, 2, 3, 4, 5, 6]

//! 4 - Cópia segura

// Observe o código abaixo e responda:
const lista = [10, 20, 30];
const copia = [...lista];
copia.push(40);

// ❓ Pergunta:
// O array lista foi alterado? Justifique sua resposta.
// Não, o array lista não foi alterado. O operador spread (...) cria uma cópia do
// array original, então a modificação feita na cópia (copia.push(40)) não afeta o
// array original (lista). Isso demonstra o princípio da imutabilidade em JavaScript.

// !🟡 NÍVEL 2 – Intermediário (Aplicação Prática)-


//!5 - Atualizando dados de um objeto
// Crie uma função atualizarIdade() que receba:
//   ● um objeto usuario
//   ● uma nova idade
// E retorne um novo objeto com a idade atualizada.
// 📌 Exemplo de objeto: { nome: "Ana", idade: 25 }


function atualizarIdade(usuario, novaIdade) {
    return { ...usuario, idade: novaIdade };
}

const usuario = { nome: "Ana", idade: 25 };
const usuarioAtualizado = atualizarIdade(usuario, 30);
console.log(usuarioAtualizado);
// → { nome: 'Ana', idade: 30 }
console.log(usuario);
// → { nome: 'Ana', idade: 25 } (objeto original permanece inalterado)

//!6 - Adicionando propriedade dinamicamente
// Crie uma função adicionarPropriedade() que receba:
//   ● um objeto
//   ● uma chave
//   ● um valor
// E retorne um novo objeto com essa propriedade adicionada.
// 📌 Dica: Use chave dinâmica [chave].


function adicionarPropriedade(obj, chave, valor) {
    return { ...obj, [chave]: valor };
}

const produto = { id: 1, nome: "Caneta" };
const produtoComPreco = adicionarPropriedade(produto, "preco", 9.99);
console.log(produtoComPreco);
// → { id: 1, nome: 'Caneta', preco: 9.99 }
console.log(produto);
// → { id: 1, nome: 'Caneta' } (objeto original permanece inalterado)

//!7 - Carrinho de compras
// Crie uma função adicionarAoCarrinho() que receba:
//   ● um array de produtos
//   ● um novo produto
// E retorne um novo carrinho sem alterar o original.
// 📌 Produto exemplo: { nome: "Mouse", preco: 150 }


function adicionarAoCarrinho(carrinho, produto) {
    return [...carrinho, produto];
}

const carrinho = [{ nome: "Teclado", preco: 200 }];
const novoProduto = { nome: "Mouse", preco: 150 };
const carrinhoAtualizado = adicionarAoCarrinho(carrinho, novoProduto);
console.log(carrinhoAtualizado);

// → [ { nome: 'Teclado', preco: 200 }, { nome: 'Mouse', preco: 150 } ]
console.log(carrinho);
// → [ { nome: 'Teclado', preco: 200 } ] (carrinho original permanece inalterado)

//!8 - Mesclando listas
// Dadas três listas:
const carnes = ["🥩"];
const massas = ["🍝"];
const sobremesas = ["🍰"];

// Crie uma única lista chamada menuCompleto usando Spread.
const menuCompleto = [...carnes, ...massas, ...sobremesas];
console.log(menuCompleto); // → [ '🥩', '🍝', '🍰' ]

//!🟠 NÍVEL 3 – Funções e Argumentos

//!9 - Spread em funções
// Crie uma função somarTresNumeros(a, b, c) e passe os valores usando um array.
// 📌 Exemplo:
const numeros2 = [10, 20, 30];

function somarTresNumeros(a, b, c) {
    return a + b + c;
}

console.log(somarTresNumeros(...numeros2)); // → 60

//!10 - Exemplo de erro
//?O que acontece se você passar um array com menos de três valores para a função do
//?exercício anterior?
//?Explique o resultado.
//*Se você passar um array com menos de três valores, os parâmetros restantes da função serão undefined, e a soma resultará em NaN (Not a Number). Isso ocorre porque o operador spread (...) extrai apenas os valores presentes no array, e os parâmetros restantes não recebem valores, tornando-se undefined.

// !🔴 NÍVEL 4 – Avançado (Raciocínio e Imutabilidade)

//!11 - Atualização de perfil
// Crie uma função atualizarPerfil(usuario, novosDados) que:
//   ● Receba um objeto de usuário
//   ● Receba um objeto com dados atualizados
//   ● Retorne um novo objeto combinando ambos
// 📌 Regra: *Os dados novos devem sobrescrever os antigos.


function atualizarPerfil(usuario, novosDados) {
    return { ...usuario, ...novosDados };
}

const usuario2 = { nome: "Carlos", idade: 40, email: "carlos@example.com" };

const usuarioAtualizado0 = atualizarPerfil(usuario2, { idade: 41, cidade: "São Paulo" });
console.log(usuarioAtualizado0);
// → { nome: 'Carlos', idade: 41, email: 'carlos@example.com', cidade: 'São Paulo' }
console.log(usuario2);
// → { nome: 'Carlos', idade: 40, email: 'carlos@example.com' } (objeto original permanece inalterado)

//!12 - Configurações do sistema
// Crie uma função configurarSistema(padrao, usuario) que una:
//   ● configurações padrão
//   ● preferências do usuário
// 📌 Dica: O segundo objeto sempre sobrescreve o primeiro.


function configurarSistema(padrao, usuario) {
    return { ...padrao, ...usuario };
}

const configuracaoPadrao = { tema: "claro", notificacoes: true, idioma: "pt" };
const preferenciaUsuario = { tema: "escuro", idioma: "en" };
const configuracaoFinal = configurarSistema(configuracaoPadrao, preferenciaUsuario);
console.log(configuracaoFinal);
// → { tema: 'escuro', notificacoes: true, idioma: 'en' }  

//!13 - Jogo da velha (lógica)
// Considere um tabuleiro representado por um array:
// ["", "", "", "", "", "", "", "", ""]

// Crie uma função fazerJogada(tabuleiro, posicao, simbolo) que:
//   ● Retorne um novo tabuleiro
//   ● Atualize apenas a posição escolhida


function fazerJogada(tabuleiro, posicao, simbolo) {
    return tabuleiro.map((valor, index) => index === posicao ? simbolo : valor);
}

const tabuleiro = ["", "", "", "", "", "", "", "", ""];
const novoTabuleiro = fazerJogada(tabuleiro, 0, "X");
console.log(novoTabuleiro);

// → [ 'X', '', '', '', '', '', '', '', '' ]
console.log(tabuleiro);
// → [ '', '', '', '', '', '', '', '', '' ] (tabuleiro original permanece inalterado)

// 🧠 DESAFIO FINAL – Reflexão


//!14 - Pergunta Discursiva

//Explique, com suas próprias palavras:
//Por que o uso do Spread Operator é fundamental em frameworks como React?
//
//O Spread Operator é fundamental em React porque permite criar novos objetos e arrays de forma imutável, o que é essencial para manter a integridade do estado da aplicação. Ao usar o spread operator, evitamos modificar diretamente os dados originais, garantindo que as atualizações de estado sejam previsíveis e que a renderização seja eficiente. Isso é especialmente importante em React, onde o estado deve ser tratado como imutável para evitar bugs e garantir uma experiência de usuário consistente.

//✅ Critérios de Avaliação
//● ✔️ Uso correto do Spread (...)
//● ✔️ Não modificar arrays ou objetos originais
//● ✔️ Código organizado e legível
//*✔️ Lógica correta
//*✔️ Comentários explicativos (quando necessário)
