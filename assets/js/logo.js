
document.addEventListener("DOMContentLoaded", function() {
    const planetIcon = document.getElementById("planet-icon");
    const icons = ["fa-solid fa-earth-europe", "fa-solid fa-earth-asia", "fa-solid fa-earth-oceania", "fa-solid fa-earth-americas"]; 
    let currentIconIndex = 0;

    function changeIcon() {
        currentIconIndex = (currentIconIndex + 1) % icons.length;
        planetIcon.className = icons[currentIconIndex];
    }

    setInterval(changeIcon, 1000); 
});

