import React, { useState, useEffect, useRef } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const { onLoadIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState('');
  const inputRef = useRef();

  // will execute whenever 'enteredFilter' changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) { // value 500 ms ago === value now
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
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    }
  }, [enteredFilter, onLoadIngredients]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input 
            ref={inputRef}
            type="text" 
            value={enteredFilter} 
            onChange={event => setEnteredFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
