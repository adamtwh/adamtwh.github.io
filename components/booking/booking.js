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


// for dynamic rendering
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

var bookings = firebase.database().ref('bookings');

function dynamicBookings() {
    // if status == current
    dynamicCurrent()


    // if status == pending
    dynamicPending()

    // if status == completed
    dynamicCompleted()
}

function dynamicCurrent() {
    // get bookings with status == current
    bookings.on('value', (snapshot) => {
        var curr_replace = document.getElementById("pills-current");
        var curr_result = "";

        console.log(snapshot.val());
        snapshot.forEach(function(childSnapshot) {
            var booking_obj = childSnapshot.val();
            console.log(booking_obj.status)
            if (booking_obj.status == "current") {
                var date = booking_obj.startDate;
                var time = booking_obj.startTime;
                var contractor = booking_obj.contractor;
                if (contractor == 'ahbeng') {
                    var contractor_pic = "../../images/contractorpic1.jpg"
                    var contractor_name = "Ah Beng Services"
                } else {
                    var contractor_pic = "../../images/contractorpic2.jpg"
                    var contractor_name = "Ah Yong Services"
                }
                var houseType = booking_obj.houseType;
                var paintBrand = booking_obj.paintBrand;
                var paintColours = booking_obj.paintColours;
                var price = booking_obj.price;
                var service_type = booking_obj.type;

                curr_result += `
                    <section class="search-result-item mt-5">
                        <a class="image-link" href="#"><img class="image img-fluid rounded-start" src="${contractor_pic}">
                        </a>
                        <div class="search-result-item-body">
                            <div class="row">
                                <div class="col-sm-9">
                                    <h4 class="search-result-item-heading">${contractor_name}</h4>
                                    <br>
                                    <h5><span style="color: var(--sec1)">Date:</span> ${date}</h5>
                                    <h5><span style="color: var(--sec1)">Time:</span> ${time}</h5>
                                    <h5 style="color: var(--sec1)">Service(s) Provided:</h5>
                                    <h6>${service_type}</h6>
                                </div>
                                <div class="col-sm-3 text-align-center">
                                    <p class="fs-mini text-muted">PAYABLE ON COMPLETION</p>
                                    <p class="mt-sm" style="font-size: 32px; font-weight:bold;">SGD <span style="color:var(--sec2)">$${price}</span></p>
                                    <!-- <a class="btn btn-primary btn-info btn-sm" href="#">Learn More</a> -->
                                </div>
                            </div>
                        </div>
                    </section>
                `
            }
        });
        curr_replace.innerHTML = curr_result;
    }, (errorObject) => {
    console.log('The read failed: ' + errorObject.name);
    });
}

function dynamicPending() {
    // get bookings with status == current
    bookings.on('value', (snapshot) => {
        var curr_replace = document.getElementById("pills-pending");
        var curr_result = "";

        snapshot.forEach(function(childSnapshot) {
            var booking_obj = childSnapshot.val();
            if (booking_obj.status == "pending") {

                // logging all the data from firebase into variables
                var date = booking_obj.startDate;
                var time = booking_obj.startTime;
                var contractor_name = booking_obj.contractor;
                if (contractor_name == 'Ah Beng Services') {
                    var contractor_pic = "../../images/contractorpic1.jpg"
                } else if (contractor_name == 'Ah Yong Services') {
                    var contractor_pic = "../../images/contractorpic2.jpg"
                } else if (contractor_name == 'Jar Fix Pte Ltd') {
                    var contractor_pic = "../../images/contractorpic3.jpg"
                } else if (contractor_name == 'Kim Carpentry') {
                    var contractor_pic = "../../images/contractorpic5.jpg"
                } else if (contractor_name == 'Takeoff Movers') {
                    var contractor_pic = "../../images/contractorpic6.jpg"
                } else if (contractor_name == 'K.J & Co') {
                    var contractor_pic = "../../images/contractorpic7.jpeg"
                }
                
                var service = booking_obj.service;
                var houseType = booking_obj.houseType;
                var paintBrand = booking_obj.paintBrand;
                var paintColours = booking_obj.paintColours;
                var postalCode = booking_obj.postalCode;
                var quote = booking_obj.quote; // quoted price
                var quoted = booking_obj.quoted; // boolean whether contractor has quoted, default false
                var accept_quote = booking_obj.accept_quote; // boolean whetehr user accepts quote, default false
                var reject_quote = booking_obj.reject_quote; // boolean whether user rejects quote, default false
                var user_completed = booking_obj.user_completed; // boolean whether user clicks on completed service, default false
                var contractor_completed = booking_obj.contractor_completed; // boolean whether contractor clicks on completed service, default false
                var add_requests = booking_obj.addRequests;
                var submit_booking_user = booking_obj.user;

                // checks and loads booking based on logged in user
                if (submit_booking_user == sessionStorage.getItem('user')) {
                    if (quoted == false && reject_quote == false && accept_quote == false) {
                        curr_result += `
                            <section class="search-result-item mt-5">
                                <a class="image-link" href="#"><img class="image img-fluid rounded-start" src="${contractor_pic}">
                                </a>
                                <div class="search-result-item-body">
                                    <div class="row">
                                        <div class="col-sm-9">
                                            <h4 class="search-result-item-heading">${contractor_name}</h4>
                                            <br>
                                            <h5><span style="color: var(--sec1)">Date:</span> ${date}</h5>
                                            <h5><span style="color: var(--sec1)">Time:</span> ${time}</h5>
                                            <h5 style="color: var(--sec1)">Service(s) Provided:</h5>
                                            <h6>${service}</h6>
                                        </div>
                                        <div class="col-sm-3 text-align-center">
                                            <p class="fs-mini text-muted">Pending Contractor's Quote</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        `
                    } else if (quoted == true && reject_quote == false && accept_quote == false) {
                        curr_result += `
                            <section class="search-result-item mt-5">
                                <a class="image-link" href="#"><img class="image img-fluid rounded-start" src="${contractor_pic}">
                                </a>
                                <div class="search-result-item-body">
                                    <div class="row">
                                        <div class="col-sm-9">
                                            <h4 class="search-result-item-heading">${contractor_name}</h4>
                                            <br>
                                            <h5><span style="color: var(--sec1)">Date:</span> ${date}</h5>
                                            <h5><span style="color: var(--sec1)">Time:</span> ${time}</h5>
                                            <h5 style="color: var(--sec1)">Service(s) Provided:</h5>
                                            <h6>${service}</h6>
                                        </div>
                                        <div class="col-sm-3 text-align-center">
                                            <p class="fs-mini text-muted">Pending Contractor's Quote</p>
                                            <p class="mt-sm" style="font-size: 32px; font-weight:bold;">SGD <span style="color:var(--sec2)">${quote}}</span></p>
                                            <a class="btn btn-primary btn-danger" style="font-weight: bold;" href="#">Reject</a>
                                            <a class="btn btn-primary btn-success" style="font-weight: bold;" href="#">Accept</a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        `
                    }
                }
            }
        });
        curr_replace.innerHTML += curr_result;
    }, (errorObject) => {
    console.log('The read failed: ' + errorObject.name);
    });
}

function dynamicCompleted() {
    console.log("Completed")
}