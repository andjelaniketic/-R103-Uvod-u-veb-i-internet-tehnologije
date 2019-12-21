function treba_obrisati(stavka){
    if(stavka.className.indexOf('obrisi_mene') != -1){
        return true
    }else{
        return false;
    }
}

const liste = document.getElementsByTagName('ul');
if(liste.length > 0){
    const lista = liste[0];
    const stavke = lista.children;
    const n = stavke.length;

    for(let i = n-1; i>=0; --i){
        if(treba_obrisati(stavke[i])){
            lista.removeChild(stavke[i]);
        }
    }
}else{
    console.log('dokument nema liste');
}
