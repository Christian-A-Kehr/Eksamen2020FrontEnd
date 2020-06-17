// URL for the deployed server. All endpoints are to be added below. Called in 'REST/jokesREST'.
// const URL = "https://cakehr.dk/Eksamen2020";

// URL for the Local vagrant server
const URL = "http://localhost:8080/Eksamen2020";


/*
Following URLs are modular and can be changed according to the requirements of the project.
EP = endpoint
*/
const userDataEP = "/api/info/user";
const loginEP = "/api/login";
const registrationURL = "/api/register/user";

/*
Add custom endpoints here for REST endpoints. Called in 'Navbar/Components'.
*/
const getRecipeById = "/api/recipe/";

export { URL, userDataEP, loginEP, getRecipeById, registrationURL };