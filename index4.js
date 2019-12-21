const paragrafi = document.getElementsByTagName('p');
if(paragrafi.length > 0){
    for(const i in paragrafi){
        const paragraf = paragrafi[i];

        if(i%2 === 0){
            paragraf.style.padding = '10px';
            paragraf.style.color = 'BlueViolet';
            paragraf.style.backgroundColor = '#FFECA1';
            paragraf.style.textTransform = 'uppercase';
        }else{
            paragraf.className = 'neparni paragraf';
        }
    }
}