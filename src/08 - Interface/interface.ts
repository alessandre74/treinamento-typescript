// Criando uma interface
interface FootBallClub1 {
  name: string
  age: number
}

// Criando um clube de fitebol utilizando a interface
const arsenal: FootBallClub1 = { name: 'Arsenal', age: 136 }
console.log(arsenal.name) // Arsenal

// Criando outro Clube
// const chelsea: FootBallClub = { name: 'Chelsea', age: 117, trophies: 300 }
// O útimo clube criado não vai funcionar pois foi adicionado a propriedade trophies que não existe na interface, erro => Object literal may only specify known properties, and 'trophies' does not exist in type 'FootBallClub'

// Também é possível utilizar as optional properties em interfaces utilizando o ponto de interrogação:

interface FootballClub2 {
  name: string
  age?: number
}

const barcelona: FootballClub2 = { name: 'Barcelona' } // omitindo a propriedade age porém não da erro devido ser um opcional

console.log(barcelona.name) // Barcelona
console.log(barcelona.age) // como omitimos a propriedade age vai retornar => undefined

// Read-only Properties => propriedade que não podem ser modificadas, ou seja, somente lidas

interface FootBallClub3 {
  readonly name: string
  age?: number
}

const realMadrid: FootBallClub3 = { name: 'Real Madrid', age: 120 }
realMadrid.age = 124
// realMadrid.name = 'Barcelona' // Cannot assign to 'name' because it is a read-only property.

console.log(realMadrid.name) //Real Madrid
console.log(realMadrid.age) // 124
