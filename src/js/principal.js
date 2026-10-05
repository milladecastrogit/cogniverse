/**
 * Orquestrador Central da Aplicação
 */
import { inicializarConstelacaoNeural } from "./constelacao.js";
import { inicializarSimulador } from "./simulador.js";
import { inicializarTutor } from "./tutor.js";

window.addEventListener("DOMContentLoaded", () => {
  // 1. Transição da Tela Inicial / Apresentação
  const btnEntrar = document.getElementById('btnEntrarPlataforma');
  const telaInicial = document.getElementById('telaInicialCogniverse');
  const btnsVoltarInicio = document.querySelectorAll('[data-voltar-inicio]');

  function abrirTelaInicial() {
    if (!telaInicial) return;
    telaInicial.style.display = 'flex';
    requestAnimationFrame(() => {
      telaInicial.style.opacity = '1';
    });
  }

  if (btnEntrar && telaInicial) {
    btnEntrar.onclick = () => {
      telaInicial.style.opacity = '0';
      setTimeout(() => {
        telaInicial.style.display = 'none';
        inicializarConstelacaoNeural(); // Inicia o canvas com dimensões reais
      }, 500);
    };
  }

  btnsVoltarInicio.forEach((btn) => {
    btn.onclick = abrirTelaInicial;
  });

  // 2. Alternância entre Visão do Estudante e Painel do Docente
  const btnAbaEstudante = document.getElementById('btnAbaEstudante');
  const btnAbaDocente = document.getElementById('btnAbaDocente');
  const secaoEstudante = document.getElementById('secaoEstudante');
  const secaoDocente = document.getElementById('secaoDocente');

  if (btnAbaEstudante && btnAbaDocente) {
    btnAbaEstudante.onclick = () => {
      btnAbaEstudante.classList.add('ativa');
      btnAbaDocente.classList.remove('ativa');
      secaoEstudante.classList.add('ativa');
      secaoDocente.classList.remove('ativa');
    };

    btnAbaDocente.onclick = () => {
      btnAbaDocente.classList.add('ativa');
      btnAbaEstudante.classList.remove('ativa');
      secaoDocente.classList.add('ativa');
      secaoEstudante.classList.remove('ativa');
    };
  }

  // 3. Alternância de Tema Claro / Escuro
  const btnTema = document.getElementById('btnAlternarTema');
  const rotuloTema = document.getElementById('rotuloTema');

  if (btnTema) {
    btnTema.onclick = () => {
      document.body.classList.toggle('modo-escuro');
      rotuloTema.textContent = document.body.classList.contains('modo-escuro') ? '☀️' : '🌙';
    };
  }

  // 4. Inicialização dos Módulos Interativos
  inicializarSimulador();
  inicializarTutor();
});