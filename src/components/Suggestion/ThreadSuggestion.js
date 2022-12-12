import React from 'react';
import Styles from './ThreadSuggestion.module.css';
import { useSelector } from 'react-redux';
import { isEmpty } from '../../utils/Utils';
import Suggestion from './Suggestion';

const ThreadSuggestion = () => {

    const items = useSelector((state) => state.getAllSuggestionReducers);

    // console.log('🟢 Suggestions ===> suggestions :', items);

    return (
        <div className={Styles.box}>

            {!isEmpty(items[0]) &&
                items.map((item) => {
                    return <Suggestion item={item} key={item.postId} />;
                })}

        </div>
    );
};

export default ThreadSuggestion;