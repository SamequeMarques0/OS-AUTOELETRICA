/* Funcao de Imprimir /  Salvar PDF */

var btnPrint = document.querySelector('.btnPrint');

btnPrint.addEventListener('click', ()=>{

    var toolsContent = document.querySelector('#toolsContent');
    var tools = document.querySelector('#tools');

    if(tools.style.display === 'block' || tools.style.display === 'relative'){
        tools.style.opacity = '0';
        toolsContent.style.opacity = '0';
        window.print();
    }else{
        tools.style.opacity = '0';
        toolsContent.style.opacity = '0';
        window.print();
    }

})

/* BtnToggle */

var btnToggle = document.querySelector('.btnToggle');

btnToggle.addEventListener('click', ()=> {
    var conteudo = document.querySelector('#toolsContent');

    if(conteudo.style.display === 'none'){
        conteudo.style.display = 'block'
    } else{
        conteudo.style.display = 'none'
    }
})

/* Acessar o Site para Buscar Info do Carro */

var btnPlacaCar =  document.querySelector('.btnPlacaCar');

btnPlacaCar.addEventListener('click', ()=>{
    var url = 'https://buscaplacas.com.br/'
    window.open(url, '_blank')
})

/* Setando Data da OS e Adicionando Fim da Garantia */

var btnSetDateGan = document.querySelector('.btnSetDateGan');

btnSetDateGan.addEventListener('click', ()=>{
    
    // Obtem a data e  Adiciona 90 dias à data atual
     var attDate = new Date();  attDate.setDate(attDate.getDate() + 90)
    // Formata a Data 
    var day1 = attDate.getDate(); var month2 = (attDate.getMonth() + 1 ); var year3 = attDate.getFullYear();
    // Funcao para Adicionar 0 Antes dos Numeros(dia/Mes) < 10
    day1 = day1 < 10 ? '0' + day1 : day1; month2 = month2 < 10 ? '0' + month2 : month2;
    // Combita Valores 
    var dateAtual = `${day1}/${month2}/${year3}`;

    // Obter a data 
    var nowDate = new Date();
    // Formata a Data
    var day = nowDate.getDate();  var month = (nowDate.getMonth() + 1 ); var year = nowDate.getFullYear();
    // Funcao para Adicionar 0 Antes dos Numeros(dia/Mes) < 10
    day = day < 10 ? '0' + day : day; month = month < 10 ? '0' + month : month;
    /* Combita Valores */
    var dateFormated = `${day}/${month}/${year}`;
    /* Set No Input"Date */
    document.getElementById('endGanrantia').innerHTML = dateAtual;
      document.getElementById('emissaoOS').innerHTML = dateFormated;
    
}) 

/* Adicionar Servico e Produtos */

var addBtnTools = document.querySelector('.addBtnTools');

    addBtnTools.addEventListener('click', ()=>{
        var tbody = document.getElementById("tbody");
         var nome = document.getElementById("nameServiceProduct").value;
        var quantidade = document.getElementById("unidId").value;
        var valor = document.getElementById("valor").value;

        if (nome && quantidade && valor) {
            var newRow = tbody.insertRow();
            var cells = [];
    
            for (var i = 0; i < 4; i++) {
              cells[i] = newRow.insertCell(i);
    
              switch (i) {
                case 0:
                  cells[i].textContent = nome;
                  break;
                case 1:
                  cells[i].textContent = quantidade;
                  break;
                case 2:
                  cells[i].textContent = "R$ " + parseFloat(valor).toFixed(2).replace(".", ",");
                  break;
                case 3:
                  cells[i].textContent = "R$ " + (quantidade * parseFloat(valor)).toFixed(2).replace(".", ",");
                  break;
              }
            }
            calcularTotal();
    
            // Limpa os campos de entrada após adicionar o item
            document.getElementById("nameServiceProduct").value = "";
            document.getElementById("unidId").value = 1;
            document.getElementById("valor").value = "";
          } else {
            alert("Preencha todos os campos para adicionar um Servico ou Produto.");
          }

    })

    function calcularTotal() {
        // Calcula o total somando os valores na coluna "Subtotal R$"
        var total = 0;
        var tbody = document.getElementById("tbody");
        for (var i = 0; i < tbody.rows.length; i++) {
          var subtotal = parseFloat(tbody.rows[i].cells[3].textContent.replace("R$ ", "").replace(".", "").replace(",", "."));
          total += isNaN(subtotal) ? 0 : subtotal;
        }
        document.getElementById("total2").textContent =  `R$ ${total.toFixed(2).replace('.',',')};`;
      }


var removeBtnTools = document.querySelector('.removeBtnTools');

removeBtnTools.addEventListener('click', ()=>{
      // Remove a última linha da tabela
      var tbody = document.getElementById("tbody");
      if (tbody.rows.length > 0) {
        tbody.deleteRow(-1);
        calcularTotal();
      }
    }
)
   