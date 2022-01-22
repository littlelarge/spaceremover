let mainInput = document.querySelector('.main__input');
let btn = document.querySelector('.main__btn');
let resInput = document.querySelector('.main__input-result')

btn.addEventListener('click', ()=> {
    let text = mainInput.value;
    let result = '';
    for(let i = 0; i < text.length; i++) {
        if (text[i] == ' ') {
            result += '';
        }
        else {
            result += text[i];
        }
    }
    resInput.value = result;
})