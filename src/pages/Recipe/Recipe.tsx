import recipes from "../../data/data.ts";
import { Link, useParams } from "react-router-dom";

function Recipe() {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.title.toLowerCase() === id);

  if (!recipe) {
    return (
      <div>
        <h1>Recipe not found</h1>
      </div>
    );
  }

  return (
    <div className="flow">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt="Recipe" />
      <h2>{recipe.descriptionTitle}</h2>
      {recipe.descriptionParagraphs.map((descriptionPara, index) => (
        <p key={index}>{descriptionPara}</p>
      ))}
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Steps</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <Link to="/">Return to home page</Link>
    </div>
  );
}

export default Recipe;
