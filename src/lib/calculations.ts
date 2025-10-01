import { countries } from './countries'
import type { Country, SalaryResult } from './types'

const REFERENCE_INDEX = 58.0; // France comme référence

export function calculateSalaryForCountry(grossSalary: number, country: Country): SalaryResult {
  const socialContributionsPaid = grossSalary * country.socialContributionsRate;
  const taxableIncome = grossSalary - socialContributionsPaid;
  const incomeTaxPaid = taxableIncome * country.incomeTaxRate;
  const netSalary = taxableIncome - incomeTaxPaid;
  const purchasingPower = netSalary * (REFERENCE_INDEX / country.costOfLivingIndex);

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