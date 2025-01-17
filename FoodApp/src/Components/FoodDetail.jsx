import { useEffect, useState } from "react";
import styles from "./FoodDetails.module.css";
import ItemList from "./ItemList";
export default function FoodDetails({ foodID }) {
  const [food, setFood] = useState({});
  const [isLoading, setISLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodID}/information`;
  const API_KEY = "07ed4ddf3ad14bcab335dd335c9f0644";
  useEffect(() => {
    async function FetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      // console.log(data);
      setFood(data);
      setISLoading(false);
    }
    FetchFood();
  }, [foodID]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⌚{food.readyInMinutes}Minutes</strong>
          </span>
          <span>
            👨‍👩‍👧‍👦<strong>{food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕Vegeterian" : "🍗Non-Vegeterian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>💲{food.pricePerServing / 100} per Serving</strong>
          </span>
        </div>
        <ItemList food={food} isLoading={isLoading}/>
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
