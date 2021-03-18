import { people } from '../data/people.js'
import { getLastNumber, removeChildren} from '../utils/index.js'

const mainElement = document.querySelector("#main")

const mainHeader = document.createElement("header")

document.body.insertBefore(mainHeader, mainElement)

const maleButton = document.createElement("button")
maleButton.textContent = "Male Characters"
mainHeader.appendChild(maleButton)
maleButton.addEventListener("click", () => {populateDOM(maleCharacters)})

const maleCharacters = people.filter(person => person.gender === "male")

//TODO: include a gender-none

function populateDOM(characters){
    removeChildren(mainElement) 
    characters.forEach((person) =>  {
    const charFigure = document.createElement("figure")
    const charImg = document.createElement("img")
    let charNum = getLastNumber(person.url)
    charImg.src = 'https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg'
    const charCaption = document.createElement('figcaption')
    charCaption.textContent = person.name

    charFigure.appendChild(charImg)
    charFigure.appendChild(charCaption)

    mainElement.appendChild(charFigure)
})
}

