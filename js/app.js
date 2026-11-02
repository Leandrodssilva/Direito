/* Direito Sem Mistério — lógica do aplicativo.
   O conteúdo das lições fica em js/modulos/*.js, cada arquivo empurra um módulo
   para window.MODULOS. Aqui ficam as telas, o progresso e a "Dona Justa". */
(function () {
  "use strict";

  var MODULOS = (window.MODULOS || []).slice().sort(function (a, b) { return a.numero - b.numero; });
  var CORES = ["#2f6f8f", "#8a4fa0", "#b5652b", "#3f7d3a", "#a23b52", "#2b4c9b", "#9a6b10", "#4b6b5e", "#b0458a", "#5a5fa8"];

  /* ---------- Índices ---------- */
  var LICOES = [];
  MODULOS.forEach(function (m, mi) {
    m.cor = CORES[mi % CORES.length];
    m.licoes.forEach(function (l) {
      l.modulo = m;
      l.indice = LICOES.length;
      LICOES.push(l);
    });
  });
  var PORID = {};
  LICOES.forEach(function (l) { PORID[l.id] = l; });

  function questoesDe(l) {
    return (l.quiz || []).map(function (q, i) { q.id = l.id + "-q" + i; q.licao = l; return q; });
  }
  var QUESTOES = {};
  LICOES.forEach(function (l) { questoesDe(l).forEach(function (q) { QUESTOES[q.id] = q; }); });

  /* Código Civil explicado, artigo por artigo (js/codigo/*.js) */
  var TOTAL_ARTIGOS_CC = 2046;
  var ARTIGOS = ((window.CODIGO && window.CODIGO.artigos) || []).slice().sort(function (a, b) { return a.n - b.n; });
  var PORNUM = {};
  ARTIGOS.forEach(function (a, i) { a.indice = i; PORNUM[a.n] = a; });

  /* Glossário: palavras das lições e dos artigos. Cada verbete aponta para onde aparece primeiro. */
  var GLOSSARIO = (function () {
    var vistos = {}, lista = [];
    function add(p, href, onde, licao) {
      var chave = normal(p.t);
      if (vistos[chave]) return;
      vistos[chave] = true;
      lista.push({ t: p.t, d: p.d, href: href, onde: onde, licao: licao });
    }
    LICOES.forEach(function (l) {
      (l.palavras || []).forEach(function (p) { add(p, "#licao-" + l.id, "Lição: " + l.titulo, l); });
    });
    ARTIGOS.forEach(function (a) {
      (a.palavras || []).forEach(function (p) { add(p, "#art-" + a.n, "Código Civil, " + a.rotulo, null); });
    });
    return lista.sort(function (a, b) { return a.t.localeCompare(b.t, "pt-BR"); });
  })();

  /* ---------- Progresso (só neste navegador) ---------- */
  var CHAVE = "direito-sem-misterio-v1";
  var estado = carregar();
  function carregar() {
    var base = { feitas: {}, erradas: {}, ultima: null };
    try {
      var bruto = localStorage.getItem(CHAVE);
      if (!bruto) return base;
      var e = JSON.parse(bruto);
      return { feitas: e.feitas || {}, erradas: e.erradas || {}, ultima: e.ultima || null };
    } catch (err) { return base; }
  }
  function salvar() {
    try { localStorage.setItem(CHAVE, JSON.stringify(estado)); } catch (err) { /* sem armazenamento: segue sem salvar */ }
  }
  function feita(id) { return !!estado.feitas[id]; }
  function totalFeitas() { return LICOES.filter(function (l) { return feita(l.id); }).length; }
  function proximaLicao() {
    if (estado.ultima && PORID[estado.ultima] && !feita(estado.ultima)) return PORID[estado.ultima];
    for (var i = 0; i < LICOES.length; i++) if (!feita(LICOES[i].id)) return LICOES[i];
    return null;
  }

  /* ---------- Utilidades ---------- */
  function normal(s) { return String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function el(html) { var t = document.createElement("template"); t.innerHTML = html.trim(); return t.content; }
  var app = document.getElementById("app");
  function mostrar(html) {
    app.innerHTML = "";
    app.appendChild(el(html));
    window.scrollTo(0, 0);
  }
  function letra(i) { return "ABCDEFG".charAt(i); }

  /* Converte a resposta da Dona Justa (markdown simples) em HTML seguro. */
  function formatar(texto) {
    var blocos = esc(texto).split(/\n{2,}/);
    return blocos.map(function (b) {
      b = b.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
      var linhas = b.split("\n");
      if (linhas.every(function (x) { return /^\s*([-*•]|\d+[.)])\s+/.test(x); })) {
        return "<ul>" + linhas.map(function (x) { return "<li>" + x.replace(/^\s*([-*•]|\d+[.)])\s+/, "") + "</li>"; }).join("") + "</ul>";
      }
      b = b.replace(/^#{1,4}\s*(.+)$/gm, "<b>$1</b>");
      return "<p>" + b.replace(/\n/g, "<br>") + "</p>";
    }).join("");
  }

  /* ---------- Dona Justa (pergunta ao Claude, quando a página permite) ---------- */
  var sampleP = null;
  function obterSample() {
    if (!sampleP) {
      sampleP = (window.claude && typeof window.claude.use === "function")
        ? Promise.resolve(window.claude.use("sample")).catch(function () { return null; })
        : Promise.resolve(null);
    }
    return sampleP;
  }
  var indisponivel = false;
  var REGRAS = [
    "Você é a Dona Justa, professora de Direito muito paciente do aplicativo \"Direito Sem Mistério\".",
    "Você explica o Direito BRASILEIRO para pessoas leigas como se falasse com uma criança esperta de 10 anos, sem ser boba nem infantil demais.",
    "Regras:",
    "1. Responda em português do Brasil, com frases curtas e palavras simples. Quando usar uma palavra jurídica, explique logo em seguida entre parênteses.",
    "2. Comece com a resposta direta em uma ou duas frases.",
    "3. Depois dê um exemplo do dia a dia. Você pode usar a turma do aplicativo: Lia (10 anos, curiosa), Vovó Nina (professora aposentada), Tio Beto (dono da Padaria Pão Quente) e Seu Tonico (o vizinho, dono do cachorro Bolota).",
    "4. Cite o artigo da lei só quando tiver certeza do número (por exemplo: art. 186 do Código Civil). Nunca invente número de artigo, prazo ou valor.",
    "5. Termine com uma linha que começa com **Resumindo:**.",
    "6. Se a pessoa contar um problema real dela, explique as ideias gerais e diga com carinho que, para o caso concreto, vale procurar um advogado, a Defensoria Pública (se não puder pagar) ou o Juizado Especial Cível.",
    "7. Se a pergunta não for sobre Direito, diga com gentileza que você só ajuda com Direito.",
    "8. No máximo 230 palavras. Pode usar **negrito** e listas com hífen."
  ].join("\n");

  function caixaDuvida(contexto) {
    return '<section class="parte" id="duvida" hidden data-duvida>' +
      '<h2>Ficou alguma dúvida?</h2>' +
      '<div class="duvida">' +
      '<label for="campo-duvida">Escreva sua pergunta do jeito que vier na cabeça. A Dona Justa responde em linguagem simples.</label>' +
      '<textarea id="campo-duvida" placeholder="Ex.: E se o meu filho de 15 anos comprar um celular sozinho?"></textarea>' +
      '<div class="acoes"><button class="botao" type="button" data-enviar>Perguntar</button><button class="botao secundario" type="button" data-parar hidden>Parar</button><span class="status" data-status></span></div>' +
      '<div class="resposta" data-resposta aria-live="polite"></div>' +
      '</div></section>';
  }

  function ligarDuvida(raiz, contexto) {
    var secao = raiz.querySelector("[data-duvida]");
    if (!secao) return;
    obterSample().then(function (sample) {
      if (!sample || indisponivel) return;
      secao.hidden = false;
      var link = document.querySelector('[data-passo="duvida"]');
      if (link) link.hidden = false;
      var campo = secao.querySelector("textarea");
      var enviar = secao.querySelector("[data-enviar]");
      var parar = secao.querySelector("[data-parar]");
      var status = secao.querySelector("[data-status]");
      var saida = secao.querySelector("[data-resposta]");
      var ctl = null;
      parar.onclick = function () { if (ctl) ctl.abort(); };
      enviar.onclick = function () {
        var pergunta = campo.value.trim();
        if (!pergunta) { status.textContent = "Escreva uma pergunta primeiro."; campo.focus(); return; }
        ctl = new AbortController();
        enviar.disabled = true; parar.hidden = false;
        status.textContent = "A Dona Justa está pensando…";
        saida.innerHTML = "";
        var prompt = REGRAS + "\n\nA pessoa está estudando esta lição:\n" + contexto + "\n\nPergunta da pessoa:\n" + pergunta;
        sample(prompt, {
          signal: ctl.signal,
          onText: function (u) { status.textContent = ""; saida.innerHTML = formatar(u.text); }
        }).then(function (r) {
          if (r.truncated) status.textContent = "A resposta foi cortada. Tente perguntar uma coisa de cada vez.";
        }).catch(function (e) {
          tratarErro(e, status, saida, secao);
        }).then(function () {
          enviar.disabled = false; parar.hidden = true; ctl = null;
        });
      };
    });
  }

  function tratarErro(e, status, saida, secao) {
    var code = e && e.code;
    if (e && e.text) saida.innerHTML = formatar(e.text);
    else if (code === "refused") saida.innerHTML = "";
    var some = ["not_granted", "sampling_disabled", "not_declared", "capability_disabled", "capability_removed"];
    if (some.indexOf(code) >= 0) {
      indisponivel = true;
      status.textContent = "As perguntas à Dona Justa não estão liberadas aqui. Você pode continuar estudando normalmente.";
      return;
    }
    status.textContent = {
      cancelled: "",
      rate_limited: "Muitas perguntas seguidas. Espere um pouquinho e tente de novo.",
      session_expired: "Sua sessão expirou. Entre de novo na sua conta e tente outra vez.",
      refused: "Não consegui responder essa. Tente escrever de outro jeito.",
      empty_completion: "A resposta veio vazia. Tente perguntar de um jeito mais curto.",
      prompt_too_large: "A pergunta ficou grande demais. Tente resumir."
    }[code] || "Algo deu errado na conexão. Tente de novo daqui a pouco.";
  }

  /* ---------- Telas ---------- */
  function telaInicio() {
    var feitas = totalFeitas();
    var prox = proximaLicao();
    var acertos = 0, respondidas = 0;
    Object.keys(estado.feitas).forEach(function (k) { acertos += estado.feitas[k].acertos || 0; respondidas += estado.feitas[k].total || 0; });
    var pct = respondidas ? Math.round(acertos * 100 / respondidas) : 0;
    var botaoPrincipal = prox
      ? '<a class="botao" href="#licao-' + prox.id + '">' + (feitas ? "Continuar: " + esc(prox.titulo) : "Começar a primeira lição") + '</a>'
      : '<a class="botao" href="#revisar">Você terminou! Revisar</a>';

    mostrar(
      '<section class="abertura entra">' +
        '<div>' +
          '<p class="rotulo">Direito Civil para quem nunca estudou Direito</p>' +
          '<h1>A lei explicada como se você tivesse <mark>10 anos</mark>.</h1>' +
          '<p class="chamada">Historinhas, exemplos da vida real e testes rápidos. Sem juridiquês. Cada lição leva de 5 a 8 minutos.</p>' +
          '<div class="acoes">' + botaoPrincipal + '<a class="botao secundario" href="#trilha">Ver a trilha completa</a></div>' +
        '</div>' +
        '<div class="lousa lousa-exemplo">' +
          '<span class="rotulo">Um gostinho da lição 1 de “Pessoas”</span>' +
          '<p class="pergunta">Um bebê que ainda está na barriga da mãe pode receber herança?</p>' +
          '<p>Pode! A lei <mark>guarda os direitos do bebê</mark> desde que ele começa a existir na barriga. Mas ele só vira “pessoa” de verdade para o Direito quando nasce com vida, mesmo que respire só um instante.</p>' +
          '<p class="rotulo">Código Civil, art. 2º</p>' +
        '</div>' +
      '</section>' +

      '<section class="bloco">' +
        '<div class="secao-titulo"><h2>Seu caderno</h2><span class="rotulo">salvo só neste aparelho</span></div>' +
        '<div class="painel-progresso">' +
          '<div class="numero"><b>' + feitas + '<small style="font-size:1rem;color:var(--tinta-suave)"> / ' + LICOES.length + '</small></b><span>lições concluídas</span></div>' +
          '<div class="numero"><b>' + MODULOS.length + '</b><span>módulos de Direito Civil</span></div>' +
          '<div class="numero"><b>' + (respondidas ? pct + "%" : "—") + '</b><span>de acertos nos testes</span></div>' +
          '<div class="numero"><b>' + GLOSSARIO.length + '</b><span>palavras no dicionário</span></div>' +
        '</div>' +
      '</section>' +

      '<section class="bloco">' +
        '<div class="secao-titulo"><h2>Como você vai aprender: os 5 degraus</h2></div>' +
        '<p style="max-width:62ch;color:var(--tinta-suave)">Toda lição sobe a mesma escada, sempre na mesma ordem. Primeiro você entende a ideia com uma história, depois confere na lei e só então leva para a vida real. No fim, um teste rápido mostra se ficou.</p>' +
        '<ol class="degraus">' +
          '<li><b>Imaginar</b><span>Uma historinha com a turma mostra o problema de um jeito que qualquer criança entende.</span></li>' +
          '<li><b>Entender</b><span>A ideia principal em uma frase, e depois a explicação com calma.</span></li>' +
          '<li><b>Conferir na lei</b><span>O artigo de verdade do Código Civil, com a tradução para o português do dia a dia.</span></li>' +
          '<li><b>Usar na vida</b><span>Situações reais: aluguel, compras, vizinhos, família, herança.</span></li>' +
          '<li><b>Testar</b><span>Perguntas com explicação de cada resposta. O que você errar volta na revisão.</span></li>' +
        '</ol>' +
      '</section>' +

      (ARTIGOS.length ? '<section class="bloco">' +
        '<div class="secao-titulo"><h2>Código Civil explicado</h2><span class="rotulo">' + ARTIGOS.length + ' de ' + TOTAL_ARTIGOS_CC.toLocaleString("pt-BR") + ' artigos</span></div>' +
        '<p style="max-width:62ch;color:var(--tinta-suave)">Além das lições, você pode ler a própria lei, artigo por artigo, cada um com a explicação em palavras simples, item por item, e um exemplo da vida real.</p>' +
        '<div class="acoes"><a class="botao secundario" href="#art-' + ARTIGOS[0].n + '">Ler o ' + esc(ARTIGOS[0].rotulo) + '</a><a class="botao secundario" href="#codigo">Ver todos os artigos</a></div>' +
      '</section>' : '') +

      '<section class="bloco">' +
        '<div class="secao-titulo"><h2>A turma que aparece nas histórias</h2></div>' +
        '<div class="turma">' +
          pessoa("L", "#b0458a", "Lia", "10 anos. Pergunta “por quê?” para tudo.") +
          pessoa("N", "#2f6f8f", "Vovó Nina", "Professora aposentada, avó da Lia. Adora explicar.") +
          pessoa("B", "#b5652b", "Tio Beto", "Dono da Padaria Pão Quente. Vive fechando negócios.") +
          pessoa("T", "#3f7d3a", "Seu Tonico", "O vizinho. Tem uma mangueira enorme e o cachorro Bolota.") +
          pessoa("J", "#1f5a47", "Dona Justa", "A professora do aplicativo. Responde suas dúvidas.") +
        '</div>' +
      '</section>' +

      '<section class="bloco">' +
        '<p class="aviso">Este aplicativo ensina como o Direito funciona. Ele não resolve um caso específico. Se você tem um problema de verdade, procure um advogado, a Defensoria Pública (atende de graça quem não pode pagar) ou o Juizado Especial Cível (causas de até 40 salários mínimos; até 20, sem precisar de advogado).</p>' +
      '</section>'
    );
  }
  function pessoa(ini, cor, nome, desc) {
    return '<div class="pessoa"><span class="avatar" style="background:' + cor + '" aria-hidden="true">' + ini + '</span><div><b>' + nome + '</b><span>' + desc + '</span></div></div>';
  }

  function telaTrilha() {
    var html = '<div class="secao-titulo"><h2>Trilha de Direito Civil</h2><span class="rotulo">' + totalFeitas() + ' de ' + LICOES.length + ' lições</span></div>' +
      '<p style="max-width:62ch;color:var(--tinta-suave);margin-bottom:20px">A ordem sugerida vai do mais básico (o que é uma lei, quem é pessoa) até família e herança. Cada módulo usa o que você aprendeu antes, mas você pode abrir qualquer lição quando quiser.</p>' +
      '<div class="modulos">';
    MODULOS.forEach(function (m) {
      var feitasM = m.licoes.filter(function (l) { return feita(l.id); }).length;
      html += '<section class="modulo">' +
        '<div class="modulo-cabeca">' +
          '<span class="modulo-num" style="background:' + m.cor + '">' + m.numero + '</span>' +
          '<div><h3>' + esc(m.titulo) + '</h3><p>' + esc(m.subtitulo) + '</p>' +
          '<div class="barra" aria-hidden="true"><i style="width:' + Math.round(feitasM * 100 / m.licoes.length) + '%"></i></div></div>' +
          '<span class="modulo-conta">' + feitasM + '/' + m.licoes.length + '</span>' +
        '</div><ul class="licoes">';
      m.licoes.forEach(function (l, i) {
        var ok = feita(l.id);
        html += '<li><a href="#licao-' + l.id + '">' +
          '<span class="check' + (ok ? ' ok' : '') + '" aria-label="' + (ok ? 'concluída' : 'não concluída') + '">' + (ok ? '✓' : (i + 1)) + '</span>' +
          '<span><b>' + esc(l.titulo) + '</b><span class="resumo">' + esc(l.resumo) + '</span></span>' +
          '<span class="tempo">' + esc(l.tempo || "6 min") + '</span></a></li>';
      });
      html += '</ul></section>';
    });
    mostrar(html + '</div>');
  }

  function telaLicao(l) {
    estado.ultima = l.id; salvar();
    var m = l.modulo;
    var ant = LICOES[l.indice - 1], prox = LICOES[l.indice + 1];
    var qs = questoesDe(l);

    var html = '<article class="coluna entra">' +
      '<header class="licao-cabeca">' +
        '<nav class="migalha" aria-label="Você está em"><a href="#trilha">Trilha</a><span aria-hidden="true">›</span><span>Módulo ' + m.numero + ': ' + esc(m.titulo) + '</span></nav>' +
        '<h1>' + esc(l.titulo) + '</h1>' +
        '<p class="resumo">' + esc(l.resumo) + '</p>' +
        '<nav class="passos" aria-label="Partes da lição">' +
          '<a href="#" data-ir="historia">1 Imaginar</a><a href="#" data-ir="entender">2 Entender</a><a href="#" data-ir="lei">3 Conferir na lei</a><a href="#" data-ir="vida">4 Usar na vida</a><a href="#" data-ir="teste">5 Testar</a><a href="#" data-ir="duvida" data-passo="duvida" hidden>Dúvida?</a>' +
        '</nav>' +
      '</header>' +

      '<section class="parte" id="historia"><h2><small>DEGRAU 1</small>Imagine…</h2>' +
        '<div class="lousa historia">' + l.historia + '</div></section>' +

      '<section class="parte" id="entender"><h2><small>DEGRAU 2</small>A ideia principal</h2>' +
        '<p class="ideia">' + l.ideia + '</p>' +
        '<div class="texto">' + l.explicacao + '</div></section>' +

      '<section class="parte" id="lei"><h2><small>DEGRAU 3</small>O que a lei diz</h2><div class="lei">' +
        (l.lei || []).map(function (a) {
          var achado = /^Código Civil, art\. ([\d.]+)/.exec(a.ref);
          var art = achado && PORNUM[+achado[1].replace(/\./g, "")];
          return '<div class="artigo"><span class="ref">' + esc(a.ref) + '</span>' +
            (a.texto ? '<blockquote>“' + a.texto + '”</blockquote>' : '') +
            '<p class="simples"><b>Em palavras simples:</b> ' + a.simples + '</p>' +
            (art ? '<a class="ver-artigo" href="#art-' + art.n + '">Ver o ' + esc(art.rotulo) + ' explicado item por item ›</a>' : '') +
            '</div>';
        }).join("") +
      '</div></section>' +

      '<section class="parte" id="vida"><h2><small>DEGRAU 4</small>Na sua vida</h2><ul class="vida">' +
        (l.vida || []).map(function (v) { return '<li><span>' + v + '</span></li>'; }).join("") +
      '</ul></section>' +

      ((l.palavras && l.palavras.length) ? '<section class="parte"><h2>Palavras novas</h2><div class="palavras">' +
        l.palavras.map(function (p) { return '<div class="palavra"><b>' + esc(p.t) + '</b><span>' + p.d + '</span></div>'; }).join("") +
      '</div></section>' : '') +

      '<section class="parte" id="teste"><h2><small>DEGRAU 5</small>Teste rápido</h2><div class="quiz">' +
        qs.map(function (q, qi) {
          return '<div class="questao" data-q="' + q.id + '"><p class="enunciado">' + (qi + 1) + '. ' + q.p + '</p><div class="opcoes">' +
            q.o.map(function (op, oi) { return '<button class="opcao" type="button" data-op="' + oi + '"><span class="letra">' + letra(oi) + '</span><span>' + op + '</span></button>'; }).join("") +
            '</div><div class="retorno" hidden></div></div>';
        }).join("") +
        '<div class="placar" data-placar hidden><b data-placar-texto></b><div class="acoes">' +
          (prox ? '<a class="botao" href="#licao-' + prox.id + '">Próxima lição</a>' : '<a class="botao" href="#revisar">Ir para a revisão</a>') +
          '<button class="botao secundario" type="button" data-refazer>Refazer o teste</button></div></div>' +
      '</div></section>' +

      caixaDuvida() +

      '<nav class="navega" aria-label="Outras lições">' +
        (ant ? '<a class="botao secundario" href="#licao-' + ant.id + '">‹ ' + esc(ant.titulo) + '</a>' : '<span></span>') +
        (prox ? '<a class="botao secundario" href="#licao-' + prox.id + '">' + esc(prox.titulo) + ' ›</a>' : '<a class="botao secundario" href="#trilha">Voltar para a trilha</a>') +
      '</nav>' +
    '</article>';
    mostrar(html);

    app.querySelectorAll("[data-ir]").forEach(function (a) {
      a.addEventListener("click", function (ev) {
        ev.preventDefault();
        var alvo = document.getElementById(a.getAttribute("data-ir"));
        if (alvo) alvo.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    ligarQuiz(app, qs, function (acertos) {
      var anterior = estado.feitas[l.id];
      if (!anterior || acertos >= anterior.acertos) estado.feitas[l.id] = { acertos: acertos, total: qs.length, data: Date.now() };
      salvar();
      var placar = app.querySelector("[data-placar]");
      placar.hidden = false;
      var frase = acertos === qs.length ? "Gabaritou! " : acertos >= qs.length / 2 ? "Muito bem! " : "Tudo bem errar, é assim que se aprende. ";
      placar.querySelector("[data-placar-texto]").textContent = frase + acertos + " de " + qs.length + " certas. Lição concluída.";
    });
    app.querySelector("[data-refazer]").addEventListener("click", function () { telaLicao(l); document.getElementById("teste").scrollIntoView(); });

    var contexto = "Módulo " + m.numero + " (" + m.titulo + "), lição \"" + l.titulo + "\": " + l.resumo + " Ideia principal: " + l.ideia.replace(/<[^>]+>/g, "");
    ligarDuvida(app, contexto);
  }

  /* Liga os botões das questões. aoTerminar(acertos) roda quando todas foram respondidas. */
  function ligarQuiz(raiz, qs, aoTerminar) {
    var respondidas = 0, acertos = 0;
    raiz.querySelectorAll(".questao").forEach(function (caixa) {
      var q = QUESTOES[caixa.getAttribute("data-q")];
      caixa.querySelectorAll(".opcao").forEach(function (b) {
        b.addEventListener("click", function () {
          var escolha = +b.getAttribute("data-op");
          var certo = escolha === q.c;
          caixa.querySelectorAll(".opcao").forEach(function (x, i) {
            x.disabled = true;
            if (i === q.c) x.classList.add("certa");
            else if (i === escolha) x.classList.add("errada");
          });
          var ret = caixa.querySelector(".retorno");
          ret.hidden = false;
          ret.className = "retorno " + (certo ? "bom" : "ruim");
          ret.innerHTML = "<b>" + (certo ? "Isso mesmo!" : "Quase! A certa é a letra " + letra(q.c) + ".") + "</b>" + q.e;
          if (certo) { acertos++; delete estado.erradas[q.id]; }
          else estado.erradas[q.id] = Date.now();
          salvar();
          respondidas++;
          if (respondidas === qs.length && aoTerminar) aoTerminar(acertos);
        });
      });
    });
  }

  function telaGlossario(filtro) {
    filtro = filtro || "";
    mostrar('<div class="coluna">' +
      '<div><div class="secao-titulo"><h2>Dicionário do juridiquês</h2><span class="rotulo">' + GLOSSARIO.length + ' palavras</span></div>' +
      '<p style="color:var(--tinta-suave)">Todas as palavras difíceis das lições e dos artigos explicados, traduzidas. Toque no link para estudar o assunto.</p></div>' +
      '<label class="rotulo" for="busca-glossario">Procurar uma palavra</label>' +
      '<input id="busca-glossario" class="busca" type="search" placeholder="Ex.: usucapião, comodato, legítima…" autocomplete="off" value="' + esc(filtro) + '">' +
      '<nav class="letras" data-letras aria-label="Ir para a letra"></nav>' +
      '<div class="verbetes" data-verbetes></div></div>');
    var campo = document.getElementById("busca-glossario");
    function desenhar() {
      var f = normal(campo.value.trim());
      var lista = GLOSSARIO.filter(function (g) { return !f || normal(g.t).indexOf(f) >= 0 || normal(g.d.replace(/<[^>]+>/g, "")).indexOf(f) >= 0; });
      var html = "", atual = "", letrasUsadas = [];
      lista.forEach(function (g) {
        var ini = normal(g.t).charAt(0).toUpperCase();
        if (ini !== atual) { atual = ini; letrasUsadas.push(ini); html += '<div class="letra-grupo" id="letra-' + ini + '">' + ini + '</div>'; }
        html += '<div class="verbete"><b>' + esc(g.t) + '</b><span>' + g.d + '</span><a href="' + g.href + '">' + esc(g.onde) + '</a></div>';
      });
      app.querySelector("[data-verbetes]").innerHTML = html || '<p class="aviso">Nenhuma palavra encontrada. Tente outra grafia ou pergunte à Dona Justa.</p>';
      app.querySelector("[data-letras]").innerHTML = letrasUsadas.map(function (x) { return '<a href="#" data-letra="' + x + '">' + x + '</a>'; }).join("");
      app.querySelectorAll("[data-letra]").forEach(function (a) {
        a.addEventListener("click", function (ev) { ev.preventDefault(); document.getElementById("letra-" + a.getAttribute("data-letra")).scrollIntoView({ behavior: "smooth" }); });
      });
    }
    campo.addEventListener("input", desenhar);
    desenhar();
  }

  function embaralhar(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  function telaRevisar() {
    var idsErradas = Object.keys(estado.erradas).filter(function (id) { return QUESTOES[id]; });
    var estudadas = GLOSSARIO.filter(function (g) { return g.licao && feita(g.licao.id); });
    var baralho = embaralhar(estudadas.length >= 6 ? estudadas : GLOSSARIO).slice(0, 12);
    var pos = 0, virada = false;

    var html = '<div class="coluna">' +
      '<div><div class="secao-titulo"><h2>Revisar</h2></div>' +
      '<p style="color:var(--tinta-suave)">Revisar um pouco a cada dia fixa muito mais do que estudar tudo de uma vez. Faça as fichas e depois refaça as questões que você errou.</p></div>' +
      '<section class="parte"><h2>Fichas de palavras <small>' + (estudadas.length >= 6 ? "DAS LIÇÕES QUE VOCÊ FEZ" : "SORTEADAS DE TODO O CURSO") + '</small></h2>' +
        '<button class="ficha" type="button" data-ficha aria-live="polite"></button>' +
        '<div class="acoes"><button class="botao secundario" type="button" data-volta>‹ Anterior</button><button class="botao" type="button" data-vai>Próxima ›</button><span class="status" data-conta></span></div>' +
      '</section>' +
      '<section class="parte"><h2>Questões que você errou <small>' + idsErradas.length + '</small></h2>' +
        (idsErradas.length
          ? '<p style="color:var(--tinta-suave)">Acertou agora? A questão sai da lista.</p><div class="quiz">' +
            idsErradas.slice(0, 10).map(function (id, qi) {
              var q = QUESTOES[id];
              return '<div class="questao" data-q="' + id + '"><span class="rotulo">' + esc(q.licao.titulo) + '</span><p class="enunciado">' + (qi + 1) + '. ' + q.p + '</p><div class="opcoes">' +
                q.o.map(function (op, oi) { return '<button class="opcao" type="button" data-op="' + oi + '"><span class="letra">' + letra(oi) + '</span><span>' + op + '</span></button>'; }).join("") +
                '</div><div class="retorno" hidden></div></div>';
            }).join("") + '</div>'
          : '<p class="aviso">Nada por aqui. Quando você errar uma questão numa lição, ela aparece aqui para você tentar de novo.</p>') +
      '</section></div>';
    mostrar(html);

    var ficha = app.querySelector("[data-ficha]");
    function desenhaFicha() {
      var g = baralho[pos];
      ficha.innerHTML = virada
        ? '<span class="rotulo">' + esc(g.t) + '</span><span class="verso">' + g.d + '</span><span class="dica">Toque para ver a palavra de novo</span>'
        : '<span class="frente">' + esc(g.t) + '</span><span class="dica">Você sabe o que é? Pense e toque para conferir</span>';
      app.querySelector("[data-conta]").textContent = (pos + 1) + " de " + baralho.length;
    }
    ficha.addEventListener("click", function () { virada = !virada; desenhaFicha(); });
    app.querySelector("[data-vai]").addEventListener("click", function () { pos = (pos + 1) % baralho.length; virada = false; desenhaFicha(); });
    app.querySelector("[data-volta]").addEventListener("click", function () { pos = (pos - 1 + baralho.length) % baralho.length; virada = false; desenhaFicha(); });
    desenhaFicha();
    ligarQuiz(app, idsErradas.map(function (id) { return QUESTOES[id]; }), null);
  }

  function telaPerguntar() {
    var sugestoes = [
      "Contrato de boca vale?",
      "Qual a diferença entre posse e propriedade?",
      "Quem herda se a pessoa não deixou testamento?",
      "O que é usucapião?",
      "Posso devolver um produto que comprei pela internet?",
      "O vizinho pode cortar os galhos da minha árvore?"
    ];
    mostrar('<div class="coluna">' +
      '<div><div class="secao-titulo"><h2>Pergunte à Dona Justa</h2></div>' +
      '<p style="color:var(--tinta-suave)">Faça qualquer pergunta sobre Direito Civil. Ela explica como se estivesse conversando com uma criança curiosa, usando exemplos do dia a dia.</p></div>' +
      '<p class="aviso" data-sem-claude>Carregando a Dona Justa…</p>' +
      '<div data-chat hidden class="conversa-area" style="display:grid;gap:16px">' +
        '<div class="sugestoes">' + sugestoes.map(function (s) { return '<button type="button" data-sug>' + esc(s) + '</button>'; }).join("") + '</div>' +
        '<div class="conversa" data-conversa aria-live="polite"></div>' +
        '<div class="duvida">' +
          '<label for="campo-chat">Sua pergunta</label>' +
          '<textarea id="campo-chat" placeholder="Escreva aqui…"></textarea>' +
          '<div class="acoes"><button class="botao" type="button" data-enviar>Perguntar</button><button class="botao secundario" type="button" data-parar hidden>Parar</button><button class="botao secundario" type="button" data-limpar>Começar outra conversa</button><span class="status" data-status></span></div>' +
        '</div>' +
      '</div></div>');

    var aviso = app.querySelector("[data-sem-claude]");
    obterSample().then(function (sample) {
      if (!sample || indisponivel) {
        aviso.textContent = "A Dona Justa só responde quando o aplicativo está aberto dentro do Claude. Enquanto isso, use o Dicionário e as lições: quase toda dúvida comum já está explicada lá.";
        return;
      }
      aviso.hidden = true;
      var area = app.querySelector("[data-chat]");
      area.hidden = false;
      var conversa = area.querySelector("[data-conversa]");
      var campo = area.querySelector("textarea");
      var enviar = area.querySelector("[data-enviar]");
      var parar = area.querySelector("[data-parar]");
      var status = area.querySelector("[data-status]");
      var turnos = [], ctl = null;

      parar.onclick = function () { if (ctl) ctl.abort(); };
      area.querySelector("[data-limpar]").onclick = function () { if (ctl) ctl.abort(); turnos = []; conversa.innerHTML = ""; status.textContent = ""; };
      area.querySelectorAll("[data-sug]").forEach(function (b) { b.onclick = function () { campo.value = b.textContent; enviar.click(); }; });

      enviar.onclick = function () {
        var pergunta = campo.value.trim();
        if (!pergunta) { status.textContent = "Escreva uma pergunta primeiro."; campo.focus(); return; }
        if (ctl) return;
        campo.value = "";
        conversa.appendChild(el('<div class="balao eu"></div>'));
        conversa.lastElementChild.textContent = pergunta;
        conversa.appendChild(el('<div class="balao ela resposta"><span class="status">A Dona Justa está pensando…</span></div>'));
        var bolha = conversa.lastElementChild;
        turnos.push({ role: "user", content: pergunta });
        if (turnos.length > 12) turnos = turnos.slice(-12);
        while (turnos.length && turnos[0].role !== "user") turnos.shift();
        ctl = new AbortController();
        enviar.disabled = true; parar.hidden = false; status.textContent = "";
        sample([{ role: "user", content: REGRAS }].concat(turnos), {
          cache: false,
          signal: ctl.signal,
          onText: function (u) { bolha.innerHTML = formatar(u.text); }
        }).then(function (r) {
          turnos.push({ role: "assistant", content: r.text });
          if (r.truncated) status.textContent = "A resposta foi cortada. Tente perguntar uma coisa de cada vez.";
        }).catch(function (e) {
          if (!e || !e.text) bolha.remove();
          turnos.pop();
          tratarErro(e, status, bolha, area);
        }).then(function () { enviar.disabled = false; parar.hidden = true; ctl = null; });
      };
    });
  }

  /* ---------- Código Civil explicado ---------- */
  function textoDaLei(a) {
    return a.texto.map(function (p) {
      var rot = p.r ? '<b class="lei-rotulo">' + esc(p.r) + (p.tipo === "inciso" ? " –" : "") + '</b> ' : "";
      return '<p class="lei-linha ' + p.tipo + '">' + rot + p.t +
        (p.nota ? ' <span class="lei-nota">(' + esc(p.nota) + ')</span>' : '') + '</p>';
    }).join("");
  }
  function semTags(s) { return String(s).replace(/<[^>]+>/g, ""); }

  function telaCodigo() {
    var pct = Math.round(ARTIGOS.length * 1000 / TOTAL_ARTIGOS_CC) / 10;
    mostrar('<div class="coluna">' +
      '<div><div class="secao-titulo"><h2>Código Civil explicado</h2><span class="rotulo">' + ARTIGOS.length + ' de ' + TOTAL_ARTIGOS_CC.toLocaleString("pt-BR") + ' artigos</span></div>' +
      '<p style="color:var(--tinta-suave)">O texto da lei, artigo por artigo, com a explicação em palavras simples, item por item, um exemplo com a turma e as pegadinhas. Novos artigos entram aqui conforme forem explicados.</p>' +
      '<div class="barra" aria-hidden="true" style="margin-top:12px"><i style="width:' + Math.max(pct, 0.6) + '%"></i></div></div>' +
      '<label class="rotulo" for="busca-codigo">Procurar por número ou palavra</label>' +
      '<input id="busca-codigo" class="busca" type="search" placeholder="Ex.: 5, emancipação, nascituro…" autocomplete="off">' +
      '<div data-lista-artigos></div>' +
      '<p class="aviso">Texto do Código Civil (Lei 10.406/2002) com as alterações até 2026, conforme indicado nas notas de redação. Antes de usar um artigo num caso real, confira a versão oficial e atualizada em <a href="https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm" target="_blank" rel="noopener">planalto.gov.br</a>.</p>' +
      '</div>');
    var campo = document.getElementById("busca-codigo");
    function desenhar() {
      var f = normal(campo.value.trim());
      var numero = /^(art\.?\s*)?\d[\d.]*º?$/.test(f) ? +f.replace(/\D/g, "") : null;
      var lista = ARTIGOS.filter(function (a) {
        if (!f) return true;
        if (numero !== null) return a.n === numero;
        var tudo = a.texto.map(function (p) { return p.t; }).join(" ") + " " + semTags(a.simples) + " " + (a.palavras || []).map(function (p) { return p.t; }).join(" ");
        return normal(tudo).indexOf(f) >= 0;
      });
      var html = "", grupo = "";
      lista.forEach(function (a) {
        var g = a.caminho.join(" › ");
        if (g !== grupo) {
          if (grupo) html += '</ul>';
          grupo = g;
          html += '<p class="rotulo grupo-codigo">' + esc(a.caminho.slice(0, -1).join(" › ")) + '</p><h3 class="capitulo-codigo">' + esc(a.caminho[a.caminho.length - 1]) + '</h3><ul class="lista-artigos">';
        }
        html += '<li><a href="#art-' + a.n + '"><b>' + esc(a.rotulo) + '</b><span>' + esc(semTags(a.simples)).slice(0, 150) + '…</span></a></li>';
      });
      if (grupo) html += '</ul>';
      if (!lista.length) {
        html = numero !== null && numero >= 1 && numero <= TOTAL_ARTIGOS_CC
          ? '<p class="aviso">O art. ' + numero + ' ainda não foi explicado aqui. Os artigos entram em ordem, a partir do 1º.</p>'
          : '<p class="aviso">Nenhum artigo encontrado com essa palavra.</p>';
      }
      app.querySelector("[data-lista-artigos]").innerHTML = html;
    }
    campo.addEventListener("input", desenhar);
    desenhar();
  }

  function telaArtigo(a) {
    var ant = ARTIGOS[a.indice - 1], prox = ARTIGOS[a.indice + 1];
    var licao = a.licao && PORID[a.licao];
    var html = '<article class="coluna entra">' +
      '<header class="licao-cabeca">' +
        '<nav class="migalha" aria-label="Você está em"><a href="#codigo">Código Civil</a>' +
          a.caminho.map(function (c) { return '<span aria-hidden="true">›</span><span>' + esc(c) + '</span>'; }).join("") + '</nav>' +
        '<h1>' + esc(a.rotulo) + '</h1>' +
      '</header>' +

      '<section class="parte"><h2><small>O QUE ESTÁ ESCRITO</small>Texto da lei</h2>' +
        '<div class="artigo lei-texto"><span class="ref">Código Civil · ' + esc(a.rotulo) + '</span>' + textoDaLei(a) + '</div></section>' +

      '<section class="parte"><h2><small>O QUE QUER DIZER</small>Em palavras simples</h2>' +
        '<p class="ideia">' + a.simples + '</p></section>' +

      ((a.itens && a.itens.length) ? '<section class="parte"><h2>Item por item</h2><dl class="itens">' +
        a.itens.map(function (it) { return '<div><dt>' + esc(it.r) + '</dt><dd>' + it.t + '</dd></div>'; }).join("") +
      '</dl></section>' : '') +

      '<section class="parte"><h2>Na vida real</h2><div class="lousa historia"><p>' + a.exemplo + '</p></div></section>' +

      (a.atencao ? '<section class="parte"><h2>Atenção</h2><div class="cuidado"><p>' + a.atencao + '</p></div></section>' : '') +

      ((a.palavras && a.palavras.length) ? '<section class="parte"><h2>Palavras novas</h2><div class="palavras">' +
        a.palavras.map(function (p) { return '<div class="palavra"><b>' + esc(p.t) + '</b><span>' + p.d + '</span></div>'; }).join("") +
      '</div></section>' : '') +

      ((licao || (a.relacionados && a.relacionados.length)) ? '<section class="parte"><h2>Para continuar</h2><div class="acoes">' +
        (licao ? '<a class="botao" href="#licao-' + licao.id + '">Estudar a lição: ' + esc(licao.titulo) + '</a>' : '') +
        (a.relacionados || []).filter(function (n) { return PORNUM[n]; }).map(function (n) {
          return '<a class="botao secundario" href="#art-' + n + '">' + esc(PORNUM[n].rotulo) + '</a>';
        }).join("") +
      '</div></section>' : '') +

      caixaDuvida() +

      '<nav class="navega" aria-label="Outros artigos">' +
        (ant ? '<a class="botao secundario" href="#art-' + ant.n + '">‹ ' + esc(ant.rotulo) + '</a>' : '<a class="botao secundario" href="#codigo">‹ Todos os artigos</a>') +
        (prox ? '<a class="botao secundario" href="#art-' + prox.n + '">' + esc(prox.rotulo) + ' ›</a>' : '<a class="botao secundario" href="#codigo">Todos os artigos ›</a>') +
      '</nav>' +
    '</article>';
    mostrar(html);
    var campo = app.querySelector("#campo-duvida");
    if (campo) campo.placeholder = "Ex.: Como isso funciona no meu caso? O que acontece se…";
    var contexto = "Código Civil, " + a.rotulo + ". Texto: " + a.texto.map(function (p) { return (p.r ? p.r + " " : "") + p.t; }).join(" ") +
      " Explicação do aplicativo: " + semTags(a.simples);
    ligarDuvida(app, contexto);
  }

  /* ---------- Rotas ---------- */
  function rota() {
    var h = (location.hash || "").replace(/^#/, "");
    var nome = h.indexOf("licao-") === 0 ? "trilha" : h.indexOf("art-") === 0 ? "codigo" : (h || "inicio");
    document.querySelectorAll(".menu a").forEach(function (a) {
      if (a.getAttribute("data-rota") === nome) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    if (h.indexOf("licao-") === 0 && PORID[h.slice(6)]) return telaLicao(PORID[h.slice(6)]);
    if (h.indexOf("art-") === 0 && PORNUM[+h.slice(4)]) return telaArtigo(PORNUM[+h.slice(4)]);
    if (h === "codigo") return telaCodigo();
    if (h === "trilha") return telaTrilha();
    if (h === "glossario") return telaGlossario();
    if (h === "revisar") return telaRevisar();
    if (h === "perguntar") return telaPerguntar();
    return telaInicio();
  }
  window.addEventListener("hashchange", function () { rota(); app.focus({ preventScroll: true }); });
  rota();
  obterSample();
})();
