
$("#cep").mask("99999-999");
$("#tabela").hide();
$(".table").hide(); // esconder  a tabela

// limpar o formulario 
function apagaForm() {
  document.getElementById('buscaCep').reset();
}

function handleClick() {
  const cep = document.getElementById('cep').value;
  buscaCep(cep);
}

// função buscar cep
function buscaCep(cep) {
  if(cep === ''){
    alert('Favor Informar o CEP Completo!')
    apagaForm();
  }else if( cep.length < 9){
    alert('Formato De CEP Inválido!')
    apagaForm();
  }
  else{
  
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
 .then(response => response.json())
  //  return(Response.json())

.then((inforCep)=>{

    if(inforCep.cep ==(undefined) ){
      alert('Cep Não Encontrado')
      apagaForm();
    }else{
      document.getElementById('bairro').value=(inforCep.bairro)
      document.getElementById('rua').value=(inforCep.logradouro)
      document.getElementById('cidade').value=(inforCep.localidade);
      document.getElementById('uf').value=(inforCep.uf);
      document.getElementById('ibge').value=(inforCep.ibge);
      // mostra na tabela
      document.getElementById('tableCep').innerText =( inforCep.cep);
      document.getElementById('tableRua').innerText =( inforCep.logradouro);
      document.getElementById('tableBairro').innerText =( inforCep.bairro);
      document.getElementById('tableCidade').innerText =( inforCep.localidade);
      document.getElementById('tableEstado').innerText =( inforCep.uf);
      document.getElementById('tableIbge').innerText =( inforCep.ibge);
      $("#tabela").show(); // mostrar a tabela
      $(".table").show();  // mostrar a tabela
      $(".success").show(); // mostrar a tabela
    }

   }) 
 } //  fim da função ELSE

} // fim da function bucaCep
  

// buscar o valor do Bitcoin 
function biticoinBTC1(){
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then((biticoin)=>{
    document.getElementById('btc').innerText = ('R$ ' + biticoin.BRL.buy).replace('.', ',');
    $("#btc").mask("000.000,00");
    
  })
}
// setInterval(biticoinBTC1, 100000) // atualizar cada 1 minuto

biticoinBTC1();

// add classe activer a cada 1 minuto
function biticoinBTC2(){
const addClasse = document.getElementById('btc');
addClasse.classList.toggle('activer');
}
setInterval(biticoinBTC2, 500);

biticoinBTC2();

