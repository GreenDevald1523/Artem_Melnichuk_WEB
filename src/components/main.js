let izbrannaya = document.getElementById('izbrannaya')
let polnaya = document.getElementById('polnaya')
let filmsIzb = document.getElementById('section__filmography-items-izb')
let filmsPol = document.getElementById('section__filmography-items-pol')
let filmName = document.querySelectorAll('section__video-item-name')


izbrannaya.addEventListener("click", () => {
    izbrannaya.classList.remove("unchoosed");
    polnaya.classList.add("unchoosed");
    filmsIzb.classList.remove('opacity-0')
    filmsPol.classList.add('opacity-0')
});

polnaya.addEventListener("click", () => {
    polnaya.classList.remove("unchoosed");
    izbrannaya.classList.add("unchoosed");
    filmsIzb.classList.add('opacity-0')
    filmsPol.classList.remove('opacity-0')
});

// if (filmName.length > 45) {
//     for (let i = 44; i < filmName.length; i++) {
//         if ((i === 44) || (i === 45) || (i === 46)) {
//             filmName = filmName.replace(filmName[i], '.')
//         }
//         filmName = filmName.replace(filmName[i], '')
//     }
// }