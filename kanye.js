function call_quote() {
    let api_endpoint_url = `https://api.kanye.rest`

        axios.get(api_endpoint_url)
        .then(response => {

            quote = response.data.quote
            console.log(quote)

            quoteSection = document.getElementById('quote')
            quoteSection.innerHTML = `
                                    <div style="cursor:pointer; float:right;"<i class="bi bi-arrow-clockwise" onclick="call_quote()"></i></div>
                                    <p style="font-family: Lato, sans-serif; font-size: 1rem; text-align:center;">"${quote}"</p>
                                    <p style="font-family: Lato, sans-serif; font-size: 0.85rem; text-align: right; padding-right:150px">- Kanye West</p>
                                    `
        })

        .catch(error => {
            // In case of any error, see what it's about
            console.log(error.message)
        })
    }