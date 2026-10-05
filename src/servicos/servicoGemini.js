/**
 * Camada de serviço para integração com a API Gemini.
 * Mantém fallback local para uso sem chave.
 */
export async function consultarGemini(pergunta, chaveApi) {
  const texto = (pergunta || "").trim();
  const chave = (chaveApi || "").trim();

  if (!texto) {
    return "Escreva sua pergunta e eu te ajudo com uma explicação simples e direta.";
  }

  if (!chave) {
    return "Boa pergunta! Quando dividimos um problema em partes menores, fica mais fácil entender e resolver. Como você aplicaria isso no seu próximo exercício?";
  }

  try {
    const resposta = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${chave}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `Você é tutor da plataforma Cogniverse. Responda em português com linguagem simples, em no máximo 2 parágrafos, use uma analogia prática e termine com uma pergunta de reflexão. Dúvida do estudante: ${texto}`
              }
            ]
          }
        ]
      })
    });

    if (!resposta.ok) {
      const detalheErro = await resposta.text();
      throw new Error(`Falha na API Gemini (${resposta.status}): ${detalheErro}`);
    }

    const dados = await resposta.json();
    const conteudo = dados?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!conteudo) {
      throw new Error("Resposta da API sem conteúdo utilizável.");
    }

    return conteudo;
  } catch {
    return "No momento não consegui acessar a IA, mas posso te ajudar por aqui: qual seria o primeiro passo mais simples para testar sua ideia?";
  }
}
