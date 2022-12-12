const db = require('../../models');
const suggestsModel = db.suggest;

//! Logique pour la récupération des suggestions mySQL.

let dataSql;

const readAllSugestionSql = async () => {
  try {
    const suggests = await suggestsModel
      .findAll({
        order: [['newSuggestions', 'ASC']],
      })
      .then((suggestListe) => {
        console.log('Data ========> ', suggestListe);
      });
  } catch (error) {
    console.log(
      '🔴 ERROR : Logique pour la récupération des suggestions mySQL :',
      error
    );
  }
};

readAllSugestionSql();

//! -------------------------------------------------
