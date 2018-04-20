# Eval2

### Ceci est la création d'une API sur StarWars. Pourquoi Star Wars ? Outre le fait que cet univers est génial, c'est aussi un univers que j'affectionne particulièrement. Ce qui est en soit à mon sens plus motivant pour travailler et à imaginer dans le cadre d'une évaluation avec un temps donné. J'ai conscience d'avoir déjà testé cette API, mais là encore je n'ai pas fait grand chose dessus à part aller chercher une donnée propre juste pour les personnages et l'afficher ensuite. Mon but sera donc d'améliorer grandement l'API et de repartir à zéro pour faire quelques choses de plus fonctionnel, plus propre et agréable à utiliser. Tout en collant parfaitement aux spécificités de l'univers.  

### J'ai travaillé sur l'API StarWars : https://swapi.co/ et je me suis aidé de sa documentation : https://swapi.co/documentation

### Caractéristique de l'API

- Afficher les personnages de StarWars
- Afficher les planètes de StarWars
- Afficher les vaisseaux de StarWars

#### Pour cela j'ai fais des fonctions qui permettent en cliquant sur la catégorie choisi d'aller chercher des informations sur l'API grâce à des requêtes AJAX, pour ensuite les afficher dans des 'ul' et des 'li' (créer via JS) avec des eventListener qui pointe sur différente classe (créer via HTML).

- Pour chaque clique sur un(e) personnage/planète/vaisseau, afficher ses caractéristiques

#### Pour cela j'ai encore fais des fonctions qui permettent en cliquant sur les 'li' afficher précédement, d'aller chercher des informations supplémentaire lié aux catégories précédement stocké grâce aux url de l'API et ainsi afficher par exemple le poid d'un personnage, la taille d'un vaisseau ou encore le climat d'une planète.

### Difficultés rencontré

- Pour remove certaines informations après un clique

#### Pour l'instant j'ai bien réussi à enlever les informations afficher par les diverses 'li' suivant là ou on reclique. Cependant je rencontre une difficulté pour enlevé les informations lié aux personnages/planètes/vaisseaux qui s'affiche un petit temps après le clique sur les boutons de personnages/planètes/vaisseaux avant de disparaitre correctement.