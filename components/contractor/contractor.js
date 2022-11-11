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
                    "HDB,Condominium,Landed",
                    "../AhBeng/ahbeng.html"
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
                    "HDB,Condominium,Landed,Commercial",
                    "../BengHuat/benghuat.html"
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
                    "HDB,Condominium",
                    "../SengChoo/sengchoo.html"
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
                    "HDB,Condominium,Commercial",
                    "../HomeIDPainting/homeidpainting.html"
                ],
            },

            selected_filters: [],

            shown_contractors: {}

        }
    },

    methods: {

      addselection(eachfilter){
        console.log(eachfilter)

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
          
          for (const [key, value] of Object.entries(this.painter_information)) {

            if (value[4].includes(filtertype)){
              console.log(value)
              selected_contractors[key] = [value[0],value[1],value[2],value[3],value[4]]
            }
          }
        }

        for (const [key, value] of Object.entries(selected_contractors)) {
          console.log(key)
          console.log(value)
          this.shown_contractors[key] = [value[0],value[1],value[2],value[3],value[4]]
        }

        console.log(this.shown_contractors)
        console.log(this.painter_information)
      }
       

    }
})

app.mount(".main")