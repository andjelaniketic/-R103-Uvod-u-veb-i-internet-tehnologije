function napravi_html_strukturu_1(body) {
    body.innerHTML = 
        `<div>
            <h1>JavaScript</h1>
            <p>Super jezik, ali samo ako znamo kako se koristi :)</p>
            <ul>
                <li>Može da se koristi na klijentskoj strani</li>
                <li>Ali i na serverskoj</li>
            </ul>
        </div>`;
}
function napravi_html(body){
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const h1_tekst = document.createTextNode('JavaScript');
    const p = document.createElement('p');
    const p_tekst = document.createTextNode('Super jezik, ali samo ako znamo kako da ga koristimo :)');
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li1_tekst = document.createTextNode('Moze da se koristi na klijentskoj strani');
    const li2 = document.createElement('li');
    const li2_tekst = document.createTextNode('Ali i na serverskoj');

    //povezivanje u stablo
    body.appendChild(div);
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(ul);
    h1.appendChild(h1_tekst);
    p.appendChild(p_tekst);
    ul.appendChild(li1);
    ul.appendChild(li2);
    li1.appendChild(li1_tekst);
    li2.appendChild(li2_tekst);
}
const bodies = document.getElementById('lmao');
if(bodies !== null){
    napravi_html(bodies);
}else{
    console.log('greska');
}
