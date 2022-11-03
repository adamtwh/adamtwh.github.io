$(function () { 
    count = 0; 
    wordsArray = ["painters", "plumbers", "electricians", "movers", "contractors", "technicians"]; 
    setInterval(function () { 
        count++; 
        $("#tagline").fadeOut(1000, function () { 
        $(this).text(wordsArray[count % wordsArray.length]).fadeIn(1000); 
        }); 
    }, 3000); 
});

function loginSwap() {
    loginHTML = `    <div class="middle container justify-content-center">
                        <div class="col-md-6">
                            <h4 class="text-header text-white">Sign in to your account</h4>
                            <form>
                                <div class="form-row" style="border-bottom: 1px solid var(--pri)">
                                    <input type="email" placeholder="Username or email address" class="form-control bg-transparent text-white text-wrap fw-bold">
                                </div>

                                <div class="form-row" style="border-bottom: 1px solid var(--pri)">
                                    <input type="password" placeholder="Password" class="form-control bg-transparent text-white fw-bold">
                                </div>

                                <div class="form-row">
                                    <a href="components/homepage/homepage.html">
                                    <button type="button" class="btn-login">
                                    Login
                                    <i class="bi bi-box-arrow-in-right"></i>
                                    </button>
                                    <a>
                                </div>

                                <a class="fw-bold" href="#">Forgot Password?</a>
                                <p class="fw-bold text-white">Don't have an account? <a href="#">Register here</a></p>
                            </form>
                        </div>
                    </div>
                `
    section = document.getElementById('loginSection')
    section.innerHTML = loginHTML
    return
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