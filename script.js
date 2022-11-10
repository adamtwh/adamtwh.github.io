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

    var user = firebase.database().ref('users/' + userId);
    var password_user = firebase.database().ref('users/' + userId + "/" + "password");

    var login_user = false;

    user.once('value').then((snapshot1) => {
            if(snapshot1.exists()) {
                console.log("user exists!")
                login_user = true;
            }
            else {
                console.log("user does not exist!")
                document.getElementById("status").innerText = "Sorry, user does not exist!";
            }
    });

    password_user.on('value', (snapshot2) => {
        var password_user_value = snapshot2.val();
        console.log(password_user_value);
        if (password_user_value == pwd) {
            console.log("password matches!")
            login_user = true;
        } else {
            console.log("password does not match!")
            login_user = false;
        }
    });

    window.setTimeout(goNextUser(login_user), 0);
}

function goNextUser(login_user) {
    if (login_user == true) {
        sessionStorage.setItem('user', 'digijar');
        window.location.href='components/homepage/homepage.html'
    } else {
        document.getElementById("status").innerText = "Sorry, your password was incorrect. \n Please double-check your password.";
    }
}

function loginIfContractorExists(userId, pwd) {

    var contractor = firebase.database().ref('contractors/' + userId);
    var password_contractor = firebase.database().ref('contractors/' + userId + "/" + "password");

    var login_contractor = false;

    contractor.once('value').then((snapshot3) => {
        if(snapshot3.exists()) {
            console.log("contractor exists!")
        }
        else {
            console.log("contractor does not exist!")
            document.getElementById("status").innerText = "Sorry, contractor does not exist!";
        }
    });

    password_contractor.on('value', (snapshot4) => {
        var password_contractor_value = snapshot4.val();
        console.log(password_contractor_value);
        if (password_contractor_value == pwd) {
            login_contractor = true;
            console.log("password matches!")
            
        } else {
            console.log("password does not match!")
            login_contractor = false;
        }
    });

    window.setTimeout(goNextContractor(login_contractor), 0);
}

function goNextContractor(login_contractor) {
    if (login_contractor == true) {
        window.location.href='components/booking/booking_contractor.html'
    } else {
        document.getElementById("status").innerText = "Sorry, your password was incorrect. \n Please double-check your password.";
    }
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
                                <div class="form-row" style="border-bottom: 1px solid var(--pri)">
                                    <input id="id" type="text" placeholder="Username or email address" class="form-control bg-transparent text-white text-wrap fw-bold">
                                </div>

                                <div class="form-row" style="border-bottom: 1px solid var(--pri)">
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
                                <p class="fw-bold text-white">Are you a <span style="color: var(--pri)">contractor</span>?
                                    <button type="button" class="btn-login" onclick="contractorSwap()">
                                    Click Here &nbsp; <i class="bi bi-arrow-repeat"></i>
                                </button>
                                </p>

                                <p id="status" style="color: red;"></p>
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
                                    <input id="id" type="text" placeholder="Username or email address" class="form-control bg-transparent text-white text-wrap fw-bold">
                                </div>

                                <div class="form-row" style="border-bottom: 1px solid var(--pri)">
                                    <input id="password" type="password" placeholder="Password" class="form-control bg-transparent text-white fw-bold">
                                </div>

                                <div class="form-row">
                                    

                                    <button type="button" class="btn-login" onclick="loginIfContractorExists(document.getElementById('id').value, document.getElementById('password').value)">
                                        Login <i class="bi bi-box-arrow-in-right"></i>
                                    </button>

                                </div>

                                <a class="fw-bold" href="components/profile/register.html">Forgot Password?</a>
                                <p class="fw-bold text-white">Don't have an account? <a href="components/profile/register.html">Register here</a></p>
                                <br>
                                <p class="fw-bold text-white">Are you a <span style="color:var(--pri)">homeowner</span>? 
                                    <button type="button" class="btn-login" onclick="loginSwap()">
                                    Click Here &nbsp; <i class="bi bi-arrow-repeat"></i>
                                </button>
                                </p>

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

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('/');
}

// for news API
function loadNews() {
    const url = "https://api.newscatcherapi.com/v2/search";
    let to_replace = document.getElementById("newsAPI");
    var ResultCount = 0;
    var result = "";
    var curr_date_str = formatDate(new Date())

    axios.get(url, {
        params: {
            q: 'home+news',
            from: curr_date_str,
            countries: 'SG',
            page_size: 3
        },
        headers: {
            'x-api-key': '2uIQcStHzDEKYek_nPMBF43DzXvQQjLQvt0Ze5XnrXw'
        }
    })
    .then(response =>  {
        result += `
            <div class="row gx-lg-5">`

        for (article of response.data.articles) {
            var author = article.author;
            var title = article.title;
            var summary = article.summary;
            var url = article.link;
            var photo_src= article.media;
            result += `
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <!-- News block -->
                    <div>
                        <!-- Featured image -->
                        <div class="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
                            data-mdb-ripple-color="light">
                            <img src="${photo_src}" class="img-fluid" />
                            <a href="#!">
                            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                            </a>
                        </div>
    
                        <!-- Article data -->
                        <div class="row mb-3">
                            <div class="col-6">
                            <a href="" class="text-info">
                                ${title}
                            </a>
                            </div>
    
                            <div class="col-6 text-end">
                            <u> ${author}</u>
                            </div>
                        </div>
    
                        <!-- Article title and description -->
                        <h5>${title}</h5>

                        <p>
                        ${summary}
                        </p>
                    </div>
                </div>
            `
            
        }
        result += `</div>`
        to_replace.innerHTML = result;
    })
    .catch(error => {
        console.log(error.message)
    });
}