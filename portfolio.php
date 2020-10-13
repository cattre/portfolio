<?php

require 'code.php';

?>

<!DOCTYPE html>
<html lang='en'>
    <head>
        <title>Richard Catterill - Software Developer</title>
        <script defer src='https://kit.fontawesome.com/d224d393cb.js' crossorigin='anonymous'></script>
        <script defer src='portfolio.js'></script>
        <link rel='icon' type='image/x-icon' href='media/favicon.ico'/>
        <link href='https://fonts.googleapis.com/css2?family=Montserrat&family=Permanent+Marker&family=Rock+Salt&display=swap' rel='stylesheet'>
        <link rel='stylesheet' type= 'text/css' href='normalize.css'>
        <link rel='stylesheet' type= 'text/css' href='portfolio.css'>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <meta charset='UTF-8'>
    </head>
    <body>
        <header class='intro pg vert'>
            <section class='horiz fullheight'>
                <span class='title'><span class='name'></span><span class='cursor'>_</span></span>
            </section>
            <section class='horiz fullheight'>
                <button class='who introButtons button1 horiz fullheight'>
                    <div class='vert'>
                        <span>
                            who is this guy?
                        </span>
                        <span>
                            <i class='fas fa-user-secret largeIcon'></i>
                        </span>
                    </div>
                </button>
                <button class='what introButtons button2 horiz fullheight'>
                    <div class='vert'>
                            <span>
                                what can he do?
                            </span>
                            <span>
                                <i class='fas fa-code largeIcon'></i>
                            </span>
                    </div>
                </button>
            </section>
        </header>
        <main>
            <div class='about pg vert'>
                <div class='menu'>
                    <button class='back button1 color1'>&#8592; back</button>
                    <button class='what button2 color2'>what can he do? &#8594;</button>
                </div>
                <section class='horiz fullheight'>
                    <article class='horiz fullheight'>
                        <div class='image fullheight'>
                        </div>
                    </article>
                </section>
                <section class='horiz fullheight'>
                    <article class='vert'>
                        <span class='subtitle color1'>
                            Work
                        </span>
                        <p class='body bgcolor2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </article>
                    <article class='vert'>
                        <span class='subtitle color1'>
                            Play
                        </span>
                        <p class='body bgcolor2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </article>
                </section>
            </div>
            <div class='portfolio pg vert'>

            </div>
        </main>
<!--        <img class='logo' src='--><?php //echo $php; ?><!--' alt='--><?php //echo $phpAlt; ?><!--'>-->
    </body>
</html>