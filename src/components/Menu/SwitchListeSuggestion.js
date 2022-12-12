import React, { useState, useEffect, } from 'react';
import Styles from './SwitchListeSuggestion.module.css';
import { useDispatch } from 'react-redux';
import { clicOnMenuAction } from '../../redux/actions/clicOnMenu.action'


const SwitchListeSuggestion = () => {
    const dispatch = useDispatch();

    const [listModal, setListeModal] = useState('')
    const [suggestionModal, setSuggestionModal] = useState('')

    useEffect(() => {
        setListeModal(true)
    }, []);

    let handleClicAccueil = () => {
        // console.log('listModal');
        dispatch(clicOnMenuAction('clickOnListe'))
        setListeModal(true)
        setSuggestionModal(false)
    }

    let handleClicEauAuSol = () => {
        //  console.log('suggestionModal');
        dispatch(clicOnMenuAction('clickOnSuggestion'))
        setListeModal(false)
        setSuggestionModal(true)
    }

    return (
        <div className={Styles.box}>
            <div className={Styles.boxMenu}>
                <button className={(!listModal ? Styles.boxMenuButtonsOn : Styles.boxMenuButtonsOff)} onClick={handleClicAccueil}>Liste</button>
                <button className={(!suggestionModal ? Styles.boxMenuButtonsOn : Styles.boxMenuButtonsOff)} onClick={handleClicEauAuSol}>Suggestion</button>

            </div>
        </div>
    );
};

export default SwitchListeSuggestion;