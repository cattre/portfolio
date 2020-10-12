let nameSpan = document.querySelector('.name')
let name = ['R', 'i', 'c', 'h', 'a', 'r', 'd', ' ', 'C', 'a', 't', 't', 'e', 'r', 'i', 'l', 'l']
let index = 0
let fadeButtons = document.querySelectorAll('.fade')

window.addEventListener('load', () => {
    setTimeout(() => {
        typeName()
    }, 500)
    fadeButtons.forEach(button => {
        button.style.animation = 'fadein 1s forwards ease-in 2200ms'
    })
})

typeName = () => {
    let string = ''
    let typing = setInterval(() => {
        string += name[index]
        nameSpan.textContent = string
        index++
        if(index >= 17) {
            clearInterval(typing)
        }
    }, 100)
}


let intro = document.querySelector('.intro')
let about = document.querySelector('.about')
let portfolio = document.querySelector('.portfolio')

let whoButton = document.querySelector('.who')
let whatButton = document.querySelector('.what')
let backButton = document.querySelector('.back')

whoButton.addEventListener('click', () => {
    intro.style.display = 'none'
    about.style.display = 'flex'
    portfolio.style.display = 'none'
})

whatButton.addEventListener('click', () => {
    intro.style.display = 'none'
    about.style.display = 'none'
    portfolio.style.display = 'flex'
})

backButton.addEventListener('click', () => {
    intro.style.display = 'flex'
    about.style.display = 'none'
    portfolio.style.display = 'none'
})



let keys = ''
let konami = 'arrowuparrowuparrowdownarrowdownarrowleftarrowrightarrowleftarrowrightba'
let body = document.querySelector('body')

window.addEventListener('keydown', e => {
    keys += e.key.toLowerCase()
    console.log(keys)
    checkCode(keys, konami)
})

checkCode = (input, code) => {
    let codeLen = code.length
    let inputLen = input.length
    let checkValue = input.substring(inputLen - codeLen)
    if (checkValue === code) {
        body.style.backgroundColor = '#FFFFFF'
    }
}