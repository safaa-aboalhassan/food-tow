import connect from "./API/connect.js";
var {meals}= await connect('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
 console.log(meals);
        
        for (const item of meals) {
          var{strArea}=item;
          console.log(strArea)
            var preview = ``;
            document.getElementById('Area').insertAdjacentHTML('beforebegin',` <div class="col-3" style="width: 18rem;">
            
             <a href="farea.html?a=${strArea}" class="text-decoration-none"><i class="fa-solid fa-location-dot fs-3 maincolor"></i><h5 class="fs-4 maincolor">${strArea}</h5></a>
            <div class="card-body">
              
             
            </div>
          </div>`);
           
        }

        // -----------------------
      