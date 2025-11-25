// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* Step 1: Animated Skills */
let skills = document.querySelectorAll(".fill");
window.addEventListener("scroll", () => {
    skills.forEach(skill => {
        let rect = skill.getBoundingClientRect().top;
        if (rect < window.innerHeight - 50) {
            skill.style.width = skill.dataset.width;
        }
    });
});

/*  Step 2: Form Validation + localStorage */
document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        document.getElementById("form-msg").innerHTML = " All fields required!";
        return;
    }

    // Clear error message
    document.getElementById("form-msg").innerHTML = "";

    // Display message on screen
    let display = document.getElementById("submittedMessages");
    display.innerHTML = `
        <h3>Submitted Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr>
    `;

    // Optional: clear form fields
    document.getElementById("contactForm").reset();

    alert("Message sent successfully!");
});


/*Step 3: Project Card Navigation */
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        window.location.href = card.dataset.link;
    });
});

/* Step 4: Canvas Drawing */
let c = document.getElementById("myCanvas").getContext("2d");

// Draw a rectangle
c.fillStyle = "blue";
c.fillRect(20, 20, 300, 150);

// Add text
c.font = "40px Arial";
c.fillStyle = "black";      
c.textAlign = "center";
c.textBaseline = "middle";   
c.fillText("Hello, Canvas!", 20 + 300 /2, 20 +150 /2); 


//Image slides
let index = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

// Show slides
function showSlide(num) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === num) slide.classList.add("active");
    });
}

// Next slide (auto + button)
function nextSlide() {
    index = (index + 1) % totalSlides;
    showSlide(index);
}

// Prev slide (button)
function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide(index);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);

// Buttons
document.getElementById("next").onclick = nextSlide;
document.getElementById("prev").onclick = prevSlide;



/*  Step 6: Dark/Light Mode  */
document.getElementById("theme-toggle").onclick = () => {
    document.body.classList.toggle("dark-mode");
};

/*  Step 7: Back-to-Top Button  */
let topBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
/* Video Cover Hide */
let cover = document.getElementById("videoCover");
let video = document.getElementById("myVideo");

cover.onclick = () => {
    cover.classList.add("hidden");
    video.play();
};

