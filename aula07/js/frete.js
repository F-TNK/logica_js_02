const button = document.querySelector("#button");
const saida = document.querySelector("#resultado");

button.onclick = () => {
  const val = Number(document.querySelector("#val").value);
  const regiao = Number(document.querySelector("#alt").value);

  switch (regiao) {
    case sul:
      if (val >= 200) {
        saida.textContent = "Frete Grátis!!";
      } else {
      }
  }
};
