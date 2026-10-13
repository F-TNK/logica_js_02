const button = document.querySelector("#button");
const saida = document.querySelector("#resultado");

button.onclick = () => {
  const n1 = Number(document.querySelector("#nota1").value);
  const n2 = Number(document.querySelector("#nota2").value);

  const media = (n1 + n2) / 2;

  if (media < 5) {
    saida.textContent = "Reprovado com média " + media.toFixed(2);
    saida.className = "erro";
  } else if (media < 7) {
    saida.textContent = "Recuperação com média " + media.toFixed(2);
    saida.className = "alerta";
  } else {
    saida.textContent = "Aprovado com média " + media.toFixed(2);
    saida.className = "ok";
  }
};
