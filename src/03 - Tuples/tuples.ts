// Criando uma tupla
const employee: [number, string] = [1, 'Steve Jobs']

// Acessando o primeiro elemento da tupla (indíce zero)
const employeeNumber = employee[0] // 1
console.log(employeeNumber)

// Acessando o segundo elemento (indíce um)
const employeeName = employee[1] // Steve Jobs
console.log(employeeName)

//Operações adicionar, remover e alterar

//Criando uma tupla

const employees: [string, string] = ['Steve Jobs', 'Joachim Low']

// Retornando a quantidade de itens dentro de uma tupla:

console.log(employees.length) // 2

// Remove o último item da tupla:

employees.pop() // Joachim Low

// Adiciona um novo item no final da dupla:

employees.push('Pep Guardiola')

console.log(employees) // [ 'Steve Jobs', 'Pep Guardiola' ]

// Alterando valores - sai Pep Guardiola que foi adicionado logo acima e entre Abel Ferreira

employees[1] = 'Abel Ferreira'

console.log(employees) // [ 'Steve Jobs', 'Abel Ferreira' ]
