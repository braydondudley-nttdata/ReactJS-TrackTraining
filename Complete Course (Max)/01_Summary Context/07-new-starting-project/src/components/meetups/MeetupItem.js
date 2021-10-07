import { useContext } from 'react';

import classes from './MeetupItem.module.css';
import Card from '../ui-templates/Card';
import FavoritesContext from '../../store/favorites-context';


function MeetupItem(props) {
    const favoritesCtx = useContext(FavoritesContext);

    const itemIsFav = favoritesCtx.isFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if (itemIsFav) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                image: props.image,
                title: props.title,
                address: props.address,
                description: props.description,
            })
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>
                        {itemIsFav ? 'Remove from Favorites' : 'To Favorites'}
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;