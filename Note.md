Création des vue list et suggestion 1.1
Création des vue list et suggestion 1.2
Création des vue list et suggestion 1.1
Création des vue list et suggestion 1.2
Création des vue list et suggestion 1.2

    dispatch({
                type: READ_ALL_SUGGESTIONS,
                payload: product.sort(function (a, b) {
                    return b.timesTamp - a.timesTamp
                }),
            });
