function processa() {
  var conteudo = document.getElementById("taConteudo").value;
  var traducao = document.getElementById("taTraducao");
  var vetor = conteudo.split("\n");
  var i = 0;
  for (i; i < vetor.length; i++) {
    alert("linha " + (i + 1) + " => " + vetor[i]);
    if (vetor[i] == "int main() {") {
      traducao.value = "PUSH %23";
      // IMPORTANTE document.getElementById("teste").innerHTML = 
      // IMPORTANTE document.getElementById("teste").innerHTML + "<span>PUSH %12</span> <br>";
    }
  }
  alert.dismiss();
  return false;
}

function temaClaro() {
  var element = document.body;
  element.classList.toggle("temaClaro");
}
