$(document).ready(function () {
    //HTML elements
    const paragraph = document.querySelector('header p');
    const aboutDiv = document.querySelector('header .about');
    const clases = [...document.querySelectorAll('#projects .container-skills div')];
    // console.log(clases)



    const txt = 'Cześć, nazywam się Filip Grdeń jestem developerem oraz studentem informatyki i ekonometrii ze specjalnością "programowanie aplikacji mobilnych i webowych". Front-endem zainteresowałem się w marcu 2018 roku, a już miesiąć później uczestniczyłem w bootcampie Akademii 108 w Krakowie. Programuję, ponieważ lubię tworzyć coś z niczego, dlatego też moim celem jest ciągły rozwój w technologiach webowych, aby granicą jakośći moich projektów były nie umiejętności lecz tylko wyobraźnia. Obecnie rozwijam się  w Reactie oraz w C#. ';

    //side menu 
    $('.side-menu, nav ul li a').on("click", function () {
        $('.fas, nav').toggleClass('off');
    })


    //about effect
    let indexText = 0;
    const time = 15;
    let indexTyping;

    const addLetter = () => {
        if (paragraph.textContent.length == txt.length) return;
        paragraph.textContent += txt[indexText];
        indexText++;
        if (indexText === txt.length) clearInterval(indexTyping);
        if (aboutDiv.className.includes("disapear")) return;
    }

    const causeAddLetter = () => {
        indexTyping = setInterval(addLetter, time);
    }

    $('a.about').on('click', function () {
        if (paragraph.className.includes('disapear')) {
            $('header p').removeClass('disapear');
            paragraph.textContent = "";
            indexText = 0;
            clearInterval(indexTyping);
        }
        $('header .about').addClass('disapear');
        causeAddLetter();
    })

    $('nav a.main').on('click', function () {
        if (aboutDiv.className.includes('disapear')) {
            $('header .about').removeClass('disapear');
            $('header p').addClass('disapear');
        }
    })

    //smooth scroll
    $('a:not([data-type="about"])').on('click', function () {
        const goToSection = "#" + $(this).attr('class');
        $('body, html').animate({
            scrollTop: $(goToSection).offset().top,
        }, 1500)
    })

    //projects hover effect
    let dataAtr = "";

    $('#projects .container-projects .project').hover(function () {
        dataAtr = "";
        dataAtr += $(this).attr('data-skill');
        const dataArray = dataAtr.split(" ");
        for (let i = 0; i < dataArray.length; i++) {
            // console.log(dataArray[i]);
            for (let j = 0; j < clases.length; j++) {
                // console.log(clases[j].className);
                if (dataArray[i] == clases[j].className) {
                    clases[j].classList.add("no-filter");
                };
            }
        }
    }, function () {
        for (let j = 0; j < clases.length; j++) {
            clases[j].classList.remove("no-filter");
        };
    });

    //form validation

    $('#contact .form form button ').click(function (event) {
        var email = $('input[type="email"]');
        var message = $('textarea');

        if (email.val().length > 0 && message.val().length > 0 && email.val().includes('@')) {
            alert("Pomyślnie wysłano formularz.");
        } else if (!email.val().includes('@')) {
            event.preventDefault();
            alert("Wpisz poprawny adres e-mail!")
        } else {
            event.preventDefault();
            alert("Uzupełnij wymagane pola!");
        }
    })
});