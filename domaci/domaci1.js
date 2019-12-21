let studenti = [
    {
        indeks:'20140021',
        ime: 'Milos',
        prezime: 'Peric',
        datum_rodjenja: '20.01.1995',
        mesto_rodjenja: 'Beograd',
        datum_upisa: '06.07.2014.'
    },
    {
        indeks:'20140022',
        ime: 'Marijana',
        prezime: 'Savkovic',
        datum_rodjenja: '11.09.1995.',
        mesto_rodjenja: 'Kraljevo',
        datum_upisa: '05.07.2014.'
    },
    {
        indeks: '20130023',
        ime: 'Sanja',
        prezime: 'Terzic',
        datum_rodjenja: '09.11.1994.',
        mesto_rodjenja: 'Beograd',
        datum_upisa: '04.07.2013.'
    },
    {
        indeks: '20130024',
        ime: 'Nikola',
        prezime: 'Vukovic',
        datum_rodjenja: '17.09.1994.',
        mesto_rodjenja: '',
        datum_upisa: '04.07.2013.'
    },
    {
        indeks: '20140025',
        ime: 'Marijana',
        prezime: 'Savkovic',
        datum_rodjenja: '04.02.1995.',
        mesto_rodjenja: 'Kraljevo',
        datum_upisa: '06.07.2014.'
    },
    {
        indeks: '20140026',
        ime: 'Zorica',
        prezime: 'Miladinovic',
        datum_rodjenja: '08.10.1995.',
        mesto_rodjenja: 'Vranje',
        datum_upisa: '06.07.2014.'
    },
    {
        indeks: '20130027',
        ime: 'Milena',
        prezime: 'Stankovic',
        datum_rodjenja: '',
        mesto_rodjenja: '',
        datum_upisa: ''
    }
];
function spojiImeIPrezime(student){
    student.ime_prezime = student.ime + ' ' + student.prezime;
    delete student.ime;
    delete student.prezime;
};

for(let i=0; i<studenti.length; ++i){
    spojiImeIPrezime(studenti[i]);
    console.log(studenti[i].ime_prezime);
}

function filter_indeks(studenti, godina){
    let rezultat = [];
    
    for(let i=0; i<studenti.length; ++i){
        let godina_upisa = studenti[i].indeks.slice(0,4);
        if(godina == godina_upisa){
            rezultat.push(studenti[i].ime_prezime)
        }
    }
    return rezultat;
    
};

console.log(filter_indeks(studenti, 2014));

function filter_f(studenti, f){
    let rezultat = [];
    for(let i=0; i<studenti.length; ++i){
        let fja = f(studenti[i]);
        if(fja){
            rezultat.push(studenti[i].ime_prezime);
        }
    }
    return rezultat;
};
console.log(filter_f(studenti, function(poziv){
    if(poziv.mesto_rodjenja == 'Kraljevo'){
        return true;
    }else{
        return false;
    }
}));

function nema_nepoznate_vrednosti(student){
    if(student.indeks === '' ||
        student.ime_prezime === '' ||
        student.datum_rodjenja === '' ||
        student.mesto_rodjenja === '' ||
        student.datum_upisa === ''){
            return false;
        }else{
            return true;
        }
};
let n = studenti.length;
for(let i=0; i<n; ++i){
    if(nema_nepoznate_vrednosti(studenti[i])){
        console.log(studenti[i].ime_prezime);
    }else{
        console.log('studentu nedostaje neko polje');
    }
}

function pocisti_podatke(studenti){
    console.log(filter_f(studenti, nema_nepoznate_vrednosti));
};
pocisti_podatke(studenti);

function generisi_html(studenti){
    let body = document.body;
    let tabela = document.createElement('table');

    body.appendChild(tabela);

    let tr = document.createElement('tr');
    //th
    for(let key in studenti[0]){
        let cell = document.createElement('th');
        cell.innerHTML = key;
        tr.appendChild(cell);
        cell.style.border = '1px solid black';
        cell.style.textAlign = 'center';
        cell.style.width = '100px';
        cell.style.height = '40px';
    }
    tabela.appendChild(tr);
    tr.style.backgroundColor = 'black';
    tr.style.color = 'white';
    //tr td
    for(let i=0; i<studenti.length; ++i){
        let redovi = document.createElement('tr');
        for(let key in studenti[i]){
            let cell = document.createElement('td');
            cell.innerHTML = studenti[i][key];
            redovi.appendChild(cell);

            cell.style.border = '1px solid black';
            cell.style.width = '100px';
            cell.style.height = '50px';
        }
        tabela.appendChild(redovi);
    }
    tabela.style.borderCollapse = 'collapse';
};

//generisi_html(studenti);

//sedmica 7

function kreiraj_red_tabele(student){
    let body = document.body;
    let red = document.createElement('tr');
    for(let key in student){
        let cell = document.createElement('td');
        let tekst = document.createTextNode(student[key]);
        cell.appendChild(tekst);
        red.appendChild(cell);
    }
    return red;
};

//kreiraj_red_tabele(studenti[0]);

function postavi_hover_stil(){
    this.style.backgroundColor = 'grey';
};

function ukloni_hover_stil() {
    this.style.backgroundColor = 'white';
};

function odaberi_studenta(){
    let student = document.getElementById('odabran_student');
    for(let i = student.childNodes.length -1; i>=0; --i){
        student.removeChild(student.childNodes[i]);
    }
    let naslov = document.createElement('h1');
    student.appendChild(naslov);
    let tekst = document.createTextNode('Odabran student');
    naslov.appendChild(tekst);

    for(let i=0; i<studenti.length; ++i){
        if(studenti[i]['indeks'] === this.innerHTML){
            for(let j in studenti[i]){
                let p = document.createElement('p');
                let pt = document.createTextNode(j + ': ' + studenti[i][j]);
                p.appendChild(pt);
                student.appendChild(p);
            }
        }
    }
};

    function postavi_osluskivace_nad_prvom_kolonom(){
        let tabela = document.getElementsByTagName('table');
        let tabela1 = tabela[0];

        let redovi = tabela1.getElementsByTagName('tr');
        for(let i=0; i<redovi.length; i++){
            let cells = redovi[i].getElementsByTagName('td');
            cells[0].addEventListener('mouseenter', postavi_hover_stil);
            cells[0].addEventListener('mouseleave', ukloni_hover_stil);
            cells[0].addEventListener('click', odaberi_studenta);
        }
    };

    function prikazi_podatke(){
        let podaci = document.getElementById('podaci');
        let tabela = document.createElement('table');
        for(let i=0; i<studenti.length; i++){
            tabela.appendChild(kreiraj_red_tabele(studenti[i]));
        }
        podaci.appendChild(tabela);
        postavi_osluskivace_nad_prvom_kolonom();
    };

    let dugme = document.getElementById('prikazi_podatke');
    dugme.addEventListener('click',prikazi_podatke);
