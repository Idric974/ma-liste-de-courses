import { collection, addDoc } from "firebase/firestore";
import { db } from '../../../data/firebaseData';

export const ADD_SUGGESTIONS = 'ADD_SUGGESTIONS';

//! Logique pour la création d'une suggestions dans firebase.

export const addSugestions = (newSuggestions) => {

  return async (dispatch) => {

    try {

      const docRef = await addDoc(collection(db, "listes"), {
        newSuggestions,
      });

      await dispatch({
        type: ADD_SUGGESTIONS,
        payload: newSuggestions
      });

      console.log("🟢 SUCCESS : Le nouvelle article a été ajouté l’id :", docRef.id);

    } catch (err) {
      return console.log(
        "🔴 ERREUR : post.action ==> CREATE_SUGGESTIONS ==> Le nouvelle article n'a pas été ajouté :",
        err
      );
    }
  };
};

//! -------------------------------------------------






