export default function Modal (){

    const modalCard = document.querySelector('.modal-card')
    
    const cancelButton = document.querySelector('.button.cancel')
    cancelButton.addEventListener("click", close)
    
    
    function open(){
        //funcionalidade de atribuir a classe active para a modal. 
        modalCard.classList.add("active")
        
    }
    function close (){
        // funcionalidade de remover a classe active da modal 
        modalCard.classList.remove("active")
        

    }

    return {
        open,
        close
    }
}