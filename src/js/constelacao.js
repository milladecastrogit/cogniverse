/**
 * Módulo de Renderização da Constelação Sináptica em Canvas HTML5
 */
export function inicializarConstelacaoNeural() {
  const canvas = document.getElementById('canvasNeural');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const dpr = window.devicePixelRatio || 1;

  function ajustarTamanhoCanvas() {
    const largura = canvas.clientWidth;
    const altura = canvas.clientHeight;
    canvas.width = Math.max(1, Math.floor(largura * dpr));
    canvas.height = Math.max(1, Math.floor(altura * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  ajustarTamanhoCanvas();

  const estrelas = Array.from({ length: 90 }, () => ({
    x: Math.random() * canvas.clientWidth,
    y: Math.random() * canvas.clientHeight,
    r: 0.6 + Math.random() * 1.4,
    fase: Math.random() * Math.PI * 2,
    velocidade: 0.006 + Math.random() * 0.018
  }));

  const nos = [
    { nx: 0.20, ny: 0.34, r: 23, nome: "Busca Binária", cor: "#5EEAD4", ativo: true },
    { nx: 0.42, ny: 0.20, r: 19, nome: "Recursão", cor: "#C084FC", ativo: false },
    { nx: 0.58, ny: 0.48, r: 22, nome: "Árvores AVL", cor: "#FB923C", ativo: false },
    { nx: 0.78, ny: 0.34, r: 18, nome: "Grafos", cor: "#22D3EE", ativo: false },
    { nx: 0.70, ny: 0.72, r: 18, nome: "Heaps", cor: "#34D399", ativo: false },
    { nx: 0.30, ny: 0.66, r: 17, nome: "Hash Maps", cor: "#F9A8D4", ativo: false }
  ];

  const conexoes = [
    [0, 1],
    [1, 2],
    [2, 3],
    [2, 4],
    [4, 5],
    [5, 0],
    [1, 5],
    [0, 2]
  ];

  function pontoNo(no) {
    return {
      x: no.nx * canvas.clientWidth,
      y: no.ny * canvas.clientHeight
    };
  }

  function desenharFundo() {
    for (const estrela of estrelas) {
      estrela.fase += estrela.velocidade;
      const brilho = 0.45 + Math.sin(estrela.fase) * 0.35;
      ctx.beginPath();
      ctx.globalAlpha = Math.min(1, Math.max(0.15, brilho));
      ctx.fillStyle = "#FFFFFF";
      ctx.arc(estrela.x, estrela.y, estrela.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  function desenharConexoes() {
    ctx.lineWidth = 1.4;
    ctx.setLineDash([4, 7]);
    conexoes.forEach(([origem, destino]) => {
      const a = pontoNo(nos[origem]);
      const b = pontoNo(nos[destino]);
      const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
      grad.addColorStop(0, "rgba(192, 132, 252, 0.55)");
      grad.addColorStop(1, "rgba(34, 211, 238, 0.42)");
      ctx.strokeStyle = grad;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    });
    ctx.setLineDash([]);
  }

  function desenharNos() {
    nos.forEach(no => {
      const { x, y } = pontoNo(no);
      const halo = no.ativo ? 22 : 14;

      const brilho = ctx.createRadialGradient(x, y, 0, x, y, no.r + halo);
      brilho.addColorStop(0, `${no.cor}CC`);
      brilho.addColorStop(1, `${no.cor}00`);
      ctx.fillStyle = brilho;
      ctx.beginPath();
      ctx.arc(x, y, no.r + halo, 0, Math.PI * 2);
      ctx.fill();

      const esfera = ctx.createRadialGradient(x - no.r * 0.3, y - no.r * 0.35, 1, x, y, no.r + 2);
      esfera.addColorStop(0, "#FFFFFF");
      esfera.addColorStop(0.25, no.cor);
      esfera.addColorStop(1, "#091021");

      ctx.fillStyle = esfera;
      ctx.beginPath();
      ctx.arc(x, y, no.r, 0, Math.PI * 2);
      ctx.fill();

      ctx.lineWidth = no.ativo ? 2.6 : 1.4;
      ctx.strokeStyle = no.ativo ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.55)";
      ctx.stroke();

      ctx.font = "bold 11px Montserrat, sans-serif";
      ctx.fillStyle = "#E5E7EB";
      ctx.textAlign = "center";
      ctx.fillText(no.nome, x, y + no.r + 14);
    });
  }

  function desenhar() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    desenharFundo();
    desenharConexoes();
    desenharNos();
  }

  let animacaoAtiva = true;
  function loop() {
    if (!animacaoAtiva) return;
    desenhar();
    requestAnimationFrame(loop);
  }
  loop();

  canvas.onclick = (e) => {
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    nos.forEach(no => {
      const { x, y } = pontoNo(no);
      const dist = Math.hypot(clickX - x, clickY - y);
      if (dist < no.r) {
        nos.forEach(n => n.ativo = false);
        no.ativo = true;

        const janela = document.getElementById('janelaChat');
        if (janela) {
          const msg = document.createElement('div');
          msg.className = 'balao-ia';
          msg.innerHTML = `Você selecionou o tema <strong>${no.nome}</strong>. O que você quer revisar ou praticar agora?`;
          janela.appendChild(msg);
          janela.scrollTop = janela.scrollHeight;
        }
      }
    });
  };

  const redimensionar = () => {
    ajustarTamanhoCanvas();
  };

  window.addEventListener('resize', redimensionar);

  if (canvas.__cleanupConstelacao) {
    canvas.__cleanupConstelacao();
  }

  canvas.__cleanupConstelacao = () => {
    animacaoAtiva = false;
    window.removeEventListener('resize', redimensionar);
  };
}