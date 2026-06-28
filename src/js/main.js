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
const recipeShow = document.getElementById("recipes-grid");
const showCatgory = document.getElementById("meal-categories-section");
const show = document.querySelector(".recipe-card");
const countrys = document.querySelector(".countrys");
const meal_details = document.getElementById("meal-details");
const header = document.getElementById("header");
const all_recipes_section = document.getElementById("all-recipes-section");
const search_filters = document.getElementById("search-filters-section");
const log = document.getElementById("log");
const head = document.getElementById("head");
const back_Btn = document.getElementById("back-to-meals-btn");
const src = document.getElementById("src");
const nameFood = document.getElementById("nameFood");
const ctegory = document.querySelector(".ctegory");
const NoRecipe = document.getElementById("NoRecipe");
const products_grid = document.getElementById("products-grid");
const products_empty = document.getElementById("products-empty");
let arr = [];

const plan = new NutriPlan();

const objCoutry = new Country(plan);
objCoutry.getAllCountrys();

const callAllrecipe = document.getElementById("callAllrecipe");

callAllrecipe.addEventListener("click", () => {
  objCoutry.getallRecipeAgain();
});

const category = new Category(plan);
category.getDataAllCategory();

const recipe = new Recipe(plan);
recipe.getAllRecipes();

back_Btn.addEventListener("click", () => {
  meal_details.classList.add("loading");
  header.classList.remove("loading");
  all_recipes_section.classList.remove("loading");
  search_filters.classList.remove("loading");
  showCatgory.classList.remove("loading");
  log.classList.remove("loading");
  head.classList.add("loading");
});

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

const id2 = document.getElementById("header2");
const id3 = document.getElementById("header3");

const products_section = document.getElementById("products-section");
const foodlog_section = document.getElementById("foodlog-section");

btn1.addEventListener("click", () => {
  showCatgory.classList.remove("loading");
  products_section.classList.add("loading");
  foodlog_section.classList.add("loading");
  search_filters.classList.remove("loading");
  log.classList.remove("loading");
  all_recipes_section.classList.remove("loading");
  header.classList.remove("loading");
  id2.classList.add("loading");
  id3.classList.add("loading");
  meal_details.classList.add("loading");
});
btn2.addEventListener("click", () => {
  products_section.classList.remove("loading");
  foodlog_section.classList.add("loading");
  search_filters.classList.add("loading");
  log.classList.add("loading");
  showCatgory.classList.add("loading");
  all_recipes_section.classList.add("loading");
  header.classList.add("loading");
  id2.classList.remove("loading");
  id3.classList.add("loading");
  meal_details.classList.add("loading");
});
btn3.addEventListener("click", () => {
  products_section.classList.add("loading");
  foodlog_section.classList.remove("loading");
  search_filters.classList.add("loading");
  log.classList.add("loading");
  showCatgory.classList.add("loading");
  all_recipes_section.classList.add("loading");
  header.classList.add("loading");
  id2.classList.add("loading");
  id3.classList.remove("loading");
  meal_details.classList.add("loading");
});

const search_product_btn = document.getElementById("search-product-btn");
const product_search_input = document.getElementById("product-search-input");
const barcode_input = document.getElementById("barcode-input");
const btnBarcode = document.getElementById("lookup-barcode-btn");




async function colaApi(value) {
  let res = await fetch(
    `https://nutriplan-api.vercel.app/api/products/search?q=${value}&page=1&limit=24`,
  );
  let data = await res.json();
  console.log(data);
  if (data) {
    products_empty.classList.remove("loading")
  }
  DisplayPackagedFood(data);

}

search_product_btn.addEventListener("click", () => {
  let value = product_search_input.value;
  colaApi(value);
});

