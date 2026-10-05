/**
 * Módulo do Simulador de Decisão Situada (Unidade 5)
 */
export function inicializarSimulador() {
  const btn1 = document.getElementById('btnDecisao1');
  const btn2 = document.getElementById('btnDecisao2');
  const btn3 = document.getElementById('btnDecisao3');
  const res = document.getElementById('resultadoSimulacao');
  const progresso = document.getElementById('barraProgresso');
  const textoCarga = document.getElementById('textoStatusCarga');

  function executarDecisao(opcao) {
    if (!res || !progresso) return;
    res.style.display = 'block';

    if (opcao === 2) {
      res.style.background = "#DEF7EC";
      res.style.color = "#03543F";
      res.innerHTML = "<strong>Decisão Ideal!</strong> Sua estratégia de busca organizada encontrou os dados em altíssima velocidade e com boa eficiência.";
      progresso.style.width = "40%";
      if (textoCarga) {
        textoCarga.textContent = "Carga Otimizada (40%)";
        textoCarga.style.color = "var(--cor-verde)";
      }
    } else {
      res.style.background = "#FDE8E8";
      res.style.color = "#9B1C1C";
      res.innerHTML = "<strong>Atrito de Desempenho!</strong> Abordagens lineares ou sem índice saturaram a memória de trabalho da aplicação, elevando o índice de estresse mental.";
      progresso.style.width = "85%";
      if (textoCarga) {
        textoCarga.textContent = "Sobrecarga Iminente (85%)";
        textoCarga.style.color = "#EF4444";
      }
    }
  }

  if (btn1) btn1.onclick = () => executarDecisao(1);
  if (btn2) btn2.onclick = () => executarDecisao(2);
  if (btn3) btn3.onclick = () => executarDecisao(3);
}