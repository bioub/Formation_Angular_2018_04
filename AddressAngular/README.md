# Exercice AddressAngular

## Créer un module SocietesModule

* avec un composant pour lister les sociétés
* et SocieteShowComponent

## Créer un composant ContactUpdateComponent

* Récupérer le contact à partir de l'URL
* remplir un form avec ng-model
* créer et appeler sur le service une méthode update
qui fera un PUT sur /users/:id

## Créer un composant d'UI ListLinkComponent dans SharedModule

* En @Input :
  * une liste d'objet
  * le nom de la clé à afficher (name dans contact)
  * le nom de la clé pour le lien (id dans contact)

Exemple

```
<ab-list-link [items]="contacts$ | async" bindLabel="name" bindId="id"></<ab-list-link>
```
