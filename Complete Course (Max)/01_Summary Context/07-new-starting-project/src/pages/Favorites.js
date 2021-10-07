import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

function FavoritesPage() {
    const favoriteCtx = useContext(FavoritesContext);

    let content;

    if (favoriteCtx.favoritesCount === 0) {
        content = <p>You don't have any Favorite yet. Try to add some! :)</p>
    } else {
        content = <MeetupList meetups={favoriteCtx.favorites}/>;
    }

    return (
        <section>
            <h1>Favorite Meetups</h1>
            {content}
        </section>
    );
}

export default FavoritesPage;