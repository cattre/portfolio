let keys = ''
let konami = 'arrowuparrowuparrowdownarrowdownarrowleftarrowrightarrowleftarrowrightba'
let body = document.querySelector('body')

window.addEventListener('keydown', (e: KeyboardEvent): void => {
    keys += e.key.toLowerCase()
    checkCode(keys, konami)
})

let checkCode = (input: string, code: string): void => {
    let codeLen = code.length
    let inputLen = input.length
    let checkValue = input.substring(inputLen - codeLen)
    if (checkValue === code) {
        body.style.backgroundColor = '#FFFFFF'
    }
}