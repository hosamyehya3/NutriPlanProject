import { Recipe } from "./recipe.js";
export class NutriPlan {
  constructor() {}

  async displayRecipes(recipesData) {
    const recipeShow = document.getElementById("recipes-grid");
    const NoRecipe = document.getElementById("NoRecipe");

    let box = "";

    if (recipesData && recipesData.length) {
      for (let i = 0; i < recipesData.length; i++) {
        if (!recipesData[i].id) return;
       const recipe = recipesData[i];
       
        box += `
        <div class="recipe-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group" 
             data-meal-id="${recipe.id}" 
             data-index="${i}"> 
          <div class="relative h-48 overflow-hidden">
            <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="${recipe.thumbnail}" alt="${recipe.name}" loading="lazy" />
            <div class="absolute bottom-3 left-3 flex gap-2">
              <span class="px-2 py-1 bg-white/90 span backdrop-blur-sm text-xs font-semibold rounded-full text-gray-700">
                ${recipe.category}
              </span>
              <span class="px-2 py-1 bg-emerald-500 span2 text-xs font-semibold rounded-full text-white">
                ${recipe.area}
              </span>
            </div>
          </div>
          <div class="p-4">
            <h3 class="text-base font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1">
              ${recipe.name}
            </h3>
            <p class="text-xs text-Base2 text-gray-600 mb-3 line-clamp-2">
              ${recipe.instructions || "No instructions."}
            </p>
            <div class="flex items-center justify-between text-xs">
              <span class="font-semibold Name text-gray-900">
                <i class="fa-solid fa-utensils text-emerald-600 mr-1"></i> ${recipe.name}
              </span>
              <span class="font-semibold Area text-gray-500">
                <i class="fa-solid fa-globe text-blue-500 mr-1"></i> ${recipe.area}
              </span>
            </div>
          </div>
        </div>`;
      }

      if (recipeShow) {
        recipeShow.innerHTML = box;
      }

      const recipe_card = document.querySelectorAll(".recipe-card");
      for (let i = 0; i < recipe_card.length; i++) {
        recipe_card[i].addEventListener("click", () => {
          const index = recipe_card[i].getAttribute("data-index");
          const recipeData = new Recipe();
          recipeData.showRecipeDetails(recipesData[index]);
        });
      }
    } else {
      NoRecipe.classList.remove("loading");
      recipeShow.classList.add("loading");
    }
  }
}
