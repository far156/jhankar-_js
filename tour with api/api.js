const loadSingleUser=()=>{
    fetch('https://randomuser.me/api/')
    .then(res=>res.json())
    .then(data=>displaySingleUser(data))
}
loadSingleUser();

const displaySingleUser=user=>{
console.log(user);
}

const loadMeals=searchText=>{
    const url=`www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>console.log(data.meals))
}

const diplayMeals=meals=>{
    const container=document.getElementById('meals')
    meals.forEach(meal=>{
        document.createElement('div');
        div.innerHtml=`
        <h1>${meal.strMeal}<h1/>
       <button>clickme=loadMealDetail${meal.strMeal}</button>`;

    })
    container.appendChild(div);

}

loadMeals('fish');
const loadMealDetail=mealName=>{
    console.log()
}