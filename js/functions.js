var nome;
var pais;
var nickname;
var senha;



function gravarDados(){

    nome = document.getElementById("Nome").value;
    pais = document.getElementById("Pais").value;
    nickname = document.getElementById("nickname").value;
    senha = document.getElementById("Senha").value;

    if(nome != "" && nickname != "" && pais != "" && senha != "" )
    {
        comunicaServidor();
    }
    else 
    {
        alert("inputs são obrigatorios!")
    }

}

function comunicaServidor(){

    $.ajax({ type:"POST",
             dataType:"json",
             url:"php/gravarDados.php",
             data: {ch_nome:nome, ch_nome:nome, ch_nickname:nickname, ch_senha:senha}


    });

}