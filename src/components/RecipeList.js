import uuid from 'react-uuid';
import Recipe from "./Recipe";
import'./recippelist.css';
const RecipeList = ({ recipes }) => {
    return (
        <div className="recipe-list">
            {recipes.map(recipe => (
                <Recipe key={uuid()} recipe={recipe} />
            ))}
        </div>
    )
}

export default RecipeList
