// Utilizando Generics podemos determinar tipos no momento que executamos o código,  quando invocamos uma função, por exemplo, mas antes disso precisamos conhecer as variáveis de tipo. O parâmetro da função é um Array de T (variável de tipo) - tipo esse que for definido no momento que a função for executada.

function displaySomeThing<T>(something: T[]): void {
  console.log(something.join(', '))
}

// Definindo o tipo e executando a função

// Utilizando a função com strings:
displaySomeThing<string>(['Paula', 'Lucas'])

// Utilizando a função com numbers:
displaySomeThing<number>([1, 2, 3])

// Retornando valores
function displaySomeValue<T>(value: T): T {
  return value
}

const numberTen = displaySomeValue(10)
const fullName = displaySomeValue('Alessandre Livramento')

console.log(numberTen) // 10
console.log(fullName) // Alessandre Livramento

// Vários Tipos

// Agora vamos aprender como utilizar mais de uma variável com tipos genéricos.
function identity<T, U>(value: T, message: U): T {
  console.log('vai exibir no console, apenas isso: ', message)
  return value
}

// E então, no exemplo abaixo estou definindo que o primeiro parâmetro seja number e o segundo string.

let returnNumber = identity<number, string>(100, 'Hello')
console.log(returnNumber) // retorna 100

// Interfaces

// Também podemos declarar interfaces genéricas.

// Assim:

interface Identity<T, U> {
  value: T
  message: U
}

// Agora temos uma interface genérica, que podemos utilizar para criar um objeto que respeite os tipos que definirmos:

let retunrMessage: Identity<string, string> = {
  value: 'Texto Qualquer',
  message: 'Hello Brazil'
}
console.log(retunrMessage.value) // Texto Qualquer
console.log(retunrMessage.message) // Hello Brazil
