

const navigation = document.getElementById("navigation");
const closeBtn = document.getElementById("close");
const openBtn = document.getElementById("open");

function addAnimationClass() {
    navigation.classList.add("scale-in-tl");
    navigation.classList.remove("scale-out-tl");
    openBtn.classList.remove("show");
    closeBtn.classList.add("show");
}

function removeAnimationClass() {
    navigation.classList.add("scale-out-tl");
    navigation.classList.remove("scale-in-tl");
    closeBtn.classList.remove("show");
    openBtn.classList.add("show");
}
