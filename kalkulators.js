let display = document.getElementById('display');
let vestureBox = document.getElementById('vestureBox');
let paradits = false;
let n = localStorage.length;
let tuksaVesture = vestureBox.innerHTML;

window.onload = function() {
    if (localStorage.length != 0) {
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.getItem(`darbiba${i}`) == null) {
            } else {
            vestureBox.innerHTML += localStorage.getItem(`darbiba${i}`) + ' = ' + localStorage.getItem(`rezultats${i}`) + '<br>';
            vestureBox.innerHTML += '----------------------------------------<br>';
        }
    }
}
    
};

function paradit(a) {
    if (display.value == 'Nepastāv') {
        display.value = '';
    }
    display.value += a;
}

function notirit() {
    display.value = '';
}

function aprekinat() {

    let izteiksme = display.value;
    let rezultats = eval(izteiksme);

    if (rezultats == Infinity) {
        display.value = 'Nepastāv';
        rezultats = 'Nepastāv';
    } else {
        display.value = rezultats;
    }

    localStorage.setItem(`darbiba${n}`, izteiksme);
    localStorage.setItem(`rezultats${n}`, rezultats);

    vestureBox.innerHTML += izteiksme + ' = ' + rezultats + '<br>';
    vestureBox.innerHTML += '----------------------------------------<br>';
    n++;

    
}

function vesture() {
    if (paradits == false) {
        paradits = true;
        vestureBox.style.display = 'block';
    } else {
        paradits = false;
        vestureBox.style.display = 'none';
    }
}

function dzestVesturi() {
    localStorage.clear();
    vestureBox.innerHTML = tuksaVesture;
    n = 0;
}
