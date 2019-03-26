# Firebase Reference

## Functions

### addMessage

`Message => Message`
Ajoute un message en base et retourne ce message

### addUser

`User => void`
Ajoute un utilisateur en base

### removeUser

`User.name => void`
Supprime un utilisateur en base

### onNewMassage

`(Message[] => void) => UnsubscribeMethod`
S'inscrire à l'écoute de l'arrivé de nouveaux messages.  
La première fois qu'elle est appelée elle retourne la totalité des messages.
Cette méthode retourne une function pour ce désinscrire.

### onNewMessage

`(User[] => void) => UnsubscribeMethod`
S'inscrire à l'écoute de l'arrivé de nouveaux utilisateurs.  
La première fois qu'elle est appelée elle retourne la totalité des utilisateurs.
Cette méthode retourne une function pour ce désinscrire.

## Types

```typescript
Message: {
  time: number, //timestamp
  user: User.name,
  message: string,
}

User: {
  name: string,
  color: string
}

UnsubscribeMethod: () => void
```

