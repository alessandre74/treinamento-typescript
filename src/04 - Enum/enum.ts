enum State1 {
  Winning = 'Winning',
  Losing = 'Losing',
  Tied = 'Tied'
}

// Acessando valores em enums
console.log(State1.Winning) // Winnig
console.log(State1['Losing']) // Losing

// Heterogeneous Enum - enums que contêm strings e numéros

enum State2 {
  Winnig = 0,
  Losing = 'Losing',
  Tied = 1
}

console.log(State2.Winnig) // 0
console.log(State2.Losing) // Losing
