import Decimal from "decimal.js";

export function formatCurrency(
  value: string | number,
  decimalScale?: number
): string {
  const decimalValue = new Decimal(value);

  if (decimalValue.isNaN()) {
    return 'R$ 0,00';
  }

  const formattedValue = decimalValue.toDecimalPlaces(decimalScale ?? 2, Decimal.ROUND_DOWN).toNumber();

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(formattedValue)
}