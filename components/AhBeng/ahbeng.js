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