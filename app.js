//  API URL https://api.punkapi.com/v2/beers

// You will make GET Request to this URL using FETCH and get data then showcase it on the Webpage thats it

// Terms to Search on Google

// How to make GET request using FETCH 
// how to use FETCH in JavaScript


// If you got stuck 
// i am here to help just post on slack channel
// good luck team
document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector('.beer-button')
    const randomBeer = document.querySelector('.random-beer')
    const descriptionDisplay = document.querySelector('.description')
    function getData(e){
        e.preventDefault()
        
    fetch('https://api.punkapi.com/v2/beers/random')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        const name = data[0].name
        const description = data[0].description
        const {volume} = data[0]
        const volumeValue = volume.volumeValue
        const volumeUnit = volume.unit

        randomBeer.innerHTML = name + ' '+volumeValue + volumeUnit
        descriptionDisplay.innerHTML = description

    })
}
 startBtn.addEventListener('click', getData)

})
