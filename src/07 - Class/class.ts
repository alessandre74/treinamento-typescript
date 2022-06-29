// Classe criada com propriedades e método públicos
class publicPerson {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  sing() {
    return `${this.name} is singing`
  }
}

// Acessando propriedades e método da classe
const Camila = new publicPerson('Camila Cabello', 25)
console.log(Camila.name) // Camila Cabello
console.log(Camila.age) // 25
console.log(Camila.sing()) //Camila Cabello is singing

// Classe criada com propriedades e método privados, se tentar acessar como acima na classe púvlica vai retornar o erro error TS2341: Property 'name' is private and only accessible within class 'Person' pois as propriedades e método estão privados. Vamos adicionar dois métodos a nossa classe para demonstrar como utilizar métodos e propriedades privadas por outros métodos.

class privatePerson {
  private name: string
  private age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  private sing() {
    return `${this.name} is singing`
  }

  getName() {
    return this.name
  }

  getAge() {
    return this.age
  }

  usingPrivatePropertity() {
    return `Invkoing private property ${this.name}`
  }

  usingPrivateMethod() {
    return `Invoking private method sing => ${this.sing()}`
  }
}

// Acessando a propriedade name com o método getName(), a propriedade age com o método getAge() e os métodos usingPrivatePropertity() e usingPrivateMethod()

const selena = new privatePerson('Selena Gomez', 29)

console.log(selena.getName()) // Selena Gomez
console.log(selena.getAge()) // 29
console.log(selena.usingPrivatePropertity()) // Invkoing private property Selena Gomez
console.log(selena.usingPrivateMethod()) // Invoking private method sing => Selena Gomez is singing

// Classe criada com propriedades e métodos protect

class protectPerson {
  protected name: string
  protected age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  protected sing() {
    return console.log(`${this.name} is singing`)
  }
}

const adele = new protectPerson('Adele Laurie Blue Adkins', 34)

// Como a propriedade name esta protegida da o erro Property 'name' is protected and only accessible within class 'protectPerson' and its subclasses.
// console.log(adele.name)

// Agora vamos criar a classe FootballPlayer que vai extender a classe protectPerson:

class FootballPlayer extends protectPerson {
  private club: string

  constructor(name: string, age: number, club: string) {
    super(name, age)
    this.club = club
  }

  getPlayerClub() {
    return `I'm ${this.name} and I'm current playing for ${this.club}`
  }
}

const marta = new FootballPlayer('Marta', 36, 'Orlando Pride')
console.log(marta.getPlayerClub()) // I'm Marta and I'm current playing for Orlando Pride
