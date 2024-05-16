var sear = location.search;
var i = sear.replace('?a=', '');
var postG = document.getElementById('postG');

async function fetchData() {
    try {
        var connect = await import("./API/connect.js");
        var { meals } = await connect.default(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${i}`);
        console.log(meals);

        meals.forEach(item => {
            var {strMeal,strMealThumb } = item;
            console.log(strMeal,strMealThumb);
            var preview = `
            <div class="col-2" style="width: 18rem;">
                   
                    <div class="card-body px-1 py-3 ">
                       
                    <div class="f">
                    
                    <div class="overlay">
                   
                    <h5 class="card-title center">${strMeal}</h5>
                    
                    </div>
                    <a href="all food.html?s=${strMeal}" ><img src="${strMealThumb}" class=" w-100" alt="..."></a>
                     
                   
                  
                  </div>

                       
                        
                    </div>
                </div>`;
            postG.insertAdjacentHTML("beforebegin", preview);
        });
    } catch (error) {
        console.error(error);
    }
}

fetchData();