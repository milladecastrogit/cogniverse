# Cogniverse

Cogniverse é uma experiência web criada para a **Hackathon Sintechtica Ânima 2026** com foco em aprendizagem adaptativa, visualização de progresso e apoio à tomada de decisão pedagógica. O projeto foi pensado para representar uma plataforma educacional mais humana, visual e interativa, unindo navegação intuitiva, trilhas de estudo, feedback visual e um tutor inteligente.

## Sobre o projeto

O Cogniverse nasceu para responder a um desafio comum em ambientes acadêmicos: **como tornar o acompanhamento da aprendizagem mais claro, mais visual e mais útil para estudantes e docentes ao mesmo tempo**.

A proposta foi construir uma interface que:

- ajude o estudante a enxergar o estudo como uma trilha guiada;
- dê ao docente uma visão rápida de pontos de atenção da turma;
- apresente a informação de forma mais acolhedora e menos técnica;
- permita interação com um tutor inteligente quando disponível.

## Problema que motivou a solução

Em contextos acadêmicos reais, é comum encontrar três dificuldades recorrentes:

- o estudante nem sempre entende com clareza em que ponto da jornada de aprendizagem está;
- o professor precisa interpretar rapidamente sinais de avanço, travamento ou dificuldade;
- ferramentas tradicionais de ensino costumam mostrar dados de forma fria, burocrática ou pouco visual.

Na Hackathon Sintechtica Ânima 2026, o Cogniverse foi criado para propor uma resposta a esse cenário: **transformar dados de aprendizagem em uma experiência visual, dinâmica e compreensível**.

## Solução proposta

A solução foi desenhada como uma plataforma com duas grandes visões:

- **Visão do estudante**: uma constelação interativa que representa a navegação pelo conteúdo e uma área de simulação prática para tomada de decisão.
- **Visão do docente**: um mosaico de aprendizagem que mostra rapidamente a situação de competências da turma, com destaque para pontos críticos, estáveis e de atenção.

Além disso, a interface inclui:

- tela inicial com identidade visual da marca;
- alternância entre modo claro e escuro;
- botão para retornar à tela inicial;
- tutor inteligente com integração opcional à API Gemini;
- resposta visual imediata em interações da interface.

## Como o projeto foi criado

O Cogniverse foi desenvolvido como uma aplicação web front-end, usando uma arquitetura modular simples e direta.

### Estrutura principal

- `index.html` concentra a experiência principal da aplicação.
- `src/css/` contém os estilos modulares da interface.
- `src/js/` reúne a lógica de interação, canvas, simulador e tutor.
- `src/servicos/` centraliza a integração com serviços externos.
- `src/imagens/` armazena os ativos visuais do projeto.

### Abordagem de implementação

O desenvolvimento foi feito em camadas:

1. **Estrutura**: HTML organizado em seções para tela inicial, estudante e docente.
2. **Estilo**: CSS modular para separar identidade visual, cabeçalho, constelação, tutor, docente e variáveis de tema.
3. **Interação**: JavaScript em módulos ES para alternar telas, ativar a constelação, atualizar a simulação e conduzir o chat com IA.
4. **Experiência visual**: uso de gradientes, cards, canvas e composição em mosaico para reforçar a identidade do produto.
5. **Fallbacks**: mensagens e comportamentos alternativos para manter a experiência funcional mesmo sem chave da API Gemini.

## Ferramentas utilizadas

### Tecnologias do projeto

- **HTML5**: estrutura da interface.
- **CSS3**: responsividade, temas, layout e identidade visual.
- **JavaScript ES Modules**: lógica da aplicação e controle da navegação.
- **Canvas HTML5**: renderização da constelação interativa.
- **API Gemini**: suporte opcional ao tutor inteligente.
- **Google Fonts**: tipografia da interface.

### Ferramentas de desenvolvimento

- **VS Code**: ambiente principal de edição.
- **Workspace local em XAMPP**: execução do projeto em ambiente local.
- **Assistência de IA no desenvolvimento**: apoio para ajustes de interface, refino de textos, correções e validação de consistência.

## Funcionalidades principais

### Tela inicial

A tela inicial apresenta a identidade visual do Cogniverse, com foco em acolhimento, clareza e posicionamento do projeto.

### Constelação do aluno

A constelação é uma visualização interativa que representa tópicos de estudo como pontos de navegação. Ao interagir com os elementos, a interface estimula exploração e continuidade do aprendizado.

### Simulação prática

A simulação apresenta um dilema simples de decisão para reforçar raciocínio prático e contextualização do conteúdo.

### Tutor inteligente

O tutor permite registrar dúvidas e receber respostas orientadas por IA, quando a chave da API está disponível. Caso contrário, o sistema mantém um fallback local com resposta útil.

### Mosaico do docente

O mosaico mostra, de forma visual, a situação geral de diferentes competências da turma. A ideia é facilitar a leitura do cenário pedagógico sem depender de tabelas frias ou painéis excessivamente técnicos.

## Organização dos arquivos

```text
cogniverse/
├── index.html
├── README.md
└── src/
    ├── css/
    │   ├── cabecalho.css
    │   ├── constelacao.css
    │   ├── docente.css
    │   ├── estudante.css
    │   ├── portal.css
    │   └── variaveis.css
    ├── imagens/
    │   ├── fundo-cogniverse.svg
    │   └── logo-cogniverse.png
    ├── js/
    │   ├── constelacao.js
    │   ├── principal.js
    │   ├── simulador.js
    │   └── tutor.js
    └── servicos/
        ├── bancoDadosMemoria.js
        └── servicoGemini.js
```

## Como executar localmente

Como o projeto é uma aplicação front-end, ele pode ser aberto em um servidor local simples.

### Opção 1: abrir via servidor local do XAMPP

1. Coloque a pasta do projeto dentro do diretório do servidor local.
2. Inicie o Apache no XAMPP.
3. Acesse o arquivo `index.html` pelo navegador.

### Opção 2: usar um servidor simples no VS Code

Se preferir, você pode usar uma extensão de servidor local para abrir a aplicação no navegador.

## Observações sobre a IA

O projeto foi desenhado para funcionar mesmo sem chave de API configurada. Quando não há chave, o tutor exibe uma resposta local e útil, garantindo continuidade da experiência.

## Identidade do projeto

O nome **Cogniverse** foi mantido como centro da proposta porque representa a ideia de um universo de aprendizagem conectado, visual e orientado ao progresso.

A solução foi construída para transmitir:

- clareza;
- acompanhamento;
- personalização;
- apoio ao estudante;
- visão estratégica para o docente.

## Equipe

Projeto elaborado pela equipe **Cogniverse** para a Hackathon Sintechtica Ânima 2026.

## Licença

Projeto acadêmico e demonstrativo, desenvolvido para fins de prototipação e apresentação de conceito.
