export function formatCurrency(num: number) {
  const valueCurruncy = num.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  return valueCurruncy
}
