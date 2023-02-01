function FoodItem(props) {
  return (
    <li>
        {/* Afficher le titre de l'ingrédient */}
        <p id="inline">Titre : {props.title}</p>
        {/* Afficher la quantité de l'ingrédient */}
        <p id="inline"> | Quantité : {props.quantity}</p>
    </li>
  );
}

export default FoodItem;