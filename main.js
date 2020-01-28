const pies = [
{
    name: "Dutch Apple Pies",
    price: 1000,
    isWarm: true,
    isOrganic: true,
    crust: "extra flaky",
    iceCream: "Vanilla Bean",
    isAvailable: true,
    imageURL: "https://www.cookingclassy.com/wp-content/uploads/2019/11/dutch-apple-pie-4-600x904.jpg",
    drinkPairing: "whiskey",
    instructor: "Zoe"
},
{
    name: "Regular Apple Pies",
    price: 5000,
    isWarm: true,
    isOrganic: true,
    crust: "under baked",
    iceCream: "Vegan Chocolate",
    isAvailable: false,
    imageURL: "https://www.spendwithpennies.com/wp-content/uploads/2018/09/SpendWithPennies-Apple-Pie-Recipe-31.jpg",
    drinkPairing: "wine",
    instructor: "Mary"
},
{
    name: "Pizza",
    price: 2.5,
    isWarm: true,
    isOrganic: false,
    crust: "pan",
    iceCream: "none",
    isAvailable: false,
    imageURL: "https://www.thegraciouspantry.com/wp-content/uploads/2016/11/clean-eating-pizza-pie-h-1-.jpg",
    drinkPairing: "high life",
    instructor: "Luke"
},
{

    name: "chocolate",
    price: 5,
    isWarm: true,
    isOrganic: true,
    crust: "graham",
    iceCream: "mint",
    isAvailable: true,
    imageURL: "https://tastesbetterfromscratch.com/wp-content/uploads/2016/06/Chocolate-Cream-Pie-8.jpg",
    drinkPairing: "Gin",
    instructor: "Mary"
},
{
    name: "Pi",
    price: 3.15,
    isWarm: false,
    isOrganic: true,
    crust: "crumb",
    iceCream: "moose tracks",
    isAvailable: true,
    imageURL: "https://www.epicurus.com/food/recipes/wp-content/uploads/2015/03/Pi-Day.jpg",
    drinkPairing: "milk",
    instructor: "Luke"
},
{
    name: "Pumkin",
    price: 12.17,
    isWarm: false,
    isOrganic: true,
    crust: "graham",
    iceCream: "vanilla",
    isAvailable: true,
    imageURL: "https://www.weightwatchers.com/images/1033/dynamic/foodandrecipes/2012/10/pumpkinpiegrahamcrust_129_xl.jpg",
    drinkPairing: "coffee",
    instructor: "Sarah"
},
{
    name: "sheperds",
    price: 8.99,
    isWarm: true,
    isOrganic: false,
    crust: "cresent roll",
    iceCream: "none",
    isAvailable: true,
    imageURL: "https://www.theblackpeppercorn.com/wp-content/uploads/2014/05/Skillet-Shepherds-Pie-Featured-700x394.jpg",
    drinkPairing: "sweet tea",
    instructor: "Sarah"
},
];
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;  
};

console.log('pies', pies);

const pieBuilder = () => {
     let domString = '';
     for(let i = 0; i < pies.length; i++)
     {
         domString += `<div class = 'card'><h3 class= "header"> ${pies[i].name}</h3>`;
         domString += `<img src= "${pies[i].imageURL}" alt= "A picture of ${pies[i].name}"></<img>`;
         domString += `<p> Price: $${pies[i].price}</p>`;
         domString += `<p> Warm Pie: ${pies[i].isWarm}</p>`;
         domString += `<p> Organic: ${pies[i].isOrganic}</p>`;
         domString += `<p> Crust: ${pies[i].crust}</p>`;
         domString += `<p> Ice Cream: ${pies[i].iceCream}</p>`;
         domString += `<p> Available: ${pies[i].isAvailable}</p>`;
         domString += `<p> Pairing Drink: ${pies[i].drinkPairing}</p>`;
         domString += `<p> Instructor: ${pies[i].instructor}</p>`;     
         domString += `</div>`;
     }
     printToDom('pieFlavors', domString);

    };



pieBuilder();

