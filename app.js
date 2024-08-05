
//função para criptografar
function criptografar (){
    var texto = document.getElementById('text-area-input').value;   //armazenando na variável texto o conteudo do id input-texto

    var textoCriptografado = texto  //armazenando conteudo criptografado na variável textoCriptografado
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imea')
        .replace(/a/g, 'ai')
        .replace(/o/g,'ober')
        .replace(/u/g, 'ufat');

      
    document.getElementById("btn-copiar").style.display = "block";  // Deixando o botão visível quando houver o clique no botão criptografar  

    document.getElementById("text-area-output").style.display = "block";    //Deixando o text area visível

    document.getElementById("ilustracao").style.display = "none";   //Escondendo a imagem direita

    document.getElementById("container-texto-output").style.display = "none"; //Escondendo o texto direito

    document.getElementById('text-area-output').innerText = textoCriptografado; //substituindo o conteudo do id text-area-output pelo conteudo
                                                                                    //da variável textoCriptografado
    document.getElementById("text-area-input").value = "";  //após clicar no botão criptografar, o text area é limpo.
}

//função para descriptografar o texto
function descriptografar (){
    var texto = document.getElementById('text-area-input').value;     //armazena na variável texto o conteudo do id input-texto

    var textoDescriptografado = texto   //armazenando conteudo descriptografado na variável textoDescriptografado
        .replace(/enter/g, 'e')
        .replace(/imea/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g,'o')
        .replace(/ufat/g, 'u');

    document.getElementById('text-area-output').innerText = textoDescriptografado;  //substituindo o conteudo do id text-area-output
                                                                                    //pelo conteudo da variável textoDescriptografado
}

// função de copiar o texto
function copiarTexto() {
    var textoCriptografado = document.getElementById("text-area-output").value;  //armazenando texto na variável textoCriptografado
    navigator.clipboard.writeText(textoCriptografado)       //Copia o conteúdo da variável textoCriptografado para area de transferencia
        .then(() => {       //Exibe a mensagem Texto copiado com sucesso no console
            console.log('Texto copiado com sucesso!');
        })
        .catch((error) => {     //Exibe uma mensagem de erro no console caso haja algun erro no processo de copia do conteudo
            console.error('Erro ao copiar o texto:', error);
        });
}
//Quando o botão é clicado, a função copiarTexto() é chamada para copiar o texto criptografado para a área de transferência.
document.getElementById("btn-copiar").addEventListener("click", copiarTexto);       
