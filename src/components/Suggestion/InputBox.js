import React, { useState, useEffect } from 'react';
import Styles from './InputBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSugestions } from '../../redux/actions/getAllSuggestion.action';
import { createSugestions } from '../../redux/actions/CreateSuggestion.action';

const InputBox = () => {
  const dispatch = useDispatch();

  //* Récuration de la liste des articles dans la base.

  let [listeArticle, setListeArticle] = useState('');

  const listeArticleBase = useSelector((state) => state.getAllSuggestionReducers
  );
  // console.log('listeArticleBase ===>', listeArticleBase);

  useEffect(() => {
    setListeArticle(
      listeArticleBase.map((data) => {
        return data.newSuggestions;
      })
    );
  }, [listeArticleBase]);

  // console.log('Liste des articles dans la base :', listeArticle);

  let [newSuggestions, setNewSuggestions] = useState('');
  let newSuggestionsTrim = newSuggestions.trim();

  //* -----------------------------------------------

  //! Les promesses.

  let handleAddItem = () => {

    if (listeArticle.includes(newSuggestionsTrim)) {
      console.log('🔴 ERROR : Article déjà dans la liste');
    } else {
      console.log("🟢 SUCCESS : Ajout de l'article dans la base");

      if (newSuggestions.trim() == null || newSuggestions.trim() == '') {
        console.log('🔴 ERROR : newSuggestions vide');
        return;
      } else {
        // console.log('🟢 SUCCESS : newSuggestions OK');

        try {

          dispatch(createSugestions(newSuggestionsTrim));
          dispatch(getAllSugestions());
          setNewSuggestions(' ');

        } catch (err) {
          //
          console.log('🔴 ERROR CATCH FETCH :', err);
        }
      }
    }
  };

  //! -------------------------------------------------

  return (
    <div className={Styles.box}>
      <div className={Styles.listItemsBox}>
        <input
          className={Styles.inputBox}
          id="newSuggestions"
          name="newSuggestions"
          value={newSuggestions}
          type="text"
          placeholder="Entrer une suggestion"
          required
          onChange={(e) => setNewSuggestions(e.target.value)}
        ></input>
        <button className={Styles.listItemsDelete} onClick={handleAddItem}>
          Ajouter
        </button>
      </div>
    </div>
  );
};

export default InputBox;
