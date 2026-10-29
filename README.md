# Direito Sem Mistério

Aplicativo web para uma pessoa leiga aprender Direito Civil brasileiro do zero, com explicações no nível de uma criança de 10 anos.

Funciona direto no navegador, inclusive offline: basta abrir o `index.html`. Não precisa instalar nada nem rodar servidor.

## Metodologia: os 5 degraus

Toda lição sobe a mesma escada, sempre na mesma ordem:

1. **Imaginar**: uma historinha com personagens fixos (Lia, Vovó Nina, Tio Beto, Seu Tonico e o cachorro Bolota) apresenta o problema jurídico numa situação do cotidiano.
2. **Entender**: a ideia principal em uma frase, com destaque de marca-texto, e depois a explicação com tabelas e exemplos.
3. **Conferir na lei**: o artigo real (Código Civil, Constituição, leis especiais) com a tradução “em palavras simples”.
4. **Usar na vida**: dicas práticas (aluguel, compras, vizinhos, família, herança).
5. **Testar**: perguntas de múltipla escolha com a explicação de cada resposta.

Depois vem a **revisão**: fichas de palavras (repetição) e as questões que a pessoa errou voltam até ela acertar.

Recursos extras:

- **Dicionário do juridiquês**, com busca, montado a partir das palavras novas de todas as lições.
- **Progresso** salvo no próprio navegador.
- **Pergunte à Dona Justa**: quando o app está aberto como Artifact no Claude, a pessoa pode tirar dúvidas e receber respostas no mesmo estilo simples. Fora do Claude, essa parte fica escondida e o resto funciona normalmente.

## Conteúdo do curso de Direito Civil

| Módulo | Lições |
| --- | --- |
| 1. Começando do zero | O que é o Direito; o Código Civil; como se lê uma lei (LINDB) |
| 2. Pessoas | Começo e fim da pessoa; capacidade e emancipação; direitos da personalidade; pessoa jurídica |
| 3. Onde moro e o que tenho | Domicílio; tipos de bens e benfeitorias |
| 4. Quando um acordo vale | Negócio jurídico; defeitos (erro, dolo, coação...); nulo × anulável; prescrição e decadência |
| 5. Obrigações | Dar, fazer, não fazer; pagamento; mora, juros e multa |
| 6. Contratos | Formação e princípios; compra e venda e doação; aluguel e empréstimo; serviços, procuração e fiança |
| 7. Responsabilidade civil | Ato ilícito e danos; culpa × risco; responder por filhos, empregados, animais e coisas |
| 8. Posse e propriedade | Posse × propriedade; usucapião; vizinhança e condomínio; garantias e bem de família |
| 9. Família | Casamento e união estável; regimes de bens; filhos e guarda; divórcio e pensão |
| 10. Herança | O que é herança; quem herda; testamento e inventário |

São 34 lições, 109 questões e mais de 200 verbetes no dicionário.

## Estrutura

```
index.html                 página do aplicativo
css/estilo.css             visual (tema claro e escuro)
js/app.js                  telas, rotas, progresso, testes e a Dona Justa
js/modulos/NN-*.js         conteúdo: cada arquivo é um módulo
scripts/gerar-artifact.js  gera a versão da página para publicar como Artifact
```

### Como acrescentar uma lição ou um módulo

Cada arquivo em `js/modulos/` adiciona um módulo a `window.MODULOS`. Uma lição tem os campos:

```js
{
  id: "identificador-unico",       // vira o endereço #licao-identificador-unico
  titulo: "...",
  resumo: "...",
  tempo: "6 min",
  historia: "<p>...</p>",          // degrau 1 (HTML)
  ideia: "...",                    // a frase principal (pode usar <mark>)
  explicacao: "<p>...</p>",        // degrau 2 (HTML, pode ter tabelas)
  lei: [{ ref: "Código Civil, art. 1º", texto: "...", simples: "..." }],
  vida: ["dica 1", "dica 2"],
  palavras: [{ t: "Termo", d: "Definição" }],
  quiz: [{ p: "Pergunta", o: ["A", "B", "C", "D"], c: 1, e: "Explicação" }]  // c = índice da certa
}
```

Para um novo módulo, crie o arquivo e acrescente a linha `<script src="js/modulos/NN-nome.js">` no `index.html`, antes do `app.js`.

## Aviso

Material educativo. Não substitui a orientação de um advogado, da Defensoria Pública ou do Juizado Especial Cível. As leis mudam: confira sempre o texto atualizado em [planalto.gov.br](https://www.planalto.gov.br).
