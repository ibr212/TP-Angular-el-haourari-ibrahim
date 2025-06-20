![image](https://github.com/user-attachments/assets/0321fff7-5a20-4ab3-a359-f09b47e14821)<<<<<<< HEAD
# TP-Angular-el-haourari-ibrahim

el haourari ibrahim

ng add @angular/material
# AppCours

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.


## Development server

To start a local development server, run:

```bash
ng serve
```
	Architecture du projet	
				
Frontend : Angular (standalone components)

Backend : Node.js + Express.js (API REST simulée)

Stockage des données : localStorage/sessionStorage (mock)

Gestion des données : Services Angular pour l’appel API

Organisation :

/frontend/ : code Angular

/backend/ : serveur Node.js simulant l’API


I.	Authentification

 L’interface de connexion offre une expérience utilisateur claire et moderne :
•	Formulaire réactif basé sur ReactiveFormsModule avec validation côté client : vérification du format de l'email et longueur minimale du mot de passe.
•	Possibilité de masquer/afficher le mot de passe via un bouton avec une icône visibility.
•	Option Se souvenir de moi qui stocke les données dans localStorage (sinon sessionStorage).
•	Pré-remplissage de comptes de test : 3 rôles simulés sont disponibles (Admin, Utilisateur, Client), chaque bouton injecte les identifiants dans le formulaire.
•	Connexion via réseaux sociaux (Google/Facebook) simulée : un utilisateur fictif est généré avec un message de succès personnalisé.
•	Gestion des erreurs : messages d'erreur contextuels sur le formulaire + snackBar d’erreur globale en cas d’identifiants incorrects.
•	Redirection automatique vers /home si l’utilisateur est reconnu dans le stockage.
Un exemple d’authentification réussie déclenche un message tel que :
"Bienvenue Admin !", affiché via un MatSnackBar.
 
![Picture1dd](https://github.com/user-attachments/assets/949e4104-d380-4df8-9563-2d9fb3d9c16e)


II.	Page d’accueil (Home)

La page d’accueil est conçue comme un point d’entrée engageant pour l’utilisateur. Elle propose une structure visuellement attractive et centrée sur l’expérience utilisateur.
Fonctionnalités principales :
•	Bannière (Hero Section) avec un message d’accueil, un lien direct vers le catalogue (routerLink="/catalog"), et un visuel moderne.
•	Affichage dynamique des catégories de produits, injectées via un tableau categories[] dans le HomeComponent. Chaque catégorie est représentée avec une image et un nom.
•	Produits populaires : cette section affiche une sélection de produits “mis en avant” (featuredProducts[]) avec nom, prix et image. Chaque produit propose un bouton "Ajouter au panier", simulant l’ajout du produit.

![Picturesssss2](https://github.com/user-attachments/assets/b98d41ed-13fb-4215-9bf1-e10a0e2473f6)

 
III.	Barre de navigation (Toolbar)

La barre de navigation permet à l’utilisateur d’accéder rapidement aux différentes pages de l’application :
•	Accès aux routes : Home, Catalog, Panier, Commandes
•	Affichage dynamique du nom de l’utilisateur connecté via currentUser.name
•	Bouton Déconnexion qui vide le stockage et redirige vers /login
•	Icône d’utilisateur avec possibilité d’afficher/masquer les détails : nom, email, rôle (affiché via une carte MatCard)
 
![Picture3ddddddddddddggtt](https://github.com/user-attachments/assets/ef812bec-3746-4122-8bbb-11b3b3d217dd)









IV.	Catalogue

2.1. Interface Utilisateur (HTML)
La page est divisée en deux sections principales :
1.	En-tête du catalogue
o	Barre de recherche avec icône de loupe (mat-icon).
o	Boutons de filtrage par catégorie (Tous, Smart TV, Tablette, Téléphone).
2.	Conteneur des produits
o	Titre "Nos Produits".
o	Indicateur de chargement (Chargement des produits...).
o	Liste des produits sous forme de cartes (product-card).
o	Modal des détails du produit (app-product-details).
2.2. Fonctionnalités Clés
•	Recherche de produits : Filtrage dynamique en fonction de la saisie utilisateur.
•	Filtrage par catégorie : Affichage des produits selon la catégorie sélectionnée.
•	Détails du produit : Affichage dans une modale avec possibilité d'ajout au panier.
•	Gestion du panier : Mise à jour en temps réel via ProductService.



3. Logique Métier (TypeScript)
3.1. Méthodes Principales
Méthode	Description
ngOnInit()	Charge les produits et le panier au démarrage.
filteredProducts()	Filtre les produits en fonction de la recherche et de la catégorie.
filterCategory()	Change la catégorie active pour le filtrage.
isActive()	Vérifie si une catégorie est sélectionnée.
showDetails()	Ouvre la modale des détails du produit.
ajouterProduitAuPanier()	Ajoute un produit au panier et met à jour le stock.


3.2. Flux de Données
1.	Chargement initial :
o	Appel à productService.getProducts() pour récupérer la liste des produits.
o	Appel à productService.getCart() pour synchroniser le panier.
2.	Interaction utilisateur :
o	Si l'utilisateur clique sur un filtre, filterCategory() met à jour selectedCategory.
o	Si l'utilisateur effectue une recherche, searchQuery déclenche un nouveau filtrage.
o	Si l'utilisateur clique sur "Voir détails", showDetails() affiche la modale.
3.	Ajout au panier :
o	ajouterProduitAuPanier() met à jour cartItems et envoie la requête au service.

 ![Picturefffffffff4](https://github.com/user-attachments/assets/08395298-3365-4927-9a76-6ebd914ba936)


V.	ProductDetails

1. Introduction
Ce rapport présente le composant ProductDetails, qui affiche une modale contenant les détails d'un produit sélectionné. Ce composant permet aux utilisateurs de visualiser les informations complètes d'un produit et de l'ajouter au panier.
________________________________________
2. Structure du Composant
2.1. Interface Utilisateur (HTML)
La modale est structurée comme suit :
•	Overlay : Fond semi-transparent qui couvre l'écran et permet de fermer la modale en cliquant à l'extérieur.
•	Contenu de la modale :
o	Image du produit (productImage).
o	Titre du produit (productTitle).
o	Identifiant du produit (productID).
o	Prix (productPrice).
o	Stock disponible (quantity).
o	Bouton "Acheter" avec une animation SVG.
2.2. Fonctionnalités Clés
•	Affichage des détails : Affiche toutes les informations du produit.
•	Fermeture de la modale : Possible via :
o	Clic sur l'overlay.
o	Clic sur le bouton "Acheter" (qui ferme la modale après ajout au panier).
•	Ajout au panier : Émission d'un événement ajouterAuPanier vers le composant parent (CatalogComponent).
________________________________________
3. Logique Métier (TypeScript)
3.1. Propriétés
Propriété	Type	Description
product	Product | null	Produit sélectionné à afficher.
closeModal	EventEmitter<void>	Événement émis pour fermer la modale.
ajouterAuPanier	EventEmitter<Product>	Événement émis pour ajouter le produit au panier.
3.2. Méthodes

Méthode	Description
close()	Émet closeModal pour fermer la modale.
acheter()	Émet ajouterAuPanier avec le produit et ferme la modale.

3.3. Flux de Données
1.	Ouverture de la modale :
o	Le composant parent (CatalogComponent) passe un produit via @Input() product.
2.	Interaction utilisateur :
o	Si l'utilisateur clique sur "Acheter", acheter() est déclenché.
o	Le produit est envoyé au parent via ajouterAuPanier.emit().
o	La modale se ferme automatiquement après l'ajout au panier.

 ![Picture5ffffffffffff](https://github.com/user-attachments/assets/b781bd92-82cb-428e-8e09-903ec867ad6a)
 
VI.	Panier
1. Introduction
Ce rapport présente la page "Mon Panier" du site e-commerce, qui permet aux utilisateurs de gérer leurs articles sélectionnés avant validation de la commande. Le composant offre une vue détaillée des produits, la gestion des quantités et le calcul du total.

2. Structure et Fonctionnalités
2.1. Interface Utilisateur (HTML)
La page est organisée en 3 sections principales :
1.	En-tête
o	Titre "Mon Panier"
o	Message lorsque le panier est vide
2.	Liste des articles
o	Carte par produit avec :
	Image miniature
	Titre et prix unitaire
	Sélecteur de quantité (+/-)
	Prix total pour l'article
	Bouton de suppression
3.	Récapitulatif
o	Total général
o	Boutons d'action :
	"Valider mes achats"
	"Vider le panier"
2.2. Fonctionnalités Clés
•	Affichage dynamique des articles du panier
•	Gestion des quantités avec boutons +/-
•	Calcul automatique des totaux
•	Suppression d'articles individuelle ou globale
•	Redirection vers le catalogue
________________________________________
3. Logique Métier (TypeScript)
3.1. Propriétés
Propriété	Type	Description
cartItems	ShoppingCartItem[]	Tableau des articles dans le panier
3.2. Méthodes Principales
Méthode	Description
ngOnInit()	Charge les articles du panier au démarrage
getTotal()	Calcule le montant total du panier
removeItem()	Supprime un article spécifique
clearCart()	Vide complètement le panier
goToCatalog()	Redirige vers la page catalogue
3.3. Flux de Données
1.	Initialisation :
o	Appel à productService.getCart() pour récupérer les articles
o	Transformation des données en objets ShoppingCartItem
2.	Interactions :
o	Modification des quantités via les boutons +/-
o	Suppression d'articles via le bouton dédié
o	Calcul en temps réel du total
3.	Navigation :
o	Retour au catalogue via le bouton dédié
 ![Picture6ddddddddddd](https://github.com/user-attachments/assets/a3a5c59c-b2bb-4eaf-b20b-5b264a108d89)

VII.	Commandes
1. Introduction
Ce rapport présente la page de suivi des commandes qui permet aux clients de visualiser l'historique et le statut de leurs commandes passées. L'interface affiche les détails de chaque commande avec les produits associés.

2. Structure et Fonctionnalités
2.1. Interface Utilisateur (HTML)
La page est organisée en trois parties principales :
1.	Titre de la page
o	"Suivi des Commandes" comme entête principal
2.	Message vide
o	"Aucune commande trouvée" lorsque la liste est vide
3.	Blocs de commandes
o	Pour chaque commande :
	Numéro et date de commande
	Statut actuel (en cours/expédiée)
	Cartes produits avec :
	Image du produit
	Titre et catégorie
	Prix unitaire
	Quantité commandée
2.2. Fonctionnalités Clés
•	Affichage chronologique des commandes
•	Visualisation détaillée de chaque article commandé
•	Indication claire du statut de la commande
•	Adaptation responsive grâce aux composants Material
3.1. Propriétés et Méthodes


Élément	Type/Description
commandes	Commande[] - Liste des commandes
constructor()	Injection du CommandeService
ngOnInit()	Chargement des commandes au démarrage
3.2. Flux de Données
1.	Initialisation :
o	Appel à commandeService.getCommandes()
o	Peuplement de la propriété commandes
2.	Affichage :
o	Boucle *ngFor sur les commandes
o	Sous-boucle sur les articles de chaque commande
o	Formatage des données pour l'affichage

 ![Picture7ddddddddddddff](https://github.com/user-attachments/assets/109f3884-ddee-4611-b8bc-dc26184b7c22)




	Conclusion
Ce projet m’a permis d’appliquer les principes fondamentaux d’Angular, de structurer une application complète en composants, et de simuler une API backend. Les fonctionnalités principales sont opérationnelles et peuvent servir de base à une évolution réelle avec une base de données et une API sécurisée.
Améliorations futures :
•	Connexion réelle à une base MongoDB/PostgreSQL
•	Authentification JWT
•	Dashboard d’administration pour gérer les produits
________________________________________	



Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.
##old-screens
![Image](https://github.com/user-attachments/assets/e2ecf500-83d6-4f4e-8b38-6b223144eca2)

![Image](https://github.com/user-attachments/assets/32da35f0-a323-463f-af24-e17998bd1128)

![Image](https://github.com/user-attachments/assets/110f86b9-e919-4d4a-9ee4-502885193689)


##new-screens
![Image](https://github.com/user-attachments/assets/fc13ed25-5082-49e9-b1fd-876f620acd73)

![Image](https://github.com/user-attachments/assets/7edad609-110f-468e-a169-3edf33cc9f1c)

![Image](https://github.com/user-attachments/assets/3c2b0ecd-8741-4a02-bc47-5367c339cc1e)


## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
=======
# TP-Angular-el-haourari-ibrahim
>>>>>>> 6054e2b5dfc1f7529ae37485f28612ba76f20ba6
