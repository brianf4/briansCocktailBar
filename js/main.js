document.querySelector('.getDrinkButton').addEventListener('click', getDrink)

function getDrink(){
let drinks = document.querySelector('input').value
fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinks}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('.nameOfDrink').innerText = data.drinks[0].strDrink
      document.querySelector('.grabDrinkPic').src = data.drinks[0].strDrinkThumb

    })
    .catch(err => {
        console.log(`error ${err}`)
    });
    document.querySelector('.here').classList.toggle('hidden')
}
// const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'

// fetch(url)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       console.log(data.drinks[0].strDrinkThumb)
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });
