import type { SalaryResult } from '@/lib/types';
import { formatCurrency } from '@/utils/formatters';

type KeyInsightsProps = {
  results: Array<SalaryResult>;
}

export function KeyInsights({ results }: KeyInsightsProps) {
  const sortedByPurchasingPower = [...results].sort((a, b) => b.purchasingPower - a.purchasingPower);
  const best = sortedByPurchasingPower[0];
  const worst = sortedByPurchasingPower[sortedByPurchasingPower.length - 1];

  const difference = best.purchasingPower - worst.purchasingPower;
  const percentDiff = ((difference / worst.purchasingPower) * 100).toFixed(0);

  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 shadow-sm border border-green-200">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        💡 Résumé
      </h2>

      <div className="space-y-3">
        <div className="flex items-center">
          <span className="text-2xl mr-3">🏆</span>
          <div>
            <p className="text-gray-900">
              <strong className="text-green-700">{best.country}</strong> offre le meilleur pouvoir d'achat avec{' '}
              <strong>{formatCurrency(best.purchasingPower)}</strong>
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <span className="text-2xl mr-3">📊</span>
          <div>
            <p className="text-gray-900">
              Soit <strong className="text-green-700">+{percentDiff}%</strong> de pouvoir d'achat comparé à{' '}
              <strong className="text-red-700">{worst.country}</strong> ({formatCurrency(worst.purchasingPower)})
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <span className="text-2xl mr-3">💰</span>
          <div>
            <p className="text-gray-900">
              Différence annuelle : <strong>{formatCurrency(difference)}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeyInsights;