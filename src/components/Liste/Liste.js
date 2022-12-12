import React from 'react';
import Styles from './Liste.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { readAllItem } from '../../redux/actions/getAllItem.action';
import { deleteSugestions } from '../../redux/actions/DeleteSuggestion.action';

const Liste = ({ item }) => {

    const dispatch = useDispatch();

    let handleClicDelete = async () => {
        let itemId = item.postId
        console.log('Post ID :', itemId);

        try {

            dispatch(deleteSugestions(itemId));
            dispatch(readAllItem());

        } catch (err) {
            //
            console.log('err :', err);
        }
    }

    return (
        <div className={Styles.box}>




            <div className={Styles.listItemsBox}>
                <p className={Styles.listItems}>{item.newSuggestions}</p>
                <button className={Styles.listItemsDelete} onClick={handleClicDelete}><p><FontAwesomeIcon icon={faTrash} /></p></button>
            </div>

        </div>
    );
};

export default Liste;