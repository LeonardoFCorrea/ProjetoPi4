function traduz() {
  var conteudo = document.getElementById("taConteudo").value;
  var vetor = conteudo.split("\n");
  var i = 0;
  for (i; i < vetor.length; i++) {
    alert("linha " + (i + 1) + " => " + vetor[i]);
    if (vetor[i] == "int main() {") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        "<span class=\"intMain\">int main: OK</span> <br>";
    } else if (vetor[i] == "int a;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        "<span>int a: OK</span> <br>";
    } else if (vetor[i] == "cin>>a;" || vetor[i] == "cin >> a;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        "<span>cin >> a: OK</span> <br>";
    } else if (vetor[i] == "}") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        "<span>}: OK</span> <br>";
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

// document.querySelector(function () {
//   document.getElementsByClassName("intMain").hover(
//     function () {
//     },
//     function () {
//       // on mouseout, reset the background colour
//       document.querySelector("#b").css("background-color", "");
//     }
//   );
// });
