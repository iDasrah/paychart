import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { SalaryInput } from '@/components/SalaryInput'
import { ComparisonTable } from '@/components/ComparisonTable'
import { SalaryChart } from '@/components/SalaryChart'
import { calculateAllCountries } from '@/lib/calculations'
import { formatCurrency } from '@/utils/formatters.ts'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const [grossSalary, setGrossSalary] = useState(50000);

  const results = calculateAllCountries(grossSalary);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Salary Comparison Tool
          </h1>
          <p className="text-gray-600">
            Compare votre salaire entre différents pays européens
          </p>
        </div>

        <div className="flex justify-center">
          <SalaryInput value={grossSalary} onChange={setGrossSalary} />
        </div>

        {grossSalary > 0 && (
          <>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-900 mb-2">
                💡 Meilleur pouvoir d'achat
              </h2>
              <p className="text-blue-800">
                {results.sort((a, b) => b.purchasingPower - a.purchasingPower)[0].country}
                {' '}offre le meilleur pouvoir d'achat avec{' '}
                {formatCurrency(Math.max(...results.map(r => r.purchasingPower)))}
              </p>
            </div>
            <ComparisonTable results={results} />
            <SalaryChart results={results} />
          </>
        )}
      </div>
    </div>
  )
}