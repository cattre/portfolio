/// <reference path='project.ts' />

const introSection: HTMLElement = document.querySelector('.intro')
const aboutSection: HTMLElement = document.querySelector('.about')
const portfolioSection: HTMLElement = document.querySelector('.portfolio')
const projectSection: HTMLElement = document.querySelector('.project')

const introButtons: NodeList = document.querySelectorAll('.introButtons')
const fadeElements: NodeList = document.querySelectorAll('.fade')
const whoButtons: NodeList = document.querySelectorAll('.who')
const whatButtons: NodeList = document.querySelectorAll('.what')
const backButtons: NodeList = document.querySelectorAll('.back')

introButtons.forEach((button: HTMLInputElement) => {
    button.addEventListener('click', () => {
        fadeElements.forEach((element: HTMLElement) => {
            element.classList.remove('fade')
        })
    })
})

whoButtons.forEach((button: HTMLInputElement) => {
    button.addEventListener('click', () => {
        window.scrollTo(0,0);
        introSection.style.display = 'none'
        aboutSection.style.display = 'flex'
        portfolioSection.style.display = 'none'
        projectSection.style.display = 'none'
    })
})

whatButtons.forEach((button: HTMLInputElement) => {
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

backButtons.forEach((button: HTMLInputElement) => {
    button.addEventListener('click', () => {
        window.scrollTo(0,0);
        introSection.style.display = 'flex'
        aboutSection.style.display = 'none'
        portfolioSection.style.display = 'none'
        projectSection.style.display = 'none'
    })
})

let projectButtons = () => {
    const projectDetailsButtons: NodeList = document.querySelectorAll('.projectDetails')

    projectDetailsButtons.forEach((button: HTMLInputElement) => {
        button.addEventListener('click', () => {
            window.scrollTo(0,0);
            introSection.style.display = 'none'
            aboutSection.style.display = 'none'
            portfolioSection.style.display = 'none'
            projectSection.style.display = 'flex'
        })
    })
}


