// -- for news API --
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