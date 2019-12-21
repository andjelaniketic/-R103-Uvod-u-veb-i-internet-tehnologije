const prvi_div = document.getElementById('prvi');
if(prvi_div !== null){
    prvi_div.innerHTML = '<h2> prvi podnaslov</h2>';
}else{
    console.log('ne postoji element sa datim identifikatorom');
}

const drugi_div = document.getElementById('drugi');
if(drugi_div !== null){
    drugi_div.outerHTML =
        `<main id = "drugi">
            <h2> drugi podnaslov</h2>
        </main>`;
}
else{
    console.log('nemaaa');
}