export function formatCurrency(amount: number): string {
  return Intl.NumberFormat("fr-FR", {
    style: "currency", currency: "EUR"
  }).format(amount);
}

export function formatPercentage(rate: number): string {
  return `${Math.round(rate * 100)}%`;
}