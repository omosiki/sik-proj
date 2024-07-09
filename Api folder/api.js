document.addEventListener('DOMContentLoaded', async function ()  {
    const breedsList = document.getElementById('breedList')
    const modal = document.getElementById('modal')
    const modalContent = document.getElementById('modal-content')
    try{
        const url = 'https://api.thecatapi.com/v1/breeds'
        const responce = await fetch(url)
        // console.log(responce)
        const catBreed = await responce.json()
        catBreed.forEach((breed) => {
            const breedElement = document.createElement('div')
            breedElement.classList.add('breed')
        breedElement.innerHTML = `
        <h3>Name${breed.name}</h3>
        <p> Origin${breed.origin}</p>
        <p>Temperament ${breed.temperament}</p>
        <p>${breed.vetstreet_url}</p
        `
        breedElement.addEventListener('click', () => {
          showModal(breed)
        })
        breedsList.appendChild(breedElement)
        })
        

    } catch (err) {
              console.error(err)
            }



function showModal(breed){
const modalDetails = `<span class="close">&times;</span>
<h2>${breed.name}</h2>
<h2>${breed.origin}</h2>
<div class="breed-image">

</div>
<p>Description :${breed.description}</p>
<p> Temperament :${breed.temperament}</p>
<p>${breed.experimental}</p>
<p>${breed.grooming}</p>
<p>${breed.hairless}</p>
<p>${breed.intelligence}</p>
<p>${breed.lap}</p>

` 
modalContent.innerHTML = modalDetails
modal.style.display = 'block'

const closeBtn = document.querySelector('.close')
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})
window.onclick = (e) => {
 if(e.target === modal){
   modal.style.display = 'none'
 }
}

setTimeout(() => {
    modal.style.display = 'none'
},5000);
}
});