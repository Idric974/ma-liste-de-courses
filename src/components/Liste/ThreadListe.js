/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import Styles from './ThreadListe.module.css';
import { useSelector } from 'react-redux';
import Liste from './Liste';
import { isEmpty } from '../../utils/Utils';

const ThreadListe = () => {

    const items = useSelector((state) => state.addItemsCombineReducers
    );
    // console.log('⭐ ThreadListe :', items);

    if (typeof items[0] === "undefined") {
        console.log("🔴 La variable maVariable n'est pas définie");
    }

    return (
        <div className={Styles.box}>

            {typeof items[0] === "undefined" ? <div className={Styles.myImageBox}><img className={Styles.myImage} src="ma-liste-de-cources-384x384.png" alt="" /><p1 className={Styles.myImageTitle}>Votre liste de cours est vide</p1> </div> : !isEmpty(items[0]) &&
                items.map((item) => {
                    return <Liste item={item} key={item.postId} />;
                })}



        </div>
    );
};

export default ThreadListe;