# 💶 Paychart

Comparez les salaires entre 15 pays européens avec des calculs réels de pouvoir d'achat.

## Fonctionnalités

- 🌍 Comparaison de 15 pays européens
- 💰 Calcul du salaire net réel (impôts + cotisations sociales)
- 📊 Ajustement au coût de la vie
- 📈 Graphiques et tableaux interactifs
- 📱 100% responsive

## Stack Technique

- **TanStack Start** - Framework React
- **TypeScript** - Sécurité des types
- **Recharts** - Visualisation de données
- **Tailwind CSS** - Styling

## Sources des Données

### Taux d'imposition

Les taux d'imposition moyens proviennent des sources suivantes :

- **OECD Taxing Wages 2025** : [oecd.org/tax/taxing-wages](https://www.oecd.org/tax/taxing-wages/)
  - Données sur le "tax wedge" (coin fiscal) pour un travailleur célibataire avec salaire moyen
- **Tax Foundation Europe 2025** : [taxfoundation.org](https://taxfoundation.org/data/all/eu/top-personal-income-tax-rates-europe/)
  - Taux d'imposition effectifs par pays

**Méthodologie** : Les taux utilisés sont des moyennes effectives pour un travailleur célibataire sans enfant gagnant un salaire moyen (50-60k€). Les systèmes fiscaux réels utilisent des tranches progressives qui ne sont pas reflétées dans cette V1.

### Cotisations sociales (part employé)

Sources par pays :

- **France** : [CLEISS](https://www.cleiss.fr/docs/regimes/regime_france/an_a2.html) - ~22%
- **Allemagne** : [TK.de](https://www.tk.de/en/become-a-member/join-tk/contribution-rate-social-security-2037092) - ~20%
- **Pays-Bas** : Sources nationales néerlandaises - ~18%
- **Autres pays** : [Regulated United Europe](https://rue.ee/blog/social-security-tax-rates-in-europe-2024/)

### Coût de la vie

**Numbeo Cost of Living Index 2025** : [numbeo.com](https://www.numbeo.com/cost-of-living/rankings_by_country.jsp?title=2025&region=150)

- Base de référence : New York = 100
- Index utilisé : "Cost of Living Index" (sans le loyer)
- Les données sont des moyennes nationales par pays

**Exemples d'indices** (2025) :
- Suisse : 98.4 (le plus cher)
- France : 58.0 (référence moyenne)
- Pologne : 38.9 (économique)

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)
ou [https://paychart.netlify.app](https://paychart.netlify.app)

## Pays inclus

🇫🇷 France • 🇩🇪 Allemagne • 🇳🇱 Pays-Bas • 🇨🇭 Suisse • 🇬🇧 Royaume-Uni • 🇪🇸 Espagne • 🇮🇹 Italie • 🇵🇹 Portugal • 🇧🇪 Belgique • 🇸🇪 Suède • 🇩🇰 Danemark • 🇳🇴 Norvège • 🇦🇹 Autriche • 🇵🇱 Pologne • 🇮🇪 Irlande

## Détail des données par pays

| Pays | Taux impôt | Cotisations | Coût de vie | Source impôts | Source cotisations |
|------|------------|-------------|-------------|---------------|-------------------|
| 🇫🇷 France | 20% | 22% | 58.0 | OECD 2025 | CLEISS |
| 🇩🇪 Allemagne | 25% | 20% | 58.4 | OECD 2025 | TK.de |
| 🇳🇱 Pays-Bas | 28% | 18% | 60.5 | OECD 2025 | Sources NL |
| 🇨🇭 Suisse | 13% | 12% | 98.4 | Tax Foundation | Sources CH |
| 🇬🇧 UK | 21% | 13% | 59.2 | OECD 2025 | National Insurance |
| 🇪🇸 Espagne | 19% | 6% | 43.5 | OECD 2025 | Seguridad Social |
| 🇮🇹 Italie | 23% | 9% | 51.0 | OECD 2025 | INPS |
| 🇵🇹 Portugal | 20% | 11% | 41.2 | OECD 2025 | Segurança Social |
| 🇧🇪 Belgique | 30% | 13% | 56.5 | OECD 2025 (52.6% wedge) | ONSS |
| 🇸🇪 Suède | 23% | 7% | 54.2 | OECD 2025 | Skatteverket |
| 🇩🇰 Danemark | 36% | 0% | 66.9 | OECD 2025 | N/A (financé par impôt) |
| 🇳🇴 Norvège | 22% | 8% | 69.0 | OECD 2025 | NAV |
| 🇦🇹 Autriche | 25% | 18% | 60.7 | OECD 2025 | Sources AT |
| 🇵🇱 Pologne | 12% | 14% | 38.9 | Flat tax 2022+ | ZUS |
| 🇮🇪 Irlande | 20% | 4% | 59.8 | OECD 2025 (USC inclus) | PRSI |

## Limitations et avertissements

⚠️ **Important** : Ces calculs sont des **estimations simplifiées** :

1. **Taux uniques vs tranches progressives** : Les systèmes fiscaux réels utilisent des tranches progressives. Les taux indiqués sont des moyennes effectives.

2. **Situation standard** : Calculs pour un célibataire sans enfant. Les taux varient selon :
   - Situation familiale (marié, enfants)
   - Niveau de salaire
   - Déductions et crédits d'impôt spécifiques

3. **Coût de la vie** : L'indice est une moyenne nationale. Le coût de la vie varie fortement selon les villes (Paris ≠ Lyon ≠ Toulouse).

4. **Simplifications** : Ne prend pas en compte :
   - Les avantages en nature
   - Les tickets restaurant
   - Les mutuelles
   - Les retraites complémentaires
   - Les variations régionales de taxation

5. **Données 2025** : Les taux fiscaux et indices de coût de la vie peuvent évoluer.

**Pour des décisions importantes** (expatriation, négociation salariale), consultez un expert fiscal du pays concerné.

## Méthodologie de calcul

```typescript
// 1. Cotisations sociales sur le brut
cotisations = salaireBrut × tauxCotisations

// 2. Assiette imposable
assiette = salaireBrut - cotisations

// 3. Impôts sur l'assiette
impôts = assiette × tauxImposition

// 4. Salaire net
net = assiette - impôts

// 5. Pouvoir d'achat (normalisé base France = 58.0)
pouvoirAchat = net × (58.0 / indexCoûtDeVie)
```

## Contribuer

Les taux fiscaux et indices évoluent. Si vous constatez une erreur ou souhaitez améliorer les données :

1. Fork le projet
2. Créez une branche (`git checkout -b fix/better-data`)
3. Commitez vos changements avec sources
4. Push et créez une Pull Request

## Roadmap V2

Améliorations envisagées :

- [ ] Tranches d'imposition progressives par pays
- [ ] Situation familiale (marié, enfants)
- [ ] Salaire mensuel en plus de l'annuel
- [ ] Comparaison personnalisée (sélectionner 3-4 pays)
- [ ] Plus de pays (Canada, USA, Australie)
- [ ] Export PNG/PDF
- [ ] Partage par URL avec paramètres

**Disclaimer** : Outil éducatif. Pour des décisions financières importantes, consultez un expert.
