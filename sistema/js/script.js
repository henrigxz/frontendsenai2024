const imgBanner =['img/bannerdbdcastlevania.jpg', 'img/bannerdbdsable.jpg', 'img/dbdalien.jpg']

//definimos as imagens do banner

let fotoInicial = 0;
// index inicial da foto do banner

function slider(){
    //encontrar o banner na pg
    const banner = document.getElementById('banner');
    banner.style.backgroundImage =
         `url('${imgBanner[fotoInicial]}')`;

    fotoInicial++;
    // mudar para a proxima foto
    if(fotoInicial >= imgBanner.length){
        fotoInicial = 0;
    }
}

setInterval(slider, 2500)