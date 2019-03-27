# Z-chat

## Installation

```shell
git clone https://github.com/Yopadd/z-chat.git
git checkout step1
npm ci
npm start
```

## Objectif

L'objectif est de développer une simple application de chat. A peu-près tout est permis tant qu'à la fin
vous arriver à envoyer des messages et que les autres et vous même puissiez les lires.

Dans le dossier `maquettes` vous trouverais deux maquettes, qui peuvent vous guider.

L'application est suffisamment simple pour ne pas avoir à se poser des questions sur son architecture.
Pas de _router_ ou de _redux_, restons simple. Tout vos composant seront à la racine du dossier `src`.
C'est aussi le seul dossier dont vous avez besoin.

Vous commencerez avec quelques méthodes et composants.

Le back-end est propulsé par Firebase. Ca configuration est déjà faite et le module `firebase.js` expose
quelques méthodes documentés dans `firebase.md`.

Un composant `App` sont rôle est juste de faire la balance entre la page _Login_ et _Chat_

Un composant `Login`, il prend une function `onLogin` en paramètre. Cette function vous permettra sûrement
de retourner l'utilisateur créé par la page _Login_.

Un composant `Chat`, il prend un `User` (cf. `firebase.md`) en paramètre. C'est le coeur de votre application
C'est ici que ce déroulera un grande parti du TP.

## Contraintes

Vous n'avais pas le droit d'utiliser de `class`. Tout vos composant doivent être des functions et utiliser
le plus possible de nouveautés de _React_.