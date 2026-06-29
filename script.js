//Contact Form Validation
document.getElementById("sendBtn").addEventListener("click",function(){
    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    let message = document.getElementById("messageInput").value;

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");

    //clear previous error
    nameError.innerText = "";
    emailError.innerText = "";
    messageError.innerText = "";

    let isValid = true;

    if(name ===""){
        nameError.innerText = "Please enter your name";
        isValid = false;
    }
    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        emailError.innerText = "Please enter a valid email";
        isValid = false;
    }

    if(message === ""){
        messageError.innerText = "Please enter a message";
        isValid = false;
    }

    if(isValid){
        alert(`Thanks, ${name}! I'll get back to you soon 🚀`);
        document.getElementById("nameInput").value = "";
        document.getElementById("emailInput").value = "";
        document.getElementById("messageInput").value = "";
    }


});
// Scroll
function revealOnScroll(){
    let elements = document.querySelectorAll(".reveal");
    for(let i=0; i < elements.length;i++){
        let windowHeight = window.innerHeight;
        let elementTOp = elements[i].getBoundingClientRect().top;
        let elementVisible = 100;

        if(elementTOp < windowHeight - elementVisible){
            elements[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll",revealOnScroll);

//scroll spy logic
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

function highlightNav(){
    let scrollY = window.pageYOffset;

    sections.forEach(section =>{
        let sectionTop = section.offsetTop -150;
        let sectionHeight = section.offsetHeight;
        let sectionId = section.getAttribute("id");

        if(scrollY >= sectionTop && scrollY < sectionTop +sectionHeight){
            navLinks.forEach(link =>{
                link.classList.remove("active");
                if(link.getAttribute("href") === "#" + sectionId){
                    link.classList.add("active");
                }
            });
        }
    }); 
}
window.addEventListener("scroll",highlightNav);

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeToggle.textContent = "☀️";
    }
    else{
        themeToggle.textContent = "🌙";
    }
});