import { countries } from './countries'
import type { Country, SalaryResult } from './types'

export function calculateSalaryForCountry(grossSalary: number, country: Country): SalaryResult {
  const socialContributionsPaid = grossSalary * country.socialContributionsRate;
  const taxableIncome = grossSalary - socialContributionsPaid;
  const incomeTaxPaid = taxableIncome * country.incomeTaxRate;
  const netSalary = taxableIncome - incomeTaxPaid;

  return {
    country: country.name,
    grossSalary,
    netSalary,
    incomeTaxPaid,
    socialContributionsPaid,
  }
}

export function calculateAllCountries(grossSalary: number): Array<SalaryResult> {
  return countries.map(country => calculateSalaryForCountry(grossSalary, country));
}