import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../../../data/firebaseData';

export const DELETE_SUGGESTIONS = 'DELETE_SUGGESTIONS';

//! Logique pour la création d'une suggestions dans firebase.

export const deleteSugestions = (itemId) => {

  return async () => {

    try {

      const docRef = await deleteDoc(doc(db, "listes", itemId));


    } catch (err) {
      return console.log(
        "🔴 ERREUR : post.action ==> DELETE_SUGGESTIONS ==> Création d'une suggestion :",
        err
      );
    }
  };
};

//! -------------------------------------------------






