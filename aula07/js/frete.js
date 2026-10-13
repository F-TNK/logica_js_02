const button = document.querySelector("#button");
const saida = document.querySelector("#resultado");
const frete = document.querySelector("#frete");
const total = document.querySelector("#total");

button.onclick = () => {
  const val = Number(document.querySelector("#val").value);
  const regiao = document.querySelector("#alt");

  switch (regiao) {
    case "sul":
      if (val >= 200) {
        frete = 0;
        saida.textContent = "Frete Grátis!!";
        saida.className = "free";
      } else {
        frete = 15;
        saida.textContent = "Frete: R$" + frete.toFixed(2);
        saida.className = "sul";
      }
      break;
    case "sudeste":
      if (val >= 200) {
        frete = 0;
        saida.textContent = "Frete Grátis!!";
        saida.className = "free";
      } else {
        frete = 20;
        saida.textContent = "Frete: R$" + frete.toFixed(2);
        saida.className = "sudeste";
      }
      break;
    case "centro-oeste":
      frete = 25;
      saida.textContent = "Frete: R$" + frete.toFixed(2);
      saida.className = "centro-oeste";
      break;
    case "nordeste":
      frete = 30;
      saida.textContent = "Frete: R$" + frete.toFixed(2);
      saida.className = "nordeste";
      break;
    case "norte":
      frete = 35;
      saida.textContent = "Frete: R$" + frete.toFixed(2);
      saida.className = "norte";
      break;
  }

  const soma = val + frete;
  total.textContent = "Valor total: R$" + soma.toFixed(2);
};
