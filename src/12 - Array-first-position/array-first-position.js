Array.prototype.addFirstPosition = function (value) {
  for (let i = this.length; i > 0; i--) {
    this[i] = this[i - 1]
  }

  this[0] = value

  return this
}
const colors = ['Red', 'Blue', 'Green']

colors.addFirstPosition('Yellow')

console.log(colors)
