let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

function setActiveLink(element) {
    // Remove 'active' class from all links
    var links = document.getElementsByClassName('menu1');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }

    // Add 'active' class to the clicked link
    element.classList.add('active');
}

var signData = {  
    'id' : 1,
    'name' : "",
    'email' : "",
    'mob' : "",
    'password' : "",
    'confPass' : ""
};

function onformadd(){
    const url = 'http://localhost:8080/signUp';
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mob = document.getElementById("mob").value;
    var password = document.getElementById("password").value;
    var confPassword = document.getElementById("confPassword").value;
    
    console.log("Inside: ",name, " ", password);
    signData = {name, email, mob, password, confPassword};
    fetch(url, {
           method: 'POST',
           headers: {
                  'Content-Type': 'application/json'
           },
           body: JSON.stringify(signData)
    })
    .then(response => response)
    .then(signData => data(signData));

    clear_para();
}

function data() {
    console.log('success', signData)
    var name = signData.name;
    alert("You have signed in successfully.Thanks for Signing "+name+"!");
}
function clear_para() {
    document.getElementById("name").value = null;
    document.getElementById("email").value = null;
    document.getElementById("mob").value = null;
    document.getElementById("password").value = null;
    document.getElementById("confPassword").value = null;
}

function toggleSignInSection() {
    var signInSection = document.getElementById('signInSection');
    
    // Toggle visibility
    if (signInSection.style.display === 'none') {
        signInSection.style.display = 'block';
    } else {
        signInSection.style.display = 'none';
    }
}
