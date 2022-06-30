function fibonacci(goal: number) {
  let sequence: [number] = [0]

  for (let i = 0; i < goal; i++) {
    if (i < 3) sequence[i] = i

    if (i >= 3) sequence[i] = sequence[i - 1] + sequence[i - 2]
  }

  return sequence
}

console.log(fibonacci(50))
