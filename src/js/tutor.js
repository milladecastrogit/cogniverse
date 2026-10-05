/**
 * Módulo de Integração com o Gemini 3.8 Flash
 */
import { consultarGemini } from "../servicos/servicoGemini.js";

export function inicializarTutor() {
  const form = document.getElementById('formChatTutor');
  const input = document.getElementById('inputChatTutor');
  const chave = document.getElementById('chaveApiGemini');
  const janela = document.getElementById('janelaChat');

  if (!form || !input || !chave || !janela) return;

  form.onsubmit = async (e) => {
    e.preventDefault();
    const texto = input.value.trim();
    const key = chave.value.trim();
    if (!texto) return;

    // Mensagem do Estudante
    const userMsg = document.createElement('div');
    userMsg.className = 'balao-user';
    userMsg.textContent = texto;
    janela.appendChild(userMsg);
    input.value = '';
    janela.scrollTop = janela.scrollHeight;

    // Placeholder do Tutor
    const iaMsg = document.createElement('div');
    iaMsg.className = 'balao-ia';
    iaMsg.textContent = 'Pensando na melhor resposta para você...';
    janela.appendChild(iaMsg);
    janela.scrollTop = janela.scrollHeight;

    const resposta = await consultarGemini(texto, key);
    iaMsg.textContent = resposta;
    janela.scrollTop = janela.scrollHeight;
  };
}