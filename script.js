/* ===============================
   ANIMASI WEBSITE
================================ */

@keyframes fadeUp {

    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }

}


.hero-content {
    animation: fadeUp 1s ease;
}


.car-card,
.feature-card,
.testimoni-card,
.price-card {
    animation: fadeUp 0.8s ease;
}



/* ===============================
   FLOATING WHATSAPP BUTTON
================================ */

.whatsapp-float {

    position: fixed;
    width: 60px;
    height: 60px;

    right: 25px;
    bottom: 25px;

    background: #25D366;
    color: white;

    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 30px;

    box-shadow: 0 5px 15px rgba(0,0,0,0.25);

    z-index: 999;

    transition: 0.3s;

}


.whatsapp-float:hover {

    transform: scale(1.1);

}


/* ===============================
   SCROLL BAR
================================ */

::-webkit-scrollbar {

    width: 10px;

}


::-webkit-scrollbar-track {

    background: #eeeeee;

}


::-webkit-scrollbar-thumb {

    background: var(--primary);

    border-radius: 10px;

}
/* ===============================
   MOBILE MENU
================================ */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


if (hamburger) {

    hamburger.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        hamburger.classList.toggle("open");

    });

}
/* ===============================
   WHATSAPP BOOKING
================================ */


const whatsappButtons = document.querySelectorAll(".btn-whatsapp");


whatsappButtons.forEach(function(button) {


    button.addEventListener("click", function(e) {


        const phoneNumber = "628xxxxxxxxxx";


        const message = 
        "Halo Rental Mobil Makassar, saya ingin melakukan pemesanan mobil.";


        const whatsappURL = 
        "https://wa.me/" + phoneNumber + 
        "?text=" + encodeURIComponent(message);


        button.href = whatsappURL;


    });


});
/* ===============================
   SCROLL ANIMATION
================================ */


const animatedElements = document.querySelectorAll(
    ".car-card, .feature-card, .testimoni-card, .price-card"
);


window.addEventListener("scroll", function() {


    animatedElements.forEach(function(element) {


        const position = element.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;


        if (position < screenHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }


    });


});
/* ===============================
   FORM BOOKING VALIDATION
================================ */


const bookingForm = document.querySelector("#bookingForm");


if (bookingForm) {


    bookingForm.addEventListener("submit", function(e) {


        const name = document.querySelector("#name").value;
        const phone = document.querySelector("#phone").value;


        if (name === "" || phone === "") {


            e.preventDefault();


            alert(
                "Mohon isi nama dan nomor WhatsApp terlebih dahulu."
            );


        }


    });


}
/* ===============================
   BACK TO TOP BUTTON
================================ */


const backToTop = document.querySelector(".back-to-top");


if (backToTop) {


    window.addEventListener("scroll", function() {


        if (window.scrollY > 400) {


            backToTop.style.display = "flex";


        } else {


            backToTop.style.display = "none";


        }


    });



    backToTop.addEventListener("click", function() {


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });


    });


  }
