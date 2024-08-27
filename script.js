document.addEventListener("DOMContentLoaded", function() {
    const typedText = document.getElementById("typed-text");
    const text = "Micheal";
    let index = 0;

    function type() {
        if (index < text.length) {
            typedText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust typing speed here
        } else {
            typedText.classList.add('done'); // Add the 'done' class after typing is complete
        }
    }

    typedText.textContent = ''; // Clear the text content initially
    type();
});


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
   for(tablink of tablinks){
       tablink.classList.remove("active-link");
   }
   for(tabcontent of tabcontents){
       tabcontent.classList.remove("active-tab");
   }
   event.currentTarget.classList.add("active-link");
   document.getElementById(tabname).classList.add("active-tab")
}

/*  Responsive font  */
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}


/*                contact                      */
const scriptURL = 'https://script.google.com/macros/s/AKfycbyEJAw6A8DMnFV7L8-27fJExp7UgUi_QdvHhZH6TDEEoKmzSq3PurDKHn2QK3WOMb-u/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
/*  alert("Welcome To My Portfolio")  */

/* Back to top */
window.onscroll = function() {
    const backToTop = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};


/*    Social media    */
document.querySelectorAll('.social-icons a').forEach(link => {
    link.setAttribute('target', '_blank');
});
