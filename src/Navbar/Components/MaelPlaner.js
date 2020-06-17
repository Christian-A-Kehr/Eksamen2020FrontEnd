import React from "react";
import "./text.css";
import ListofRecipes from "./ListofRecipes";
import { useState } from "react";
import RecipeById from "./RecipeById";

export default function MealPlan() {
    const [id, setId] = useState("");
    const [err, setErr] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
    }
    return (
        <div className="textBox">
            <form onSubmit={handleSubmit}>
                <label>
                    Select Recipe by Id:
        <input
                        type="text"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
                <RecipeById id={id} />
                <ListofRecipes />

            </form>

        </div>
    );
}

// TBD:
// All users should be able to see a list of recipes
// All users should be able to search for a specific recipe (you decide which fields you can use in your search (recipe names (or words in the name), ingredients, cooking time etc.)
// All users should be able to create weekly dinner plans with 7 recipes.
// All users should be able to see a shopping list for any given weekly menu plan
// Users logged in as add/edit/delete menu plans
// Optionally show a details page using routing
