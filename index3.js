const veze = document.getElementsByTagName('a');
if(veze.length > 0){
    const prva_veza = veze[0];
    prva_veza.href = 'https://matfuvit.github.io/UVIT/';
    prva_veza.target = '_blank';
    prva_veza.innerHTML = 'Pocetna UVIT-a';
}else{
    console.log('nema linkova na ovoj stranici');
}