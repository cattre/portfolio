var nameSpan = document.querySelector('.name');
var myName = ['R', 'i', 'c', 'h', 'a', 'r', 'd', ' ', 'C', 'a', 't', 't', 'e', 'r', 'i', 'l', 'l'];
var index = 0;
setTimeout(function () {
    typeName();
}, 500);
var typeName = function () {
    var string = '';
    var typing = setInterval(function () {
        string += myName[index];
        nameSpan.textContent = string;
        index++;
        if (index >= 17) {
            clearInterval(typing);
        }
    }, 100);
};
