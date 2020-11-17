var keys = '';
var konami = 'arrowuparrowuparrowdownarrowdownarrowleftarrowrightarrowleftarrowrightba';
var body = document.querySelector('body');
window.addEventListener('keydown', function (e) {
    keys += e.key.toLowerCase();
    checkCode(keys, konami);
});
var checkCode = function (input, code) {
    var codeLen = code.length;
    var inputLen = input.length;
    var checkValue = input.substring(inputLen - codeLen);
    if (checkValue === code) {
        body.style.backgroundColor = '#FFFFFF';
    }
};
