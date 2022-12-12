import React from 'react';
import InputBox from './InputBox';
import Suggestion from './Suggestion';
import ThreadSuggestion from './ThreadSuggestion';

const SuggestionBox = () => {
    return (
        <div>
            <InputBox />
            <ThreadSuggestion />
        </div>
    );
};

export default SuggestionBox;