import React, { useEffect } from 'react';
import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import thunk from 'redux-thunk';
import rootReducer from '../src/redux/reducers';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux';

config.autoAddCss = false;

//! Outils de développement Redux.

import { composeWithDevTools } from 'redux-devtools-extension';

//! --------------------------------------------------

//! Fonction à jouer au démarrage.

import { readAllItem } from '../src/redux/actions/getAllItem.action';
import { getAllSugestions } from '../src/redux/actions/getAllSuggestion.action';

//! --------------------------------------------------

function MyApp({ Component, pageProps }) {

  //! Le store de redux.

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  //! --------------------------------------------------

  useEffect(() => {
    store.dispatch(readAllItem());
    store.dispatch(getAllSugestions());
  }, [store]);

  return (
    <>
      <Provider store={store}>
        <Head>
          <title>ChampiBack_V3</title>
          <meta name="description" content="Ma liste de courses" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp
