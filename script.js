function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'dia.jpg'
        document.body.style.background = '#FFE4B5'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'tarde.jpg'
        document.body.style.background = '#D8BFD8'
    } else {
        //BOA NOITE!
        img.src = 'noite.jpg'
        document.body.style.background = '#5F9EA0'
    }
}
