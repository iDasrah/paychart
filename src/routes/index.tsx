import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { SalaryInput } from '@/components/SalaryInput'
import { ComparisonTable } from '@/components/ComparisonTable'
import { SalaryChart } from '@/components/SalaryChart'
import { KeyInsights } from '@/components/KeyInsights'
import { Disclaimer } from '@/components/Disclaimer'
import { calculateAllCountries } from '@/lib/calculations'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const [grossSalary, setGrossSalary] = useState(50000);

  const results = calculateAllCountries(grossSalary);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:py-12">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Paychart
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Comparez votre salaire entre 15 pays européens
          </p>
        </div>

        <Disclaimer />

        <div className="flex justify-center">
          <SalaryInput value={grossSalary} onChange={setGrossSalary} />
        </div>

        {grossSalary > 0 && (
          <>
            <KeyInsights results={results} />

            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                📊 Comparaison détaillée
              </h2>
              <ComparisonTable results={results} />
            </div>

            <SalaryChart results={results} />
          </>
        )}

        <footer className="text-center text-sm text-gray-500 pt-8 border-t border-gray-200">
          <p>
            Paychart • Développé avec TanStack Start •{' '}
            <a href="https://github.com/ton-username/paychart" className="text-blue-600 hover:underline">
              GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}