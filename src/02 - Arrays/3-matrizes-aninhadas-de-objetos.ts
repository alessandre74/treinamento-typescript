type Player = {
  name: string
  height: number
  weight: number
}

const players: Player[] = [
  { name: 'Neymar', height: 1.8, weight: 70 },
  { name: 'Mbappé', height: 1.9, weight: 73 }
]

console.log(players)
console.log(players[0].name) // Neymar
console.log(players[1].name) // Mbappé
