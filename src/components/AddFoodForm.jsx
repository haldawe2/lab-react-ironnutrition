import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm({ handleAddFood }) {

    const initialNewFood = {
        "name": "",
        "calories": 0,
        "image": "",
        "servings": 0
    };

    const [newFood, setNewFood] = useState(initialNewFood);

    const handleNewFood = (e) => {
        setNewFood(prev => {
        return {...prev,
            [e.target.name]: e.target.value}
        });
    };

    const handleSumbit = (e) => {
        e.preventDefault();
        handleAddFood(newFood);
        setNewFood(initialNewFood);
    }

  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={newFood.name} type="text" name='name' onChange={handleNewFood} />

      <label>Image</label>
      {<Input type="text" value={newFood.image} name='image' onChange={handleNewFood}/>}

      <label>Calories</label>
      {<Input type="number" value={newFood.calories} name='calories' onChange={handleNewFood}/>}

      <label>Servings</label>
      {<Input type="number"  value={newFood.servings} name='servings' onChange={handleNewFood}/>}

      <button type="submit" onClick={handleSumbit}>Create</button>
    </form>
  );
}

export default AddFoodForm;