function DisplayPackagedFood(data) {
let  newArrayRes = data.results;
  console.log(newArrayRes);

  
    if (newArrayRes) {
  products_empty.classList.add("loading");
}
  let box = "";
  for (let i = 0; i < newArrayRes.length; i++) {
    console.log(newArrayRes[i]);

    box += `
  <div
              class="product-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
              data-barcode="7613034626844">
              <div class="relative h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  src="${newArrayRes[i].image || "./src/images/istockphoto-458464735-612x612.jpg"}"
                  alt="${newArrayRes[i].name}" loading="lazy" />

                <!-- Nutri-Score Badge -->
                <div
                  class="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded uppercase">
                  Nutri-Score A
                </div>

                <!-- NOVA Badge -->
                <div
                  class="absolute top-2 right-2 bg-lime-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center"
                  title="NOVA 2">
                  2
                </div>
              </div>

              <div class="p-4">
                <p class="text-xs text-emerald-600 font-semibold mb-1 truncate">
                  ${newArrayRes[i].brand}

                </p>
                <h3 class="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                  ${newArrayRes[i].name}
                </h3>

                <div class="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span><i class="fa-solid fa-weight-scale mr-1"></i>250g</span>
                  <span><i class="fa-solid fa-fire mr-1"></i>${
                    newArrayRes[i].nutrients.calories
                  } kcal/100g</span>
                </div>

                <!-- Mini Nutrition -->
                <div class="grid grid-cols-4 gap-1 text-center">
                  <div class="bg-emerald-50 rounded p-1.5">
                    <p class="text-xs font-bold text-emerald-700">${
                      newArrayRes[i].nutrients.protein
                    }</p>
                    <p class="text-[10px] text-gray-500">Protein</p>
                  </div>
                  <div class="bg-blue-50 rounded p-1.5">
                    <p class="text-xs font-bold text-blue-700">${
                      newArrayRes[i].nutrients.carbs
                    }</p>
                    <p class="text-[10px] text-gray-500">Carbs</p>
                  </div>
                  <div class="bg-purple-50 rounded p-1.5">
                    <p class="text-xs font-bold text-purple-700">${
                      newArrayRes[i].nutrients.fat
                    }</p>
                    <p class="text-[10px] text-gray-500">Fat</p>
                  </div>
                  <div class="bg-orange-50 rounded p-1.5">
                    <p class="text-xs font-bold text-orange-700">${
                      newArrayRes[i].nutrients.sugar
                    }</p>
                    <p class="text-[10px] text-gray-500">Sugar</p>
                  </div>
                </div>
              </div>
            </div>



`;
  }
  products_grid.innerHTML = box;
  product_search_input.value = "";
}


btnBarcode.addEventListener("click", () => {
  Barcode();
});

async function Barcode() {
  let newValue = barcode_input.value.trim(); 
  if (!newValue) return;
  try {
    let res = await fetch(`https://nutriplan-api.vercel.app/api/products/barcode/${newValue}`);
    let DataOfBarcode = await res.json();
    
    displayProuductsByBarcode(DataOfBarcode, newValue);

    console.log(newValue);
    console.log(DataOfBarcode);
  } catch (error) {
    console.log(error);
    ;
  }
}

function displayProuductsByBarcode(response, searchedBarcode) {
  let resOfBarcode = response.result;
  console.log(resOfBarcode);

  if (resOfBarcode) {
    products_empty.classList.add("loading"); 
    
    const nutrients = resOfBarcode.nutrients || { calories: 0, protein: 0, carbs: 0, fat: 0, sugar: 0 };

    products_grid.innerHTML = `
      <div class="product-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
           data-barcode="${resOfBarcode.barcode || searchedBarcode}">
        <div class="relative h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
          <img class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
            src="${resOfBarcode.image || "./src/images/istockphoto-458464735-612x612.jpg"}"
            alt="${resOfBarcode.name || 'Product'}" loading="lazy" />

          <div class="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded uppercase">
            Nutri-Score A
          </div>

          <div class="absolute top-2 right-2 bg-lime-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center" title="NOVA">
            ${resOfBarcode.novaGroup || 'N/A'}
          </div>
        </div>

        <div class="p-4">
          <p class="text-xs text-emerald-600 font-semibold mb-1 truncate">${resOfBarcode.brand || 'Unknown Brand'}</p>
          <h3 class="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">${resOfBarcode.name || 'No Name'}</h3>

          <div class="flex items-center gap-3 text-xs text-gray-500 mb-3">
            <span><i class="fa-solid fa-weight-scale mr-1"></i>250g</span>
            <span><i class="fa-solid fa-fire mr-1"></i>${nutrients.calories} kcal/100g</span>
          </div>

          <!-- Mini Nutrition -->
          <div class="grid grid-cols-4 gap-1 text-center">
            <div class="bg-emerald-50 rounded p-1.5">
              <p class="text-xs font-bold text-emerald-700">${nutrients.protein}</p>
              <p class="text-[10px] text-gray-500">Protein</p>
            </div>
            <div class="bg-blue-50 rounded p-1.5">
              <p class="text-xs font-bold text-blue-700">${nutrients.carbs}</p>
              <p class="text-[10px] text-gray-500">Carbs</p>
            </div>
            <div class="bg-purple-50 rounded p-1.5">
              <p class="text-xs font-bold text-purple-700">${nutrients.fat}</p>
              <p class="text-[10px] text-gray-500">Fat</p>
            </div>
            <div class="bg-orange-50 rounded p-1.5">
              <p class="text-xs font-bold text-orange-700">${nutrients.sugar}</p>
              <p class="text-[10px] text-gray-500">Sugar</p>
            </div>
          </div>
        </div>
      </div>
    `;
  } else {products_empty.classList.remove("loading")
    ;
  }

  barcode_input.value = "";
}

products_grid.addEventListener("click", (e) => {
  const card = e.target.closest(".product-card");
  if (card) {
    const barcode = card.getAttribute("data-barcode");
    console.log( barcode, e);
  }else{
    products_empty.classList.remove("loading");
  }
});





