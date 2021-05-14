var jogador = "x";

function jogo(id){
    var teste = imagem(id);
    if(teste == "branco.png"){
        document.getElementById(id).src = "./imagens/" + jogador + ".png";
        if(vitoria()){
            alert("Vitória do " + jogador + "!");
            location.reload();
        }
        if(jogador == "x"){
            jogador = "o";
        } else{
            jogador = "x";
        } 
    }
}
function imagem(id){
    var srcName = document.getElementById(id).src;
    return srcName.substring(srcName.length - 10, srcName.length);
}
function vitoria(){
    if(imagem("a") == imagem("b") && imagem("a") == imagem("c") && imagem("a") != "branco.png"){
    return true;
    }
    else if(imagem("d") == imagem("e") && imagem("d") == imagem("f") && imagem("d") != "branco.png"){
    return true;
    }
    else if(imagem("g") == imagem("h") && imagem("g") == imagem("i") && imagem("g") != "branco.png"){
    return true;
    }
    else if(imagem("a") == imagem("d") && imagem("a") == imagem("g") && imagem("a") != "branco.png"){
    return true;
    }
    else if(imagem("b") == imagem("e") && imagem("b") == imagem("h") && imagem("b") != "branco.png"){
    return true;
    }
    else if(imagem("c") == imagem("f") && imagem("c") == imagem("i") && imagem("c") != "branco.png"){
    return true
    }
    else if(imagem("a") == imagem("e") && imagem("a") == imagem("i") && imagem("a") != "branco.png"){
    return true;
    }
    else if(imagem("c") == imagem("e") && imagem("c") == imagem("g") && imagem("c") != "branco.png"){
    return true;
    }else if(imagem("a") != "branco.png" && imagem("b") != "branco.png" && imagem("c") != "branco.png" && imagem("d") != "branco.png" && imagem("e") != "branco.png" && imagem("f") != "branco.png" && imagem("g") != "branco.png" && imagem("h") != "branco.png" && imagem("i") != "branco.png"){
        alert("Deu velha")
        location.reload()
        return false
    }
    return false
}


//space1 , space2 , space3;
//space4 , space5 , space6;
//space7 , space8 , space9;
//space1 , space4 , space7;
//space2 , space5 , space8;
//space3 , space6 , space9;
//space1 , space5 , space9;
//space3 , space5 , space7;