function checkServiceonLoad() {
  console.log(sessionStorage.getItem('service'));
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

function sendContractor(id) {
  sessionStorage.setItem('booking_contractor', id);
  console.log(sessionStorage.getItem('booking_contractor'));
  window.location.href='../AhBeng/ahbeng.html'
}



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}
  
function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

const app = Vue.createApp({

    // Data Properties
    data() {
        return {

            // sort_categories:[
            //     "Ratings: High to Low",
            //     "Ratings: Low to High",
            //     "Average Delivery Time",
            //     "Average Price"
            // ],

            sessionItem: sessionStorage.getItem('service'),

            house_filters:[
                "HDB",
                "Condominium",
                "Landed",
                "Commercial"
            ],

            // painting_sorts: [
            //     "Reviews",
            //     "Popularity",
            //     "Price",
            //     "Delivery Time"
            // ],

            service_type:[
              "Painting",
              "Plumbing",
              "Air Conditioning",
              "Electrical",
              "Drilling",
              "Moving",
              "Carpentry",
              "Landscaping",
              "Others"
            ],

            // table_headers: [
            //     "Destination",
            //     "Photo",
            //     "Description",
            //     "Cost (SGD)",
            //     "Add to Itinerary"
            // ],

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
                    "Painting, Landscaping",
                    "+65 9123 4567",
                    "@ahbengservices"
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
                    "Plumbing, Electrical",
                    "+65 9123 2344",
                    "@ahyongservices"
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
                    "Handyman",
                    "+65 9321 4567",
                    "@jarfix"
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
                    "Carpentry",
                    "+65 9122 4677",
                    "@kimcarpentry"
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
                  "Moving, Electrical",
                  "+65 9123 3219",
                  "@takeoffmovers"
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
                  "Plumbing, Drilling",
                  "+65 9123 0912",
                  "@tkjco"
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
                  "Painting, Landscaping, Plumbing",
                  "+65 9029 3901",
                  "@getfixpro"
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
                  "Painting, Drilling, Air Conditioning",
                  "+65 8464 9664",
                  "@shapeup"
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
                  "Painting, Moving, Carpentry",
                  "+65 9945 9265",
                  "@genfix"
                ],
              },

            selected_filters: [],

            shown_contractors: {},

            current_service: sessionStorage.getItem('service'),

            specific_contractors: {},

        }
    },

    methods: {

      addselection(eachfilter){
        console.log(eachfilter)
        console.log(this.current_service)

        //if eachfilter not in selected_filters, append

        if (this.selected_filters.includes(eachfilter) === false){
          this.selected_filters.push(eachfilter)
        }

        //else if eachfilter in selected_filters, remove
        else {
          const efindex = this.selected_filters.indexOf(eachfilter);
          if (efindex > -1) { 
            this.selected_filters.splice(efindex, 1); 
            }
        }

        console.log(this.selected_filters)

        var selected_contractors = {};
        this.shown_contractors = {};

        for (idx in this.selected_filters){
          // console.log(this.selected_filters[idx])
          var filtertype = this.selected_filters[idx]
          
          for (const [key, value] of Object.entries(this.specific_contractors)) {

            if (value[4].includes(filtertype)){
              console.log(value)
              selected_contractors[key] = [value[0],value[1],value[2],value[3],value[4],value[5],value[6],value[7],value[8]]
            }
          }
        }

        for (const [key, value] of Object.entries(selected_contractors)) {
          console.log(key)
          console.log(value)
          this.shown_contractors[key] = [value[0],value[1],value[2],value[3],value[4],value[5],value[6],value[7],value[8]]
        }

        // console.log(this.shown_contractors)
        // console.log(this.painter_information)
      },


      changeservice(eachtype){
        // console.log('eachtype-----')
        // console.log(eachtype)
        // console.log('initial service-----');
        // console.log(sessionStorage.getItem('service'));
        window.location.reload();
        sessionStorage.setItem('service', eachtype);
        // console.log('new set service------')
        // console.log(sessionStorage.getItem('service'));
        // window.location.reload();      
      },

      noservice(){
        window.location.reload();
        sessionStorage.setItem('service', null);
        // console.log(sessionStorage.getItem('service'));
        this.current_service = null;
        alert("Please select a service type");
      }

    },

    mounted(){
      console.log(this.current_service)

      for (const [key, value] of Object.entries(this.painter_information)) {

        if (value[6].includes(this.current_service)){
          this.specific_contractors[key] = [value[0],value[1],value[2],value[3],value[4],value[5],value[6],value[7],value[8]]
          // console.log(value)
          // selected_contractors[key] = [value[0],value[1],value[2],value[3],value[4]]
        }
      }
    }
})

app.mount(".main")


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