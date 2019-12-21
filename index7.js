const galerija = document.getElementById('galerija_slika');
const elementi_galerije = galerija.children;

for(const elem of elementi_galerije){
    if(elem.tagName.toLowerCase() === 'span'){
        const slika = document.createElement('img');
        slika.src = 'mace.jpg';
        slika.width = 100;

        galerija.replaceChild(slika, elem);
    }
}