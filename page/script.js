const language = localStorage.getItem('MldxLang') ? localStorage.getItem('MldxLang') : 'en';

const arrayKeys = [
    {
        value: '`',
        valueShift: '~',
        valueRu: 'ё',
        className: 'smallKey',
        keyCode: 192,
    },
    {
        value: '1',
        valueRu: '1',
        valueShift: '!',
        valueShiftRu: '!',
        className: 'smallKey',
        keyCode: 49,
    },
    {
        value: '2',
        valueRu: '2',
        valueShift: '@',
        valueShiftRu: '"',
        className: 'smallKey',
        keyCode: 50,
    },
    {
        value: '3',
        valueRu: '3',
        valueShift: '#',
        valueShiftRu: '№',
        className: 'smallKey',
        keyCode: 51,
    }, {
        value: '4',
        valueRu: '4',
        valueShift: '$',
        valueShiftRu: ';',
        className: 'smallKey',
        keyCode: 52,
    },
    {
        value: '5',
        valueRu: '5',
        valueShift: '%',
        valueShiftRu: '%',
        className: 'smallKey',
        keyCode: 53,
    },
    {
        value: '6',
        valueRu: '6',
        valueShift: '^',
        valueShiftRu: ':',
        className: 'smallKey',
        keyCode: 54,
    },
    {
        value: '7',
        valueRu: '7',
        valueShift: '&',
        valueShiftRu: '?',
        className: 'smallKey',
        keyCode: 55,
    },
    {
        value: '8',
        valueRu: '8',
        valueShift: '*',
        valueShiftRu: '*',
        className: 'smallKey',
        keyCode: 56,
    },
    {
        value: '9',
        valueRu: '9',
        valueShift: '(',
        valueShiftRu: '(',
        className: 'smallKey',
        keyCode: 57,
    },
    {
        value: '0',
        valueRu: '0',
        valueShift: ')',
        valueShiftRu: ')',
        className: 'smallKey',
        keyCode: 48,
    },
    {
        value: '-',
        valueRu: '-',
        valueShift: '_',
        valueShiftRu: '_',
        className: 'smallKey',
        keyCode: 189,
    },
    {
        value: '=',
        valueRu: '=',
        valueShift: '+',
        valueShiftRu: '+',
        className: 'smallKey',
        keyCode: 187,
    },
    {
        value: 'Backspace',
        className: 'bigKey',
        keyCode: 8,
    },
    {
        value: 'Tab',
        className: 'tabKey',
        keyCode: 9,
    },
    {
        value: 'q',
        valueRu: 'й',
        className: 'smallKey',
        keyCode: 81,
    },
    {
        value: 'w',
        valueRu: 'ц',
        className: 'smallKey',
        keyCode: 87,
    },
    {
        value: 'e',
        valueRu: 'у',
        className: 'smallKey',
        keyCode: 69,
    },
    {
        value: 'r',
        valueRu: 'к',
        className: 'smallKey',
        keyCode: 82,
    },
    {
        value: 't',
        valueRu: 'е',
        className: 'smallKey',
        keyCode: 84,
    },
    {
        value: 'y',
        valueRu: 'н',
        className: 'smallKey',
        keyCode: 89,
    },
    {
        value: 'u',
        valueRu: 'г',
        className: 'smallKey',
        keyCode: 85,
    },
    {
        value: 'i',
        valueRu: 'ш',
        className: 'smallKey',
        keyCode: 73,
    },
    {
        value: 'o',
        valueRu: 'щ',
        className: 'smallKey',
        keyCode: 79,
    },
    {
        value: 'p',
        valueRu: 'з',
        className: 'smallKey',
        keyCode: 80,
    },
    {
        value: '[',
        valueRu: 'х',
        valueShift: '{',
        className: 'smallKey',
        keyCode: 219,
    },
    {
        value: ']',
        valueRu: 'ъ',
        valueShift: '}',
        className: 'smallKey',
        keyCode: 221,
    },
    {
        value: '\\',
        valueRu: '\\',
        valueShift: '|',
        valueShiftRu: '/',
        className: 'smallKey',
        keyCode: 220,
    },
    {
        value: 'Del',
        className: 'smallKey',
        keyCode: 46,
    },
    {
        value: 'Capslock',
        className: 'bigKey',
        keyCode: 20,
    },
    {
        value: 'a',
        valueRu: 'ф',
        className: 'smallKey',
        keyCode: 65,
    },
    {
        value: 's',
        valueRu: 'ы',
        className: 'smallKey',
        keyCode: 83,
    },
    {
        value: 'd',
        valueRu: 'в',
        className: 'smallKey',
        keyCode: 68,
    },
    {
        value: 'f',
        valueRu: 'а',
        className: 'smallKey',
        keyCode: 70,
    },
    {
        value: 'g',
        valueRu: 'п',
        className: 'smallKey',
        keyCode: 71,
    },
    {
        value: 'h',
        valueRu: 'р',
        className: 'smallKey',
        keyCode: 72,
    },
    {
        value: 'j',
        valueRu: 'о',
        className: 'smallKey',
        keyCode: 74,
    },
    {
        value: 'k',
        valueRu: 'л',
        className: 'smallKey',
        keyCode: 75,
    },
    {
        value: 'l',
        valueRu: 'д',
        className: 'smallKey',
        keyCode: 76,
    },
    {
        value: ';',
        valueRu: 'ж',
        valueShift: ':',
        className: 'smallKey',
        keyCode: 186,
    },
    {
        value: '\'',
        valueRu: 'э',
        valueShift: '"',
        className: 'smallKey',
        keyCode: 222,
    },
    {
        value: 'Enter',
        className: 'middleKey',
        keyCode: 13,
    },
    {
        value: 'Shift',
        className: 'bigKey',
        keyCode: 16,
    },
    {
        value: 'z',
        valueRu: 'я',
        className: 'smallKey',
        keyCode: 90,
    },
    {
        value: 'x',
        valueRu: 'ч',
        className: 'smallKey',
        keyCode: 88,
    },
    {
        value: 'c',
        valueRu: 'с',
        className: 'smallKey',
        keyCode: 67,
    },
    {
        value: 'v',
        valueRu: 'м',
        className: 'smallKey',
        keyCode: 86,
    },
    {
        value: 'b',
        valueRu: 'и',
        className: 'smallKey',
        keyCode: 66,
    },
    {
        value: 'n',
        valueRu: 'т',
        className: 'smallKey',
        keyCode: 78,
    },
    {
        value: 'm',
        valueRu: 'ь',
        className: 'smallKey',
        keyCode: 77,
    },
    {
        value: ',',
        valueRu: 'б',
        valueShift: '<',
        className: 'smallKey',
        keyCode: 188,
    },
    {
        value: '.',
        valueRu: 'ю',
        valueShift: '>',
        className: 'smallKey',
        keyCode: 190,
    },
    {
        value: '/',
        valueRu: '.',
        valueShiftRu: ',',
        valueShift: '?',
        className: 'smallKey',
        keyCode: 191,
    },
    {
        value: '↑',
        className: 'smallKey',
        keyCode: 38,
    },
    {
        value: 'Shift',
        className: 'middleKey',
        keyCode: 16,
    },
    {
        value: 'Ctrl',
        className: 'smallKey',
        keyCode: 17,
    },
    {
        value: 'Win',
        className: 'smallKey',
        keyCode: 91,
    },
    {
        value: 'Alt',
        className: 'smallKey',
        keyCode: 18,
    },
    {
        value: ' ',
        className: 'spaceKey',
        keyCode: 32,
    },
    {
        value: 'Alt',
        className: 'smallKey',
        keyCode: 18,
    },
    {
        value: '←',
        className: 'smallKey',
        keyCode: 37,
    },
    {
        value: '↓',
        className: 'smallKey',
        keyCode: 40,
    },
    {
        value: '→',
        className: 'smallKey',
        keyCode: 39,
    },
    {
        value: 'Ctrl',
        className: 'smallKey',
        keyCode: 17,
    },
];

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

