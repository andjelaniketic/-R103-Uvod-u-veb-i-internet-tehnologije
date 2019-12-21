const f = document.querySelector('#formular');

function prebroj_cifre(vrednost){
    let br_cifara = 0;
    for(let i=0; i <vrednost.length; ++i){
        const tekuci = vrednost.charAt(i);
        if('0123456789'.indexOf(tekuci) !== -1){
            ++br_cifara;
        }
    }
    return br_cifara;
}

f.onsubmit = function(){
    let greska = document.querySelector('#greska');

    let polje = document.querySelector('#ime_prezime');
    let sadrzaj = polje.value.trim();

    let duzina = polje.maxLength || 50;

    if(sadrzaj === ''|| sadrzaj.length > duzina){
        greska.textContent = 'Neispravno ime i/ili prezime!';
        polje.focus();
        return false;
    }

    polje = document.querySelector('#datum_rodjenja');
    sadrzaj = polje.value.trim();

    const godina = parseInt(sadrzaj.substr(0, 4));
    const mesec = parseInt(sadrzaj.substr(5, 2));
    const dan = parseInt(sadrzaj.substr(7, 2));

    if(isNaN(godina) || isNaN(mesec) || isNaN(dan) || godina > 2019){
        greska.textContent = 'Neispravan datum rodjenja';
        polje.focus();
        return false;
    }

    polje = document.querySelector('#email');
    sadrzaj = polje.value;
    const at = sadrzaj.indexOf('@');
    const tacka = sadrzaj.lastIndexOf('.');

    if(at === -1 || tacka === -1 || at > tacka){
        greska.textContent = 'Neispravan mejl';
        polje.focus();
        return false;
    }

    polje = document.querySelector('#veb_adresa');
    sadrzaj = polje.value;

    if(sadrzaj.substr(0,7) != 'http://'){
        greska.textContent = 'Neispravna veb adresa!';
        polje.focus();
        return false;
    }

    polje = document.querySelector('#username');
    sadrzaj = polje.value;
    
    if(sadrzaj.length < 5){
        greska.textContent = 'Korisnicko ime nije dovoljno dugacko!';
        polje.focus();
        return false;
    }

    const mala = [];
    const velika = [];

    for(let i = 0; i<26; ++i){
        mala[i] = String.fromCharCode(97+i);
        velika[i] = String.fromCharCode(65+i);
    }

    for(let i=0; i<sadrzaj.length; ++i){
        const tekuci = sadrzaj.charAt(i);

        if(mala.indexOf(tekuci) === -1 &&
            velika.indexOf(tekuci) === -1){
                greska.textContent = 'Nedozvoljen karakter u polju za korisnicko ime!';
                polje.focus();
                return false;
            }
    }

    

    polje = document.querySelector('#password');
    sadrzaj = polje.value.trim();

    if(sadrzaj === ''){
        greska.textContent = 'Polje za sifru je obavezno!';
        polje.focus();
        return false;
    }

    const broj_cifara = prebroj_cifre(sadrzaj);
    if(broj_cifara < 2){
        greska.textContent = 'Sifra mora imati bar 2 cifre!';
        polje.focus();
        return false;
    }

    const polje2 = document.querySelector('#fakultet');
    if(polje2.selectedIndex === 0){
        greska.textContent = 'Odaberite fakultet';
        polje2.focus();
        return false;
    }

    let indikator = false;
    polje = document.querySelectorAll('input[name = "godina"]');
    for(let i=0; i < polje.length; ++i){
        let godina = polje[i];

        if(godina.checked){
            indikator = true;
            break;
        }
    }
    if(!indikator){
        greska.textContent = 'Odaberite godinu studija!';
        return false;
    }

    return true;
};

f.onreset = function(){
    return window.confirm('Da li zelite da obrisete sve podatke?');
};

const s = document.getElementById('password');

s.addEventListener('focus', function(){
    const brojCifara = prebroj_cifre(this.value.trim());
    if(brojCifara < 2){
        upozorenje.style.display = 'block';
    }
});