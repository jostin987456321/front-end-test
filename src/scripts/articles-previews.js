/*
 * Ejercicio: define una clase que, al presionar “See All Insights”, muestre las
 * tarjetas ocultas inicialmente. Considera accesibilidad y rendimiento; luego
 * instancia la clase solo cuando el componente exista en la página.
 */


class accesiRendimi {
    constructor() {
        this.btn = document.getElementById("btn-ocultas");
        this.cards = document.querySelectorAll(".cards-ocultas");

        this.init();
    }


    init() {
        this.btn.addEventListener("click", () => {

            this.cards.forEach((card) => {
                card.classList.toggle("mostrar");
            });

            console.log(this.cards);

        });
    }
}

const btnOcultas = document.getElementById("btn-ocultas");

if (btnOcultas) {
    new accesiRendimi();
}
