const button = document.querySelector("#button");
const saida = document.querySelector("#resultado");
const result = document.querySelector("#result");

button.onclick = () => {
  const peso = Number(document.querySelector("#peso").value);
  const alt = Number(document.querySelector("#alt").value);

  if (peso.value === "" || alt.value === "") {
    result.textContent = "";
    saida.textContent = "Preencha o peso e a altura";
  } else if (peso <= 0 || alt <= 0) {
    result.textContent = "";
    saida.textContent =
      "O peso e a altura não podem ser menores ou iguais a zero";
  } else {
    const imc = peso / (alt * alt);

    if (imc < 18.5) {
      result.textContent = "IMC = " + imc.toFixed(1);
      saida.textContent = "Resultado dentro da faixa abaixo do peso";
      saida.className = "alerta";
    } else if (imc < 25) {
      result.textContent = "IMC = " + imc.toFixed(1);
      saida.textContent = "Resultado dentro da faixa de peso normal";
      saida.className = "ok";
    } else if (imc < 30) {
      result.textContent = "IMC = " + imc.toFixed(1);
      saida.textContent = "Resultado dentro da faixa de sobrepeso";
      saida.className = "alerta";
    } else {
      result.textContent = "IMC = " + imc.toFixed(1);
      saida.textContent = "Resultado dentro da faixa de obesidade";
      saida.className = "erro";
    }
  }
};

/* Resultado com capos vazios e com valores 0: IMC = NaN e ativa o else */
