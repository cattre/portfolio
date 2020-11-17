var introSection = document.querySelector('.intro');
var aboutSection = document.querySelector('.about');
var portfolioSection = document.querySelector('.portfolio');
var projectSection = document.querySelector('.project');
var introButtons = document.querySelectorAll('.introButtons');
var fadeElements = document.querySelectorAll('.fade');
var whoButtons = document.querySelectorAll('.who');
var whatButtons = document.querySelectorAll('.what');
var backButtons = document.querySelectorAll('.back');
introButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        fadeElements.forEach(function (element) {
            element.classList.remove('fade');
        });
    });
});
whoButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        window.scrollTo(0, 0);
        introSection.style.display = 'none';
        aboutSection.style.display = 'flex';
        portfolioSection.style.display = 'none';
        projectSection.style.display = 'none';
    });
});
whatButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        projectButtons();
        getProjects();
        window.scrollTo(0, 0);
        introSection.style.display = 'none';
        aboutSection.style.display = 'none';
        portfolioSection.style.display = 'flex';
        projectSection.style.display = 'none';
    });
});
backButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        window.scrollTo(0, 0);
        introSection.style.display = 'flex';
        aboutSection.style.display = 'none';
        portfolioSection.style.display = 'none';
        projectSection.style.display = 'none';
    });
});
var projectButtons = function () {
    var projectDetailsButtons = document.querySelectorAll('.projectDetails');
    projectDetailsButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            window.scrollTo(0, 0);
            introSection.style.display = 'none';
            aboutSection.style.display = 'none';
            portfolioSection.style.display = 'none';
            projectSection.style.display = 'flex';
        });
    });
};
