let nameSpan = document.querySelector('.name');
let name = ['R', 'i', 'c', 'h', 'a', 'r', 'd', ' ', 'C', 'a', 't', 't', 'e', 'r', 'i', 'l', 'l'];
let index = 0;
window.addEventListener('load', () => {
  setTimeout(() => {
    typeName();
  }, 500);
});

typeName = () => {
  let string = '';
  let typing = setInterval(() => {
    string += name[index];
    nameSpan.textContent = string;
    index++;

    if (index >= 17) {
      clearInterval(typing);
    }
  }, 100);
};
//# sourceMappingURL=splash.js.map
