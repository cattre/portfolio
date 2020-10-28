const introSection = document.querySelector('.intro')
const aboutSection = document.querySelector('.about')
const portfolioSection = document.querySelector('.portfolio')
const projectSection = document.querySelector('.project')

const introButtons = document.querySelectorAll('.introButtons')
const whoButtons = document.querySelectorAll('.who')
const whatButtons = document.querySelectorAll('.what')
const backButtons = document.querySelectorAll('.back')

introButtons.forEach(button => {
    button.addEventListener('click', () => {
        introButtons.forEach(button => {
            button.classList.remove('fade')
        })
    })
})

whoButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.scrollTo(0,0);
        introSection.style.display = 'none'
        aboutSection.style.display = 'flex'
        portfolioSection.style.display = 'none'
        projectSection.style.display = 'none'
    })
})

whatButtons.forEach(button => {
    button.addEventListener('click', () => {
        projectButtons()
        getProjects()
        window.scrollTo(0,0);
        introSection.style.display = 'none'
        aboutSection.style.display = 'none'
        portfolioSection.style.display = 'flex'
        projectSection.style.display = 'none'
    })
})

backButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.scrollTo(0,0);
        introSection.style.display = 'flex'
        aboutSection.style.display = 'none'
        portfolioSection.style.display = 'none'
        projectSection.style.display = 'none'
    })
})

let projectButtons = () => {
    const projectDetailsButtons = document.querySelectorAll('.projectDetails')

    projectDetailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.scrollTo(0,0);
            introSection.style.display = 'none'
            aboutSection.style.display = 'none'
            portfolioSection.style.display = 'none'
            projectSection.style.display = 'flex'
        })
    })
}


