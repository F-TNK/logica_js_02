const button = document.querySelector("#button");
const saida = document.querySelector("#resultado");

button.onclick = () => {
  const n1 = Number(document.querySelector("#n1").value);
  const n2 = Number(document.querySelector("#n2").value);

  if (n1 > n2) {
    saida.textContent =
      "O primeiro número inserido (" + n1 + ") é maior que o segundo";
    saida.className = "primeiro";
  } else if (n2 > n1) {
    saida.textContent =
      "O segundo número inserido (" + n2 + ") é maior que o primeiro";
    saida.className = "segundo";
  } else {
    saida.textContent = "Os números inseridos são iguais";
    saida.className = "alerta";
  }
};
