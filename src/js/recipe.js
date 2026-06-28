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
    if (this.all_recipes_section)
      this.all_recipes_section.classList.add("loading");
    if (this.search_filters) this.search_filters.classList.add("loading");
    if (this.showCatgory) this.showCatgory.classList.add("loading");
    if (this.log) this.log.classList.add("loading");
    if (this.head) this.head.classList.remove("loading");
  }

  async getCalories(recipe) {
    let ingredients = [];
    for (let index = 0; index < recipe.ingredients.length; index++) {
      const element = recipe.ingredients[index];
      ingredients.push(element.ingredient);
console.log(recipe);

    }
  
    let res = await fetch(
      "https://nutriplan-api.vercel.app/api/nutrition/analyze",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
          "x-api-key": "vAyE9KRF1NqTov8XfykRflQuXRxiIbgqpI4wm7hP",
        },
        body: JSON.stringify({
          "recipeName": recipe.name,
          "ingredients": ingredients,
        }),
      },
    );
    let caloriesData = await res.json();
    console.log(caloriesData);
const modal_calories = document.getElementById("modal-calories");
const modal_protein = document.getElementById("modal-protein");
const modal_carbs = document.getElementById("modal-carbs");
const modal_fat = document.getElementById("modal-fat");
if (caloriesData ) {modal_calories.innerHTML=`${caloriesData.data.perServing.calories}`
if (caloriesData) {modal_protein.innerHTML=`${caloriesData.data.perServing.protein}`}
if (caloriesData) { modal_carbs.innerHTML=`${caloriesData.data.perServing.carbs}`}
  if (caloriesData) {modal_fat.innerHTML=`${caloriesData.data.perServing.fat}`}
}
this.saveDataInLocalStroage(caloriesData)
const amountOfCalo = document.querySelector(".amountOfCalo");
const totalOfCalory = document.querySelector(".totalOfCalory");
totalOfCalory.innerHTML=`${caloriesData.data.totals.calories}`
amountOfCalo.innerHTML=`${caloriesData.data.perServing.calories}`
this.getDataOfCalory(caloriesData)

  }



getDataOfCalory(caloriesData){
const Protein = document.querySelector(".Protein");
const Carbs = document.querySelector(".Carbs");
const Fat = document.querySelector(".Fat");
const Fiber = document.querySelector(".Fiber");
const Sugar = document.querySelector(".Sugar");
Protein.innerHTML=`${caloriesData.data.perServing.protein}`
Carbs.innerHTML=`${caloriesData.data.perServing.carbs}`
Fat.innerHTML=`${caloriesData.data.perServing.fat}`
Fiber.innerHTML=`${caloriesData.data.perServing.fiber}`
Sugar.innerHTML=`${caloriesData.data.perServing.sugar}`
}


saveDataInLocalStroage(caloriesData){
const confirm_log_meal = document.getElementById("confirm-log-meal");
confirm_log_meal.addEventListener("click" , ()=>{
    localStorage.setItem("Card" , JSON.stringify(caloriesData))
    let store = localStorage.setItem("Card" , JSON.stringify(caloriesData))
  if (localStorage !== null ) {
    Swal.fire({
  title: "Meal Logged!",
  icon: "success",
  draggable: true
});
  }
  
  this.getFoodLog();
    const log_meal_modal = document.getElementById("log-meal-modal");
log_meal_modal.classList.add("loading")
})
}

