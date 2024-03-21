import RecipeIngredients from "./RecipeIngredients";
import './recipe.css'
const Recipe = ({ recipe }) => {
    return (
        <div className="recipe">
            <div className="recipe-top">
                <img src={recipe.recipe.image} alt="img"/>

                <div className="details">
                    <h1 className="recipe-name">{recipe.recipe.label}</h1>
                    <p><strong>Calories : </strong>{recipe.recipe.calories}</p>
                </div>
            </div>

            <div className="recipe-bottom">
                <RecipeIngredients ings={recipe.recipe.ingredients} />
            </div>
        </div>
    )
}

export default Recipe
