(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


function sent() {
    alert("Hello! I am an alert box!!");
}




$(document).ready (function(){
    $(window).scroll(function(){
       if(this.scrollY > 20) {
           $('.navbar').addClass("sticky");
       } else {
            $('.navbar').removeClass("sticky");
       }
    });
    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn').toggleClass("active");
    });

 
    // typing animation script
    var typed = new Typed (".typing", {
        strings: ["FrontEnd Developer...", "Video Editor...", "Blogger...", "IT Specialist..."],
        typeSpeed: 300,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }

        }
    });
});





// EMAIL SECTIONSecureToken : "e0c79f8e-d774-4eb9-ad9e-9ebcea670d01",

// function sendMail() {
//     Email.send({
//     Host : "smtp.immanueltech199@gmail.com",
//     Username : "immanueltech199@gmail",
//     Passowrd : "yzupohzoqfbnzmmv",
//     To : 'iemmzzyhost@gmail.com',
//     From : document.getElementById("email").value,
//     Subject : document.getElementById("subject").value,
//     Body : "Name: " + document.getElementById("name").value
//     + "<br> Email: " + document.getElementById("email").value
//     + "<br> Subject: " + document.getElementById("subject").value
//     + "<br> Message: " + document.getElementById("message").value
// }).then(
// message => alert("Message sent successfully")
// );
// }