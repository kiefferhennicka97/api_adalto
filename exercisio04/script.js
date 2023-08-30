function buscar(){
    divbuscarinfo = document.getElementById("buscarinfos");
    texto = new XMLHttpRequest();
    divbuscarinfo.innerHTML = "carregando ...";
    texto.onreadystatechange = function(){
        if(this.readystate == 4 && this.status == 200){
            resposta = this.responseText;
            divbuscarinfo.ineerHTML = respostas;
            console.log(repsostas);
        }
        if(this.readystate == 4 && this.status == 404) {
            alert("Página não encontra no serveridor");

        }
    };
}

texto.open("GET","contatos.txr", true);
texto.send()