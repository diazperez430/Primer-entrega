let elementosAcordeon = document.getElementsByClassName("acordeon");

for (let i = 0; i < elementosAcordeon.length; i++) {
    elementosAcordeon[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display == "block") {
            panel.style.display = "none";
        }
        else { panel.style.display = "block"; }
    })
}

let icon = document.getElementById("profileph")

        function profDisp() {

            if (icon.style.display == "flex") {
                icon.style.display = "none";
            }
            else {
                icon.style.display = "flex";
            }


        }