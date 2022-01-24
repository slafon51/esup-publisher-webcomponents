# **Esup Js-Tree**

Js-Tree est un webcomponent s'appuiant sur la librairie Lit pour afficher une arborescence dépliable.

## **Installation**

1. Installation via npm :

```shell
npm install @esup-publisher/js-tree
```

2. Importation du composant :

Dans un module JavaScript :

```
import '@esup-publisher/js-tree';
```

Dans une page HTML :

```html
<script type="module">
import './path/to/js-tree.js';
</script>
```

3. Ajout du composant dans l'application/composant :

```html
<esup-js-tree datas="..." config="..." onSelection="..."></esup-js-tree>
```

## **Paramètres**

Le webcomponent Js-Tree accepte les paramètres suvants :
- `datas` - Liste contenant l'ensemble des éléments de  l'arborescence a afficher.

Propriétés de chaque élément :    

|Nom|Type|Obligatoire|Description|
|--------|--------|--------|--------|
|id|String|Oui|Identifiant unique de l'élément|
|text|String|Oui|Libellé de l'élément|
|children|Boolean|Oui|Indique si l'élément a des enfants|
|getChildren|Array/Function|Oui|Tableau des enfants de l'élément ou fonction retournant une promise permettant de récupérer les enfants de l'élément|
|iconIndex|Number|Non|Index (entre 0 et 10) de l'icône affiché pour cette élément|

- `config` - Objet contenant la configuration de l'arbre.

Propriétés disponibles :
|Nom|Type|Obligatoire|Description|
|--------|--------|--------|--------|
|identifier|String|Non|Identifiant html de l'arbre.|
|showCheckbox|Boolean|Non|Permet d'afficher ou non une case à cocher sur chaque branche de l'arbre|
|isMultipleSelection|Boolean|Non|Permet la sélection multiple sur l'arborescence (avec ou sans case à cocher)|

- `onSelection` - Fonction appelée lors de la sélection d'un élément de l'arbre.

## **Variables CSS**

### **Modification de style**

Plusieurs variables CSS peuvent être définis pour personnaliser l'arbre :

|Nom|Description|
|--------|--------|
|--selected-background-color|Permet de modifier la couleur de fond des éléments sélectionnés dans l'arborescence|
|--text-color|Permet de modifier la couleur du texte des éléments de l'arborescence|
|--selected-text-color|Permet de modifier la couleur du texte des éléments sélectionnés de l'arborescence |

Par défaut le webcomponent Js-Tree s'appuie sur les fonts Font-Awesome pour afficher des icônes (via des pseudo-elements). Il est cependant possible de personnaliser les icônes affichées via les propriétés suivantes :

|Nom|Description|
|--------|--------|
|--icon-fold-font-family|Permet de configurer la famille de police de caractères de l'icône de replie|
|--icon-fold-font-weight|Permet de configurer poids de la police de caractères de l'icône de replie|
|--icon-fold-content|Caractère unicode dans la famille de police de caractères utilisée pour l'icône de replie|
|--icon-unfold-font-family|Permet de configurer la famille de police de caractères de l'icône de déplie|
|--icon-unfold-font-weight|Permet de configurer poids de la police de caractères de l'icône de déplie|
|--icon-unfold-content|Caractère unicode dans la famille de police de caractères utilisée pour l'icône de déplie|

### **Icônes des noeuds de l'arbre**

Il est possible de configurer jusqu'à 11 icônes pour les éléments de l'arborescence. Les variables à configurer pour définir une icône sont les suivantes (avec x entre 0 et 10) :

|Nom|Description|
|--------|--------|
|--icon-{x}-font-family|Permet de configurer la famille de police de caractères de l'icône 'x'|
|--icon-{x}-font-weight|Permet de configurer poids de la police de caractères de l'icône 'x'|
|--icon-{x}-content|Caractère unicode dans la famille de police de caractères utilisée pour l'icône 'x'|

### **Utilisation**

Exemple de configuration des variables css dans un fichier de style :

```css
esup-js-tree {
    --selected-background-color: #25B2F3;
    --text-color: #25B2F3;
    --selected-text-color: #fff;
    --icon-0-font-family: 'Font Awesome 5 Free';
    --icon-0-font-weight: 900;
    --icon-0-content: '\f015';
}
``` 

## **Test du webcomposant**

Pour tester le webcomposant, exécuter la commande suivante :
```shell
npm run dev
```

Une page avec le webcomposant est alors disponible à l'adresse http://localhost:8080.