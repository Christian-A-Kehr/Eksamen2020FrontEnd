import React, { useState, useEffect } from "react";
import "./text.css";
import { URL, getRecipeById } from "../../Settings/Settings"

export default function ListOfRecipes() {
    let Firstrecipe = { Category: "", Name: "", Preparation_time: "" }
    let Secondrecipe = { Category: "", Name: "", Preparation_time: "" }
    let therecipe = { Category: "", Name: "", Preparation_time: "" }
    let forthrecipe = { Category: "", Name: "", Preparation_time: "" }
    const [recipe1, setRecipe1] = useState("");
    const [recipe2, setRecipe2] = useState("");
    const [recipe3, setRecipe3] = useState("");
    const [recipe4, setRecipe4] = useState("");
    const [responsData, setResponsData] = useState("");


    // useEffect(() => {
    //     const url = URL + getRecipeById + id
    //     console.log(url);
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {


    //             let date1 = "No data"
    //             let date2 = "No data"
    //             let date3 = "No data"

    //             let infected1 = "No data"
    //             let infected2 = "No data"
    //             let infected3 = "No data"

    //             let dead1 = "No data"
    //             let dead2 = "No data"
    //             let dead3 = "No data"

    //             let recovered1 = "No data"
    //             let recovered2 = "No data"
    //             let recovered3 = "No data"

    //             let name = "[select country]"


    //             if (!(data[0] === null || data.code == "500")) {

    //                 date1 = data[0].date
    //                 date2 = data[1].date
    //                 date3 = data[2].date
    //                 date3 = data[2].date

    //                 infected1 = data[0].totalConfirmedInfected.toLocaleString();
    //                 infected2 = data[1].totalConfirmedInfected.toLocaleString();
    //                 infected3 = data[2].totalConfirmedInfected.toLocaleString();

    //                 dead1 = data[0].totalDeaths.toLocaleString();
    //                 dead2 = data[1].totalDeaths.toLocaleString();
    //                 dead3 = data[2].totalDeaths.toLocaleString();

    //                 recovered1 = data[0].totalRecovered.toLocaleString();
    //                 recovered2 = data[1].totalRecovered.toLocaleString();
    //                 recovered3 = data[2].totalRecovered.toLocaleString();

    //                 name = data[0].countryName
    //             }

    //             // kontrol af data indhold
    //             console.log(data)

    //             setCountryDate1(date1)
    //             setCountryDate2(date2)
    //             setCountryDate3(date3)

    //             setCountryInfected1(infected1)
    //             setCountryInfected2(infected2)
    //             setCountryInfected3(infected3)

    //             setCountryDead1(dead1)
    //             setCountryDead2(dead2)
    //             setCountryDead3(dead3)

    //             setCountryRecovered1(recovered1)
    //             setCountryRecovered2(recovered2)
    //             setCountryRecovered3(recovered3)

    //             setCountryName(name)



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

