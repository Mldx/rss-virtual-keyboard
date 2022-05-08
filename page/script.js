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


const keys = document.querySelectorAll('.key');

const capslockKey = document.querySelector('.key_Capslock');
const capslockKeyIndicator = document.createElement('div');
capslockKeyIndicator.classList.add('capslockKeyIndicator');
capslockKey.appendChild(capslockKeyIndicator);

const capslockKeyIndicatorOn = () => {
    capslockKeyIndicator.classList.toggle('capslockKeyIndicatorON');
};

capslockKey.addEventListener('mousedown', () => {
    capslockKeyIndicatorOn();
    keys.forEach((el) => {
        if ((el.innerText.charCodeAt(0) >= 97 && el.innerText.charCodeAt(0) <= 122)
            || (el.innerText.charCodeAt(0) >= 1072 && el.innerText.charCodeAt(0) <= 1105)) {
            el.classList.add('capslock');
        } else {
            el.classList.remove('capslock');
        }
    });
});

keyboardBox.addEventListener('mousedown', (e) => {
    e.preventDefault();
});

document.addEventListener('keydown', (e) => {
    const { which } = e;
    if (which === 20 && e.repeat === false) {
        active(capslockKey);
        capslockKeyIndicatorOn();
        keys.forEach((el) => {
            if ((el.innerText.charCodeAt(0) >= 97 && el.innerText.charCodeAt(0) <= 122)
                || (el.innerText.charCodeAt(0) >= 1072 && el.innerText.charCodeAt(0) <= 1105)) {
                el.classList.add('capslock');
            } else {
                el.classList.remove('capslock');
            }
        });
    }
});

const pushKeys = Array.from(keys).filter((value) => value.innerHTML.length <= 1);
pushKeys.forEach((value) => {
    value.addEventListener('click', () => {
        if (value.innerHTML === ' ') {
            insertAtCursor(value.innerHTML);
        } else {
            insertAtCursor(value.innerText);
        }
    });
});

document.addEventListener('keydown', (e) => {
    const { keyCode } = e;
    keys.forEach((value) => {
        if (Number(value.dataset.id) === keyCode
            && keyCode !== 20
            && keyCode !== 16
            && keyCode !== 17
            && keyCode !== 18
            && keyCode !== 8
            && keyCode !== 46) {
            active(value);
            if (value.innerHTML === ' ') {
                insertAtCursor(value.innerHTML);
                e.preventDefault();
            } else if (value.innerHTML.length <= 1) {
                insertAtCursor(value.innerText);
                e.preventDefault();
            }
        }
    });
});

document.addEventListener('keyup', (e) => {
    const { keyCode } = e;
    keys.forEach((value) => {
        if (Number(value.dataset.id) === keyCode
            && keyCode !== 17
            && keyCode !== 18) {
            deActive(value);
        }
    });
});
document.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('key') && e.target.dataset.id !== '20') {
        active(e.target);
    }
});
document.addEventListener('mouseup', () => {
    keys.forEach((value) => {
        if (!value.classList.contains('key_Shift')) {
            deActive(value);
        }
    });
});

