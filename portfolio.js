let nameSpan = document.querySelector('.name')
let name = ['R', 'i', 'c', 'h', 'a', 'r', 'd', ' ', 'C', 'a', 't', 't', 'e', 'r', 'i', 'l', 'l']
let index = 0
let introButtons = document.querySelectorAll('.introButtons')

window.addEventListener('load', () => {
    setTimeout(() => {
        typeName()
    }, 500)
    introButtons.forEach(button => {
        button.classList.add('fade')
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

let whoButton = document.querySelectorAll('.who')
let whatButton = document.querySelectorAll('.what')
let backButton = document.querySelectorAll('.back')

introButtons.forEach(button => {
    button.addEventListener('click', () => {
        introButtons.forEach(button => {
            button.classList.remove('fade', 'introButtons')
        })
    })
})

whoButton.forEach(button => {
    button.addEventListener('click', () => {
        intro.style.display = 'none'
        about.style.display = 'flex'
        portfolio.style.display = 'none'
    })
})

whatButton.forEach(button => {
    button.addEventListener('click', () => {
        intro.style.display = 'none'
        about.style.display = 'none'
        portfolio.style.display = 'flex'
    })
})

backButton.forEach(button => {
    button.addEventListener('click', () => {
        intro.style.display = 'flex'
        about.style.display = 'none'
        portfolio.style.display = 'none'
    })
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