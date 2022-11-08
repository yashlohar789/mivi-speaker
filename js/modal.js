const openModal=document.querySelector(".user");
const closeModal=document.querySelector(".close");
const modal=document.querySelector(".modal-section");

openModal.addEventListener("click",function(){
            
        modal.style.display="block";
});

closeModal.addEventListener("click",function(){
            
    modal.style.display="none";
});