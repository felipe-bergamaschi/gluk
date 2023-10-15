import Decimal from "decimal.js";

function sanitizeValue(value: string): string {
  return value
    .split('')
    .filter((s: any) => /\d/.test(s))
    .join('')
    .padStart(3, '0');
}

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

export function changeFormatCurrency(value: string) {
  const formattedValue = sanitizeValue(value)

  const sanitizedValue = `${formattedValue.slice(0, -2)}.${formattedValue.slice(-2)}`;

  const decimalValue = new Decimal(sanitizedValue);
  const formatValue = decimalValue.toDecimalPlaces(2, Decimal.ROUND_DOWN).toNumber();

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(formatValue);
}

export function formatCurrencySubmit(value: string) {
  const formattedValue = value
    .replace('R$', '')
    .replace(/\s/g, '')
    .replace(/\./g, '')
    .replace(/,/g, '.');

  const decimalValue = new Decimal(formattedValue);

  return decimalValue.toDecimalPlaces(2, Decimal.ROUND_DOWN).toNumber();
}