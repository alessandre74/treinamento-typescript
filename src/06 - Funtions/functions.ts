// Criando um type
type footbalPlayer = {
  name: string
  height: number
  weight: number
}

//Agora vamos criar uma função que recebe o type Player como parâmetro e que não retorna nada (void).
function printWithConsole(player: footbalPlayer): void {
  console.log(
    `${player.name} has the following height and weight: ${player.height} and ${player.weight}`
  )
}

printWithConsole({ name: 'Lucas', height: 90.2, weight: 60.3 }) // Lucas has the following height and weight: 90.2 and 60.3

// Criando objeto e passando como parametro
const neymar: footbalPlayer = {
  name: 'Neymar',
  height: 73.5,
  weight: 60.2
}

printWithConsole(neymar) // Neymar has the following height and weight: 73.5 and 60.2

// Vamos criar uma função que recebe dois números como parâmetro, faz um cáculo e retorna o resultado desse cálculo (um número).

function sum(num1: number, num2: number): number {
  return num1 + num2
}

console.log(sum(3, 2)) //5

// Modificando a função sum para retornar uma frase
function sumAndReturnString(num1: number, num2: number): string {
  const sum = num1 + num2

  return `The result of this sum is: ${sum}`
}

console.log(sumAndReturnString(3, 2)) // The result of this sum is: 5

// Os parâmetros das funções podem ser opcionais, por exemplo:
function printPlayer(name: string, age?: number): void {
  if (!age) {
    return console.log(`Hello ${name}, I don't know you age :(`)
  }

  return console.log(`The age of ${name} is ${age}`)
}

printPlayer('Lucas', 25) // The age of Lucas is 25
printPlayer('Lucas') // Hello Lucas, I don't know you age :(

// E para finalizar, podemos adicionar valores padrões aos argumentos das funções, veja:
function newPrintPlayer(name: string, age: number = 20): void {
  return console.log(`The age of ${name} is ${age}`)
}

newPrintPlayer('Lucas') //The age of Lucas is 20
