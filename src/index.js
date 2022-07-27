const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
    // write your solution here
    let arr = [];
    for (let i = expr.length / 10; i > 0; i--) {
        arr.unshift(expr.slice(-10));
        expr = expr.slice(0, -10);
    }

    for (let i = 0; i < arr.length; i++) {
        let b = 0;
        let count = 0;
        while (b < arr[i].length) {
            
            if (arr[i][b] !== '0') {
                arr[i] = arr[i].slice(count);
                break;
            }
                count = count + 1;
            b++;
        }
        
    }
    
    

    for (let i = 0; i < arr.length; i++) {
        let strMorse = '';
        let b = 1;
        for (let b = 1; b < arr[i].length; b=b+2) {
            if (arr[i][b] === '*') {
                strMorse = strMorse + '**'
            } else if (arr[i][b] === '0') {
                strMorse = strMorse + '.'
                
            } else {
                strMorse = strMorse + '-'
            }
        }
        arr[i] = strMorse;
    }

    let phrase = ''

    for (let i = 0; i < arr.length; i++) {
        for (let key in MORSE_TABLE) {
            if (arr[i] === key) {
                phrase = phrase + MORSE_TABLE[key];
            }
        }
    }
    return phrase;
}

module.exports = {
    decode
}
