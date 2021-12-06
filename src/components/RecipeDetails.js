import React from 'react'

const RecipeDetails = ({ ingredients }) => {
    return ingredients.map(ingredient => {
        return (
            <ul key={Math.random() * 999} className='ingredient-list'>
                <li className='ingredient-text'>{ingredient.text}</li>
                <li className='ingredient-weight'>weight: {ingredient.weight.toFixed()}</li>
            </ul>
        )
    })
}

export default RecipeDetails
