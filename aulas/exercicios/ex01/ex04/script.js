function verificar() {
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente Novamente!')  
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 20){
                //adolescente
                img.setAttribute('src','homem18.jpg')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src','homem30.jpg')
            }else {
                //idoso
                img.setAttribute('src','homem60.jpg')
            }
        }else if (fsex[1].checked) {
            genero='Mulher'
            if (idade >= 0 && idade <= 20){
                //adolescente
                img.setAttribute('src','mulher18.png')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src','mulher30.jpg')
            }else {
                //idosa
                img.setAttribute('src','mulher60.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com idade ${idade}`
        res.appendChild(img)
    }
}