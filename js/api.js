
import connect from "./API/connect.js";
var {categories}= await connect('https://www.themealdb.com/api/json/v1/1/categories.php')
 console.log(categories);
        
        for (const item of categories) {
          var{strCategory,strCategoryThumb,strCategoryDescription}=item;
          console.log(strCategory,strCategoryThumb)
            var preview = ``;
            document.getElementById('post').insertAdjacentHTML('afterbegin',`  <div class="col-2" style="width: 18rem;">
                   
            <div class="card-body px-1 py-3 ">
            <div class="f">
            <a href="menu.html?c=${strCategory}">
            <div class="overlay">
            
           
            <h5 class="card-title center m-2 text-black">${strCategoryDescription.substr(0,70)}</h5>
            
            </div>
             <img src="${strCategoryThumb}" class=" w-100" alt="...">
             
             </a>
          </div>
          </div>

          
                
            </div>
            
             
          
          </div>`);
           
        }
       