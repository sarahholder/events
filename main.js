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
    instructor: "Zoe"
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

const pieBuilder = (monkeybuttArray) => {
     let domString = '';
     for(let i = 0; i < monkeybuttArray.length; i++)
     {
         domString += `<div class = 'card'><h3 class= "header"> ${monkeybuttArray[i].name}</h3>`;
         domString += `<img src= "${monkeybuttArray[i].imageURL}" alt= "A picture of ${pies[i].name}"></<img>`;
         domString += `<p> Price: $${monkeybuttArray[i].price}</p>`;
         domString += `<p> Warm Pie: ${monkeybuttArray[i].isWarm}</p>`;
         domString += `<p> Organic: ${monkeybuttArray[i].isOrganic}</p>`;
         domString += `<p> Crust: ${monkeybuttArray[i].crust}</p>`;
         domString += `<p> Ice Cream: ${monkeybuttArray[i].iceCream}</p>`;
         domString += `<p> Available: ${monkeybuttArray[i].isAvailable}</p>`;
         domString += `<p> Pairing Drink: ${monkeybuttArray[i].drinkPairing}</p>`;
         domString += `<p> Instructor: ${monkeybuttArray[i].instructor}</p>`;     
         domString += `</div>`;
     }
     printToDom('pieFlavors', domString);

    };


const findMyPies = (e) =>{
    const buttonId = e.target.id;
    const myPies = [];
    for(let i = 0; i < pies.length; i++){
        if(pies[i].instructor === buttonId){
        myPies.push(pies[i]);
    }
    pieBuilder(myPies);
}
};

pieBuilder(pies);

document.getElementById('Zoe').addEventListener('click', findMyPies);
document.getElementById('Mary').addEventListener('click', findMyPies);
document.getElementById('Luke').addEventListener('click', findMyPies);
document.getElementById('Sarah').addEventListener('click', findMyPies);

