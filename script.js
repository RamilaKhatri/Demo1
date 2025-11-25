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

    localStorage.setItem("formName", name);
    localStorage.setItem("formEmail", email);
    localStorage.setItem("formMessage", message);

    window.location.href = "form-details.html";
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


/* Step 5: Image Slider */
let slides = document.querySelectorAll(".slide");
let index = 0;

document.getElementById("next").onclick = () => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
};

document.getElementById("prev").onclick = () => {
    slides[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
};

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

