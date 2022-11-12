function checkContractoronLoad() {
    var curr_contractor = sessionStorage.getItem('booking_contractor')
    sessionStorage.setItem('contractor', curr_contractor)
    console.log(sessionStorage.getItem('contractor'))
}


const app = Vue.createApp({

    // Data Properties
    data() {
        return {

            currentContractor: sessionStorage.getItem('booking_contractor'),

            // painter_information: {
            //     "Name": "Ah Beng Services",
            //     "Image": "../../images/contractorpic1.jpg",
            //     "Delivery": "Fast",
            //     "Responsiveness": "Responsive",
            //     "Rating": `<i class="bi bi-star-fill pri-color"></i>
            //     <i class="bi bi-star-fill pri-color"></i>
            //     <i class="bi bi-star-fill pri-color"></i>
            //     <i class="bi bi-star-fill pri-color"></i>
            //     <i class="bi bi-star-half pri-color"></i>`,
            //     "Whatsapp": "+65 9123 4567",
            //     "Telegram": "@ahbengservices",
            // },

            painter_information: {
                "Ah Beng Services": [
                    "../../images/contractorpic1.jpg",
                    "Fast",
                    "Responsive",
                    `<i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-half pri-color"></i>`,
                    "HDB,Condominium,Landed",
                    "../AhBeng/ahbeng.html",
                    "9123 4567",
                    "@ahbengservices",
                    "Painting, Landscaping"
                ],
                "Ah Yong Services": [
                    "../../images/contractorpic2.jpg",
                    "Fast",
                    "Responsive",
                    `<i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>`,
                    "HDB,Condominium,Landed,Commercial",
                    "../AhBeng/ahbeng.html",
                    "8123 4567",
                    "@ahyongservices",
                    "Plumbing, Electrical"
                ],
                "Jar Fix Pte Ltd": [
                    "../../images/contractorpic3.jpg",
                    "Moderate",
                    "Slow",
                    `<i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>`,
                    "HDB,Condominium",
                    "../AhBeng/ahbeng.html",
                    "8345 9142",
                    "@jarfixpteltd",
                    "Handyman"
                ],
                "Kim Carpentry": [
                    "../../images/contractorpic5.jpg",
                    "Fast",
                    "Responsive",
                    `<i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>`,
                    "Landed,Commercial",
                    "../AhBeng/ahbeng.html",
                    "8193 5264",
                    "@kimcarpentry",
                    "Carpentry"
                ],
                "Takeoff Movers": [
                    "../../images/contractorpic6.jpg",
                    "Moderate",
                    "Responsive",
                    `<i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-half pri-color"></i>`,
                    "HDB,Condominium,Landed",
                    "../AhBeng/ahbeng.html",
                    "9385 0142",
                    "@takeoffmovers",
                    "Moving, Electrical"
                ],
                "K.J & Co": [
                    "../../images/contractorpic7.jpeg",
                    "Fast",
                    "Responsive",
                    `<i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>`,
                    "HDB,Landed",
                    "../AhBeng/ahbeng.html",
                    "8491 6324",
                    "@kjandco",
                    "Plumbing, Drilling"
                ],
            },
        }
    },

    methods: {}
})

app.mount(".main")


// storing booking details into firebase
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

//The following example demostrates how to add data
// function registerBooking() {
//     var userId = document.getElementById("id").value;
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     writeBookingWithCompletion(userId,name,email,password);
// }

//The following writes the data
function writeBookingWithCompletion(user, contractor, houseType, paintBrand, paintColours, startDate, startTime, addRequests) {
    var val = Math.floor(1000 + Math.random() * 9000);
    var booking_string = "booking" + val.toString();
    
    firebase.database().ref('bookings/' + booking_string).set({
        user: user,
        contractor: contractor,
        houseType: houseType,
        paintBrand: paintBrand,
        paintColours: paintColours,
        startDate: startDate,
        startTime: startTime,
        addRequests: addRequests,
        status: "pending",
        quote: 0,
        quoted: false,
        accept_quote: false,
        reject_quote: false,
        user_completed: false,
        contractor_completed: false
    }, function(error) {
        if (error) {
        document.getElementById("status").innerHTML = "<br> Booking request failed!";
        } else {
            window.location.href='../booking/booking.html'
        }
    });
}

function addBookingDetails() {
    var user_create = sessionStorage.getItem('user')
    var contractor_create = sessionStorage.getItem('contractor')
    var houseType = document.getElementById("houseType").value;
    var paintBrand = document.getElementById("paintBrand").value;
    var paintColours = document.getElementById("paintColours").value;
    var startDate = document.getElementById("startDate").value;
    var startTime = document.getElementById("startTime").value;
    var addRequests = document.getElementById("addRequests").value;

    if (houseType !== "" && paintBrand !== "" && paintColours !== "" && startDate !== "" && startTime !== "") {

        writeBookingWithCompletion(user_create, contractor_create, houseType, paintBrand, paintColours, startDate, startTime, addRequests)

    } else {
        document.getElementById("status").innerHTML = "<br> Sorry, please fill up all the required details!";
    }
}