export function formatDate(date: string, time: string) {
  const [year, month, day] = date.split('-').map(Number); // Divide a data em ano, mês e dia
  const [hour, minute] = time.split(':').map(Number); // Divide a hora em hora e minuto

  return new Date(year, month - 1, day, hour, minute)
}