const title = document.createElement('h1');
title.innerHTML = 'Виртуальная клавиатура';
title.classList.add('title');
wrapper.appendChild(title);

const textArea = document.createElement('textarea');
textArea.classList.add('textArea');
textArea.setAttribute('spellcheck', 'false');
wrapper.appendChild(textArea);

const keyboardBox = document.createElement('div');
keyboardBox.classList.add('keyboardBox');
wrapper.appendChild(keyboardBox);

const description = document.createElement('div');
description.classList.add('description');
description.innerHTML = 'Клавиатура создана под <b>Windows OS</b>'
    + '<br>'
    + '<br> Для переключения языка используйте комбинацию клавиш: <b>Left Ctrl + Alt</b> '
    + '<br>'
    + '<br> Для нажатия какой-либо клавиши через Shift мышью, нажмите и удерживая Shift перетащите курсор на нужную вам клавишу затем отпустите '
    + '<br>'
    + '<br> Для смены цвета клавиатуры нажмите кнопку <b>Win</b> ';
wrapper.appendChild(description);


function insertAtCursor(textToInsert) {
    textArea.focus();
    const { value } = textArea;

    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;

    textArea.value = value.slice(0, start) + textToInsert + value.slice(end);

    textArea.selectionEnd = start + textToInsert.length;
    textArea.selectionStart = textArea.selectionEnd;
}
function backspaceAtCursor() {
    textArea.focus();
    const { value } = textArea;

    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;

    if (start === end && (start !== 0 || end !== 0)) {
        textArea.value = value.slice(0, start - 1) + value.slice(end);
        textArea.selectionEnd = start - 1;
        textArea.selectionStart = textArea.selectionEnd;
    } else {
        textArea.value = value.slice(0, start) + value.slice(end);
        textArea.selectionEnd = start;
        textArea.selectionStart = textArea.selectionEnd;
    }
}
function deleteAtCursor() {
    textArea.focus();
    const { value } = textArea;

    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;

    if (start === end && (start !== value.length || end !== value.length)) {
        textArea.value = value.slice(0, start) + value.slice(end + 1);
        textArea.selectionEnd = end;
        textArea.selectionStart = textArea.selectionEnd;
    } else {
        textArea.value = value.slice(0, start) + value.slice(end);
        textArea.selectionEnd = start;
        textArea.selectionStart = textArea.selectionEnd;
    }
}
function active(value) {
    const val = value;
    val.style.background = '#FFFFFF33';
    val.style.boxShadow = 'none';
    val.style.border = 'none';
    val.style.transform = 'scale(0.97)';
}
function deActive(value) {
    const val = value;
    val.style.background = '';
    val.style.boxShadow = '';
    val.style.border = '';
    val.style.transform = '';
}
const createKey = (el, lang) => {
    if (lang === 'en') {
        const { className, keyCode } = el;
        const key = document.createElement('div');
        key.innerHTML = el.value;
        key.className = (`key key_${el.value} ${className}`);
        key.setAttribute('data-id', `${keyCode}`);
        keyboardBox.appendChild(key);
    } else if (lang === 'ru') {
        const { className, keyCode } = el;
        const key = document.createElement('div');
        if (el.valueRu) {
            key.innerHTML = el.valueRu;
        } else if (el.valueShiftRu) {
            key.innerHTML = el.valueRu;
        } else {
            key.innerHTML = el.value;
        }
        key.className = (`key key_${el.value} ${className}`);
        key.setAttribute('data-id', `${keyCode}`);
        keyboardBox.appendChild(key);
    }
};

arrayKeys.forEach((el) => {
    createKey(el, language);
});
