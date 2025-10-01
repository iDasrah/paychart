import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { SalaryResult } from '@/lib/types';
import { formatCurrency } from '@/utils/formatters';

type SalaryChartProps = {
  results: Array<SalaryResult>;
}

export function SalaryChart({ results }: SalaryChartProps) {
  const chartData = results.map(r => ({
    country: r.country,
    purchasingPower: Math.round(r.purchasingPower),
  }));

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Pouvoir d'achat comparé
      </h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="country" />
          <YAxis tickFormatter={(value) => `${value.toLocaleString()}€`} />
          <Tooltip
            formatter={(value: number) => formatCurrency(value)}
            labelStyle={{ color: '#000' }}
          />
          <Bar dataKey="purchasingPower" fill="#3b82f6" name="Pouvoir d'achat" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}