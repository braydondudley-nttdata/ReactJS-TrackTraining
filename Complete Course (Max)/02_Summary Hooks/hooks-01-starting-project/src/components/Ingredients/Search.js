import React, { useState, useEffect } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const { onLoadIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState('');

  // will execute whenever 'enteredFilter' changes
  useEffect(() => {
    const query = enteredFilter.length === 0 ? '' : `?orderBy="title"&startAt="${enteredFilter}"&endAt="${enteredFilter}\uf8ff"`;
    fetch('https://react-hooks-project-f9b5a-default-rtdb.firebaseio.com/ingredients.json' + query)
    .then(response => response.json())
    .then(responseData => {
      const loadedIngredients = [] // 1. initialize retrieved ingredient list
      for (const key in responseData) { // 2. update ingredient list with every found entry
        loadedIngredients.push({
          id: key,
          title: responseData[key].title,
          amount: responseData[key].amount
        });
      };
      onLoadIngredients(loadedIngredients); // 3. set state ONCE only after retrieving fetched list
    });
  }, [enteredFilter, onLoadIngredients]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" value={enteredFilter} onChange={event => setEnteredFilter(event.target.value)}/>
        </div>
      </Card>
    </section>
  );
});

export default Search;
