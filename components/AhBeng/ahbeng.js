function checkContractoronLoad() {
    var curr_contractor = sessionStorage.getItem('booking_contractor')
    sessionStorage.setItem('contractor', curr_contractor)
    console.log(sessionStorage.getItem('contractor'))
    console.log(sessionStorage.getItem('service'))

    checkifUserisLoggedIn();
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
var reviewsDB = firebase.database().ref('reviews');


const app = Vue.createApp({

    // Data Properties
    data() {
        return {

            currentService: "",

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
                    ["Painting", "Plumbing"]
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
                    ["Plumbing", "Electrical"]
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
                    "@jarfix",
                    ["Plumbing", "Electrical", "Painting", "Locksmith"]
                ],
                "Kim Pest Control": [
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
                    "@kimpestcontrol",
                    ["Pest Control"]
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
                    ["Moving", "Electrical"]
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
                    ["Plumbing", "Locksmith"]
                ],
                "Get Fix Pro": [
                    "../../images/contractorpic8.jpg",
                    "Fast",
                    "Moderate",
                    `<i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star"></i>`,
                    "Commercial",
                    "../AhBeng/ahbeng.html",
                    "9029 3901",
                    "@getfixpro",
                    ["Painting", "Plumbing"]
                ],
                "Shape Up Pte Ltd": [
                "../../images/defaultpic.jpg",
                "Slow",
                "Slow",
                `<i class="bi bi-star-fill pri-color"></i>
                <i class="bi bi-star-fill pri-color"></i>
                <i class="bi bi-star-fill pri-color"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>`,
                "HDB,Condominium,Landed,Commercial",
                "../AhBeng/ahbeng.html",
                "8464 9664",
                "@shapeup",
                ["Painting", "Air Conditioning"]
                ],
                "Gen Fix": [
                "../../images/defaultpic.jpg",
                "Slow",
                "Slow",
                `<i class="bi bi-star-fill pri-color"></i>
                <i class="bi bi-star-fill pri-color"></i>
                <i class="bi bi-star-half pri-color"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>`,
                "HDB,Condominium,Landed",
                "../AhBeng/ahbeng.html",
                "9945 9265",
                "@genfix",
                ["Painting", "Moving"]
                ],
                "Ultra Clean Co": [
                    "../../images/defaultpic.jpg",
                    "Fast",
                    "Responsive",
                    `<i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-half pri-color"></i>`,
                    "HDB,Condominium,Landed",
                    "../AhBeng/ahbeng.html",
                    "+65 9949 9269",
                    "@ultracleanco",
                    ["Home Cleaning", "Professional Disinfection"]
                ],
  
                "So Cool": [
                    "../../images/defaultpic.jpg",
                    "Moderate",
                    "Moderate",
                    `<i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-half pri-color"></i>
                    <i class="bi bi-star"></i>`,
                    "HDB,Condominium,Landed",
                    "../AhBeng/ahbeng.html",
                    "+65 9696 2235",
                    "@socool",
                    ["Air Conditioning"]
                ],
                "ServisHero Home Cleaning": [
                    "../../images/home_cleaning.png",
                    "Fast",
                    "Responsive",
                    `<i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-half pri-color"></i>`,
                    "HDB,Condominium,Landed",
                    "../AhBeng/ahbeng.html",
                    "9432 4534",
                    "@servishero",
                    ["Home Cleaning"]
                ],
                "ServisHero Painting": [
                    "../../images/painting.png",
                    "Fast",
                    "Responsive",
                    `<i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-half pri-color"></i>`,
                    "HDB,Condominium,Landed",
                    "../AhBeng/ahbeng.html",
                    "9432 4534",
                    "@servishero",
                    ["Painting"]
                ],
                "ServisHero Air Conditioning": [
                    "../../images/air_condition.png",
                    "Fast",
                    "Responsive",
                    `<i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-half pri-color"></i>`,
                    "HDB,Condominium,Landed",
                    "../AhBeng/ahbeng.html",
                    "9432 4534",
                    "@servishero",
                    ["Air Conditioning"]
                ],
                "ServisHero Disinfection": [
                    "../../images/home_disinfection.png",
                    "Fast",
                    "Responsive",
                    `<i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-half pri-color"></i>`,
                    "HDB,Condominium,Landed",
                    "../AhBeng/ahbeng.html",
                    "9432 4534",
                    "@servishero",
                    ["Professional Disinfection"]
                ],
                "ServisHero Electrical": [
                    "../../images/electrical.jpg",
                    "Fast",
                    "Responsive",
                    `<i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-half pri-color"></i>`,
                    "HDB,Condominium,Landed",
                    "../AhBeng/ahbeng.html",
                    "9432 4534",
                    "@servishero",
                    ["Electrical"]
                ],
            },

            review_arr: [
                
            ],

            selected_brand: "",

            nippon_paints: ["Slate Grey", "White Dove", "Chantilly Lace", "Cloud White", "White Heron", "Swiss Coffee", "Classic Grey", "Calm", "Pale Oak", "Gray Owl"],

            dulux_paints: ["Classic Grey", "White Dove", "Chantilly Lace", "Cloud White", "Revere Pewter", "Swiss Coffee", "Classic Grey", "Edgecomb Gray", "Pale Oak", "Slate Grey", "Gray Owl"],

            asian_paints: ["Gray Owl", "Manchester Tan", "Swiss Coffee", "White Dove", "Revere Pewter", "Swiss Coffee", "Classic Grey", "Edgecomb Gray", "Pale Oak", "Slate Grey", "Coventry Gray"],

            gush_paints: ["Classic Grey", "White Dove", "Gray Owl", "Stonington Gray", "Cloud White", "Chantilly Lace", "Balboa Mist", "Classic Grey", "Edgecomb Gray", "Pale Oak", "Slate Grey", "Gray Owl"],

            postal_code: '',
            
            address: '',

            validationMsg: '',

            isBook: false
        }
    },

    methods: {
        validatePostal() {
            if (this.postal_code.toString().length == 6) {
                let api_endpoint_url = `https://developers.onemap.sg/commonapi/search?searchVal=${this.postal_code}&returnGeom=N&getAddrDetails=Y&pageNum=1`
            
                axios.get(api_endpoint_url)
                .then(response => {
                    if (response.data.found == 0) {
                        this.validationMsg = `<span style="color:red; font-size:12px;">Postal Code does not exist!</span>`
                        document.getElementById('postalCode').classList.remove('is-valid')
                        document.getElementById('postalCode').classList.add('is-invalid')
                        this.address = ''
                    }

                    else {
                    let res = response.data.results
                    // console.log(typeof res)
                        for (details in res) {
                            this.validationMsg = '<span style="color:green;font-size:12px;">Looks good!</span>'
                            document.getElementById('postalCode').classList.remove('is-invalid')
                            document.getElementById('postalCode').classList.add('is-valid')
                            console.log(res[details]['ADDRESS'])

                            if (res[details]['BUILDING'] == 'NIL') {
                                this.address = res[details]['BLK_NO'] + ' ' + res[details]['ROAD_NAME']
                            }
                            else {
                                this.address = res[details]['BLK_NO'] + ' ' + res[details]['ROAD_NAME'] + ' ' + res[details]['BUILDING']

                            }
                        }
                    }
                })
            
                .catch(error => {
                // In case of any error, see what it's about
                    console.log(error.message)
            })
            }
            else {
                document.getElementById('postalCode').classList.remove('is-invalid')
                document.getElementById('postalCode').classList.remove('is-valid')
                this.validationMsg = ``
                this.address = ``
            }
        },
    },

    // computed: {
    //     validatePostal() {
    //         let postal_code = this.postal_code
    //         let api_endpoint_url = `https://developers.onemap.sg/commonapi/search?searchVal=${postal_code}&returnGeom=N&getAddrDetails=Y&pageNum=1`
        
    //         axios.get(api_endpoint_url)
    //         .then(response => {
    //             let res = response.data
    //             console.log(res)
    //         })
        
    //         .catch(error => {
    //         // In case of any error, see what it's about
    //             console.log(error.message)
    //     })
    //     }
    // }
    async mounted() {
        firebase.database().ref('reviews').child(this.currentContractor).get().then((snapshot) => {
            if (snapshot.exists()) {
              reviews_arr = snapshot.val();
              console.log(snapshot.val())
              for (const review in reviews_arr) {
                this.review_arr.push(reviews_arr[review])
              }
            } else {
              console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
})

app.mount(".main")



//The following example demostrates how to add data
// function registerBooking() {
//     var userId = document.getElementById("id").value;
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     writeBookingWithCompletion(userId,name,email,password);
// }

//The following writes the data
function writeBookingWithCompletion(user, contractor, houseType, postalCode, paintBrand, paintColours, startDate, startTime, addRequests, service) {
    var val = Math.floor(1000 + Math.random() * 9000);
    var booking_string = "booking" + val.toString();
    
    firebase.database().ref('bookings/' + booking_string).set({
        user: user,
        contractor: contractor,
        houseType: houseType,
        postalCode: postalCode,
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
        service: service,
        contractor_completed: false,
        reject_booking: false
        
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
    var postalCode = document.getElementById("postalCode").value;
    var service = document.getElementById("selected_service").value;
    if (service == "Painting") {
        var paintBrand = document.getElementById("paintBrand").value;
        var paintColours = document.getElementById("paintColours").value;
    }

    var startDate = document.getElementById("startDate").value;
    var startTime = document.getElementById("startTime").value;
    var addRequests = document.getElementById("addRequests").value;
    var service = document.getElementById("selected_service").value;

    if (service == "Painting" && houseType !== "" && postalCode !== "" && paintBrand !== "" && paintColours !== "" && startDate !== "" && startTime !== "") {

        writeBookingWithCompletion(user_create, contractor_create, houseType, postalCode, paintBrand, paintColours, startDate, startTime, addRequests, service)

    } else if (service != "Painting" && houseType !== "" && postalCode !== "" && startDate !== "" && startTime !== "") {
        writeBookingWithCompletion(user_create, contractor_create, houseType, postalCode, "nil", "nil", startDate, startTime, addRequests, service)
    } else {
        document.getElementById("status").innerHTML = "<br> Sorry, please fill up all the required details!";
    }
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