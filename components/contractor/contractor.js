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

            painting_filters:[
                "HDB",
                "Condominium",
                "Landed",
                "Commercial"
            ],

            painting_sorts: [
                "Reviews",
                "Popularity",
                "Price",
                "Delivery Time"
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
                    "HDB,Condominium,Landed"
                ],
                "Beng Huat Painting": [
                    "../../images/contractorpic2.jpg",
                    "Fast",
                    "Responsive",
                    `<i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>`,
                    "HDB,Condominium,Landed,Commercial"
                ],
                "Seng Choo Pte Ltd": [
                    "../../images/contractorpic3.jpg",
                    "Moderate",
                    "Slow",
                    `<i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>`,
                    "HDB,Condominium"
                ],
                "HomeID Painting Co.": [
                    "../../images/contractorpic4.jpeg",
                    "Moderate",
                    "Slow",
                    `<i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star-fill pri-color"></i>
                    <i class="bi bi-star"></i>`,
                    "HDB,Condominium,Commercial"
                ],
            },

            selected_filters: []

        }
    },

    methods: {
    

    }
})

app.mount(".main")