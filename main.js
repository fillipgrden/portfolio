const mainUL = document.querySelectorAll('header .about h1 ul');
const ulHeight = document.querySelector('header .about h1 ul').offsetHeight;
const h1 = document.querySelector('header .about h1');
const paragraph = document.querySelector('header p');

const spnText = document.querySelector('.text');
const txt = 'Cześć nazywam się Filip Grdeń pochodzę z okrąglika a dokładniej z białej chatya, można mnie też poznać pod ksywką FILON, moje motto, które mam wytatułowane na przedramieniu brzmi "jeżeli zaczynasz impreze w piątek, kończ ją w niedziele"';


// Parametry
let indexText = 0;
const time = 40;

// Implementacja

const addLetter1 = () => {
    const addLetter = () => {
        paragraph.textContent += txt[indexText];
        indexText++;
        if (indexText === txt.length) clearInterval(indexTyping);
    }

    const indexTyping = setInterval(addLetter, time)
}


// Implementacja
const start = () => {
    h1.style.height = (ulHeight / 2) + 'px';
}

document.querySelector('a.about').addEventListener("click", addLetter1);

start();

$('a:not([data-type="about"])').on('click', function () {
    const goToSection = "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top,
    }, 1500)
})

$('a.about').on('click', function () {
    $('.about').addClass('disapear');
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