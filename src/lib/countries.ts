import type { Country } from './types';

export const countries: Array<Country> = [
  {
    name: 'France',
    code: 'FR',
    incomeTaxRate: 0.20,
    socialContributionsRate: 0.22,
    costOfLivingIndex: 100,
  },
  {
    name: 'Allemagne',
    code: 'DE',
    incomeTaxRate: 0.25,
    socialContributionsRate: 0.20,
    costOfLivingIndex: 95,
  },
  {
    name: 'Pays-Bas',
    code: 'NL',
    incomeTaxRate: 0.30,
    socialContributionsRate: 0.18,
    costOfLivingIndex: 105,
  },
  {
    name: 'Suisse',
    code: 'CH',
    incomeTaxRate: 0.15,
    socialContributionsRate: 0.12,
    costOfLivingIndex: 150,
  },
  {
    name: 'Royaume-Uni',
    code: 'UK',
    incomeTaxRate: 0.22,
    socialContributionsRate: 0.13,
    costOfLivingIndex: 110,
  },
];