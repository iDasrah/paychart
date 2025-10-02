import type { Country, SalaryResult } from './types'

/**
 * Données des pays européens pour comparaison salariale
 *
 * IMPORTANT : Les taux ont été ajustés pour correspondre aux salaires nets RÉELS
 * calculés avec les simulateurs officiels de chaque pays pour un salaire de 50 000€ brut.
 *
 * Sources:
 * - Taux d'imposition: Calculateurs officiels par pays (2025)
 * - Cotisations sociales: Calculateurs officiels par pays (2025)
 *
 * Méthodologie : Pour chaque pays, nous avons :
 * 1. Utilisé le calculateur de salaire officiel avec 50 000€ brut
 * 2. Observé le salaire net réel obtenu
 * 3. Rétro-calculé les taux effectifs d'imposition et cotisations
 * 4. Vérifié la cohérence avec les données OECD
 *
 * Note: Les taux sont des moyennes effectives pour un célibataire sans enfant
 * avec un salaire moyen. Les systèmes fiscaux réels utilisent des tranches progressives.
 *
 * Dernière mise à jour: Octobre 2025
 */

export const countries: Array<Country> = [
  {
    name: 'France',
    code: 'FR',
    incomeTaxRate: 0.156,
    socialContributionsRate: 0.22,
  },
  {
    name: 'Allemagne',
    code: 'DE',
    incomeTaxRate: 0.14,
    socialContributionsRate: 0.215,
  },
  {
    name: 'Pays-Bas',
    code: 'NL',
    incomeTaxRate: 0.265,
    socialContributionsRate: 0.18,
  },
  {
    name: 'Suisse',
    code: 'CH',
    incomeTaxRate: 0.11,
    socialContributionsRate: 0.065,
  },
  {
    name: 'Royaume-Uni',
    code: 'UK',
    incomeTaxRate: 0.18,
    socialContributionsRate: 0.12,
  },
  {
    name: 'Espagne',
    code: 'ES',
    incomeTaxRate: 0.178,
    socialContributionsRate: 0.065,
  },
  {
    name: 'Italie',
    code: 'IT',
    incomeTaxRate: 0.21,
    socialContributionsRate: 0.095,
  },
  {
    name: 'Portugal',
    code: 'PT',
    incomeTaxRate: 0.178,
    socialContributionsRate: 0.11,
  },
  {
    name: 'Belgique',
    code: 'BE',
    incomeTaxRate: 0.305,
    socialContributionsRate: 0.131,
  },
  {
    name: 'Suède',
    code: 'SE',
    incomeTaxRate: 0.225,
    socialContributionsRate: 0.07,
  },
  {
    name: 'Danemark',
    code: 'DK',
    incomeTaxRate: 0.36,
    socialContributionsRate: 0.00,
  },
  {
    name: 'Norvège',
    code: 'NO',
    incomeTaxRate: 0.218,
    socialContributionsRate: 0.078,
  },
  {
    name: 'Autriche',
    code: 'AT',
    incomeTaxRate: 0.205,
    socialContributionsRate: 0.18,
  },
  {
    name: 'Pologne',
    code: 'PL',
    incomeTaxRate: 0.12,
    socialContributionsRate: 0.137,
  },
  {
    name: 'Irlande',
    code: 'IE',
    incomeTaxRate: 0.192,
    socialContributionsRate: 0.04,
  },
];

export function sortResults(results: Array<SalaryResult>): Array<SalaryResult> {
  return results.sort((a, b) => b.netSalary - a.netSalary);
}