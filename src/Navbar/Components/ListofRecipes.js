import React, { useState, useEffect } from "react";
import "./text.css";
import { URL, getRecipeById } from "../../Settings/Settings"

export default function ListOfRecipes() {
    // let Firstrecipe = { Category: "", Name: "", Preparation_time: "" }
    // let Secondrecipe = { Category: "", Name: "", Preparation_time: "" }
    // let therecipe = { Category: "", Name: "", Preparation_time: "" }
    // let forthrecipe = { Category: "", Name: "", Preparation_time: "" }
    // const [recipe1, setRecipe1] = useState("");
    // const [recipe2, setRecipe2] = useState("");
    // const [recipe3, setRecipe3] = useState("");
    // const [recipe4, setRecipe4] = useState("");
    // const [responsData, setResponsData] = useState("");


    // useEffect(() => {
    //     const url = URL + getRecipeById + id
    //     console.log(url);
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {

    //         });
    // }, [id]);


    // hardcoded (need to be set to hooks and fetch call to API(backend to stay opdated))
    return (
        <div >
            <p className="register">
                Menu: <br /> <br />
                Option 1:<br />
            Category: "side dish" <br />
            Name: "Simple sauerkraut" <br />
            Preparation_time": 60 <br />
                <br />
                Option 2: <br />
            Category: cake <br />
            Name: jammy biscuits <br />
            Preparation_time: 24 <br />
                <br />
                Option 3: <br />
            Category: "rice dish <br />
            Name: squash risotto <br />
            Preparation_time: 55 <br />
                <br />
                Option 4: <br />
            Category: fish <br />
            Name: fish stew  <br />
            Preparation_time: 30 <br />
            </p>
        </div>
    );
}

