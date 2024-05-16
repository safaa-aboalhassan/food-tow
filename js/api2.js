// var serch = location.search;
// var i = serch.replace('?c=','');
// var postG = document.getElementById('postG');
// console.log(i)
// import connect from "./API/connect.js";
// var {meals}= await connect('https://www.themealdb.com/api/json/v1/1/filter.php?c=${i}')
//  console.log(meals);

//         for (const item of meals) {
//           var {strMeal,strMealThumb} = item;
//           console.log(strMeal,strMealThumb)
//             var preview = ``;
//             preview +=`<div class="card" style="width: 18rem;">
//             <img src="${strMealThumb}" class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">${strMeal}</h5>
//               <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//           </div>`;
//           postG.insertAdjacentHTML("beforebegin",preview);
//         }
       

var search = location.search;
var i = search.replace('?c=', '');
var postG = document.getElementById('postG');
var h=document.getElementById('header');
h.innerHTML=`${i}`;
async function fetchData() {
    try {
        var connect = await import("./API/connect.js");
        var { meals } = await connect.default(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${i}`);
        console.log(meals);

        meals.forEach(item => {
            var { strMeal, strMealThumb } = item;
            console.log(strMeal, strMealThumb);
            var preview = `
                <div class="col-2" style="width: 18rem;">
                   
                    <div class="card-body px-1 py-3 ">
                       
                    <div class="f">
                    <a href="all food.html?s=${strMeal} " claa="w-100" >
                    <div class="overlay">
                    
                   
                    <h5 class="card-title center">${strMeal}</h5>
                    
                    </div>
                     <img src="${strMealThumb}" class=" w-100" alt="...">
                     
                     </a>
                  </div>
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

        
        