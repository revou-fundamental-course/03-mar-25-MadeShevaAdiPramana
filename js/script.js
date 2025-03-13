function changename() {
    let sepa = prompt("Halo, Siapa namamu?", ""); 
    document.getElementById("sepa").innerHTML = sepa; 
}

let gantinama = document.getElementById("gantinama"); 
gantinama.addEventListener("click", function() { 
    changename(); 
});

// Banner Auto Slide
let currentIndex = 0;
const slides = document.querySelectorAll(".wrapper img");
const totalSlides = slides.length;
const wrapper = document.querySelector(".wrapper");

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; 
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Panggil fungsi nextSlide setiap 3 detik
setInterval(nextSlide, 3000);


document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let time = document.getElementById("time").value;
    let message = document.getElementById("message").value;

    if (!name || !age || !gender || !time || !message) {
      alert("Please fill in all fields");
      return;
    }

    let messageBox = document.getElementById("messageDisplay");

    let newMessage = document.createElement("div");
    newMessage.innerHTML = `<strong>${name} (${age}, ${gender})</strong><br>${time}<br>${message}<hr>`;

    messageBox.appendChild(newMessage);

    document.getElementById("messageForm").reset();
});


document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".achievement-card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.2 }
    );

    cards.forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(card);
    });
});
