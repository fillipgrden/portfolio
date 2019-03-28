$(document).ready(function () {

    //HTML elements
    const mainUL = document.querySelectorAll('header .about h1 ul');
    const ulHeight = document.querySelector('header .about h1 ul').offsetHeight;
    const h1 = document.querySelector('header .about h1');
    const paragraph = document.querySelector('header p');
    const aboutDiv = document.querySelector('header .about');

    const txt = 'Cześć, nazywam się Filip Grdeń jestem początkującym developerem oraz studentem informatyki i ekonometrii ze specjalnością "programowanie aplikacji mobilnych i webowych". Front-endem zainteresowałem się w marcu 2018 roku, a już miesiąć później uczestniczyłem w bootcampie Akademii108 w Krakowie. Programuję, ponieważ lubię tworzyć coś z niczego, dlatego też moim celem jest ciągły rozwój w technologiach webowych, aby granicą jakośći moich projektów były nie umiejętności lecz tylko wyobraźnia. Obecnie rozwijam się  w Reactie oraz w C#. ';


    // Parametry
    let indexText = 0;
    const time = 40;
    let indexTyping;

    // Implementacja
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


    const start = () => {
        h1.style.height = (ulHeight / 2) + 'px';
    }

    start();

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


    $('a:not([data-type="about"])').on('click', function () {
        const goToSection = "#" + $(this).attr('class');
        $('body, html').animate({
            scrollTop: $(goToSection).offset().top,
        }, 1500)
    })


    $(".bootstrap-project").hover(function () {
        $(this).parent(".container-projects").siblings('.container-skills').children('.html').addClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.bootstrap').addClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.css').addClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.rwd').addClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.jquery').addClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.js').addClass("no-filter");
    }, function () {
        $(this).parent(".container-projects").siblings('.container-skills').children('.html').removeClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.bootstrap').removeClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.css').removeClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.rwd').removeClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.jquery').removeClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.js').removeClass("no-filter");
    });

    $(".sass-project").hover(function () {
        $(this).parent(".container-projects").siblings('.container-skills').children('.html').addClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.bootstrap').addClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.css').addClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.rwd').addClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.jquery').addClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.js').addClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.sass').addClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.gulp').addClass("no-filter");
    }, function () {
        $(this).parent(".container-projects").siblings('.container-skills').children('.html').removeClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.bootstrap').removeClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.css').removeClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.rwd').removeClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.jquery').removeClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.js').removeClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.sass').removeClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.gulp').removeClass("no-filter");
    });

    $(".artwood-project").hover(function () {
        $(this).parent(".container-projects").siblings('.container-skills').children('.html').addClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.css').addClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.rwd').addClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.jquery').addClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.js').addClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.seo').addClass("no-filter");
    }, function () {
        $(this).parent(".container-projects").siblings('.container-skills').children('.html').removeClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.css').removeClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.rwd').removeClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.jquery').removeClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.js').removeClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.seo').removeClass("no-filter");
    });

    $(".portfolio-project").hover(function () {
        $(this).parent(".container-projects").siblings('.container-skills').children('.html').addClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.css').addClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.rwd').addClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.jquery').addClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.js').addClass("no-filter");
    }, function () {
        $(this).parent(".container-projects").siblings('.container-skills').children('.html').removeClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.css').removeClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.rwd').removeClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.jquery').removeClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.js').removeClass("no-filter");
    });

    $(".procural-project").hover(function () {
        $(this).parent(".container-projects").siblings('.container-skills').children('.html').addClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.css').addClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.jquery').addClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.js').addClass("no-filter");
    }, function () {
        $(this).parent(".container-projects").siblings('.container-skills').children('.html').removeClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.css').removeClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.jquery').removeClass("no-filter");
        $(this).parent(".container-projects").siblings('.container-skills').children('.js').removeClass("no-filter");
    });


    $(".sql-project").hover(function () {
        $(this).parent(".container-projects").siblings('.container-skills').children('.sql').addClass("no-filter");
    }, function () {
        $(this).parent(".container-projects").siblings('.container-skills').children('.sql').removeClass("no-filter");
    });
});