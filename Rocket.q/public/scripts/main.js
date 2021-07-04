import Modal from './modal.js'

const modal = Modal() 

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector ('.modal p')
const modalButton = document.querySelector('.modal button')

//Pegar os botões do index
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button =>{
    //adicionar o listen
    button.addEventListener("click", handleClick)
})

/* botão delete acionado */

const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach (button => {
    button.addEventListener("click", (event) => handleClick (event, false))
})

function handleClick (event, check = true) {
    event.preventDefault()

    /* abrir modal */
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id
    
    const form = document.querySelector(".modal form")

    
    form.setAttribute("action", `/room/${roomId}/${questionId}/${slug}/`)


    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = check ? "Marcar como lida esta pergunta?" : "Tem certeza que deseja excluir esta pergunta?"
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    
    check? modalButton.classList.remove("red") : modalButton.classList.add("red")
    
    modal.open ()
}

