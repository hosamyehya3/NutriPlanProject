export class Country {
  constructor(plan) {
    this.plan = plan;
  }

  async getAllCountrys() {
    const showCountry = document.querySelector(".countrys");

    let res = await fetch(
      "https://nutriplan-api.vercel.app/api/meals/areas",
    );
    let data = await res.json();
    
    let arryOfCountrys = data.results;

    let newArrayConutrys = arryOfCountrys.slice(0, 8);
    let box = "";

    for (let i = 0; i < newArrayConutrys.length; i++) {
      box += `
           <button 
              class="country px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium text-sm whitespace-nowrap hover:bg-gray-200 transition-all"
            >
             ${newArrayConutrys[i].name}
             </button>
             `;

      showCountry.innerHTML = box;
      const countrys = document.querySelectorAll(".country");

      for (let i = 0; i < countrys.length; i++) {
        countrys[i].addEventListener("click", (e) => {
          const innerText = e.target.innerText;
          this.getCountryRecipes(innerText);
        });
      }
    }
  }

  async getCountryRecipes(country) {

    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`,
    );
    const data = await res.json();
    const meals = data.meals;
    this.plan.displayRecipes(meals);
  }

  getallRecipeAgain() {
    const recipeShow = document.getElementById("recipes-grid");
    const NoRecipe = document.getElementById("NoRecipe");

    NoRecipe.classList.add("loading");
    recipeShow.classList.remove("loading");
  }
}
