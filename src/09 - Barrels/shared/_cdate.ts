export class cDate {
  currentDate() {
    const newDate = new Date(Date.now()).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
    return newDate
  }
}
