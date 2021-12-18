function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML =`Agora são ${hora} Horas.`
   if (hora >= 0 && hora <=12){
        //BOM DIA !!
        document.body.style.background = '#ca7f4c'
    } else if (hora >=13 && hora <=18){
        //BOA TARDE !!
        document.body.style.background ='#8f4a22'
        img.src="tarde.jpg"
    } else{
        //BOA NOITE !!
        document.body.style.background='#26283d'
        img.src='noite.jpg'
    }

}
