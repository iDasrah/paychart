import type { Country, SalaryResult } from './types'

/**
 * Données des pays européens pour comparaison salariale
 *
 * Sources:
 * - Taux d'imposition: OECD Taxing Wages 2025, Tax Foundation Europe 2025
 * - Cotisations sociales: OECD, sources nationales (cleiss.fr, TK.de, etc.)
 * - Coût de la vie: Numbeo Cost of Living Index 2025 (base New York = 100, ajusté)
 *
 * Note: Les taux sont des moyennes simplifiées pour un célibataire sans enfant
 * avec un revenu moyen. Dans la réalité, les systèmes fiscaux sont progressifs
 * et plus complexes.
 *
 * Dernière mise à jour: Octobre 2025
 */

export const countries: Array<Country> = [
  {
    name: 'France',
    code: 'FR',
    incomeTaxRate: 0.20,
    socialContributionsRate: 0.22,
    costOfLivingIndex: 58.0,
  },
  {
    name: 'Allemagne',
    code: 'DE',
    incomeTaxRate: 0.25,
    socialContributionsRate: 0.20,
    costOfLivingIndex: 58.4,
  },
  {
    name: 'Pays-Bas',
    code: 'NL',
    incomeTaxRate: 0.28,
    socialContributionsRate: 0.18,
    costOfLivingIndex: 60.5,
  },
  {
    name: 'Suisse',
    code: 'CH',
    incomeTaxRate: 0.13,
    socialContributionsRate: 0.12,
    costOfLivingIndex: 98.4,
  },
  {
    name: 'Royaume-Uni',
    code: 'UK',
    incomeTaxRate: 0.21,
    socialContributionsRate: 0.13,
    costOfLivingIndex: 59.2,
  },
  {
    name: 'Espagne',
    code: 'ES',
    incomeTaxRate: 0.19,
    socialContributionsRate: 0.06,
    costOfLivingIndex: 43.5,
  },
  {
    name: 'Italie',
    code: 'IT',
    incomeTaxRate: 0.23,
    socialContributionsRate: 0.09,
    costOfLivingIndex: 51.0,
  },
  {
    name: 'Portugal',
    code: 'PT',
    incomeTaxRate: 0.20,
    socialContributionsRate: 0.11,
    costOfLivingIndex: 41.2,
  },
  {
    name: 'Belgique',
    code: 'BE',
    incomeTaxRate: 0.30,
    socialContributionsRate: 0.13,
    costOfLivingIndex: 56.5,
  },
  {
    name: 'Suède',
    code: 'SE',
    incomeTaxRate: 0.23,
    socialContributionsRate: 0.07,
    costOfLivingIndex: 54.2,
  },
  {
    name: 'Danemark',
    code: 'DK',
    incomeTaxRate: 0.36,
    socialContributionsRate: 0.00,
    costOfLivingIndex: 66.9,
  },
  {
    name: 'Norvège',
    code: 'NO',
    incomeTaxRate: 0.22,
    socialContributionsRate: 0.08,
    costOfLivingIndex: 69.0,
  },
  {
    name: 'Autriche',
    code: 'AT',
    incomeTaxRate: 0.25,
    socialContributionsRate: 0.18,
    costOfLivingIndex: 60.7,
  },
  {
    name: 'Pologne',
    code: 'PL',
    incomeTaxRate: 0.12,
    socialContributionsRate: 0.14,
    costOfLivingIndex: 38.9,
  },
  {
    name: 'Irlande',
    code: 'IE',
    incomeTaxRate: 0.20,
    socialContributionsRate: 0.04,
    costOfLivingIndex: 59.8,
  },
];

export function sortResults(results: Array<SalaryResult>): Array<SalaryResult> {
  return results.sort((a, b) => b.purchasingPower - a.purchasingPower)
}