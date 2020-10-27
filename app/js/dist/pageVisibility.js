const introSection = document.querySelector('.intro');
const aboutSection = document.querySelector('.about');
const portfolioSection = document.querySelector('.portfolio');
const projectSection = document.querySelector('.project');
const whoButton = document.querySelectorAll('.who');
const whatButton = document.querySelectorAll('.what');
const backButton = document.querySelectorAll('.back');
introButtons.forEach(button => {
  button.addEventListener('click', () => {
    introButtons.forEach(button => {
      button.classList.remove('fade', 'introButton');
    });
  });
});
whoButton.forEach(button => {
  button.addEventListener('click', () => {
    introSection.style.display = 'none';
    aboutSection.style.display = 'flex';
    portfolioSection.style.display = 'none';
    projectSection.style.display = 'none';
  });
});
whatButton.forEach(button => {
  button.addEventListener('click', () => {
    introSection.style.display = 'none';
    aboutSection.style.display = 'none';
    portfolioSection.style.display = 'flex';
    projectSection.style.display = 'none';
  });
});
backButton.forEach(button => {
  button.addEventListener('click', () => {
    introSection.style.display = 'flex';
    aboutSection.style.display = 'none';
    portfolioSection.style.display = 'none';
    projectSection.style.display = 'none';
  });
});
window.addEventListener('load', () => {
  let projectDetailsButton = document.querySelectorAll('.projectDetails');
  projectDetailsButton.forEach(button => {
    button.addEventListener('click', () => {
      introSection.style.display = 'none';
      aboutSection.style.display = 'none';
      portfolioSection.style.display = 'none';
      projectSection.style.display = 'flex';
    });
  });
});
//# sourceMappingURL=pageVisibility.js.map
