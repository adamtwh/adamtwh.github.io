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

var users = firebase.database().ref('contractors');
    users.on('child_added', (snapshot) =>{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    document.getElementById("latest").innerText = "Last contractor registered at " + today;
});

//The following example demostrates how to read data
function checkIfUserExists(userId) {
    var user = firebase.database().ref('contractors/' + userId);
    user.once('value').then((snapshot) => {
        if(snapshot.exists()) {
        document.getElementById("status").innerText = "Contractor ID has already been taken.";
        }
        else {
        document.getElementById("status").innerText = "Contractor ID is available.";
        }
    });
}

//The following example demostrates how to add data
function register() {
    var userId = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var whatsapp = document.getElementById("whatsapp").value;
    var telegram = document.getElementById("telegram").value;
    var password = document.getElementById("password").value;
    var services_checked = document.querySelectorAll('input[name=service_box]:checked');
    var services_list = new Array;
    for (services of services_checked) {
        services_list.push(services.value);
    }
    var housing_checked = document.querySelectorAll('input[name=housing_box]:checked');
    var housing_list = new Array;
    for (housing of housing_checked) {
        housing_list.push(housing.value);
    }
    writeContractorDataWithCompletion(userId,name,email,whatsapp,telegram,password,services_list,housing_list);
    }

//The following writes the data
function writeContractorDataWithCompletion(userId, name, email, whatsapp, telegram, password, services_list, housing_list) {
    firebase.database().ref('contractors/' + userId).set({
        name: name,
        email: email,
        whatsapp: whatsapp,
        telegram: telegram,
        password: password,
        services: services_list,
        housing: housing_list
    }, function(error) {
        if (error) {
        document.getElementById("status").innerText = "Contractor Registration Failed!";
        } else {
        document.getElementById("status").innerText = "Contractor Registration Done!";
        }
    });
}

//The following example demostrates how to delete data
function deregister(userId) {
    firebase.database().ref('contractors/' + userId).remove()
    .then(function() {
        document.getElementById("status").innerText = "Remove succeeded.";
    })
    .catch(function(error) {
        document.getElementById("status").innerText = "Remove Failed.";
    });
}

function updateEmail() {
    var userId = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var updates = {};
    updates['/contractors/' + userId + "/" + 'name'] = name;
    updates['/contractors/' + userId + "/" + 'email'] = email;
    updates['/contractors/' + userId + "/" + 'password'] = email;
    firebase.database().ref().update(updates);
}

// function findAllCheckedServices() {
//     var checkedBoxes = document.querySelectorAll('input[name=service_box]:checked');
//     for (checked of checkedBoxes) {
//         console.log(checked.value)
//     }
// }

// function findAllCheckedHousing() {
//     var checkedBoxes = document.querySelectorAll('input[name=housing_box]:checked');
//     for (checked of checkedBoxes) {
//         console.log(checked.value)
//     }
// }