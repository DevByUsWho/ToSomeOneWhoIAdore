
const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const modal = document.getElementById("letterModal");

openBtn.addEventListener("click", () => {
    envelope.classList.add("open");

    setTimeout(() => {
        modal.classList.add("show");
    }, 700);
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");

    setTimeout(() => {
        envelope.classList.remove("open");
    }, 300);
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("show");
        setTimeout(() => {
            envelope.classList.remove("open");
        }, 300);
    }
});

// Floating hearts animation
function createHeart() {
    const heart = document.createElement("span");

    heart.classList.add("floating-heart");
    heart.innerHTML = "♥";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 700);
