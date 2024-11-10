
function escreveMensagem(nomeHeroi, nivelHeroi) {
  // Define uma cor para cada nível
  const cores = {
    "Ferro": "#666666",
    "Bronze": "#CD7F32",
    "Prata": "#B1B1B1",
    "Ouro": "#FFD700",
    "Platina": "#7AB9D6",
    "Ascendente": "#A22DB9",
    "Imortal": "#8B0A1A",
    "Radiante": "#B5F7FF"
  };
  // Gera a mensagem de saída
  const codigohtml = `
    O herói de nome <b>${nomeHeroi}</b> está no nível 
    <span style="color:${cores[nivelHeroi]};"><b>${nivelHeroi}</b></span>.
  `;
  // Exibe mensagem ao usuário
  document.getElementById('level-result').innerHTML = codigohtml;
}

function calculaNivel(xpInputElement) {
  const xp = Number(xpInputElement.value);
  let nivel;
  // Retorna o nível de acordo com a experiência
  if (xp <= 1000) {
    nivel = "Ferro";
  } else if (xp <= 2000) {
    nivel = "Bronze";
  } else if (xp <= 5000) {
    nivel = "Prata";
  } else if (xp <= 7000) {
    nivel = "Ouro";
  } else if (xp <= 8000) {
    nivel = "Platina";
  } else if (xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }
  return nivel;
}

// Adiciona evento onclick para gerar o resultado
document.getElementById("submit-button").addEventListener("click", () => {
  const nameInputElement = document.getElementById("name-input");
  const xpInputElement = document.getElementById("xp-input");

  // Verifica a validade dos campos
  if (!nameInputElement.checkValidity()) {
    nameInputElement.reportValidity();
  } else if (!xpInputElement.checkValidity()) {
    xpInputElement.reportValidity();
  } else {
    const nomeHeroi = nameInputElement.value;
    const nivelHeroi = calculaNivel(xpInputElement);
    escreveMensagem(nomeHeroi, nivelHeroi);
  }
});

// Adiciona evento onclick para limpar os dados
document.getElementById("clear-button").addEventListener("click", () => {
  document.getElementById("name-input").value = "";
  document.getElementById("xp-input").value = "";
  document.getElementById("level-result").innerHTML = "";
});