document.addEventListener('keydown', (e) => {
    const { which } = e;
    if (which === 9) {
        e.preventDefault();
        insertAtCursor('    ');
    }
});
document.addEventListener('mousedown', (e) => {
    if (e.target.dataset.id === '9') {
        insertAtCursor('    ');
    }
});
document.addEventListener('keydown', (e) => {
    const { which } = e;
    if (which === 13) {
        e.preventDefault();
        insertAtCursor('\n');
    }
});
document.addEventListener('mousedown', (e) => {
    if (e.target.dataset.id === '13') {
        insertAtCursor('\n');
    }
});
document.addEventListener('keydown', (e) => {
    const { keyCode } = e;
    if (keyCode === 16 && e.location === 1) {
        e.preventDefault();
        active(keys[42]);
    }
    if (keyCode === 16 && e.location === 2) {
        e.preventDefault();
        active(keys[54]);
    }
    if (keyCode === 17 && e.location === 1) {
        e.preventDefault();
        active(keys[55]);
    }
    if (keyCode === 17 && e.location === 2) {
        e.preventDefault();
        active(keys[63]);
    }
    if (keyCode === 18 && e.location === 1) {
        e.preventDefault();
        active(keys[57]);
    }
    if (keyCode === 18 && e.location === 2) {
        e.preventDefault();
        active(keys[59]);
        if (!e.ctrlKey) {
            deActive(keys[55]);
        }
    }
});
document.addEventListener('keyup', (e) => {
    const { keyCode } = e;
    if (keyCode === 17 && e.location === 1) {
        deActive(keys[55]);
    }
    if (keyCode === 17 && e.location === 2) {
        deActive(keys[63]);
    }
    if (keyCode === 18 && e.location === 1) {
        deActive(keys[57]);
    }
    if (keyCode === 18 && e.location === 2) {
        deActive(keys[59]);
    }
});
const keyShift = document.querySelectorAll('.key_Shift');
document.addEventListener('keydown', (e) => {
    const { which } = e;
    if (which === 16 && e.repeat === false && keys[1].innerHTML === '1') {
        keys.forEach((element, i) => {
            const el = element;
            if ((el.innerText.charCodeAt(0) >= 97 && el.innerText.charCodeAt(0) <= 122)
                || (el.innerText.charCodeAt(0) >= 1072 && el.innerText.charCodeAt(0) <= 1105)) {
                el.classList.add('capslock');
            } else if (Number(el.dataset.id) === arrayKeys[i].keyCode && arrayKeys[i].valueShift && (keys[0].innerHTML === '~' || keys[0].innerHTML === '`')) {
                el.innerHTML = arrayKeys[i].valueShift;
            } else if (Number(el.dataset.id) === arrayKeys[i].keyCode && arrayKeys[i].valueShiftRu && keys[0].innerHTML === 'ё') {
                el.innerHTML = arrayKeys[i].valueShiftRu;
            } else {
                el.classList.remove('capslock');
            }
        });
    }
});
document.addEventListener('keyup', (e) => {
    const { which } = e;
    if (which === 16 && e.repeat === false) {
        keys.forEach((element, i) => {
            const el = element;
            if ((el.innerText.charCodeAt(0) >= 97 && el.innerText.charCodeAt(0) <= 122)
                || (el.innerText.charCodeAt(0) >= 1072 && el.innerText.charCodeAt(0) <= 1105)) {
                el.classList.add('capslock');
            } else if (arrayKeys[i].valueShift && (keys[0].innerHTML === '~' || keys[0].innerHTML === '`')) {
                el.innerHTML = arrayKeys[i].value;
            } else if (arrayKeys[i].valueShiftRu && keys[0].innerHTML === 'ё') {
                el.innerHTML = arrayKeys[i].valueRu;
            } else {
                el.classList.remove('capslock');
            }
        });
    }
});

document.addEventListener('mousedown', (e) => {
    if (e.target.dataset.id === '16' && !e.shiftKey) {
        keys.forEach((element, i) => {
            const el = element;
            if ((el.innerText.charCodeAt(0) >= 97 && el.innerText.charCodeAt(0) <= 122)
                || (el.innerText.charCodeAt(0) >= 1072 && el.innerText.charCodeAt(0) <= 1105)) {
                el.classList.add('capslock');
            } else if (Number(el.dataset.id) === arrayKeys[i].keyCode && arrayKeys[i].valueShift && (keys[0].innerHTML === '~' || keys[0].innerHTML === '`')) {
                el.innerHTML = arrayKeys[i].valueShift;
            } else if (Number(el.dataset.id) === arrayKeys[i].keyCode && arrayKeys[i].valueShiftRu && keys[0].innerHTML === 'ё') {
                el.innerHTML = arrayKeys[i].valueShiftRu;
            } else {
                el.classList.remove('capslock');
            }
        });
    }
});

document.addEventListener('mouseup', (e) => {
    const { which } = e;
    if ((keyShift[0].style.background !== '' || keyShift[1].style.background !== '') && !e.shiftKey) {
        if (e.target.innerText.length <= 1 && e.target.classList.contains('key')) {
            if (which === 1) {
                insertAtCursor(e.target.innerText);
            }
        }
        keys.forEach((element, i) => {
            const el = element;
            if ((el.innerText.charCodeAt(0) >= 97 && el.innerText.charCodeAt(0) <= 122)
                || (el.innerText.charCodeAt(0) >= 1072 && el.innerText.charCodeAt(0) <= 1105)) {
                el.classList.add('capslock');
            } else if (arrayKeys[i].valueShift && (keys[0].innerHTML === '~' || keys[0].innerHTML === '`')) {
                el.innerHTML = arrayKeys[i].value;
            } else if (arrayKeys[i].valueShiftRu && keys[0].innerHTML === 'ё') {
                el.innerHTML = arrayKeys[i].valueRu;
            } else {
                el.classList.remove('capslock');
            }
        });
        deActive(keyShift[0]);
        deActive(keyShift[1]);
    }
});

