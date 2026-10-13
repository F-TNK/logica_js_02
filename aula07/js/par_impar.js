const botao = document.querySelector("#validar");
const saida = document.querySelector("#resultado");

botao.onclick = () => {
  const n = Number(document.querySelector("#n").value);

  if (n % 2 === 0) {
    saida.textContent = "O número " + n + " é par";
    saida.className = "ok";
  } else {
    saida.textContent = "O número " + n + " é impar";
    saida.className = "alerta";
  }
};
