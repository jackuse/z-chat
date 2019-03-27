import firebase from "firebase"
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyBIjnae9icHwPsWL-aJwGb_z-c1eqtm0Qo",
  authDomain: "z-chat-631d6.firebaseapp.com",
  databaseURL: "https://z-chat-631d6.firebaseio.com",
  projectId: "z-chat-631d6",
  storageBucket: "",
  messagingSenderId: "245313210956"
}
firebase.initializeApp(config)

const COLLECTION_MESSAGES = "messages"
const COLLECTION_USERS = "users"
const db = firebase.firestore()

async function addMessage (message) {
  const { data } = await db.collection(COLLECTION_MESSAGES).add(message)
  return data
}

function addUser (user) {
  db.collection(COLLECTION_USERS).doc(user.name).set(user)
}

function removeUser (userName) {
  db.collection(COLLECTION_USERS).get(userName).delete()
}

function onNewMessage (func) {
  return onNew(COLLECTION_MESSAGES, func)
}

function onNewUser (func) {
  return onNew(COLLECTION_USERS, func)
}

function onNew (collection, func) {
  return db.collection(collection)
    .onSnapshot(snapshot => {
      const docs = snapshot.docChanges().map(({ doc }) => doc.data())
      func(docs)
    })
}

export default db
export {
  addMessage,
  addUser,
  onNewMessage,
  onNewUser,
  removeUser,
}