const changeLanguage = (e) => {
    const capsOn = !!document.querySelector('.capslockKeyIndicatorON');
    if (keys[0].innerHTML === '`' || keys[0].innerHTML === '~') {
        keys.forEach((val, i) => {
            const value = val;
            if (arrayKeys[i].valueRu) {
                if (arrayKeys[i].valueShiftRu && e.shiftKey) {
                    value.innerHTML = arrayKeys[i].valueShiftRu;
                } else if (arrayKeys[i].valueRu && !e.shiftKey) {
                    if (capsOn) {
                        value.innerHTML = arrayKeys[i].valueRu;
                        value.classList.add('capslock');
                    } else {
                        value.innerHTML = arrayKeys[i].valueRu;
                    }
                }
            }
        });
    } else if (keys[0].innerHTML === 'ё') {
        keys.forEach((val, i) => {
            const value = val;
            if (arrayKeys[i].value) {
                if (arrayKeys[i].valueShift && e.shiftKey) {
                    value.innerHTML = arrayKeys[i].valueShift;
                } else if (arrayKeys[i].value
                    && !e.shiftKey
                    && value.innerText.length <= 1) {
                    if (capsOn) {
                        value.innerHTML = arrayKeys[i].value;
                        value.classList.add('capslock');
                    } else {
                        value.innerHTML = arrayKeys[i].value;
                    }
                }
            }
            capslockKey.appendChild(capslockKeyIndicator);
        });
    }
};

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
keyboardBox.addEventListener('mouseup', (e) => {
    if (keys[55].style.background !== '' && e.target.classList.contains('key_Alt')) {
        changeLanguage(e);
    } else if (keys[57].style.background !== '' && e.target.classList.contains('key_Ctrl')) {
        changeLanguage(e);
    }
});

document.addEventListener('keydown', (e) => {
    if ((e.repeat === false && e.location === 1 && !e.shiftKey) && ((e.ctrlKey && e.code === 'AltLeft') || (e.altKey && e.code === 'ControlLeft'))) {
        changeLanguage(e);
    }
});

keyboardBox.addEventListener('click', (e) => {
    const rgb = `linear-gradient(45deg, rgb(${getRandomArbitrary(30, 130)},${getRandomArbitrary(30, 130)},${getRandomArbitrary(30, 130)}), rgb(${getRandomArbitrary(30, 130)},${getRandomArbitrary(30, 130)},${getRandomArbitrary(30, 130)}), rgb(${getRandomArbitrary(30, 130)},${getRandomArbitrary(30, 130)},${getRandomArbitrary(30, 130)})`;
    if (e.target.classList.contains('key_Win')) {
        keyboardBox.style.background = rgb;
    }
});
document.addEventListener('keydown', (e) => {
    const { keyCode } = e;
    const rgb = `linear-gradient(45deg, rgb(${getRandomArbitrary(30, 130)},${getRandomArbitrary(30, 130)},${getRandomArbitrary(30, 130)}), rgb(${getRandomArbitrary(30, 130)},${getRandomArbitrary(30, 130)},${getRandomArbitrary(30, 130)}), rgb(${getRandomArbitrary(30, 130)},${getRandomArbitrary(30, 130)},${getRandomArbitrary(30, 130)})`;
    if (keyCode === 91 && e.repeat === false) {
        keyboardBox.style.background = rgb;
    }
});

const keyBackspace = document.querySelector('.key_Backspace ');
keyBackspace.addEventListener('mousedown', () => {
    backspaceAtCursor();
});
document.addEventListener('keydown', (e) => {
    const { which } = e;
    if (which === 8) {
        e.preventDefault();
        backspaceAtCursor();
        active(keys[13]);
    }
});

const keyDelete = document.querySelector('.key_Del');
keyDelete.addEventListener('mousedown', () => {
    deleteAtCursor();
});
document.addEventListener('keydown', (e) => {
    const { which } = e;
    if (which === 46) {
        e.preventDefault();
        deleteAtCursor();
        active(keys[28]);
    }
});

window.addEventListener('beforeunload', () => {
    localStorage.setItem('MldxLang', keys[0].innerHTML === '`' || keys[0].innerHTML === '~' ? 'en' : 'ru');
});

window.addEventListener('focus', () => {
    deActive(keys[57]);
});
