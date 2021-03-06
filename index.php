
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="https://fonts.googleapis.com/css?family=Arimo|Nunito:400,700" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <nav>
        <ul>
            <li><a class="about" data-type="about" href="#">O MNIE</a></li>
            <li><a class="main" href="#">GŁÓWNA</a></li>
            <li><a class="projects" href="#">PROJEKTY</a></li>
            <li><a class="contact" href="#">KONTAKT</a></li>
        </ul>
    </nav>
    <header id="main">
        <p></p>
        <div class="about">
            <h1>F<ul>
                    <li>ilip</li>
                    <li>rontend</li>
                </ul>
                <ul>
                    <li>Gr</li>
                    <li><span>Gr</span></li>
                </ul>de<ul>
                    <li>ń</li>
                    <li>veleoper</li>
                </ul>
            </h1>
            <i class="fas fa-user-graduate"></i>
            <i class="fas fa-code"></i>
        </div>
        <a class="projects" href="#">
            <span>ZOBACZ PROJEKTY</span>
        </a>
    </header>
    <section id="projects">
        <div class="container-skills">
            <div class="html">
                <i class="fab fa-html5"></i>
            </div>
            <div class="sass">
                <i class="fab fa-sass"></i>
            </div>
            <div class="js">
                <i class="fab fa-js-square"></i>
            </div>
            <div class="css">
                <i class="fab fa-css3-alt"></i>
            </div>
            <div class="bootstrap">
                <i class="fab fa-bootstrap"></i>
            </div>
            <div class="seo">
                <img src="img/seo.png" alt="">
            </div>
            <div class="rwd">
                <img src="img/rwd.png" alt="">
            </div>
            <div class="jquery">
                <img src="img/55526813_638574406579634_3381622017806565376_n (1).png" alt="">
            </div>
            <div class="sql">
                <img src="img/sql.png" alt="">
            </div>
            <div class="gulp">
                <i class="fab fa-gulp"></i>
            </div>
        </div>
        <div class="container-projects">
            <div class="bootstrap-project">
                <div class="mask">
                    <a href=""> <i class="fab fa-github"></i></a>
                    <a href=""> <i class="fas fa-play"></i></a>
                </div>
            </div>
            <div class="sass-project">
                <div class="mask">
                    <a href=""> <i class="fab fa-github"></i></a>
                    <a href=""> <i class="fas fa-play"></i></a>
                </div>
            </div>
            <div class="sql-project">
                <div class="mask">
                    <a href=""><i class="fas fa-download"></i></a>
                    <a href=""><i class="fas fa-file-word"></i></a>
                </div>
            </div>
            <div class="artwood-project">
                <div class="mask">
                    <a href=""> <i class="fab fa-github"></i></a>
                    <a href=""> <i class="fas fa-play"></i></a>
                </div>
            </div>
            <div class="portfolio-project">
                <div class="mask">
                    <a href=""> <i class="fab fa-github"></i></a>
                    <a href=""> <i class="fas fa-play"></i></a>
                </div>
            </div>
            <div class="procural-project">
                <div class="mask">
                    <div>
                        <a href=""> <i class="fab fa-github"></i></a>
                        <a href=""> <i class="fas fa-play"></i></a>
                        <p>Projekt w trakcie realizacji</p>
                    </div>
                </div>
            </div>
            <a class="contact" href="#">
                <span>KONTAKT</span>
            </a>
    </section>
    <section id="contact">
        <div class="contact-container">
            <h2>Zapraszam do kontaktu</h2>
            <div class="icon-container">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-linkedin"></i>
                <i class="fas fa-envelope"></i>
                <i class="fab fa-github"></i>
            </div>
        </div>
        <div class="form">
            <form action="contactform.php" method="post">
                <input type="text" name="name" placeholder="Imię">
                <input type="text" name="surname" placeholder="Nazwisko">
                <input type="text" name="mail" placeholder="Your e-mail">
                <textarea name="message" id="" placeholder="Message"></textarea>
                <button type="submit" name="submit">WYŚLIJ</button>
            </form>
        </div>
    </section>
    <footer>
        <p>© 2019 Filip Grdeń | Wszelkie prawa zastrzeżone</p>
        <a class="main" href="#"><i class="fas fa-arrow-up"></i>DO GÓRY</a>
    </footer>
    <script src="jquery-3.3.1.min.js"></script>
    <script src="main.js"></script>
</body>

</html> 