getFoodLog(){
  const foodlog_today_section = document.getElementById("foodlog-today-section");

  let resdata = JSON.parse(localStorage.getItem("Card"));

  
  
  this.DisplayCardInFoodLog(resdata);
}

  showRecipeDetails(recipe) {
    console.log("reeeeeeeeeeeeeee", recipe);

    this.getRecipe();
    this.showDetailsInCard(recipe);
    const search_filters_section = document.getElementById(
      "search-filters-section",
    );
    const meal_categories_section = document.getElementById(
      "meal-categories-section",
    );
    const src = document.getElementById("src");
    const categoryElement = document.querySelector(".category");
    const state = document.querySelector(".state");
    const nameFood = document.getElementById("nameFood");
    const firstWord = document.querySelector(".firstWord");
    const Ingredient = document.querySelector(".Ingredient");
    const text1 = document.querySelector(".text1");
    const text2 = document.querySelector(".text2");
    const text3 = document.querySelector(".text3");
    const text4 = document.querySelector(".text4");
    const text5 = document.querySelector(".text5");
    search_filters_section.classList.add("loading");
    meal_categories_section.classList.add("loading");

    if (recipe.tags.length) {
      firstWord.innerHTML = `${recipe.tags[0] || recipe.tags[1]}`;
    }

    categoryElement.innerHTML = `${recipe.category}`;
    state.innerHTML = `${recipe.area}`;
    nameFood.innerHTML = `${recipe.name}`;
    src.setAttribute("src", recipe.thumbnail);

    const InstructionsData = document.querySelector(".InstructionsData");
    let carttona = "";
    let Index = recipe.instructions.length;
    for (let i = 0; i < recipe.instructions.length; i++) {
      carttona += `
    <div class="  flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">      
      <div
                    class="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0">
                    ${i + 1}
                  </div>
       <p class="text1 text-gray-700 leading-relaxed pt-2">
                    ${recipe.instructions[i]}
                  </p>
                  </div>
      `;
      InstructionsData.innerHTML = carttona;
    }
    const youtube = document.querySelector(".youtube");
    let videoUrl = recipe.youtube;
    if (videoUrl.includes("watch?v=")) {
      videoUrl = videoUrl.replace("watch?v=", "embed/");
    }
    youtube.innerHTML = `
        <iframe src="${encodeURI(videoUrl)}" class="absolute inset-0 w-full h-full"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      `;
    const IngredientsLoop = document.querySelector(".IngredientsLoop");
    const length = document.querySelector(".length");
    length.innerHTML = `${recipe.ingredients.length} items`;
    let box = "";
    for (let i = 0; i < recipe.ingredients.length; i++) {
      box += `
     <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors">
                  <input type="checkbox" class="ingredient-checkbox w-5 h-5 text-emerald-600 rounded border-gray-300" />
                  <span id="step1" class="text-gray-700">
                    <span class="font-medium text-gray-900">${recipe.ingredients[i].ingredient}</span>
                  </span>
                </div>
  `;
      IngredientsLoop.innerHTML = box;
    }
    const detailTitle = document.getElementById("detail-title");
    if (detailTitle) detailTitle.innerText = targetMeal.name;
  }

  showDetailsInCard(recipe) {
    const log_meal_btn = document.getElementById("log-meal-btn");
    log_meal_btn.addEventListener("click", (e) => {
      console.log(recipe);
this.DisplayDetailsInCard(recipe);


    });
  }
  DisplayDetailsInCard(recipe) {
    const log_meal_modal = document.getElementById("log-meal-modal");
    log_meal_modal.classList.remove("loading");
    const cancel_log_meal = document.getElementById("cancel-log-meal");
    cancel_log_meal.addEventListener("click", () => {
      log_meal_modal.classList.add("loading")
    })
const srcMainImg = document.getElementById("srcMainImg");
const nameOfMeal = document.getElementById("nameOfMeal")
nameOfMeal.innerHTML=`${recipe.name}`
srcMainImg.setAttribute("src" , `${recipe.thumbnail}` )
  }

DisplayCardInFoodLog(resdata){
  console.log(resdata);
const NoMeal = document.querySelector(".NoMeal");
const btns = document.querySelector(".btns");
const cardInFoodlog = document.getElementById("cardInFoodlog");
const showCardDetails = document.querySelector(".showCardDetails");
const srcImage = document.getElementById("srcImage")
NoMeal.classList.add("loading");
btns.classList.add("loading");
showCardDetails.classList.remove("loading");







}
}

