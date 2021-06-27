import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';

function Recipes() {
  const APP_ID = '2b1bdd7d';
  const APP_KEY = '53bf68be539856f190ea3cc4035e81df';

  const [recipies, setRecipies] = useState([]);
  const [query, setQuery] = useState('chicken');
  const exampleRequest =
    'https://api.edamam.com/search?q=chicken&app_id=2b1bdd7d&app_key=53bf68be539856f190ea3cc4035e81df';

  const getRecipe = async () => {
    const response = await fetch(exampleRequest);
    const data = await response.json();
    setRecipies(data);
  };
  useEffect(() => {
    getRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <View>
      <FlatList
        data={recipies}
        renderItem={({recipe}) => (
          <div style={{color: 'red', backgroundColor: 'blue'}}>
            {' '}
            {recipe.hits.recipe.label}{' '}
          </div>
        )}
      />
    </View>
  );
}

export default Recipes;
