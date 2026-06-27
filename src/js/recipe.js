// export class Recipe {
//   constructor() {}

 
//   async getAllRecipes() {
//     const recipeShow = document.getElementById("recipes-grid");

//     let res = await fetch(
//       `https://nutriplan-api.vercel.app/api/meals/filter?category=beef&page=1&limit=25`,
//     );
//     let data1 = await res.json();
//     let res1 = data1.results;
//     let box = "";
//     for (let i = 0; i < res1.length; i++) {
//       box += ` <div 
//               class="recipe-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
//               data-meal-id="${res1[i].id}"
//             >
//               <div class="relative h-48 overflow-hidden">
//                 <img
//                   class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   src="${res1[i].thumbnail}"
//                   alt="${res1[i].name}"
//                   loading="lazy"
//                 />
//                 <div class="absolute bottom-3 left-3 flex gap-2">
//                   <span
//                     class="px-2 py-1 bg-white/90 span backdrop-blur-sm text-xs font-semibold rounded-full text-gray-700"
//                   >
//                    ${res1[i].category}
//                   </span>
//                   <span
//                     class="px-2 py-1 bg-emerald-500 span2 text-xs font-semibold rounded-full text-white"
//                   >
//                     ${res1[i].area}
//                   </span>
//                 </div>
//               </div>
//               <div class="p-4">
//                 <h3
//                   class="text-base font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1"
//                 >
//                   ${res1[i].name}
//                 </h3>
//                 <p class="text-xs text-Base2 text-gray-600 mb-3 line-clamp-2">
//                   ${res1[i].instructions}
//                 </p>
//                 <div class="flex items-center justify-between text-xs">
//                   <span class="font-semibold Name text-gray-900">
//                     <i class="fa-solid fa-utensils text-emerald-600 mr-1"></i>
//                    ${res1[i].name}
//                   </span>
//                   <span class="font-semibold Area text-gray-500">
//                     <i class="fa-solid fa-globe text-blue-500 mr-1"></i>
//                      ${res1[i].area}
//                   </span>
//                 </div>
//               </div>
//             </div>
//   `;
//       recipeShow.innerHTML = box;
//     }

//     const recipe_card = document.querySelectorAll(".recipe-card");
//     console.log(recipe_card);
//     for (let i = 0; i < recipe_card.length; i++) {

//       recipe_card[i].addEventListener("click", (e) => {
//         console.log(e, 500000);
//                 const index = recipe_card[i].getAttribute("data-index");
//         const mealId = recipe_card[i].getAttribute("data-meal-id");
// console.log(mealId);

//       });
//     }
//   }

//    getRecipe(index) {
//     console.log(5555, index);
    
//   }
// }


// export class Recipe {
//   constructor() {}

//   async getAllRecipes() {
//     const recipeShow = document.getElementById("recipes-grid");
//     let res = await fetch(
//       `https://nutriplan-api.vercel.app/api/meals/filter?category=beef&page=1&limit=25`,
//     );
//     let data1 = await res.json();
//     let res1 = data1.results;
//     let box = "";

//     for (let i = 0; i < res1.length; i++) {
      
//       box += `
//       <div class="recipe-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group" 
//            data-meal-id="${res1[i].id}" 
//            data-index="${i}"> 
//         <div class="relative h-48 overflow-hidden">
//           <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="${res1[i].thumbnail}" alt="${res1[i].name}" loading="lazy" />
//           <div class="absolute bottom-3 left-3 flex gap-2">
//             <span class="px-2 py-1 bg-white/90 span backdrop-blur-sm text-xs font-semibold rounded-full text-gray-700">
//               ${res1[i].category}
//             </span>
//             <span class="px-2 py-1 bg-emerald-500 span2 text-xs font-semibold rounded-full text-white">
//               ${res1[i].area}
//             </span>
//           </div>
//         </div>
//         <div class="p-4">
//           <h3 class="text-base font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1">
//             ${res1[i].name}
//           </h3>
//           <p class="text-xs text-Base2 text-gray-600 mb-3 line-clamp-2">
//             ${res1[i].instructions}
//           </p>
//           <div class="flex items-center justify-between text-xs">
//             <span class="font-semibold Name text-gray-900">
//               <i class="fa-solid fa-utensils text-emerald-600 mr-1"></i> ${res1[i].name}
//             </span>
//             <span class="font-semibold Area text-gray-500">
//               <i class="fa-solid fa-globe text-blue-500 mr-1"></i> ${res1[i].area}
//             </span>
//           </div>
//         </div>
//       </div>`;
//     }

//     recipeShow.innerHTML = box;

//     const recipe_card = document.querySelectorAll(".recipe-card");
    
//     // ربط الـ Event Listener بشكل صحيح للوصول للدالة داخل الكلاس
//     for (let i = 0; i < recipe_card.length; i++) {
//       recipe_card[i].addEventListener("click", (e) => {
//         // الحصول على الـ index المخزن في الـ HTML
//         const index = recipe_card[i].getAttribute("data-index");
//         const mealId = recipe_card[i].getAttribute("data-meal-id");
        
//         // استدعاء الدالة بنجاح باستخدام دالة السهم (Arrow Function) المحافظة على سياق this
//         this.getRecipe(index);
//         console.log("Meal ID:", mealId);
//       });
//     }
//   }

//   getRecipe(index) {
//     console.log(5555, index);
    
//   }

//  ShowMeal(Res) {
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
//  showMealsDetails(currentSrc, target) {
//   src.setAttribute("src", currentSrc);
//   console.log(target);
// }
// }

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

    search_filters_section.classList.add("loading");
    meal_categories_section.classList.add("loading");
    
    categoryElement.innerHTML=`${recipe.category}`;
    state.innerHTML=`${recipe.area}`;
    nameFood.innerHTML=`${recipe.name}`;

    src.setAttribute("src", recipe.thumbnail);
    
    const detailTitle = document.getElementById("detail-title");
    if (detailTitle) detailTitle.innerText = targetMeal.name;
  }
}
