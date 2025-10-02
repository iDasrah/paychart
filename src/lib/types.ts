export type Country = {
  name: string;
  code: string;
  incomeTaxRate: number;
  socialContributionsRate: number;
}

export type SalaryResult = {
  country: string;
  grossSalary: number;
  netSalary: number;
  incomeTaxPaid: number;
  socialContributionsPaid: number;
}