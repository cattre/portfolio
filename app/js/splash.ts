let nameSpan: HTMLElement = document.querySelector('.name')
let myName: Array<string> = ['R', 'i', 'c', 'h', 'a', 'r', 'd', ' ', 'C', 'a', 't', 't', 'e', 'r', 'i', 'l', 'l']
let index: number = 0

setTimeout((): void => {
    typeName()
}, 500)

let typeName = (): void => {
    let string = ''
    let typing = setInterval(() => {
        string += myName[index]
        nameSpan.textContent = string
        index++
        if(index >= 17) {
            clearInterval(typing)
        }
    }, 100)
}