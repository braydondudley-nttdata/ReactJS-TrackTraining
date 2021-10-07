import { createContext, useState } from 'react'

const FavoritesContext = createContext({
    favorites: [], // list of favorite meetups
    favoritesCount: 0, // length of list
    addFavorite: (favMeetup) => {},  // init functions good practice for autocompletion
    removeFavorite: (meetupId) => {},
    isFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
    const [ favoriteMeetups , setFavoriteMeetups ] = useState([]);

    function addFavHandler(newFavorite) {
        setFavoriteMeetups(currFavorites => {
            return currFavorites.concat(newFavorite);
        });
    }

    function removeFavHandler(meetupId) {
        setFavoriteMeetups(currFavorites => {
            return currFavorites.filter(meetup => meetup.id !== meetupId)
        });
    }

    function isFavHandler(meetupId) {
        return favoriteMeetups.some(meetup => meetup.id === meetupId)
    }

    const context = {
        favorites: favoriteMeetups,
        favoritesCount: favoriteMeetups.length,
        addFavorite: addFavHandler,
        removeFavorite: removeFavHandler,
        isFavorite: isFavHandler,
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContext;