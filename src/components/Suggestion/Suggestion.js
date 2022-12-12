import React, { useEffect, useState } from 'react';
import Styles from './Suggestion.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { readAllItem } from '../../redux/actions/getAllItem.action';
import { addSugestions } from '../../redux/actions/addSuggestion.action';


const Suggestion = ({ item }) => {
    const dispatch = useDispatch();

    //* Récupération de la liste des articles.

    const listeArticles = useSelector((state) => state.addItemsCombineReducers
    );
    // console.log('listeArticles :', listeArticles);

    //* ---------------------------------------------

    let newSuggestions = item.newSuggestions;
    // console.log('newSuggestions :', newSuggestions);

    let [usedItem, setUsedItem] = useState('')

    useEffect(() => {
        setUsedItem(listeArticles.map((data) => { return data.newSuggestions })
        )
    }, [listeArticles])

    // console.log('Articles déjà dans la liste :', usedItem);

    //! Exécution des promesses.

    async function handleAddItem(e) {
        e.preventDefault();

        if (usedItem.includes(newSuggestions)) {
            console.log('🔴 ERROR : Article déjà dans la liste');
        } else {
            console.log("🟢 SUCCESS : Ajout de l'article dans la base");

            try {

                dispatch(addSugestions(newSuggestions));
                dispatch(readAllItem());

            } catch (err) {
                //
                console.log('err :', err);
            }
        }
    }

    //! -------------------------------------------------

    return (
        <div className={Styles.box}>

            <div className={Styles.listItemsBox}>
                <p className={Styles.listItems}>{item.newSuggestions}</p>
                <button className={usedItem.includes(newSuggestions) ? Styles.listItemsDelete2 : Styles.listItemsDelete} onClick={handleAddItem}><p><FontAwesomeIcon icon={faCartPlus} /></p></button>

            </div>

        </div>
    );
};

export default Suggestion;