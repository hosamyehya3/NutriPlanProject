export class Category {
  constructor(plan) {
    this.plan = plan;
  }

  async getDataAllCategory() {
    const showCatgory = document.getElementById("meal-categories-section");

    try {
      let res = await fetch(
        "https://nutriplan-api.vercel.app/api/meals/categories",
      );
      let data = await res.json();
      let res2 = data.results;
      let arr = [...res2];
      let neres = arr.splice(-2, 2);
      let box = "";

      for (let i = 0; i < arr.length; i++) {
        box += `
        
           <div
              class="category-card fit  bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-3 border border-emerald-200 hover:border-emerald-400 hover:shadow-md cursor-pointer transition-all group"
              data-category="${arr[i].name}"
            >
              <div class="flex  items-center gap-2.5">
                <div
                  class="text-white w-9 h-9 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm"
                >
                  <i class="fa-solid fa-drumstick-bite"></i>
                </div>
                <div>
                  <h3 class="text-sm change font-bold text-gray-900">${arr[i].name}</h3>
                </div>
              </div>
            </div>
        `;
      }
      showCatgory.innerHTML = box;
      const categorycard = document.querySelectorAll(".category-card");
      for (let i = 0; i < categorycard.length; i++) {
        categorycard[i].addEventListener("click", (e) => {
          let innerText = e.target.innerText;
          this.getCategoryData(innerText);
        });
      }
    } catch (error) {
      // console.log(error);
    }
  }

  async getCategoryData(category) {
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    );
    const data = await res.json();
    const meals = data.meals;

    this.plan.displayRecipes(meals);
  }
}
