import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../data/firebaseData';

export const READ_ALL_ITEMS = 'READ_ALL_ITEMS';

let product = [];

export const readAllItem = () => {
    return async (dispatch) => {

        try {

            const querySnapshot = await getDocs(collection(db, "listes"));

            querySnapshot.forEach((doc) => {

                product.push(
                    {
                        newSuggestions: doc.data().newSuggestions,
                        postId: doc.id
                    }

                );
            });

            // console.table(product);

            await dispatch({
                type: READ_ALL_ITEMS,
                payload: product.sort(function (a, b) {
                    if (a.newSuggestions < b.newSuggestions) {
                        return -1;
                    } else {
                        return 1;
                    };
                }),
            });

            product = [];

        } catch (err) {
            return console.log(
                '%c ❌ ERREUR : post.action ==> GET_ALL_SUGGESTIONS ==> Afficher tous les posts :',
                'color: orange',
                err
            );
        }
    };
};