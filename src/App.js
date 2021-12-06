
import axios, { } from 'axios';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Recipe from './components/Recipe';

const App = () => {
  const [query, setQuery] = useState('')
  const [recipes, setRecipes] = useState([])
  const [alert, setAlert] = useState('')

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=2fe8dbd7&app_key=8da60e03621775d245e6c92261d0a51e`

  const getData = async () => {
    if (query !== '') {
      const result = await axios.get(url)
      if (result.data.more) {
        setAlert('')
        return setAlert('No Food with such name')
      }
      console.log(result)
      setRecipes(result.data.hits)
      setQuery('')
    } else {
      setAlert('Please fill the form')
    }
  }

  const queryInput = event => {
    setQuery(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    getData()
  }

  return (
    <div className="App">
      <h1>Recipe App</h1>
      <form className='search-form' onSubmit={onFormSubmit}>
        <input type='text' placeholder='Search' onChange={queryInput} value={query} />
        <input type='submit' value='search' />
        {alert !== '' && <Alert alert={alert} />}
      </form>
      <div className='recipes'>
        {recipes !== [] && recipes.map((recipe) => (
          <Recipe key={Math.random() * 999} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default App;
