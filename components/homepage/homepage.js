// for user welcome dynamic

function welcUser() {
    console.log("welcome")
    var curr_user = sessionStorage.getItem('user');
    console.log(curr_user);
    
    var to_replace = document.getElementById("welcUser");

    to_replace.innerText = `${curr_user}!`;
}

function signUserOut() {
    sessionStorage.setItem('user', '');
    window.location.href='../../index.html'
}

function sendService(id) {
    sessionStorage.setItem('service', id);
    console.log(sessionStorage.getItem('service'));
    window.location.href='../contractor/conpage.html'
}


// ----for contact form-----
const scriptURL = 'https://script.google.com/macros/s/AKfycbwizvOy5kTk8d4CNuqCH5VRZ4L70N7MmCoSt7aqiAjsfso5lhYKh6VdywkXDQ4AP0AVYQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function() {
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

let contact_popup = document.getElementById("submit-popup");

function openContactPopup() {
    contact_popup.classList.add("open-contact-popup");
}

function closeContactPopup() {
    contact_popup.classList.remove("open-contact-popup");
}