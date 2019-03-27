# Z-chat

## Installation

```shell
git clone https://github.com/Yopadd/z-chat.git
git checkout step0
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

Le composant `Chat` doit être _lazy loader_.

## Etape 1

Avoir une page _Login_ qui créer un utilisateur et qui vous renvois sur la page _Chat_.

__Bonus__: Avec le _localStorage_ faite en sorte de ne pas avoir à retaper à chaque fois le dernier utilisateur
rentré.

<details>
 <summary>Aide 1</summary>
  Il faut utiliser le hooks <code>useState</code> pour créer un utilisateur qui à doit ressembler à
  <code>{ name: 'Alber' color: '#000000' }</code>.
</details>

<details>
 <summary>Aide 2</summary>
  Pour envoyer un utilisateur avec Firebase il faut utiliser la méthode <code>addUser</code> du module
  <code>firebase.js</code>.
  ex:
  <pre>addUser({ name: 'Alber' color: '#000000' })</pre>
</details>

<details>
 <summary>Aide 3</summary>
  Votre formulaire doit executer une function qui ressemble à
  <pre>const login = (e) => {
      e.preventDefault()
      setUser(user)
      addUser(user)
      onLogin(user)
  }</pre>
</details>

## Etape 2

Récupérer et afficher dans le bonne ordre les messages envoyés par _Firebase_.

<details>
 <summary>Aide 1</summary>
  Il faut utiliser le hooks <code>useEffect</code>. Cette méthode prend un deuxième paramètre qui
  est un tableau de valeur. La fonction de <code>useEffect</code> ne sera rejouée qui si une des
  valeur du tableau change. Donc si on lui donne un tableau [] la fonction ne sera joué
  qu'une seul fois au premier rendu du composant. A l'instar de <code>componentDidMount</code>.
</details>

## Etape 3

Afficher le nom des utilisateurs en avec leur couleur.

## Etape 4

Envoyer des messages. Isoler cette parti dans un composant.

__Bonus__: sur téléphone faite en sorte de garder le focus sur le clavier après l'envoie d'un message

## Etape 5

Ajouter la gestion d'erreur réseau avec _Error Boundaries_
