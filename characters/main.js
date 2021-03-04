import { people } from '../data/people.js'

const mainElement = document.querySelector("#main")

people.forEach((person) => {

    const charFigure = document.createElement("figure")
    const charImg = document.createElement("img")
    charImg.src = 'https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg'
    const charCaption = document.createElement('figcaption')
    charCaption.textContent = person.name

    charFigure.appendChild(charImg)
    charFigure.appendChild(charCaption)

    mainElement.appendChild(charFigure)
})