import { collection, addDoc } from "firebase/firestore";
import { db } from '../../../data/firebaseData';

export const CREATE_SUGGESTIONS = 'CREATE_SUGGESTIONS';

//! Logique pour la création d'une suggestions dans firebase.

export const createSugestions = (newSuggestionsTrim) => {

  let newSuggestions;

  return async () => {

    try {

      const docRef = await addDoc(collection(db, "suggestions"), {
        newSuggestions: newSuggestionsTrim,
      });

      console.log("🟢 SUCCESS : Création de l’article sous l’id :", docRef.id);

    } catch (err) {
      return console.log(
        "🔴 ERREUR : CREATE_SUGGESTIONS ==> Création d'une suggestion :",
        err
      );
    }
  };
};

//! -------------------------------------------------






