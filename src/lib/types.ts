export type Country = {
  name: string;
  code: string; // "FR"
  incomeTaxRate: number; // taux d'imposition sur le revenu (0.15 = 15%)
  socialContributionsRate: number; // cotisations sociales (0.22 = 22%)
  costOfLivingIndex: number; // indice coût de la vie (100 = base)
}

export type SalaryResult = {
  country: string;
  grossSalary: number; // salaire brut annuel
  netSalary: number; // salaire net après tout
  incomeTaxPaid: number; // impôts payés
  socialContributionsPaid: number; // cotisations payées
  purchasingPower: number; // salaire ajusté au coût de la vie
}