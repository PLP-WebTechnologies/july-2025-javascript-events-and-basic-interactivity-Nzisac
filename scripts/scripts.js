/* Demonstrating Common Event Types*/
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
    alert('Button was clicked!');
});

const text=document.getElementById('hoverText');
    text.onmouseover = function() {
        text.style.color = 'red';
        text.style.fontWeight = 'bold';
    }
    text.onmouseout = function() {
        text.style.color = 'black';
        text.style.fontWeight = 'normal';
    }

    const input = document.getElementById('nameInput');
    const display = document.getElementById('nameDisplay');

    input.onchange = function() {
    display.textContent = `Hello, ${input.value}!`;
    };

    /* Creating interactive elements */

    const toggleButton = document.getElementById('toggleButton');
    const toggleText = document.getElementById('toggleText');

    toggleButton.onclick = function() {
    if (toggleText.style.display === 'none') {
        toggleText.style.display = 'block';
        toggleButton.textContent = 'Hide Text';
    } 
    else {
        toggleText.style.display = 'none';
        toggleButton.textContent = 'Show Text';
    }
    };

  const slider = document.getElementById("fontSlider");
  const sliderText = document.getElementById("sliderText");

  fontSlider.oninput = function () {
    sliderText.style.fontSize = `${fontSlider.value}px`; 
  };

  const modal = document.getElementById("modal");
  const openModalButton = document.getElementById("openModal");
  const closeModalButton = document.getElementById("closeModal");

    openModalButton.onclick = function () {
     modal.style.display = "block";
    };
    closeModalButton.onclick = function () {
        modal.style.display = "none";
    };

    /* Creating a Corousel */

let images = [
    "images/pic1.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg",
    "images/pic1.jpg"
]

let currentIndex = 0;

function showImage() {
    document.getElementById("carouselImage").src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

function previousImage() {
    currentIndex = (currentIndex - 1+ images.length) % images.length;
    showImage();
}

setInterval(nextImage, 3000);

 /* Form Validation using JS */

document.getElementById("myform").onsubmit = function(event) {
    event.preventDefault();

    let isValid = true;

    let name=document.getElementById("name").value.trim();
    let email=document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    //clear any errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    if(name === "") {
        document.getElementById("nameError").style.color = "red";
        document.getElementById("nameError").innerText = "Name is Required.";
        isValid= false;
    } 
    else if(name.length <3) {
        document.getElementById("nameError").style.color = "red";
        document.getElementById("nameError").innerText = "Name must be atleast 3 characters.";
        isValid= false;
    }
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email === "")  {
        document.getElementById("emailError").style.color = "red";
        document.getElementById("emailError").innerText = "Email is Required.";
        isValid= false;
     } else if(!email.match(emailPattern)) {
        document.getElementById("emailError").style.color = "red";
        document.getElementById("emailError").innerText = "Invalid email format.";
        isValid = false;
    }

    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // At least 6 characters, one letter and one number

    if(password === "") {
        document.getElementById("passwordError").style.color = "red";
        document.getElementById("passwordError").innerText = "Password is Required.";
        isValid = false;
    } else if(!password.match(passwordPattern)) {
        document.getElementById("passwordError").style.color = "red";
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters and contain at least one letter and one number.";
        isValid = false;
    }

    //check if all validations passed
    if(isValid) {
       alert("Form submitted successfuly!");
       document.getElementById("myform").reset(); //reset form fields

    }
}


