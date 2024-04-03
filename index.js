const karticky = document.querySelectorAll('.karticka');
let otoceneKarticky = [];

function vyberKarticky(event) {
    const vybranaKarticka = event.target.closest('.karticka');
    const obrazekSrc = vybranaKarticka.querySelector('img').src;

    otoceneKarticky.push(vybranaKarticka);
    vybranaKarticka.classList.remove('otocena');

    if (!otoceneKarticky.includes(vybranaKarticka)) {
    otoceneKarticky.push(vybranaKarticka);
    } else {

    porovnani(obrazekSrc, vybranaKarticka);
    }

    zaviraniKarticek();
}

function porovnani(obrazekSrc, vybranaKarticka) {
    const [prvniObr, druhyObr] = otoceneKarticky;
    const prvniObrSrc = prvniObr.querySelector('img').src;
    const druhyObrSrc = druhyObr.querySelector('img').src;

    if (prvniObrSrc === obrazekSrc && druhyObrSrc === obrazekSrc) {
    prvniObr.classList.remove('otocena');
    druhyObr.classList.remove('otocena');
    otoceneKarticky = [];
    } else {
    setTimeout(() => {
        prvniObr.classList.add('otocena');
        druhyObr.classList.add('otocena');
        otoceneKarticky = [];
    }, 1000);
    }
}

function zaviraniKarticek() {
    if (otoceneKarticky.length === 2) {
    setTimeout(() => {
        otoceneKarticky.forEach(karticka => {
        karticka.classList.add('otocena');
        });
        otoceneKarticky = [];
    }, 1000);
    }
}

karticky.forEach(karticka => {
    karticka.addEventListener('click', vyberKarticky);
});