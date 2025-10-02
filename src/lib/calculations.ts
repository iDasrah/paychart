import { countries } from './countries'
import type { Country, SalaryResult } from './types'

export function calculateSalaryForCountry(grossSalary: number, country: Country): SalaryResult {
  const socialContributionsPaid = grossSalary * country.socialContributionsRate;
  const taxableIncome = grossSalary - socialContributionsPaid;
  const incomeTaxPaid = taxableIncome * country.incomeTaxRate;
  const netSalary = taxableIncome - incomeTaxPaid;
  const purchasingPower = netSalary * (country.costOfLivingIndex / 100);

  return {
    country: country.name,
    grossSalary,
    netSalary,
    incomeTaxPaid,
    socialContributionsPaid,
    purchasingPower,
  }
}

export function calculateAllCountries(grossSalary: number): Array<SalaryResult> {
  return countries.map(country => calculateSalaryForCountry(grossSalary, country));
}