function lerdados(){
    xttp = new XMLHttpRequest();
    XMLHttpRequest.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
            pessoa = JSON.parse(this.reponseText );
            text = "<b>Nome: <\b>" + pessoa.nome + "<br>";
            text += "<b>conjuge: <\b>" + pessoa.conjuge.nome + "<br>";
            text += "<b>idade: <\b>" + pessoa.idade + "<br>";
            text += "<b>filhos: <\b> <br>" pessoa.filhos.forEach(filhos => {
                text += filhos.nome + " - idade"+ filhos.idade+"</br>";
            });
            document.getElementById("dados").innerHTML = text;
        }
    };
            xhttp.open("GET","meujason.JSON", true);
            xhttp.send();

}

function buscarprodutos(){
    xhttp= nem XMLHttpRequest();
    XMLHttpRequest.onreadystatechange = function(){
        xhttp.onreadystatechange = function(){
            if( this.readyState == 4 && this.status == 200){
                conteudo = "<table border='1'>" ;
                conteudo += "  <tr> " ;
                conteudo += "       <th>Código</th>" ;
                conteudo += "       <th>Nome</th>" ;
                conteudo += "       <th>Preço</th>" ;
                conteudo += "       <th>Quantidade</th>" ;
                conteudo += "  </tr> " ;
                objJSON = JSON.parse( this.responseText );
                if( objJSON.resposta ){
                    alert( objJSON.resposta );
                }else{
                    products = objJSON.produtos;
                    products.forEach( prod => {
                        conteudo += " <tr> ";
                        conteudo += "   <td>" + prod.id + " </td> ";
                        conteudo += "   <td>" + prod.nome + " </td> ";
                        conteudo += "   <td>" + prod.preco + " </td> ";
                        conteudo += "   <td>" + prod.quantidade + " </td> ";
                        conteudo += " </tr> ";
                    });
                    conteudo += "</table>";
                    document.getElementById("divProdutos").innerHTML = conteudo;
                }
            }
        };
        xhttp.open("GET", "servidor.php", true);
        xhttp.send();
}