import React from 'react';
import Styles from './ListeBoxe.module.css';
import ThreadListe from './ThreadListe';

const ListeBoxe = () => {

    return (
        <div className={Styles.box}>
            <ThreadListe />
        </div>
    );
};

export default ListeBoxe;