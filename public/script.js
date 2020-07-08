const modal = document.querySelector('#modal')
const cards = document.querySelectorAll (".card")

document.querySelector('.modal-content a').addEventListener('click', function(){
    modal.classList.remove('active')
})

for (let card of cards){
    card.addEventListener('click', function(){
        const infoCard = card.querySelector('.info-card')
        let title = infoCard.querySelector('h3').innerHTML
        let author = infoCard.querySelector('p').innerHTML
        let img = card.querySelector('img').src

        function renderData(title, author, img){    
            const content = modal.querySelector('.modal-content')
            content.querySelector('h3').innerHTML = title
            content.querySelector('p').innerHTML = author
            content.querySelector('img').src = img
        }

        renderData(title, author, img)

        modal.classList.add('active')
    })
    
}
