# 💶 Paychart

Comparez les salaires nets entre 15 pays européens après déduction des impôts et cotisations sociales.

Lien: [https://paychart.netlify.app](https://paychart.netlify.app)

## Fonctionnalités

- 🌍 Comparaison de 15 pays européens
- 💰 Calcul du salaire net réel (impôts + cotisations sociales)
- 📊 Visualisation des différences fiscales
- 📈 Graphiques et tableaux interactifs
- 📱 100% responsive

## Stack Technique

- **TanStack Start** - Framework React meta
- **TypeScript** - Sécurité des types
- **Recharts** - Visualisation de données
- **Tailwind CSS** - Styling

## Sources des Données

### Taux d'imposition et cotisations sociales

Les taux ont été calculés à partir des simulateurs officiels de salaire de chaque pays pour l'année 2025.

**Méthodologie** :
1. Utilisation des calculateurs officiels avec 50 000€ brut comme référence
2. Observation du salaire net réel obtenu
3. Rétro-calcul des taux effectifs moyens d'imposition et cotisations
4. Vérification de la cohérence avec les données OECD Taxing Wages 2025

**Sources principales** :
- **OECD Taxing Wages 2025** - Données sur le coin fiscal (tax wedge)
- **Tax Foundation Europe 2025** - Taux d'imposition par pays
- **Calculateurs officiels par pays** :
    - France : URSSAF, impots.gouv.fr
    - Allemagne : Calculateurs TK.de, brutto-netto-rechner.info
    - Royaume-Uni : HMRC Tax Calculator
    - Suisse : Calculateurs cantonaux officiels
    - Autres pays : Services fiscaux nationaux

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Pays inclus

🇫🇷 France • 🇩🇪 Allemagne • 🇳🇱 Pays-Bas • 🇨🇭 Suisse • 🇬🇧 Royaume-Uni • 🇪🇸 Espagne • 🇮🇹 Italie • 🇵🇹 Portugal • 🇧🇪 Belgique • 🇸🇪 Suède • 🇩🇰 Danemark • 🇳🇴 Norvège • 🇦🇹 Autriche • 🇵🇱 Pologne • 🇮🇪 Irlande

## Méthodologie de calcul

```typescript
// 1. Cotisations sociales sur le brut
cotisations = salaireBrut * tauxCotisations

// 2. Assiette imposable
assiette = salaireBrut - cotisations

// 3. Impôts sur l'assiette
impôts = assiette * tauxImposition

// 4. Salaire net
net = assiette - impôts
```

## Limitations et avertissements

**Important** : Ces calculs sont des **estimations simplifiées**.

### Ce qui est pris en compte
- Impôts sur le revenu
- Cotisations sociales (part employé)
- Calculs pour un célibataire sans enfant

### Ce qui n'est PAS pris en compte
- **Le coût de la vie** (loyer, alimentation, etc.)
- Les tranches d'imposition progressives détaillées
- La situation familiale (marié, enfants)
- Les déductions et crédits d'impôt spécifiques
- Les avantages en nature (tickets resto, mutuelle)
- Les variations régionales de taxation

### Pourquoi ces limites ?

Les systèmes fiscaux réels sont complexes avec des tranches progressives. Pour simplifier et permettre une comparaison rapide, nous utilisons des taux moyens effectifs calculés pour un salaire de référence (50 000€ brut).

**Pour des décisions importantes** (expatriation, négociation salariale), consultez un expert fiscal du pays concerné.

## Note sur le coût de la vie

Cet outil compare les **salaires nets**. Il ne prend pas en compte les différences de coût de la vie entre pays.

Par exemple, un salaire net de 40 000€ en Suisse n'a pas le même pouvoir d'achat qu'un salaire net de 40 000€ en Pologne, car le coût de la vie (loyer, alimentation, services) varie considérablement.

Pour une comparaison complète, vous devriez également considérer :
- Le coût du logement dans chaque pays
- Les prix de l'alimentation et des services
- La qualité des services publics (santé, éducation)
- Les opportunités de carrière

## Contribuer

Les taux fiscaux évoluent. Si vous constatez une erreur ou souhaitez améliorer les données :

1. Fork le projet
2. Créez une branche (`git checkout -b fix/better-data`)
3. Commitez vos changements avec sources
4. Push et créez une Pull Request

## Roadmap V2

Améliorations envisagées :

- [ ] Tranches d'imposition progressives détaillées
- [ ] Situation familiale (marié, enfants)
- [ ] Salaire mensuel en plus de l'annuel
- [ ] Comparaison personnalisée (sélectionner 3-4 pays)
- [ ] Plus de pays (Canada, USA, Australie)
- [ ] Export PNG/PDF

---

**Disclaimer** : Outil éducatif à but informatif. Pour des décisions financières importantes, consultez un expert fiscal.