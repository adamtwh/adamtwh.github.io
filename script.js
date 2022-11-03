const firebaseConfig = {
    apiKey: "AIzaSyAgc4cPFAh8WSRRq-_vmNHhn_eu1oJrUd4",
    authDomain: "ttj-7-7cd30.firebaseapp.com",
    databaseURL: "https://ttj-7-7cd30-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ttj-7-7cd30",
    storageBucket: "ttj-7-7cd30.appspot.com",
    messagingSenderId: "907698280256",
    appId: "1:907698280256:web:529dcb3bdd2673f0360ca5",
    measurementId: "G-RJ3J8HV2SH"
};

firebase.initializeApp(firebaseConfig);

    var users = firebase.database().ref('users');
    users.on('child_added', (snapshot) =>{
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        document.getElementById("latest").innerText = "Last user registered at " + today;
});

function loginIfUserExists(userId, userEmail) {
    var user = firebase.database().ref('users/' + userId);
    var email = firebase.database().ref('users/' + userId + "/" + 'email');

    user.once('value').then((snapshot1) => {
        email.once('value').then((snapshot2) => {
            if(snapshot1.exists() && snapshot2.exists()) {
                        window.location.href='components/homepage/homepage.html'
            }
            else {
                document.getElementById("status").innerText = "Login Details are incorrect!";
            }
        })
        
    });
}



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
                                    <input id="id" type="text" placeholder="Username or email address" class="form-control bg-transparent text-white text-wrap fw-bold">
                                </div>

                                <div class="form-row" style="border-bottom: 1px solid var(--pri)">
                                    <input id="email" type="password" placeholder="Password" class="form-control bg-transparent text-white fw-bold">
                                </div>

                                <div class="form-row">
                                    

                                    <button type="button" class="btn-login" onclick="loginIfUserExists(document.getElementById('id').value, document.getElementById('email').value)">
                                        Login <i class="bi bi-box-arrow-in-right"></i>
                                    </button>

                                </div>

                                <a class="fw-bold" href="#">Forgot Password?</a>
                                <p class="fw-bold text-white">Don't have an account? <a href="#">Register here</a></p>
                                <p id="status" style="color: red;"></p>
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