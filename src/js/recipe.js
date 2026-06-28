export class Recipe {
  constructor(plan) {
    this.plan = plan;
    this.recipeShow = document.getElementById("recipes-grid");
    this.meal_details = document.getElementById("meal-details");
    this.header = document.querySelector("header");
    this.all_recipes_section = document.getElementById("all-recipes-section");
    this.search_filters = document.getElementById("search-filters");
    this.showCatgory = document.getElementById("show-category");
    this.log = document.getElementById("log");
    this.head = document.getElementById("head");
    this.detailImg = document.getElementById("detail-image"); 
  }

  async getAllRecipes() {
    let res = await fetch(
      `https://nutriplan-api.vercel.app/api/meals/filter?category=beef&page=1&limit=25`,
    );
    let data = await res.json();
    this.plan.displayRecipes(data.results);
  }


  getRecipe() {

    if (this.meal_details) this.meal_details.classList.remove("loading");
    if (this.header) this.header.classList.add("loading");
    if (this.all_recipes_section) this.all_recipes_section.classList.add("loading");
    if (this.search_filters) this.search_filters.classList.add("loading");
    if (this.showCatgory) this.showCatgory.classList.add("loading");
    if (this.log) this.log.classList.add("loading");
    if (this.head) this.head.classList.remove("loading");
  }

  showRecipeDetails(recipe) {
    console.log('reeeeeeeeeeeeeee', recipe);
    
    this.getRecipe();

    const search_filters_section = document.getElementById("search-filters-section");
    const meal_categories_section = document.getElementById("meal-categories-section");
    const src = document.getElementById("src");
    const categoryElement = document.querySelector(".category");
    const state = document.querySelector(".state");
    const nameFood = document.getElementById("nameFood");
const firstWord = document.querySelector(".firstWord");
const Ingredient = document.querySelector(".Ingredient")

    search_filters_section.classList.add("loading");
    meal_categories_section.classList.add("loading");
    if(recipe.tags.length){
      firstWord.innerHTML=`${recipe.tags[0] || recipe.tags[1]}` } 
   
Ingredient.innerHTML=`
 
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors">
                  <input type="checkbox" class="ingredient-checkbox w-5 h-5 text-emerald-600 rounded border-gray-300" />
                  <span id="step1" class="text-gray-700">
                    <span class="font-medium text-gray-900">${recipe.ingredients[0].measure}</span> 
                   ${recipe.ingredients[0].ingredient}
                  </span>
                </div>
                <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors">
                  <input type="checkbox" class="ingredient-checkbox w-5 h-5 text-emerald-600 rounded border-gray-300" />
                  <span id="step2" class="text-gray-700">
                    <span class="font-medium text-gray-900">${recipe.ingredients[1].measure}</span>
                   ${recipe.ingredients[1].ingredient}
                  </span>
                </div>
                <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors">
                  <input type="checkbox" class="ingredient-checkbox w-5 h-5 text-emerald-600 rounded border-gray-300" />
                  <span id="step3" class="text-gray-700">
                    <span class="font-medium text-gray-900">${recipe.ingredients[2].measure}</span>
                    ${recipe.ingredients[2].ingredient}
                  </span>
                </div>
                <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors">
                  <input type="checkbox" class="ingredient-checkbox w-5 h-5 text-emerald-600 rounded border-gray-300" />
                  <span id="step4" class="text-gray-700">
                    <span class="font-medium text-gray-900">${recipe.ingredients[3].measure}</span>
                    ${recipe.ingredients[3].ingredient}
                  </span>
                </div>
                <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors">
                  <input type="checkbox" class="ingredient-checkbox w-5 h-5 text-emerald-600 rounded border-gray-300" />
                  <span id="step5" class="text-gray-700">
                    <span class="font-medium text-gray-900">${recipe.ingredients[4].measure}</span>
                    ${recipe.ingredients[4].ingredient}
                  </span>
                </div>
                <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors">
                  <input type="checkbox" class="ingredient-checkbox w-5 h-5 text-emerald-600 rounded border-gray-300" />
                  <span id="step6" class="text-gray-700">
                    <span class="font-medium text-gray-900">${recipe.ingredients[5].measure}</span>
                    ${recipe.ingredients[5].ingredient}
                  </span>
                </div>
                <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors">
                  <input type="checkbox" class="ingredient-checkbox w-5 h-5 text-emerald-600 rounded border-gray-300" />
                  <span id="step" class="text-gray-700">
                    <span class="font-medium text-gray-900">${recipe.ingredients[6].measure}</span> 
                     ${recipe.ingredients[6].ingredient}
                  </span>
                </div>
                <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors">
                  <input type="checkbox" class="ingredient-checkbox w-5 h-5 text-emerald-600 rounded border-gray-300" />
                  <span class="text-gray-700">
                    <span class="font-medium text-gray-900">${recipe.ingredients[7].measure}</span>
                   ${recipe.ingredients[7].ingredient}
                  </span>
                </div>
                <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors">
                  <input type="checkbox" class="ingredient-checkbox w-5 h-5 text-emerald-600 rounded border-gray-300" />
                  <span class="text-gray-700">
                    <span class="font-medium text-gray-900">${recipe.ingredients[8].measure}</span>
                   ${recipe.ingredients[8].ingredient}
                  </span>
                </div>
              </div>
            </div>










`
    categoryElement.innerHTML=`${recipe.category}`;
    state.innerHTML=`${recipe.area}`;
    nameFood.innerHTML=`${recipe.name}`;
    src.setAttribute("src", recipe.thumbnail);


    
    const detailTitle = document.getElementById("detail-title");
    if (detailTitle) detailTitle.innerText = targetMeal.name;
  }
}
