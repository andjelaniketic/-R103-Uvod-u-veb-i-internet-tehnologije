var x = 1;       // Broj            - tip podataka "number"
let y = 'Niska'; // Niska           - tip podataka "string"
const z = true;  // Bulova vrednost - tip podataka "boolean
console.log(x, y, z, 2, 'Druga niska', false);
console.log(typeof(x), typeof(z));

y= false;
console.log(typeof(y));

console.log(0==false, 0===false);
console.log(42=='42', 42==='42');

let a = 15;
let b = 2.5;
let obim = 2*a + 2*b;
console.log('obim', obim);
let povrsina = a*b;
console.log('povrsina', povrsina);

let rand = Math.random();
console.log('random number: ', rand);
console.log('iz intervala [50,150)', Math.floor(Math.random()*100 + 50));

a = 'Ovo'; b = 'je'; let c = 'recenica';
let cela = a + ' ' + b + ' ' + c;
console.log(cela);
console.log(cela.length);

let pozicija = cela.indexOf('recenica');
console.log(pozicija);
pozicija = cela.indexOf('nepostojeca');
console.log(pozicija);

let preseceno = cela.slice(7, 9);
console.log(preseceno);

cela = 'rec rec rec recenica'
let nizmenjeno = cela.replace('rec', 'recenica');
console.log(nizmenjeno);

console.log(cela.toUpperCase());
console.log(cela.toLowerCase());

let beline = ' \n \t            ' + cela;
console.log(beline);
beline = beline.trim();
console.log(beline);

console.log(cela.charAt(5));

let ceo_broj = 42;
let niska = ceo_broj.toString();
console.log(ceo_broj, typeof(ceo_broj), niska, typeof(niska));

niska = '7';
let pi = '3.14';
ceo_broj = Number.parseInt(niska);
let decimalni = Number.parseFloat(pi);
console.log(typeof(niska), pi, ceo_broj, decimalni);

niska = 'jedan';
let niska2 = 'dva';
let neuspesno1 = Number.parseInt(niska);
let neuspesno2 = Number.parseInt(niska2);
console.log(neuspesno1, neuspesno2);
console.log(neuspesno1 == neuspesno2);
console.log('da li je nan?', Number.isNaN(neuspesno1));

console.log(`ovo je primer
    template literal-a`);
console.log(`vrednost 2+2 je ${2+2}`);

function maximum(x,y){
    return x > y ? x : y;
}
console.log(typeof(maximum));
let max = maximum(-1,1);
console.log('veca vr je:' + max);

const ispis = function(arg){
    console.log(arg);
};
const rezultat = ispis(7);
console.log(typeof(rezultat));

const prazna = undefined;
const nistavna = null;
if(prazna == nistavna){
    console.log('mogu se konv jedna u drugu implicitno');
}else{
    console.log('ne mogu se kov jedna u drugu');
}
if(prazna === nistavna){
    console.log('null i undefined su potpuno jednake');
}else{
    console.log('nisu uopste jednake');
}

function pozovi(funkcija, argument){
    if(typeof(funkcija) === 'function'){
        funkcija(argument);
        console.log('pozvana je');
    }
    else{
        console.log(typeof(funkcija));
    }
}
pozovi(ispis, 'arg');
const nije_fja = 0;
pozovi(nije_fja, 'arg');

const niz = [1, 2, 3];
console.log('nizovi imaju tip: '+typeof(niz));
console.log('broj elemenata je: '+niz.length);
let suma = 0;
for(let i=0; i<niz.length; ++i){
    suma+=niz[i];
}
console.log(suma);
let proizvod=1;
for(const element of niz){
    proizvod*=element;
}
console.log(proizvod);

const niz_niski = ['uvit', 'os', 'aisp'];
function ispisi_capsovano(poziv){
    for(let i=0; i<poziv.length; ++i){
        console.log(poziv[i].toUpperCase());
    }
}
ispisi_capsovano(niz_niski);
ispis(niz_niski);

