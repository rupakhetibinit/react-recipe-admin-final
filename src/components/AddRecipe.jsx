import { Flex, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: '',
    description: '',
    imageUrl: '',
  });
  const [steps, setSteps] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  return (
    <Flex flexDirection="column" padding="5" margin="10">
      <h1>Add Recipe</h1>
      <Input
        type="text"
        placeholder="Name"
        onChange={e => setRecipe({ ...recipe, name: e.target.value })}
      />
    </Flex>
  );
};

export default AddRecipe;
