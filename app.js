const url = 'https://api.punkapi.com/v2/beers/'
const beers = document.querySelector('.card-deck')

fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(response){
    let beerArray = response
    beerArray.filter(beer => beer.id <= 3 && beer.id >= 1).map(function(beer) {
      let li = createNode('li'),
            name = createNode('h1'),
            img = createNode('img'),
            div = createNode('div'),
            p = createNode('p')
            dropdown = createNode('div')
            button = createNode('button')
            linkDiv = createNode('div')
            alcohol = createNode('a')
            bitterness = createNode('a')
            pairing = createNode('a')
            newText = createNode('p')
            li.classList.add('card')
            img.classList.add("card-img-top")
            div.classList.add("card-body")
            p.classList.add("card-text")
            dropdown.classList.add('dropdown')
            name.textContent = `${beer.name}`
            button.setAttribute("class", "btn btn-secondary dropdown-toggle")
            button.setAttribute("id", "dropdownMenuButton")
            button.setAttribute("data-toggle", "dropdown")
            button.textContent = `More`
            linkDiv.classList.add('dropdown-menu')
            img.src = beer.image_url
            p.textContent = `${beer.description}`
            alcohol.classList.add('dropdown-item')
            alcohol.textContent = `ABV`
            bitterness.textContent = `IBU`
            pairing.textContent = `Suggested Pairing`
            bitterness.classList.add('dropdown-item')
            pairing.classList.add('dropdown-item')
            appendNode(beers, li)
            appendNode(li, name)
            appendNode(li, img)
            appendNode(li, div)
            appendNode(div, p)
            appendNode(li, dropdown)
            appendNode(dropdown, button)
            appendNode(dropdown, linkDiv)
            appendNode(linkDiv, alcohol)
            appendNode(linkDiv, bitterness)
            appendNode(linkDiv, pairing)
            appendNode(dropdown, newText)
            alcohol.addEventListener('click', updateText)
            function updateText (event) {
              event.preventDefault()
              let text = event.target.textContent
              if (text === `ABV`) {
                newText.textContent = `${beer.abv}`
              }
            }


    })
  })

function createNode (element) {
    return document.createElement(element)
}

function appendNode (parent, element) {
    return parent.appendChild(element)
}
