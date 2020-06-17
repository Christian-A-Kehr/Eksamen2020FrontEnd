import React, { useState, useEffect } from "react";
import "./text.css";
import { URL, getRecipeById } from "../../Settings/Settings"

export default function RecipeById(props) {
    let pickedId = props.id;
    let Blankrecipe = { id: "", category: "", name: "", preparation_time: "", directions: "", ingredient_list: "" }
    const [recipe, setRecipe] = useState(Blankrecipe);
    const [recipeName, setRecipeName] = useState("");

    useEffect(() => {

        const url = URL + getRecipeById + pickedId
        console.log("befor: " + recipe.directions)
        fetch(url)
            .then(res => res.json())
            .then(data => {

                if (!(data === null || data.code === "500")) {
                    setRecipe({ ...recipe, id: data.id })
                    setRecipe({ ...recipe, Category: data.category })
                    setRecipe({ ...recipe, Name: data.name })
                    setRecipe({ ...recipe, Preparation_time: data.preperation_time })
                    setRecipe({ ...recipe, directions: data.directions })
                    setRecipe({ ...recipe, ingredient_list: data.ingredient_list })
                    setRecipeName(data.name);
                }

                // kontrol af data indhold
                console.log(data)
                console.log("after: " + recipe.directions)



                // setCountryDate1(date1)
                // setCountryDate2(date2)
                // setCountryDate3(date3)

                // setCountryInfected1(infected1)
                // setCountryInfected2(infected2)
                // setCountryInfected3(infected3)

                // setCountryDead1(dead1)
                // setCountryDead2(dead2)
                // setCountryDead3(dead3)

                // setCountryRecovered1(recovered1)
                // setCountryRecovered2(recovered2)
                // setCountryRecovered3(recovered3)

                // setCountryName(name)



            });
    }, [pickedId]);

    return (
        <div>
            <p> chosen recipe: <br />
                Name:  {recipe.name} <br />
                id:  {recipe.id} <br />
                category:  {recipe.category} <br />
                preparation_time:  {recipe.preparation_time} <br />
                directions:  {recipe.directions} <br />
                {/* ingredient_list:  {recipe.ingredient_list} <br /> */}
            </p>

        </div>
    );
}