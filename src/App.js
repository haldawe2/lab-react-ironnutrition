import { useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from "./foods.json";
import { Row, Divider, Button, Input } from 'antd';
import AddFoodForm from './components/AddFoodForm';

function App() {

  const [foodList, setFoodList] = useState(foods);

  const [search, setSearch] = useState('');

  const [formShown, setFormShown] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleAddFood = (newFood) => {
    setFoodList([...foodList, newFood]);
  }

  const handleDelete = (index) => {
    const newList = foodList.filter((food, i) => i !== index);
    setFoodList(newList);
  }

  const handleShowform = () => {
    setFormShown(prev => !prev);
  }

  return (
    <div className="App">
      <Input type="text" placeholder='search by name' onChange={handleSearch}/>
      {formShown ? <Button onClick={handleShowform}> Hide Form </Button> : <Button onClick={handleShowform}> Add New Food </Button>}
      {formShown && <AddFoodForm handleAddFood={handleAddFood}/>}
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodList.filter(food => food.name.toLowerCase().includes(search.toLowerCase())).map((food, i) => {
          return (
            <FoodBox key={i} food={food} index={i} handleDelete={handleDelete} />
          )
        })}
      </Row>
    </div>
  );
}

export default App;
