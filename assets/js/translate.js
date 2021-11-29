function traduz() {
  var conteudo = document.getElementById("taConteudo").value;
  var vetor = conteudo.split("\n");
  var i = 0;
  for (i; i < vetor.length; i++) {
    // alert("linha " + (i + 1) + " => " + vetor[i]);
    if (vetor[i] == "cin >> a;" || vetor[i] == "cin>>a;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="cinA">INPUT</span> <br>' +
        '<span class="cinA">STORE a</span> <br>';
    }
    if (vetor[i] == "cin >> A;" || vetor[i] == "cin>>A;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="cinA">INPUT</span> <br>' +
        '<span class="cinA">STORE A</span> <br>';
    } else if (vetor[i] == "int main() {") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="start">// START POINT</span> <br>';
    } else if (vetor[i] == "cin >> b;" || vetor[i] == "cin>>b;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="cinB">INPUT</span> <br>' +
        '<span class="cinB">STORE b</span> <br>';
    } else if (vetor[i] == "cin >> B;" || vetor[i] == "cin>>B;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="cinB">INPUT</span> <br>' +
        '<span class="cinB">STORE B</span> <br>';
    } else if (vetor[i] == "cin >> c;" || vetor[i] == "cin>>c;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="cinB">INPUT</span> <br>' +
        '<span class="cinB">STORE c</span> <br>';
    } else if (vetor[i] == "cin >> C;" || vetor[i] == "cin>>C;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="cinB">INPUT</span> <br>' +
        '<span class="cinB">STORE C</span> <br>';
    } else if (vetor[i] == "int a;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="intA">a, DEC 0</span>';
    } else if (vetor[i] == "int A;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="intA">A, DEC 0</span>';
    } else if (vetor[i] == "int b;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="intB">b, DEC 0</span>';
    } else if (vetor[i] == "int B;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="intB">B, DEC 0</span>';
    } else if (vetor[i] == "int c;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="intC">c, DEC 0</span>';
    } else if (vetor[i] == "int C;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="intC">C, DEC 0</span>';
    } else if (vetor[i] == "c = a + b;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="plusC">LOAD a</span> <br>' +
        '<span class="plusC">ADD b</span> <br>' +
        '<span class="plusC">STORE c</span> <br>';
    } else if (vetor[i] == "C = A + B;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="plusC">LOAD A</span> <br>' +
        '<span class="plusC">ADD B</span> <br>' +
        '<span class="plusC">STORE C</span> <br>';
    } else if (vetor[i] == "C = a + b;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="plusC">LOAD a</span> <br>' +
        '<span class="plusC">ADD b</span> <br>' +
        '<span class="plusC">STORE C</span> <br>';
    } else if (vetor[i] == "C = A + b;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="plusC">LOAD A</span> <br>' +
        '<span class="plusC">ADD b</span> <br>' +
        '<span class="plusC">STORE C</span> <br>';
    } else if (vetor[i] == "C = a + B;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="plusC">LOAD a</span> <br>' +
        '<span class="plusC">ADD B</span> <br>' +
        '<span class="plusC">STORE C</span> <br>';
    } else if (vetor[i] == "c = A + b;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="plusC">LOAD A</span> <br>' +
        '<span class="plusC">ADD b</span> <br>' +
        '<span class="plusC">STORE c</span> <br>';
    } else if (vetor[i] == "c = a + B;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="plusC">LOAD a</span> <br>' +
        '<span class="plusC">ADD B</span> <br>' +
        '<span class="plusC">STORE c</span> <br>';
    } else if (vetor[i] == "c = b + A;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="plusC">LOAD b</span> <br>' +
        '<span class="plusC">ADD A</span> <br>' +
        '<span class="plusC">STORE c</span> <br>';
    } else if (vetor[i] == "c = b + a;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="plusC">LOAD b</span> <br>' +
        '<span class="plusC">ADD a</span> <br>' +
        '<span class="plusC">STORE c</span> <br>';
    } else if (vetor[i] == "a = b + c;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="plusA">LOAD b</span> <br>' +
        '<span class="plusA">ADD c</span> <br>' +
        '<span class="plusA">STORE a</span> <br>';
    } else if (vetor[i] == "a = B + c;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="plusA">LOAD B</span> <br>' +
        '<span class="plusA">ADD c</span> <br>' +
        '<span class="plusA">STORE a</span> <br>';
    } else if (vetor[i] == "a = b + C;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="plusA">LOAD b</span> <br>' +
        '<span class="plusA">ADD C</span> <br>' +
        '<span class="plusA">STORE a</span> <br>';
    } else if (vetor[i] == "a = B + C;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="plusA">LOAD B</span> <br>' +
        '<span class="plusA">ADD C</span> <br>' +
        '<span class="plusA">STORE a</span> <br>';
    } else if (vetor[i] == "A = B + C;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="plusA">LOAD B</span> <br>' +
        '<span class="plusA">ADD C</span> <br>' +
        '<span class="plusA">STORE A</span> <br>';
    } else if (vetor[i] == "a = c + b;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="plusA">LOAD c</span> <br>' +
        '<span class="plusA">ADD b</span> <br>' +
        '<span class="plusA">STORE a</span> <br>';
    } else if (vetor[i] == "a = C + b;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="plusA">LOAD C</span> <br>' +
        '<span class="plusA">ADD b</span> <br>' +
        '<span class="plusA">STORE a</span> <br>';
    } else if (vetor[i] == "a = c + B;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="plusA">LOAD c</span> <br>' +
        '<span class="plusA">ADD B</span> <br>' +
        '<span class="plusA">STORE a</span> <br>';
    } else if (vetor[i] == "a = C + B;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="plusA">LOAD C</span> <br>' +
        '<span class="plusA">ADD B</span> <br>' +
        '<span class="plusA">STORE a</span> <br>';
    } else if (vetor[i] == "A = C + B;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="plusA">LOAD C</span> <br>' +
        '<span class="plusA">ADD B</span> <br>' +
        '<span class="plusA">STORE A</span> <br>';
    } else if (vetor[i] == "cout << a;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="outA">LOAD a</span> <br>' +
        '<span class="outA">OUTPUT</span> <br>';
    } else if (vetor[i] == "cout << A;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="outA">LOAD A</span> <br>' +
        '<span class="outA">OUTPUT</span> <br>';
    } else if (vetor[i] == "cout << b;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="outB">LOAD b</span> <br>' +
        '<span class="outB">OUTPUT</span> <br>';
    } else if (vetor[i] == "cout << B;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="outB">LOAD B</span> <br>' +
        '<span class="outB">OUTPUT</span> <br>';
    } else if (vetor[i] == "cout << c;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="outC">LOAD c</span> <br>' +
        '<span class="outC">OUTPUT</span> <br>';
    } else if (vetor[i] == "cout << C;") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="outC">LOAD C</span> <br>' +
        '<span class="outC">OUTPUT</span> <br>';
    } else if (vetor[i] == "}") {
      document.getElementById("traducao").innerHTML =
        document.getElementById("traducao").innerHTML +
        '<span class="final">HALT</span>';
    }
  }
  alert.dismiss();
  return false;
}

// TESTE HOVER EFFECT \\
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
