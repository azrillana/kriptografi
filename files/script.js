function modInverse(a, m) {
    for (let x = 1; x < m; x++) {
        if ((a * x) % m === 1) {
            return x;
        }
    }
    throw new Error('No modular inverse found');
}

function encrypt() {
    const inputText = document.getElementById('inputText').value.toUpperCase();
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);
    const m = 26;
    let outputText = '';

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];
        if (char.match(/[A-Z]/)) {
            let charCode = inputText.charCodeAt(i) - 65; // 'A' is 65 in ASCII
            char = String.fromCharCode(((a * charCode + b) % m) + 65);
        }
        outputText += char;
    }

    document.getElementById('outputText').value = outputText;
}

function decrypt() {
    const inputText = document.getElementById('inputText').value.toUpperCase();
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);
    const m = 26;
    let outputText = '';

    const a_inv = modInverse(a, m);

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];
        if (char.match(/[A-Z]/)) {
            let charCode = inputText.charCodeAt(i) - 65; // 'A' is 65 in ASCII
            char = String.fromCharCode(((a_inv * (charCode - b + m)) % m + m) % m + 65);
        }
        outputText += char;
    }

    document.getElementById('outputText').value = outputText;
}
