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

const femaleButton = document.createElement("button")
femaleButton.textContent = "Female Characters"
mainHeader.appendChild(femaleButton)
femaleButton.addEventListener("click", () => {populateDOM(femaleCharacters)})

const femaleCharacters = people.filter(person => person.gender === "female")

const otherButton = document.createElement("button")
otherButton.textContent = "Other"
mainHeader.appendChild(otherButton)
otherButton.addEventListener("click", () => {populateDOM(otherCharacters)})

const otherCharacters = people.filter(person => person.gender === "n/a")



function populateDOM(characters){
    removeChildren(mainElement) 
    characters.forEach((person) =>  {
    const charFigure = document.createElement("figure")
    const charImg = document.createElement("img")
    let charNum = getLastNumber(person.url)
    charImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
    const charCaption = document.createElement('figcaption')
    charCaption.textContent = person.name

    charFigure.appendChild(charImg)
    charFigure.appendChild(charCaption)

    mainElement.appendChild(charFigure)
})
}

