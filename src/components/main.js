let izbrannaya = document.getElementById('izbrannaya')
let polnaya = document.getElementById('polnaya')
izbrannaya.addEventListener("click", () => {
    izbrannaya.classList.remove("unchoosed");
    polnaya.classList.add("unchoosed");
});

polnaya.addEventListener("click", () => {
    polnaya.classList.remove("unchoosed");
    izbrannaya.classList.add("unchoosed");
});