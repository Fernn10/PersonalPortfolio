
import { films } from '../data/films.js'
import { getLastNumber} from '../utils/index.js'

let filmList = document.querySelector('#filmList')


for (let i = 0; i < films.length; i++) {

    //console.log(`The loop counter is: ${i} while the film episode id is
    //: ${films[i].episode_id}`)
    //let lastNum = getLastNumber(films[i].url)
    const foundFilm = films.find(film => getLastNumber(film.url) === (i + 1).toString())
    let postFig = document.createElement("figure")
    let figImg = document.createElement("img")
    figImg.src = `https://starwars-visualguide.com/assets/img/films/${i + 1}.jpg`
    let figCaption = document.createElement("figcaption")

    figCaption.textContent = foundFilm.title
    postFig.appendChild(figImg)
    postFig.appendChild(figCaption)

    filmList.appendChild(postFig)

}

