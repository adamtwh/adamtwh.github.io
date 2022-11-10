// welcome contractor
function welcContractor() {
    console.log("welcome")
    var curr_contractor = sessionStorage.getItem('contractor');
    console.log(curr_contractor);
    
    var to_replace = document.getElementById("welcContractor");

    to_replace.innerText = `${curr_contractor}!`;
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
    // dynamicCompleted()
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
                                    <p class="info"><i class="bi bi-lightning-charge"></i> Delivery Time: Fast &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-chat-right-dots"></i> Response Rate: Responsive
                                    <br>
                                    Whatsapp: +65 9123 4567 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Telegram: @ahbengservices</p>
                                    <br>
                                    <h5><span style="color: var(--sec1)">Date:</span> ${date}</h5>
                                    <h5><span style="color: var(--sec1)">Time:</span> ${time}</h5>
                                    <h5 style="color: var(--sec1)">Service Details</h5>
                                    <ul>
                                        <li><h6>${service_type}</h6></li>
                                    </ul>
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
    console.log("Pending")
}

function dynamicCompleted() {
    console.log("Completed")
}