const mesani_niz = [17.5, 'oop', false, 1000, -12.457, 'kiaa', true, true];
function negacija(niz){
    for(let i=0; i<niz.length; ++i){
        if(typeof(niz[i]) === 'boolean'){
            niz[i] = !niz[i];
        }
    }
}
console.log(mesani_niz);
negacija(mesani_niz);
console.log(mesani_niz);

function izdvoji_brojeve(niz){
    const novi = [];
    for(let i=0; i<niz.length; ++i){
        if(typeof(niz[i]) === 'number'){
            novi.push(niz[i]);
        }
    }
    return novi;
}

const samo_br = izdvoji_brojeve(mesani_niz);
console.log(samo_br);

function ukloni_poslednjih_n(niz, n){
    for(let i=0; i<n; ++i){
        niz.pop();
    }
}

console.log(niz);
ukloni_poslednjih_n(niz, 2);
console.log(niz);

let sekvenca = 'a-t-a-g-c-a-g-t-c-c-a';
let nukleotide = sekvenca.split('-');
console.log(nukleotide);

sekvenca = nukleotide.join('');
console.log(sekvenca);

function napravi_2gram(niz){
    const dvagrami = [];
    for(let i=0; i<niz.length-1; ++i){
        const naredni_dvagram = niz.slice(i, i+2);
        dvagrami.push(naredni_dvagram);
    }
    return dvagrami;
}
const dvagrami = napravi_2gram(nukleotide);
console.log(sekvenca);
for(let i=0; i<dvagrami.length; ++i){
    console.log((i+1) + '. 2-gram: ' + dvagrami[i]);
}
console.log(nukleotide);
let pozicija_g = nukleotide.indexOf('g');
console.log('prvo g: '+ pozicija_g);
pozicija_g = nukleotide.indexOf('g',pozicija_g+1);
console.log('drugo g: '+ pozicija_g);
pozicija_g = nukleotide.indexOf('g',pozicija_g+1);
console.log('trece g: '+ pozicija_g);

const niz1 = ['a', 'b'];
const niz2 = ['a', 'b'];
console.log(niz1 == niz2);
console.log(niz1 === niz2);

function jednaki_nizovi(niz1, niz2){
    const n = niz1.length;
    const m = niz2.length;
    if(n!==m){
        return false;
    }
    for(let i=0; i<n; ++i){
        if(niz1[i] !== niz2[i]){
            return false;
        }
    }
    return true;
}

console.log(jednaki_nizovi(niz1, niz2));

const automobil = {
    ime: 'Fiat',
    model: 500,
    tezina: 850.0,
    boja: 'bela',
    pokreni: function(){
        console.log('automobil je ukljucen');
    },
    vozi: function(){
        console.log('automobil je u pokretu');
    },
    zakoci: function(){
        console.log('automobil je stao');
    },
    ugasi: function(){
        console.log('automobil je ugasen');
    },
    ispisi_informacije: function(){
        console.log('ime: '+ this.ime + 
                    ', model: ' + this.model +
                    ', tezina: '+ this.tezina + 'kg' +
                    ', boja: '+ this.boja);
    }
};

console.log(typeof(automobil));
console.log(automobil);

automobil.pokreni();
automobil.vozi();
automobil.zakoci();
automobil.vozi();
automobil.zakoci();
automobil.vozi();
automobil.zakoci();
automobil.ugasi();

automobil.ispisi_informacije();

const osoba ={
    'ime i prezime': 'Pera Peric'
};
//console.log(osoba.'ime i prezime'); izbacuje syntax error
console.log(osoba['ime i prezime']);

console.log('ime' in automobil);
console.log('prezime' in automobil);
console.log('pokreni' in automobil);

for(const kljuc in automobil){
    if(typeof(automobil[kljuc]) !== 'function'){
        console.log(automobil[kljuc]);
    }
}