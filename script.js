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
    // document.getElementById("latest").innerText = "Last user registered at " + today;
});

function loginIfUserExists(userId, pwd) {

    // var user = firebase.database().ref('users/' + userId);
    // var password_user = firebase.database().ref('users/' + userId + "/" + "password");

    // var login_user = false;

    // user.once('value').then((snapshot1) => {
    //         if(snapshot1.exists()) {
    //             console.log("user exists!")
    //             login_user = true;
    //         }
    //         else {
    //             console.log("user does not exist!")
    //             document.getElementById("status").innerText = "Sorry, user does not exist!";
    //         }
    // });

    // password_user.on('value', (snapshot2) => {
    //     var password_user_value = snapshot2.val();
    //     console.log(password_user_value);
    //     if (password_user_value == pwd) {
    //         console.log("password matches!")
    //         login_user = true;
    //     } else {
    //         console.log("password does not match!")
    //         login_user = false;
    //     }
    // });

    // window.setTimeout(goNextUser(login_user), 0);

    var user = firebase.database().ref('users');
    var userid_validation = false;
    var password_validation = false;

    user.on('value', (snapshot) => {
        for (key in snapshot.val()) {
            var user_id = key;
            var user_details = snapshot.val()[key];

            if (user_id == userId && user_details.password == pwd) {
                user_logged_id = user_id
                userid_validation = true;
                password_validation = true;

            } else if (user_id == userId && user_details.password != pwd) {
                userid_validation = true;
            }
        }

        if (userid_validation == true && password_validation == true) {
            console.log("both user and password matches!")
            goNextUser(user_logged_id);
        } else if (userid_validation == true && password_validation == false) {
            console.log("user exists, but password does not match")
            document.getElementById("status").innerText = "Sorry, your password was incorrect. \n Please double-check your password.";
        } else {
            console.log("user does not exist!")
            document.getElementById("status").innerText = "Sorry,user does not exist!";
        }
    })
}

function goNextUser(user_id) {
    sessionStorage.setItem('user', user_id);
    window.location.href='components/homepage/homepage.html'
}

function loginIfContractorExists(userId, pwd) {

    var contractor = firebase.database().ref('contractors');
    var userid_validation = false;
    var password_validation = false;

    contractor.on('value', (snapshot) => {
        for (key in snapshot.val()) {
            var contractor_id = key;
            var contractor_details = snapshot.val()[key];

            if (contractor_id == userId && contractor_details.password == pwd) {
                var contractor_name = contractor_details.name;
                userid_validation = true;
                password_validation = true;

            } else if (contractor_id == userId && contractor_details.password != pwd) {
                userid_validation = true;
            }
        }

        if (userid_validation == true && password_validation == true) {
            console.log("both user and password matches!")
            goNextContractor(contractor_name);
        } else if (userid_validation == true && password_validation == false) {
            console.log("contractor exists, but password does not match")
            document.getElementById("status").innerText = "Sorry, your password was incorrect. \n Please double-check your password.";
        } else {
            console.log("contractor does not exist!")
            document.getElementById("status").innerText = "Sorry, contractor does not exist!";
        }
    })
}

function goNextContractor(contractor_name) {
    sessionStorage.setItem('contractor', contractor_name);
    window.location.href='components/booking/booking_contractor.html'
}


// changing words
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

// login form on button click
function loginSwap() {
    loginHTML = `    <div class="middle container justify-content-center">
                        <div class="col-md-6">
                        <h4 class="text-header text-white">Log in to get started</h4>
                            <form>
                                <div class="form-row" style="border-bottom: 1px solid var(--sec2)">
                                    <input id="id" type="text" placeholder="Username or email address" class="form-control bg-transparent text-white text-wrap fw-bold">
                                </div>

                                <div class="form-row" style="border-bottom: 1px solid var(--sec2)">
                                    <input id="password" type="password" placeholder="Password" class="form-control bg-transparent text-white fw-bold">
                                </div>

                                <div class="form-row">
                                    

                                    <button type="button" class="btn-login" onclick="loginIfUserExists(document.getElementById('id').value, document.getElementById('password').value)">
                                        Login <i class="bi bi-box-arrow-in-right"></i>
                                    </button>

                                </div>

                                <a class="fw-bold" href="components/profile/register.html">Forgot Password?</a>
                                <p class="fw-bold text-white">Don't have an account? <a href="components/profile/register.html">Register here</a></p>

                                <br>

                                <div class="form-row">
                                    

                                    <p class="fw-bold text-white">Are you a <span style="color: var(--pri)">contractor</span>?
                                    <button type="button" class="btn-login" onclick="contractorSwap()" style="background-color: var(--sec3)">
                                    Click Here &nbsp; <i class="bi bi-arrow-repeat"></i>
                                    </button>
                                    </p>

                                    <p id="status" style="color: red;"></p>

                                </div>
                            </form>
                        </div>
                    </div>
                `
    section = document.getElementById('loginSection')
    section.innerHTML = loginHTML
    return
}

function contractorSwap() {
    loginHTML = `    <div class="middle container justify-content-center">
                        <div class="col-md-6">
                        <span class="text-header text-white">For <span style='color:var(--pri)'>contractors</span></span>
                        <h4 class="text-header text-white">Log in to get started</h4>
                            <form>
                                <div class="form-row" style="border-bottom: 1px solid var(--pri)">
                                    <input id="Cid" type="text" placeholder="Username or email address" class="form-control bg-transparent text-white text-wrap fw-bold">
                                </div>

                                <div class="form-row" style="border-bottom: 1px solid var(--pri)">
                                    <input id="Cpassword" type="password" placeholder="Password" class="form-control bg-transparent text-white fw-bold">
                                </div>

                                <div class="form-row">
                                    

                                    <button type="button" class="btn-login" onclick="loginIfContractorExists(document.getElementById('Cid').value, document.getElementById('Cpassword').value)" style="background-color:var(--pri)">
                                        Login <i class="bi bi-box-arrow-in-right"></i>
                                    </button>

                                </div>

                                <a class="fw-bold" href="components/profile/register.html">Forgot Password?</a>
                                <p class="fw-bold text-white">Don't have an account? <a href="#contact">Contact Us</a></p>

                                <br>

                                <div class="form-row">
                                    
                                <p class="fw-bold text-white">Are you a <span style="color:var(--sec2)">homeowner</span>? 
                                    <button type="button" class="btn-login" onclick="loginSwap()" style="background-color: var(--sec3)">
                                    Click Here &nbsp; <i class="bi bi-arrow-repeat"></i>
                                    </button>
                                </p>

                                <p id="status" style="color: red;"></p>

                                </div>
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