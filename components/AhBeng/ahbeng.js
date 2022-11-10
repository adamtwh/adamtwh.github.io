const app = Vue.createApp({

    // Data Properties
    data() {
        return {

            painter_information: {
                "Name": "Ah Beng Services",
                "Image": "../../images/contractorpic1.jpg",
                "Delivery": "Fast",
                "Responsiveness": "Responsive",
                "Rating": `<i class="bi bi-star-fill pri-color"></i>
                <i class="bi bi-star-fill pri-color"></i>
                <i class="bi bi-star-fill pri-color"></i>
                <i class="bi bi-star-fill pri-color"></i>
                <i class="bi bi-star-half pri-color"></i>`,
                "Whatsapp": "+65 9123 4567",
                "Telegram": "@ahbengservices",
                "Pending": 0,
                "Accepted": 1
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
        status: "pending"
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