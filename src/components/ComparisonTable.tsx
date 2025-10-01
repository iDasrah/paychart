import type { SalaryResult } from '@/lib/types'
import { formatCurrency } from '@/utils/formatters'

type ComparisonTableProps = {
  results: Array<SalaryResult>;
}

export function ComparisonTable({ results }: ComparisonTableProps) {
  const bestPurchasingPower = Math.max(...results.map(r => r.purchasingPower));

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
        <tr className="bg-gray-100">
          <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
            Pays
          </th>
          <th scope="col" className="px-6 py-3 text-right text-sm font-semibold text-gray-700">
            Salaire net
          </th>
          <th scope="col" className="px-6 py-3 text-right text-sm font-semibold text-gray-700">
            Impôts payés
          </th>
          <th scope="col" className="px-6 py-3 text-right text-sm font-semibold text-gray-700">
            Cotisations payées
          </th>
          <th scope="col" className="px-6 py-3 text-right text-sm font-semibold text-gray-700">
            Pouvoir d'achat
          </th>
        </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
        {results.map((result) => {
          const isBest = result.purchasingPower === bestPurchasingPower;

          return (
            <tr
              key={result.country}
              className={isBest ? 'bg-green-50' : 'hover:bg-gray-50'}
            >
              <th scope="row" className="px-6 py-4 text-left font-medium text-gray-900">
                {result.country}
              </th>
              <td className="px-6 py-4 text-right text-gray-700">
                {formatCurrency(result.netSalary)}
              </td>
              <td className="px-6 py-4 text-right text-red-600">
                {formatCurrency(result.incomeTaxPaid)}
              </td>
              <td className="px-6 py-4 text-right text-red-600">
                {formatCurrency(result.socialContributionsPaid)}
              </td>
              <td className={`px-6 py-4 text-right font-semibold ${isBest ? 'text-green-700' : 'text-gray-900'}`}>
                {formatCurrency(result.purchasingPower)}
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}

export default ComparisonTable