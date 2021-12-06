import React from 'react'
import { useState } from 'react/cjs/react.development'
import RecipeDetails from './RecipeDetails'

const Recipe = ({ recipe }) => {
    const [show, setShow] = useState(false)

    const { label, image, url, ingredients } = recipe.recipe
    return (
        <div className='recipe'>
            <h2>{label}</h2>
            <img src={image} alt={label} />
            <a href={url} target='_blank' rel='noopener noreferrer' >Url</a>
            <button onClick={() => setShow(!show)}>Ingredients</button>
            {show && <RecipeDetails ingredients={ingredients} />}
        </div>
    )
}

export default Recipe
