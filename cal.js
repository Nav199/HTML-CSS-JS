function insert(x){
    var numero = document.getElementById('Resultado').innerHTML;
    document.getElementById('Resultado').innerHTML = numero + x;
}
function clean(){
  document.getElementById('Resultado').innerHTML= "";
}
function back(){
 var resultado = document.getElementById('Resultado').innerHTML;
 document.getElementById('Resultado').innerHTML = resultado.substring(0,resultado.length -1); // apagar 
}
function calcular(){
  var resultado = document.getElementById('Resultado').innerHTML;
  if (resultado){
    document.getElementById('Resultado').innerHTML = eval(resultado);
    // eval irá computar todas as operações
  }else{
    document.getElementById('Resultado').innerHTML = "Nada..."
  }
}