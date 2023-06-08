let button = document.querySelector('#brand');

function showModal() {
    let modal = document.querySelector('#myModal')
    if (window.getComputedStyle(modal).display == 'none') {
        modal.style.display = 'block'
    } else {
        modal.style.display = 'none'
    }
};

button.addEventListener('click', showModal);

let closeButton = document.querySelector('.close');

closeButton.addEventListener('click', showModal);





let item = document.querySelector('#brand_item')

function showModal2() {
    let modal2 = document.querySelector('#myModal2')
    let modal = document.querySelector('#myModal')

    if (window.getComputedStyle(modal2).display == 'none') {
        modal2.style.display = 'block';
        modal.style.display = 'none';
    } else {
        modal2.style.display = 'none'
        modal.style.display = 'block';
    }
};

item.addEventListener('click', showModal2);

let closeButton2 = document.querySelector('.close2');

closeButton2.addEventListener('click', showModal2);





let tel = document.querySelector('.order');

function showModal3() {
    let modal3 = document.querySelector('#myModal3')

    if (window.getComputedStyle(modal3).display == 'none') {
        modal3.style.display = 'block';
    } else {
        modal3.style.display = 'none'
    }
};

tel.addEventListener('click', showModal3);

let closeButton3 = document.querySelector('.close3');

closeButton3.addEventListener('click', showModal3);





let marks = document.querySelector('.marks');

function showModal4() {
    let modal4 = document.querySelector('#myModal4')

    if (window.getComputedStyle(modal4).display == 'none') {
        modal4.style.display = 'block';
    } else {
        modal4.style.display = 'none'
    }
};

tel.addEventListener('click', showModal4);

let closeButton4 = document.querySelector('.close4');

closeButton4.addEventListener('click', showModal4);