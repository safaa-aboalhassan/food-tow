var sear = location.search;
var i = sear.replace('?s=', '');
var postG = document.getElementById('postG');

async function fetchData() {
    try {
        var connect = await import("./API/connect.js");
        var { meals } = await connect.default(`https://www.themealdb.com/api/json/v1/1/search.php?s=${i}`);
        console.log(meals);

        meals.forEach(item => {
            var { strYoutube,strInstructions,strMealThumb, strMeal,strArea,strIngredient,strIngredient1,strIngredient2,strIngredient3,strIngredient4} = item;
            console.log(strIngredient,strIngredient1,strIngredient2,strIngredient3,strIngredient4);
            var preview = `
            <div class="col-3">
            <img class="img-fluid rounded-3 w-100" src="${strMealThumb}" alt="">
           </div>
           <div class="col-9">
                            <h5 class="card-title  text-white"><span class="fw-bold text-info-emphasis maincolor">name:</span><br>${strMeal}</h5>
                            <p class=" fs-5 mt-2  text-white"><span class="fw-bold text-info-emphasis maincolor">Area:</span><br> ${strArea}</p>
                            <p class="text-white"><span class="fw-bold text-info-emphasis maincolor">About:</span><br> ${strInstructions}</p>
                            <p class="m-auto text-white">
                                <span class="fs-4 m-auto text-info-emphasis maincolor">Components:</span><br>
                                ${strIngredient1} , ${strIngredient2} , ${strIngredient3} , ${strIngredient4}
                            </p>
                           <a href="${strYoutube}"  target="_blank" class="btn  btn-warning">watch on youtybe</a>
                        </div>`;
            postG.insertAdjacentHTML("beforebegin", preview);
        });
    } catch (error) {
        console.error(error);
    }
}

fetchData();
// =========================search===============================================

