// Destructuring é uma sintaxe para extrair dados de arryas, objetos e afins
// de forma mais fácil

const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

// O operador "..." vem do Destructuring
const numeros = [...numerosPares, ...numerosImpares];

// estrutura do destructuring para buscar todos valores de uma coleção de dados
// mesmo os valores que não são esperados
const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5];

// Destructuring também permite que você adicione um valor padrão, caso o que está
// esperando venha zerado ou vazio 
const [nome1 = 'Ju'] = [];

// Com o Destructuring é possível implementar dados de um objeto para dentro de outro
const pessoa = {
    nome: "Ju",
    idade: 25
};

const pessoaComTelefone = {
    ...pessoa,
    telefone: "4799993533",
};

// Forma de buscar dados de um objeto utilizando o nome da chave
const { nome } = pessoa;

// Utilizando uma function com o Destructuring, passando diretamente os parametros
// vindo do objeto pessoa "imprimeDados({ nome, idade})"
function imprimeDados({ nome, idade}) {
    console.log(nome, idade)
};

imprimeDados(pessoa);