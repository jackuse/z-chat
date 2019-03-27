# Firebase Reference

## Functions

### addMessage

`Message => Message`  
Ajoute un message en base et retourne ce message

### addUser

`User => void`  
Ajoute un utilisateur en base

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
```
