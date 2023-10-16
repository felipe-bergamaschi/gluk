export default function (number: number, index: number): [string, string] {
  return [
    ['agora mesmo', 'agora'],
    ['há %s segundos', 'há %s segundos'],
    ['há um minuto', 'há um minuto'],
    ['há %s minutos', 'há %s minutos'],
    ['há uma hora', 'há uma hora'],
    ['há %s horas', 'há %s horas'],
    ['há um dia', 'há um dia'],
    ['há %s dias', 'há %s dias'],
    ['há uma semana', 'há uma semana'],
    ['há %s semanas', 'há %s semanas'],
    ['há um mês', 'há um mês'],
    ['há %s meses', 'há %s meses'],
    ['há um ano', 'há um ano'],
    ['há %s anos', 'há %s anos'],
  ][index] as [string, string];
}