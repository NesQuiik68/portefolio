# Instructions pour les polices du portfolio

Pour que le portfolio fonctionne correctement avec les nouvelles polices, veuillez suivre ces étapes :

## 1. Installation des polices Google

Assurez-vous d'avoir une connexion internet active car les polices sont chargées depuis Google Fonts :

- Montserrat (police principale)
- Space Grotesk (police des titres)
- JetBrains Mono (police technique/code)

## 2. Configuration des variables CSS

Les polices sont déjà configurées dans le fichier `layout.tsx` avec les variables CSS suivantes que vous pouvez utiliser dans vos styles :

```css
--font-montserrat: pour le texte général
--font-space-grotesk: pour les titres
--font-jetbrains-mono: pour le texte technique et code
```

## 3. Utilisation des classes CSS

Plusieurs classes utilitaires sont disponibles pour appliquer les styles spéciaux :

```
.tech-text - Applique la police JetBrains Mono
.gradient-text - Texte avec dégradé orange/rouge
.gradient-text-blue - Texte avec dégradé bleu/cyan
.text-glow - Effet lumineux sur le texte (orange)
.text-glow-blue - Effet lumineux sur le texte (bleu)
.glass - Effet glassmorphism
```

Toutes les animations sont automatiquement appliquées aux composants concernés.

## 4. Majuscules automatiques

Les titres (h1, h2, h3, etc.) sont maintenant automatiquement mis en majuscules grâce au CSS. Pas besoin de modifier le contenu des composants si vous souhaitez revenir à une casse normale. 