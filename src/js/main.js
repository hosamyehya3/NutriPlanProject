/**
 * NutriPlan - Main Entry Point
 * 
 * This is the main entry point for the application.
 * Import your modules and initialize the app here.
 */
import { Country } from "./country.js";
import { Category } from "./category.js";
import { Recipe } from "./recipe.js";
import { NutriPlan } from "./plan.js";
const recipeShow = document.getElementById('recipes-grid');
const showCatgory = document.getElementById('meal-categories-section')
const show = document.querySelector('.recipe-card');
const countrys = document.querySelector(".countrys");
const meal_details = document.getElementById("meal-details");
const main_content = document.getElementById("main-content")
const header = document.getElementById("header");
const all_recipes_section = document.getElementById("all-recipes-section");
const search_filters = document.getElementById("search-filters-section");
const log = document.getElementById("log");
const head = document.getElementById("head");
const back_Btn = document.getElementById("back-to-meals-btn");
const src = document.getElementById("src");
const nameFood = document.getElementById("nameFood");
const ctegory = document.querySelector('.ctegory');
const NoRecipe = document.getElementById("NoRecipe")


let arr = [];

const plan = new NutriPlan();

const objCoutry = new Country(plan); 
objCoutry.getAllCountrys();

const callAllrecipe = document.getElementById("callAllrecipe");

callAllrecipe.addEventListener("click" , () =>{
  objCoutry.getallRecipeAgain();
});

const category = new Category(plan);
category.getDataAllCategory();

const recipe = new Recipe(plan);
recipe.getAllRecipes();


back_Btn.addEventListener("click", () => {
  meal_details.classList.add("loading")
  header.classList.remove("loading")
  all_recipes_section.classList.remove("loading")
  search_filters.classList.remove("loading")
  showCatgory.classList.remove("loading")
  log.classList.remove("loading")
  head.classList.add("loading")
});

// function ShowMeal(Res) {
//   recipeShow.addEventListener("click", (e) => {
//     console.log(e.target);
//     console.log(Res);
    
//     let target = e
//     console.log(target);
    
//     let currentSrc = e.target.getAttribute("src");
//     console.log(currentSrc);
//     showMealsDetails(currentSrc, target)
//     meal_details.classList.remove("loading")
//     header.classList.add("loading")
//     all_recipes_section.classList.add("loading")
//     search_filters.classList.add("loading")
//     showCatgory.classList.add("loading")
//     log.classList.add("loading")
//     head.classList.remove("loading")
//   })
// }

// function showMealsDetails(currentSrc, target) {
//   src.setAttribute("src", currentSrc);
//   console.log(target);
// }
