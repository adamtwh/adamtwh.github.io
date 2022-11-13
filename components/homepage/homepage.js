// for user welcome dynamic

function welcUser() {
    checkifUserisLoggedIn();
    
    console.log("welcome")
    var curr_user = sessionStorage.getItem('user');
    console.log(curr_user);
    
    var to_replace = document.getElementById("welcUser");
    curr_user = curr_user.charAt(0).toUpperCase() + curr_user.slice(1);

    to_replace.innerText = `${curr_user}`;
}

function checkifUserisLoggedIn() {
    if (sessionStorage.getItem('user') == null || sessionStorage.getItem('user') == "") {
        window.location.href='../../index.html'
    }
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

function sendContractor(id) {
    sessionStorage.setItem('booking_contractor', id);
    console.log(sessionStorage.getItem('booking_contractor'));
    window.location.href='../AhBeng/ahbeng.html'
}


// ----for contact form-----
const scriptURL = 'https://script.google.com/macros/s/AKfycbwizvOy5kTk8d4CNuqCH5VRZ4L70N7MmCoSt7aqiAjsfso5lhYKh6VdywkXDQ4AP0AVYQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault();

    grecaptcha.ready(function() {
        grecaptcha.execute('6LfGFQIjAAAAAJm-kH4OKEImTo3Brw-jdGPQmiwH', {action: 'submit'}).then(function(token) {
            // Add your logic to submit to your backend server here.
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    msg.innerHTML = "Message sent successfully"
                    setTimeout(function() {
                        msg.innerHTML = ""
                    }, 5000)
                    form.reset()
                })
                .catch(error => console.error('Error!', error.message))
        });
    });
})