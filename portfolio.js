let nameSpan = document.querySelector('.name')
let name = ['R', 'i', 'c', 'h', 'a', 'r', 'd', ' ', 'C', 'a', 't', 't', 'e', 'r', 'i', 'l', 'l']
let index = 0

window.addEventListener('load', () => {
    setTimeout(() => {
        typeName()
    }, 1500)
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
    }, 200)
}



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