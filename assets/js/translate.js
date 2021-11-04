function traduz() {
  var conteudo = document.getElementById("taConteudo").value;
  var vetor = conteudo.split("\n");
  var i = 0;
  for (i; i < vetor.length; i++) {
    alert("linha " + (i + 1) + " => " + vetor[i]);
    if (vetor[i] == "int main() {") {
      // traducao.value = "PUSH %23";
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        "<span>PUSH %12</span> <br>";
    } else if (vetor[i] == "int a;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        "<span>INT A AQUI</span> <br>";
    } else if (vetor[i] == "cin>>a;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        "<span>CIN A AQUI</span> <br>";
    } else if (vetor[i] == "}") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        "<span>FINAL</span> <br>";
    }
  }
  alert.dismiss();
  return false;
}

function temaClaro() {
  document.body.classList.toggle("body-dark");
  document.getElementById("btn").classList.toggle("btn-main");
  document.getElementById("btn").classList.toggle("btn-main-dark");
  document.getElementById("btn-2").classList.toggle("btn-main");
  document.getElementById("btn-2").classList.toggle("btn-main-dark");
}