import FoodItem from "./FoodItem";
import React, { useState } from 'react';

function Main() {

    // Liste et état d'ingrédients :
    const [ingredients, setIngredients] = useState([
        { title: 'Eau', quantity: '10 cl' },
        { title: 'Farine', quantity: '30g' },
        { title: 'Pommes de terre', quantity: '1kg' },
      ]);

    // Déclaration d'un état pour le titre principal
    const [title, setTitle] = useState('Hello world !');
    const [input, setInput] = useState("");

    // Déclaration des états pour les valeurs du formulaire de titre
    const [inputTitle, setInputTitle] = useState("");
    const [inputQuantity, setInputQuantity] = useState("");

    // Déclaration d'un état pour le compteur de clics
    // const [clicks, setClicks] = useState(0);

    // function handleClick() {
    //     // Incrémentation du compteur de clics
    //     setClicks(clicks + 1);
    //     // Modification du titre en fonction de sa valeur actuelle
    //     setTitle((prevTitle) => prevTitle === 'Hello world !' ? 'Coucou' : 'Hello world !');       
    // }
    function handleChange(event) {
        setInput(event.target.value);
    }
    function handleSubmit(event){
        event.preventDefault();
        setTitle(input);
    }

    // Fonction pour gérer le changement dans le champ de titre
    function handleChangeTitle(event) {
        setInputTitle(event.target.value);
    }
    // Fonction pour gérer le changement dans le champ de quantité
    function handleChangeQuantity(event) {
        setInputQuantity(event.target.value);
    }

    // Fonction pour gérer la soumission du formulaire pour ajouter un ingrédient
    function handleSubmitIngredient(event){
        // Empêcher l'envoi du formulaire (recharge de la page)
        event.preventDefault();

        // Ajouter un nouvel ingrédient à la liste d'ingrédients existants
        // en utilisant le spread operator ... pour créer une copie de la liste et
        // en ajoutant le nouvel ingrédient à la fin
        setIngredients([...ingredients, {title: inputTitle, quantity: inputQuantity}]);
        setInputTitle("");
        setInputQuantity("");
    }

    return(
    <main>
        <h1 >{title}</h1>
        <h2>Liste d'ingrédients</h2>
        <ul>
            {ingredients.map((ingredient) => (
                // Pour chaque ingrédient, nous créons un composant FoodItem en lui transmettant les propriétés title et quantity
                <FoodItem title={ingredient.title} quantity={ingredient.quantity} />
            ))}
        </ul>
        {/* Bouton pour changer le titre / Affichage du compteur de clics*/}        
        {/* <button onClick={handleClick}>{title === 'Hello world !' ? 'Changer' : 'Revenir'} - (déjà fait {clicks} fois) </button>     */}
        <form onSubmit={handleSubmit}>
            <label htmlFor="titleInput">Nouveau titre : </label>
            <input id="titleInput" type="text" value={input} onChange={handleChange}/>
            <button type="submit">OK</button>
        </form>

        {/* Formulaire pour ajouter un nouvel ingrédient */}        
        <form onSubmit={handleSubmitIngredient}>
            <label htmlFor="titleInput">Nouvel ingrédient : </label>
            <input id="titleInput" type="text" placeholder="Nom de l'ingrédient" value={inputTitle} onChange={handleChangeTitle} />
            <input id="quantityInput" type="text" placeholder="Quantité" value={inputQuantity} onChange={handleChangeQuantity} />
            <button type="submit">OK</button>
        </form>
    </main>)
}

export default Main;    

