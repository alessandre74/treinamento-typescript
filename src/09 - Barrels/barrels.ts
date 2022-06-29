import { cDate, Utils, Formatters } from './shared'

const date = new cDate()
const utils = new Utils()
const totalPrice = Formatters.formatCurrency(utils.sum(122.4, 142.6))

console.log(date.currentDate()) // retorna a data atual do sistema no formato dd/mm/yyyy
console.log(utils.sum(4, 4)) // 8
console.log(totalPrice) // R$ 265,00
