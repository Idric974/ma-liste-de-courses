import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Styles from './BodyBox.module.css';
import ListeBoxe from './Liste/ListeBoxe';
import SuggestionBox from './Suggestion/SuggestionBox';

const BodyBox = () => {

    //! Gestion du state du bouton menu cliqué.

    const clickedButton = useSelector((state) => state.clicOnMenuCombineReducers);
    // console.log('⭐ Accueil ===> Bouton cliqué :', clickedButton);

    //! -----------------------------------------------

    const [listeBoxModal, setListeBoxModal] = useState('');
    const [suggestionBoxModal, setSuggestionBoxModal] = useState('');

    useEffect(() => {
        setListeBoxModal(true);
    }, []);

    useEffect(() => {
        if (clickedButton === 'clickOnListe') {
            // console.log('Clic sur : clickOnAccueil');

            setListeBoxModal(true)
            setSuggestionBoxModal(false)


        } else if (clickedButton === 'clickOnSuggestion') {
            // console.log('Clic sur : clickOnEauAuSol');

            setListeBoxModal(false)
            setSuggestionBoxModal(true)

        }

    }, [clickedButton])

    return (
        <div className={Styles.box}>
            {listeBoxModal && <ListeBoxe />}
            {suggestionBoxModal && <SuggestionBox />}
        </div>
    );
};

export default BodyBox;