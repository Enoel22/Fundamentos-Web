function openURL() {
    const select = document.getElementById("socialMedia");
    const url = select.value;
    if (url) {
        window.open(url, "_blank");
    } else {
        alert("Por favor, selecciona una opción.");
    }
}