import Item from "./Item";
export default function ItemList({ food, isloading }) {
  return (
    <div>
      <h2>Ingredients</h2>
      {isloading ? (
        <p>Loading...</p>
      ) : food.extendedIngredients?.length > 0 ? (
        food.extendedIngredients.map((item) => (
          <Item key={item.id} item={item}/>
        ))
      ) : (
        <p>No ingredients available.</p>
      )}
    </div>
  );
}
