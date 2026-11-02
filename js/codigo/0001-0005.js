/* Código Civil (Lei 10.406/2002) explicado, artigo por artigo.
   Cada arquivo de js/codigo/ acrescenta artigos a window.CODIGO.artigos.
   Campos de cada artigo:
     n         número do artigo (para ordenar e para o endereço #art-N)
     rotulo    como o artigo é escrito na lei ("Art. 1º", "Art. 10")
     caminho   Parte, Livro, Título, Capítulo (e Seção, quando houver)
     texto     o texto da lei, em partes: {tipo: "caput"|"inciso"|"paragrafo"|"alinea", r: "I" | "§ 1º" | "a)", t: "...", nota: "..."}
     simples   a explicação em palavras simples
     itens     (opcional) a explicação de cada inciso ou parágrafo: {r, t}
     exemplo   uma situação com a turma do aplicativo
     atencao   (opcional) pegadinhas, exceções e o que mudou
     palavras  (opcional) termos novos: {t, d}
     licao     (opcional) id da lição da trilha que trata do assunto
     relacionados (opcional) números de outros artigos ligados a este */
window.CODIGO = window.CODIGO || { artigos: [] };
window.CODIGO.artigos.push(
  {
    n: 1,
    rotulo: "Art. 1º",
    caminho: ["Parte Geral", "Livro I — Das Pessoas", "Título I — Das Pessoas Naturais", "Capítulo I — Da Personalidade e da Capacidade"],
    texto: [
      { tipo: "caput", t: "Toda pessoa é capaz de direitos e deveres na ordem civil." }
    ],
    simples: "Todo ser humano, sem exceção, pode <mark>ter direitos</mark> (ser dono de uma casa, receber uma herança, ter um nome) e <mark>ter deveres</mark> (pagar o que deve, consertar o que estragou). Não importa a idade, a cor, a religião, se é rico ou pobre, brasileiro ou estrangeiro.",
    exemplo: "A prima recém-nascida da Lia ganhou do avô um terreno. Ela ainda nem fala, mas já é dona do terreno. Isso é possível porque, para a lei, <b>toda pessoa</b> pode ter direitos, inclusive um bebê.",
    atencao: "Este artigo fala em <b>ter</b> direitos, o que os juristas chamam de <b>capacidade de direito</b>. Poder <b>exercer</b> esses direitos sozinho (assinar um contrato, vender uma casa) é outra coisa, chamada capacidade de fato. É dela que tratam os artigos 3º, 4º e 5º.<br><br>Curiosidade: o Código antigo, de 1916, dizia “Todo <i>homem</i> é capaz de direitos e obrigações”. O Código de 2002 trocou por “Toda <i>pessoa</i>”, deixando claro que vale igualmente para homens e mulheres.",
    palavras: [
      { t: "Ordem civil", d: "A vida comum entre as pessoas: família, bens, contratos, herança. É o assunto do Direito Civil." },
      { t: "Capacidade de direito", d: "Poder ser titular de direitos e deveres. Toda pessoa tem, desde o nascimento com vida." }
    ],
    licao: "capacidade",
    relacionados: [2, 3, 4]
  },

  {
    n: 2,
    rotulo: "Art. 2º",
    caminho: ["Parte Geral", "Livro I — Das Pessoas", "Título I — Das Pessoas Naturais", "Capítulo I — Da Personalidade e da Capacidade"],
    texto: [
      { tipo: "caput", t: "A personalidade civil da pessoa começa do nascimento com vida; mas a lei põe a salvo, desde a concepção, os direitos do nascituro." }
    ],
    simples: "O artigo diz duas coisas. Primeira: a pessoa passa a existir para o Direito quando <mark>nasce com vida</mark>, mesmo que respire só por um instante. Segunda: antes disso, o bebê que está na barriga (o <mark>nascituro</mark>) já tem seus direitos <mark>guardados</mark>, esperando por ele.",
    itens: [
      { r: "1ª parte", t: "“A personalidade civil começa do nascimento com vida”: o bebê vira pessoa no momento em que nasce e respira. Não importa se ele vive um minuto ou cem anos." },
      { r: "2ª parte", t: "“A lei põe a salvo, desde a concepção, os direitos do nascituro”: desde que o bebê é gerado, a lei protege os interesses dele. Ele pode, por exemplo, receber uma doação ou ser incluído num testamento. Esses direitos se confirmam quando ele nasce com vida." }
    ],
    exemplo: "A tia da Lia está grávida de seis meses. O avô morreu e deixou um testamento dizendo: “deixo meu relógio para o bebê que vai nascer”. O relógio fica guardado. Quando o bebê nascer com vida, ele será o dono.",
    atencao: "Por que “nascer com vida” importa tanto? Por causa da herança. Se o bebê nasce, respira e morre logo depois, ele chegou a ser pessoa e a herdar, e o que herdou passa para os herdeiros dele. Se nasce sem vida, nunca chegou a ser pessoa nem a herdar.<br><br>Os juristas discutem há muito tempo se o nascituro já é pessoa ou não. Na prática, os tribunais têm reconhecido vários direitos a ele, como a mãe receber “alimentos gravídicos” do pai durante a gravidez (Lei 11.804/2008) e indenização quando o pai morre num acidente antes de o filho nascer.",
    palavras: [
      { t: "Personalidade civil", d: "A qualidade de ser pessoa para o Direito, podendo ter direitos e deveres." },
      { t: "Nascituro", d: "O bebê que já foi concebido, mas ainda não nasceu." },
      { t: "Concepção", d: "O momento em que o bebê é gerado." },
      { t: "Pôr a salvo", d: "Proteger, deixar guardado para depois." }
    ],
    licao: "pessoa-natural",
    relacionados: [1, 6]
  },

  {
    n: 3,
    rotulo: "Art. 3º",
    caminho: ["Parte Geral", "Livro I — Das Pessoas", "Título I — Das Pessoas Naturais", "Capítulo I — Da Personalidade e da Capacidade"],
    texto: [
      { tipo: "caput", t: "São absolutamente incapazes de exercer pessoalmente os atos da vida civil os menores de 16 (dezesseis) anos.", nota: "Redação dada pela Lei nº 13.146, de 2015" }
    ],
    simples: "Quem tem <mark>menos de 16 anos</mark> não pode fazer negócios sozinho: não pode assinar contrato, vender, comprar algo importante. Quem faz isso por ele são os <mark>pais</mark> (ou o tutor, se ele não tiver pais). A lei faz isso para <mark>proteger</mark> a criança, que ainda não tem experiência.",
    exemplo: "Lia, com 10 anos, herdou dinheiro da bisavó. Ela é a dona do dinheiro, mas quem cuida dele e assina os papéis no banco são os pais dela. Eles a <b>representam</b>: agem no lugar dela.",
    atencao: "Se um menor de 16 anos fizer sozinho um negócio importante, ele é <b>nulo</b>, ou seja, não vale (art. 166, I). Pequenas compras do dia a dia, como um lanche ou um caderno, são aceitas normalmente pela sociedade.<br><br>O que mudou: até 2015, este artigo tinha uma lista com três grupos de absolutamente incapazes, incluindo pessoas com deficiência mental. O Estatuto da Pessoa com Deficiência (Lei 13.146/2015) mudou a regra: hoje, <b>só os menores de 16 anos</b> são absolutamente incapazes. Ter uma deficiência não torna ninguém incapaz.",
    palavras: [
      { t: "Absolutamente incapaz", d: "Quem não pode praticar sozinho os atos da vida civil. Hoje, só os menores de 16 anos." },
      { t: "Exercer pessoalmente", d: "Fazer por conta própria, sem ninguém agindo no seu lugar." },
      { t: "Representação", d: "Quando outra pessoa (pais ou tutor) age no lugar do incapaz." }
    ],
    licao: "capacidade",
    relacionados: [1, 4, 5]
  },

  {
    n: 4,
    rotulo: "Art. 4º",
    caminho: ["Parte Geral", "Livro I — Das Pessoas", "Título I — Das Pessoas Naturais", "Capítulo I — Da Personalidade e da Capacidade"],
    texto: [
      { tipo: "caput", t: "São incapazes, relativamente a certos atos ou à maneira de os exercer:", nota: "Redação dada pela Lei nº 13.146, de 2015" },
      { tipo: "inciso", r: "I", t: "os maiores de dezesseis e menores de dezoito anos;" },
      { tipo: "inciso", r: "II", t: "os ébrios habituais e os viciados em tóxico;", nota: "Redação dada pela Lei nº 13.146, de 2015" },
      { tipo: "inciso", r: "III", t: "aqueles que, por causa transitória ou permanente, não puderem exprimir sua vontade;", nota: "Redação dada pela Lei nº 13.146, de 2015" },
      { tipo: "inciso", r: "IV", t: "os pródigos." },
      { tipo: "paragrafo", r: "Parágrafo único.", t: "A capacidade dos indígenas será regulada por legislação especial.", nota: "Redação dada pela Lei nº 13.146, de 2015" }
    ],
    simples: "Estas pessoas são <mark>relativamente incapazes</mark>: elas mesmas praticam os atos, mas, para os mais importantes, precisam de alguém <mark>do lado</mark>, ajudando e assinando junto. É como andar de bicicleta com alguém segurando o banco: quem pedala é você.",
    itens: [
      { r: "I", t: "<b>Jovens de 16 e 17 anos.</b> Já têm mais experiência que uma criança, mas ainda não toda. Para contratos importantes, assinam junto com os pais. Isso se chama <b>assistência</b>." },
      { r: "II", t: "<b>Ébrios habituais e viciados em tóxico.</b> Quem vive embriagado ou dependente de drogas a ponto de não conseguir cuidar bem dos próprios interesses. Não basta beber de vez em quando: precisa ser algo habitual, reconhecido pelo juiz num processo de curatela." },
      { r: "III", t: "<b>Quem não consegue exprimir a vontade</b>, por uma causa passageira ou permanente. Por exemplo, alguém em coma ou que, por uma doença, não consegue se comunicar de jeito nenhum. Também depende de reconhecimento pelo juiz." },
      { r: "IV", t: "<b>Pródigos.</b> Pessoas que gastam de forma descontrolada, a ponto de arruinar a própria vida. Elas só precisam de ajuda para atos que mexem com o patrimônio: vender, emprestar, fazer acordos sobre dívidas. Para o resto da vida, decidem sozinhas." },
      { r: "Parágrafo único", t: "<b>Indígenas.</b> A capacidade deles é tratada por uma lei própria, o Estatuto do Índio (Lei 6.001/1973). Desde a Constituição de 1988, entende-se que os indígenas têm autonomia e plena capacidade; a proteção especial existe para defendê-los, não para limitá-los." }
    ],
    exemplo: "O irmão da Lia tem 17 anos e quer alugar um quartinho perto da faculdade. Ele mesmo assina o contrato, e a mãe assina junto, como assistente. Se ele assinar sozinho, o contrato pode ser anulado depois.",
    atencao: "Ato do relativamente incapaz feito <b>sem assistência</b> não é nulo: é <b>anulável</b> (art. 171, I). Ele vale até que alguém peça ao juiz para desfazê-lo, dentro do prazo.<br><br>Pessoa com deficiência <b>não</b> está nesta lista. Desde 2015, ela é plenamente capaz e pode pedir, se quiser, a <b>tomada de decisão apoiada</b> (art. 1.783-A).",
    palavras: [
      { t: "Relativamente incapaz", d: "Quem pratica os atos da vida civil, mas precisa da assistência de alguém para os mais importantes." },
      { t: "Assistência", d: "Quando o próprio relativamente incapaz age, acompanhado de quem o ajuda e assina junto." },
      { t: "Ébrio habitual", d: "Pessoa que vive embriagada, a ponto de comprometer a capacidade de cuidar dos próprios interesses." },
      { t: "Pródigo", d: "Quem gasta seus bens de forma desordenada, pondo em risco o próprio sustento." },
      { t: "Exprimir a vontade", d: "Conseguir dizer ou mostrar o que quer." }
    ],
    licao: "capacidade",
    relacionados: [3, 5]
  },

  {
    n: 5,
    rotulo: "Art. 5º",
    caminho: ["Parte Geral", "Livro I — Das Pessoas", "Título I — Das Pessoas Naturais", "Capítulo I — Da Personalidade e da Capacidade"],
    texto: [
      { tipo: "caput", t: "A menoridade cessa aos dezoito anos completos, quando a pessoa fica habilitada à prática de todos os atos da vida civil." },
      { tipo: "paragrafo", r: "Parágrafo único.", t: "Cessará, para os menores, a incapacidade:" },
      { tipo: "inciso", r: "I", t: "pela concessão dos pais, ou de um deles na falta do outro, mediante instrumento público, independentemente de homologação judicial, ou por sentença do juiz, ouvido o tutor, se o menor tiver dezesseis anos completos;" },
      { tipo: "inciso", r: "II", t: "pelo casamento;" },
      { tipo: "inciso", r: "III", t: "pelo exercício de emprego público efetivo;" },
      { tipo: "inciso", r: "IV", t: "pela colação de grau em curso de ensino superior;" },
      { tipo: "inciso", r: "V", t: "pelo estabelecimento civil ou comercial, ou pela existência de relação de emprego, desde que, em função deles, o menor com dezesseis anos completos tenha economia própria." }
    ],
    simples: "Aos <mark>18 anos completos</mark>, a pessoa pode fazer <mark>tudo sozinha</mark>: comprar, vender, alugar, casar sem autorização. Antes disso, em alguns casos, ela pode ficar “adulta” para a lei mais cedo. Isso se chama <mark>emancipação</mark>, e o parágrafo único diz quando ela acontece.",
    itens: [
      { r: "Caput", t: "No dia em que faz 18 anos, a pessoa vira <b>plenamente capaz</b>. Não precisa de papel nenhum: acontece sozinho, com a data de nascimento." },
      { r: "I", t: "<b>Pelos pais:</b> os dois pais juntos (ou um só, se o outro faltou, por exemplo, por ter morrido) podem emancipar o filho de <b>16 anos</b> por <b>escritura pública</b> no cartório, sem precisar de juiz. Se o jovem tem <b>tutor</b> (não tem pais), quem decide é o <b>juiz</b>, depois de ouvir o tutor." },
      { r: "II", t: "<b>Casamento:</b> quem se casa fica emancipado. Lembrando que hoje só pode casar quem tem pelo menos 16 anos, com autorização dos pais." },
      { r: "III", t: "<b>Emprego público efetivo:</b> quem é nomeado para um cargo público efetivo (concursado, não temporário) fica emancipado. É raro, porque quase todos os concursos exigem 18 anos." },
      { r: "IV", t: "<b>Formatura em faculdade:</b> se alguém conclui um curso superior antes dos 18, fica emancipado. Também é raríssimo." },
      { r: "V", t: "<b>Negócio próprio ou emprego com sustento próprio:</b> o jovem de <b>16 anos</b> que tem um negócio ou um emprego e, por causa dele, consegue se <b>sustentar sozinho</b> (ter “economia própria”) fica emancipado." }
    ],
    exemplo: "A prima da Lia, com 17 anos, abriu uma loja de bolos e passou a se sustentar com o que ganha, morando sozinha. Pelo inciso V, ela está emancipada e pode assinar sozinha o contrato com o fornecedor de farinha.",
    atencao: "A emancipação antecipa a capacidade <b>civil</b>, mas o jovem continua menor de idade para outras leis. O emancipado <b>não pode</b>, por exemplo, tirar carteira de motorista nem comprar bebida alcoólica antes dos 18.<br><br>A emancipação dada pelos pais ou pelo juiz precisa ser <b>registrada</b> no Cartório de Registro Civil (art. 9º, II). E, segundo o Superior Tribunal de Justiça, emancipar o filho por vontade própria não livra os pais de responder pelos danos que ele causar a outras pessoas.",
    palavras: [
      { t: "Menoridade", d: "O período da vida antes de completar 18 anos." },
      { t: "Emancipação", d: "Antecipação da capacidade plena, antes dos 18 anos, nos casos previstos em lei." },
      { t: "Instrumento público", d: "Documento feito por um tabelião em cartório, como a escritura pública." },
      { t: "Homologação judicial", d: "Aprovação de um ato pelo juiz. Na emancipação pelos pais, ela não é necessária." },
      { t: "Colação de grau", d: "A cerimônia oficial de formatura na faculdade." },
      { t: "Economia própria", d: "Ter renda suficiente para se sustentar sem depender dos pais." }
    ],
    licao: "capacidade",
    relacionados: [3, 4]
  }
);
