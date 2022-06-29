// Criando um objeto
const footballPlayer = {
  name: 'Neymar',
  age: 30,
  club: 'Psg'
}

// Acessando valores em objetos
console.log(footballPlayer.name) // Neymar

// Objeto com funçoes
const person1 = {
  name: 'Lucas',
  sayHello: function () {
    console.log('oi')
  }
}

// Executando a função do objeto
person1.sayHello() // Oi

// Adicionando um array dentro de objetos e criando uma função para acessar esse array
const person2 = {
  name: 'Lucas',
  skills: ['Javascript', 'Typescript', 'Git', 'Github'],
  getSkills: function (indice: number) {
    console.log(this.skills[indice])
  }
}

person2.getSkills(1) // Typescript

// Tipando objetos
type Player = {
  name: string
  age: number
}

const kdb: Player = {
  name: 'Kevin de Bruyne',
  age: 30
}

console.log(kdb) // { name: 'Kevin de Bruyne', age: 30 }
console.log(kdb.name) // Kevin de Bruyne
console.log(kdb.age) // 30
// Melhorando o nosso exemplo, vamos adicionar o campo status.

enum PlayerStatus {
  available = 'available',
  injured = 'injured',
  vacatiob = 'vacation'
}

type newPlayer = {
  name: string
  age: number
  status: PlayerStatus
}

const newKdb: newPlayer = {
  name: 'Mike',
  age: 40,
  status: PlayerStatus.available
}

console.log(newKdb) // { name: 'Mike', age: 40, status: 'available' }
console.log(newKdb.name) // Mike
console.log(newKdb.age) // 40
console.log(newKdb.status) // available
