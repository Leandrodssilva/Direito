window.MODULOS = window.MODULOS || [];
window.MODULOS.push({
  id: "sucessoes",
  numero: 10,
  titulo: "Herança",
  subtitulo: "O que é herança, quem herda, testamento e inventário.",
  licoes: [
    {
      id: "o-que-e-heranca",
      titulo: "O que é a herança",
      resumo: "Quando ela se abre, o que entra nela, as dívidas e a diferença entre herança e meação.",
      tempo: "7 min",
      historia:
        "<p>O avô do Pedrinho morreu. Na semana seguinte, o Pedrinho ouviu os adultos falando em “herança”, “inventário” e “dívidas do falecido”.</p>" +
        "<p>Ele perguntou à Vovó Nina: <span class='fala'>“Herança é só dinheiro?”</span></p>" +
        "<p><span class='fala'>“Não, querido. Herança é <mark>tudo o que a pessoa deixou</mark>: a casa, o carro, o dinheiro, e também as <mark>dívidas</mark>. Mas fique tranquilo: os herdeiros não pagam dívidas com o próprio bolso. Elas são pagas só com o que o falecido deixou.”</span></p>",
      ideia: "Herança é o <mark>conjunto de bens, direitos e dívidas</mark> de quem morreu. Ela passa aos herdeiros <mark>no exato momento da morte</mark>, e as dívidas só são pagas <mark>até o limite</mark> do que foi deixado.",
      explicacao:
        "<h3>O momento da morte</h3>" +
        "<p>No instante da morte, a herança já passa automaticamente aos herdeiros, mesmo que eles nem saibam. É o chamado <b>princípio da saisine</b> (lê-se “sesine”). O inventário serve depois para organizar e dividir o que já é deles. Até a partilha, a herança é um todo indivisível, como um bolo inteiro que pertence a todos os herdeiros juntos.</p>" +
        "<h3>As dívidas</h3>" +
        "<p>Antes de dividir, pagam-se as dívidas do falecido com os bens da herança. Se as dívidas forem maiores que os bens, os herdeiros <b>não</b> precisam pagar a diferença com seu próprio dinheiro.</p>" +
        "<h3>Herança não é meação</h3>" +
        "<p>Este é o ponto que mais confunde as famílias. Quando morre uma pessoa casada, primeiro se separa a <b>meação</b> do cônjuge que ficou: a metade dos bens comuns do casal, que já era dele pelo regime de bens. Isso <b>não é herança</b>. Só a outra metade, mais os bens particulares do falecido, forma a herança.</p>" +
        "<div class='tabela-wrap'><table><thead><tr><th>Exemplo</th><th>Valor</th></tr></thead><tbody>" +
        "<tr><td>Casa comprada durante o casamento (comunhão parcial)</td><td>R$ 400 mil</td></tr>" +
        "<tr><td>Meação da viúva (metade, que já era dela)</td><td>R$ 200 mil</td></tr>" +
        "<tr><td><b>Herança</b> (a outra metade, que será dividida entre os herdeiros)</td><td><b>R$ 200 mil</b></td></tr>" +
        "</tbody></table></div>" +
        "<h3>Aceitar ou renunciar</h3>" +
        "<p>Ninguém é obrigado a receber herança. O herdeiro pode <b>renunciar</b>, mas precisa fazer isso por <b>escritura pública</b> ou por termo no processo judicial. Não dá para aceitar só uma parte e renunciar a outra. E quem renuncia é tratado como se nunca tivesse sido herdeiro.</p>" +
        "<h3>Herança de pessoa viva</h3>" +
        "<p>É proibido fazer contrato sobre a herança de alguém que ainda está vivo. Um filho não pode “vender” para o irmão a parte que vai receber quando o pai morrer.</p>",
      lei: [
        {
          ref: "Código Civil, art. 1.784",
          texto: "Aberta a sucessão, a herança transmite-se, desde logo, aos herdeiros legítimos e testamentários.",
          simples: "Na hora da morte, a herança <b>já passa</b> para os herdeiros."
        },
        {
          ref: "Código Civil, art. 1.792 (resumido)",
          texto: "O herdeiro não responde por encargos superiores às forças da herança; incumbe-lhe, porém, a prova do excesso, salvo se houver inventário que a escuse, demonstrando o valor dos bens herdados.",
          simples: "Os herdeiros <b>não pagam</b> dívidas maiores do que aquilo que receberam."
        },
        {
          ref: "Código Civil, art. 426",
          texto: "Não pode ser objeto de contrato a herança de pessoa viva.",
          simples: "<b>Não se negocia</b> herança de quem ainda está vivo."
        },
        {
          ref: "Código Civil, art. 1.806",
          texto: "A renúncia da herança deve constar expressamente de instrumento público ou termo judicial.",
          simples: "Para <b>abrir mão</b> da herança, é preciso escritura pública ou declaração no processo."
        }
      ],
      vida: [
        "Um parente morreu deixando dívidas? Os credores devem cobrar da <b>herança</b> (do espólio), não de você pessoalmente. Não assine confissões de dívida do falecido sem orientação.",
        "Até a partilha, cuidado ao usar sozinho um imóvel da herança: os outros herdeiros podem pedir aluguel pela sua parte de uso exclusivo.",
        "Saques e transferências de valores do falecido depois da morte precisam de autorização (inventário ou alvará judicial). Usar o cartão ou a senha de quem morreu pode gerar problemas sérios."
      ],
      palavras: [
        { t: "Herança", d: "Conjunto de bens, direitos e dívidas deixados por quem morreu." },
        { t: "Sucessão", d: "Transferência da herança de quem morreu para os herdeiros." },
        { t: "Saisine", d: "Princípio pelo qual a herança passa aos herdeiros no exato momento da morte." },
        { t: "Espólio", d: "A herança enquanto ainda não foi dividida. É representado pelo inventariante." },
        { t: "Meação", d: "A metade dos bens comuns que já pertence ao cônjuge ou companheiro pelo regime de bens. Não é herança." },
        { t: "Renúncia da herança", d: "Ato formal pelo qual o herdeiro recusa a herança. Exige escritura pública ou termo judicial." },
        { t: "De cujus", d: "Expressão latina usada para se referir à pessoa que morreu e cuja herança se discute." }
      ],
      quiz: [
        {
          p: "Quando a herança passa para os herdeiros?",
          o: ["Quando termina o inventário", "No momento da morte", "Quando o juiz decide", "Um ano depois da morte"],
          c: 1,
          e: "Pelo princípio da saisine (art. 1.784), a transmissão é imediata, no momento da morte. O inventário só formaliza e divide."
        },
        {
          p: "O falecido deixou bens de 50 mil e dívidas de 80 mil. Os herdeiros devem pagar os 30 mil que faltam?",
          o: ["Sim, com o próprio dinheiro", "Não, respondem só até o valor da herança", "Só o filho mais velho paga", "Sim, em parcelas"],
          c: 1,
          e: "Art. 1.792: o herdeiro não responde por encargos superiores às forças da herança."
        },
        {
          p: "Casados em comunhão parcial, o marido morreu. A metade dos bens comprados durante o casamento que pertence à viúva é:",
          o: ["Herança da viúva", "Meação, que já era dela e não entra na herança", "Herança dos filhos", "Do Estado"],
          c: 1,
          e: "A meação é a parte do cônjuge pelo regime de bens. Ela é separada antes; só o restante compõe a herança."
        }
      ]
    },

    {
      id: "quem-herda",
      titulo: "Quem herda quando não há testamento",
      resumo: "A fila da herança, os herdeiros necessários e a parte que é deles por lei.",
      tempo: "9 min",
      historia:
        "<p>Lia perguntou à Vovó Nina, meio sem jeito: <span class='fala'>“Vó, quando alguém morre sem deixar testamento, como se sabe quem fica com as coisas?”</span></p>" +
        "<p>A Vovó desenhou uma fila: <span class='fala'>“A lei faz uma <mark>fila</mark>. Primeiro vêm os filhos e netos. Se não houver, vêm os pais e avós. Depois, o marido ou a esposa sozinho. Por último, irmãos, sobrinhos, tios e primos. Quem está na frente da fila tira a vez de quem está atrás.”</span></p>" +
        "<p><span class='fala'>“E o marido ou a esposa fica no fim?”</span> <span class='fala'>“Não! Em muitos casos, ele <mark>entra junto</mark> com os filhos ou com os pais. Vamos ver como.”</span></p>",
      ideia: "Sem testamento, a herança segue a <mark>ordem da lei</mark>: descendentes, ascendentes, cônjuge ou companheiro, e colaterais. Os mais próximos excluem os mais distantes.",
      explicacao:
        "<h3>A fila da herança</h3>" +
        "<div class='tabela-wrap'><table><thead><tr><th>Ordem</th><th>Quem herda</th><th>Observação</th></tr></thead><tbody>" +
        "<tr><td><b>1º</b></td><td>Descendentes (filhos, netos), <b>em concorrência</b> com o cônjuge ou companheiro</td><td>O cônjuge concorre dependendo do regime de bens (veja abaixo)</td></tr>" +
        "<tr><td><b>2º</b></td><td>Ascendentes (pais, avós), em concorrência com o cônjuge ou companheiro</td><td>Aqui o cônjuge sempre concorre, qualquer que seja o regime</td></tr>" +
        "<tr><td><b>3º</b></td><td>Cônjuge ou companheiro, sozinho</td><td>Fica com tudo, se não houver descendentes nem ascendentes</td></tr>" +
        "<tr><td><b>4º</b></td><td>Colaterais até o 4º grau</td><td>Irmãos primeiro; depois sobrinhos e tios; depois primos, tios-avós e sobrinhos-netos</td></tr>" +
        "<tr><td><b>Ninguém?</b></td><td>O Município (ou o Distrito Federal, ou a União)</td><td>É a chamada herança vacante</td></tr>" +
        "</tbody></table></div>" +
        "<h3>Quando o cônjuge herda junto com os filhos</h3>" +
        "<p>Depende do regime de bens. Uma forma simples de entender: o cônjuge herda junto com os filhos quando <b>não</b> ficaria bem protegido pela meação.</p>" +
        "<ul><li><b>Comunhão universal:</b> não concorre. Ele já é meeiro de quase tudo.</li>" +
        "<li><b>Separação obrigatória:</b> não concorre.</li>" +
        "<li><b>Comunhão parcial:</b> concorre apenas sobre os <b>bens particulares</b> do falecido (os que ele tinha antes ou recebeu de herança e doação). Sobre os bens comuns, ele já tem a meação.</li>" +
        "<li><b>Separação convencional:</b> concorre sobre tudo, segundo o Superior Tribunal de Justiça.</li></ul>" +
        "<p>Quando concorre com os filhos, o cônjuge recebe uma parte igual à de cada filho. Se ele também for pai ou mãe de todos os filhos que herdam, tem garantido no mínimo <b>1/4</b> da herança.</p>" +
        "<p>O companheiro da união estável tem os <b>mesmos direitos</b> do cônjuge na herança, desde a decisão do Supremo Tribunal Federal de 2017.</p>" +
        "<p>E há uma proteção extra: o cônjuge ou companheiro sobrevivente tem o <b>direito real de habitação</b>, ou seja, pode continuar morando no imóvel em que o casal vivia, se for o único desse tipo a inventariar, qualquer que seja o regime de bens.</p>" +
        "<h3>Direito de representação</h3>" +
        "<p>Se um filho já tinha morrido antes do pai, os filhos dele (netos do falecido) ocupam o lugar dele e recebem a parte que ele receberia. Isso se chama <b>representação</b>. Ela também existe para os filhos de irmãos.</p>" +
        "<h3>A legítima: a parte protegida</h3>" +
        "<p>São <b>herdeiros necessários</b> os descendentes, os ascendentes e o cônjuge. A eles pertence, por lei, <mark>metade da herança</mark>, a chamada <b>legítima</b>. Quem tem herdeiros necessários só pode dispor livremente, por testamento ou doação, da outra metade.</p>",
      lei: [
        {
          ref: "Código Civil, art. 1.829 (resumido)",
          texto: "A sucessão legítima defere-se na ordem seguinte: I - aos descendentes, em concorrência com o cônjuge sobrevivente, salvo se casado este com o falecido no regime da comunhão universal, ou no da separação obrigatória de bens; ou se, no regime da comunhão parcial, o autor da herança não houver deixado bens particulares; II - aos ascendentes, em concorrência com o cônjuge; III - ao cônjuge sobrevivente; IV - aos colaterais.",
          simples: "A <b>fila</b> da herança, na ordem."
        },
        {
          ref: "Código Civil, art. 1.845",
          texto: "São herdeiros necessários os descendentes, os ascendentes e o cônjuge.",
          simples: "Esses herdeiros <b>não podem ser deixados de fora</b> sem uma causa grave prevista em lei."
        },
        {
          ref: "Código Civil, art. 1.846",
          texto: "Pertence aos herdeiros necessários, de pleno direito, a metade dos bens da herança, constituindo a legítima.",
          simples: "<b>Metade</b> da herança é deles, obrigatoriamente."
        },
        {
          ref: "Código Civil, art. 1.831 (resumido)",
          texto: "Ao cônjuge sobrevivente, qualquer que seja o regime de bens, será assegurado, sem prejuízo da participação que lhe caiba na herança, o direito real de habitação relativamente ao imóvel destinado à residência da família, desde que seja o único daquela natureza a inventariar.",
          simples: "O viúvo ou a viúva pode <b>continuar morando</b> na casa da família."
        }
      ],
      vida: [
        "Quer saber quem herda na sua família? Desenhe a árvore: filhos e netos vêm primeiro. Sem eles, pais e avós. O cônjuge aparece junto, conforme o regime de bens.",
        "Irmão não é herdeiro necessário. Se você não tem filhos, pais nem cônjuge, pode deixar tudo, por testamento, para quem quiser.",
        "Viveu em união estável sem papel? Na herança, você terá que <b>provar</b> a união. Por isso o registro em cartório faz tanta diferença.",
        "Os mesmos direitos sucessórios valem para filhos adotados, socioafetivos e de fora do casamento."
      ],
      palavras: [
        { t: "Sucessão legítima", d: "A herança distribuída segundo a ordem fixada pela lei, quando não há testamento ou ele não abrange tudo." },
        { t: "Herdeiro necessário", d: "Herdeiro que tem direito obrigatório à metade da herança: descendentes, ascendentes e cônjuge." },
        { t: "Legítima", d: "A metade da herança reservada por lei aos herdeiros necessários." },
        { t: "Concorrência sucessória", d: "Quando o cônjuge ou companheiro herda junto com descendentes ou ascendentes." },
        { t: "Direito de representação", d: "Quando os descendentes de um herdeiro que já morreu recebem a parte que ele receberia." },
        { t: "Direito real de habitação", d: "Direito do cônjuge ou companheiro sobrevivente de continuar morando no imóvel da família." },
        { t: "Herança vacante", d: "Herança sem nenhum herdeiro, que passa ao Município, ao Distrito Federal ou à União." }
      ],
      quiz: [
        {
          p: "Seu Juca morreu sem testamento, deixando dois filhos e uma irmã. Quem herda?",
          o: ["Os dois filhos e a irmã", "Só os dois filhos", "Só a irmã", "O Município"],
          c: 1,
          e: "Os descendentes estão na frente da fila e excluem os colaterais (a irmã). Se ele fosse casado, o cônjuge poderia concorrer conforme o regime."
        },
        {
          p: "Uma mulher morreu sem filhos, deixando o marido e os pais. Como fica?",
          o: ["Só o marido herda", "Só os pais herdam", "O marido herda junto com os pais", "Tudo vai para os irmãos"],
          c: 2,
          e: "Sem descendentes, herdam os ascendentes em concorrência com o cônjuge, qualquer que seja o regime (art. 1.829, II)."
        },
        {
          p: "Que parte da herança é reservada aos herdeiros necessários?",
          o: ["Um quarto", "Um terço", "Metade", "Tudo"],
          c: 2,
          e: "Art. 1.846: metade dos bens da herança forma a legítima."
        },
        {
          p: "Um dos três filhos de Dona Lurdes morreu antes dela, deixando dois filhos. Quando ela morre, o que os netos recebem?",
          o: ["Nada, o pai deles já morreu", "A parte que o pai deles receberia, dividida entre os dois", "Uma parte igual à de cada tio", "Tudo"],
          c: 1,
          e: "É o direito de representação: os netos ocupam o lugar do pai e dividem entre si o terço que caberia a ele."
        }
      ]
    },

    {
      id: "testamento-e-inventario",
      titulo: "Testamento e inventário",
      resumo: "Como fazer testamento, quem pode ser excluído da herança e como se faz o inventário.",
      tempo: "8 min",
      historia:
        "<p>Vovó Nina decidiu fazer um testamento. Lia ficou assustada: <span class='fala'>“Vó, você está doente?”</span></p>" +
        "<p><span class='fala'>“Não, meu amor! Testamento não é coisa de quem está doente. É coisa de quem é <mark>organizado</mark>. Eu quero deixar minha coleção de livros para você e uma parte das minhas economias para a biblioteca do bairro. Sem testamento, a lei decide tudo sozinha.”</span></p>" +
        "<p><span class='fala'>“E você pode deixar tudo para a biblioteca?”</span> <span class='fala'>“Tudo não. Como tenho filhos, metade é deles por lei. A outra metade eu posso deixar para quem eu quiser.”</span></p>",
      ideia: "Pelo <mark>testamento</mark>, a pessoa decide o destino de seus bens depois da morte, respeitando a <mark>legítima</mark>. O <mark>inventário</mark> é o procedimento que levanta, paga as dívidas e divide a herança.",
      explicacao:
        "<h3>Testamento</h3>" +
        "<p>Pode fazer testamento qualquer pessoa a partir dos <b>16 anos</b> que esteja em pleno juízo. É um ato pessoal (ninguém faz por outro) e pode ser <b>mudado ou revogado</b> a qualquer momento. Também pode tratar de coisas além de bens, como reconhecer um filho.</p>" +
        "<div class='tabela-wrap'><table><thead><tr><th>Tipo</th><th>Como é feito</th><th>Vantagem</th></tr></thead><tbody>" +
        "<tr><td><b>Público</b></td><td>Pelo tabelião, no Cartório de Notas, com 2 testemunhas</td><td>O mais seguro: fica guardado no cartório</td></tr>" +
        "<tr><td><b>Cerrado</b></td><td>Escrito pela pessoa, entregue fechado ao tabelião, com 2 testemunhas</td><td>O conteúdo fica em segredo até a morte</td></tr>" +
        "<tr><td><b>Particular</b></td><td>Escrito e assinado pela própria pessoa e lido para 3 testemunhas, que também assinam</td><td>Mais simples, mas mais fácil de ser contestado ou perdido</td></tr>" +
        "</tbody></table></div>" +
        "<p>Para pequenas disposições (objetos pessoais de pouco valor, instruções sobre o enterro), basta um <b>codicilo</b>: um escrito particular, datado e assinado.</p>" +
        "<p>O testador pode impor cláusulas como <b>inalienabilidade</b> (o bem não pode ser vendido), <b>impenhorabilidade</b> e <b>incomunicabilidade</b> (não entra na comunhão do casamento do herdeiro). Sobre a legítima, porém, essas cláusulas só valem com uma <b>justa causa</b> declarada no testamento.</p>" +
        "<h3>Quem pode ser excluído da herança</h3>" +
        "<ul><li><b>Indignidade:</b> o herdeiro que matou ou tentou matar o autor da herança (ou seu cônjuge, ascendente ou descendente), que o acusou caluniosamente em juízo ou cometeu crime contra sua honra, ou que o impediu de fazer testamento livremente. Depende de decisão judicial.</li>" +
        "<li><b>Deserdação:</b> o próprio autor da herança exclui, <b>no testamento e com a causa expressa</b>, um herdeiro necessário, nos casos da lei (como ofensa física, injúria grave ou desamparo em doença grave).</li></ul>" +
        "<h3>Inventário</h3>" +
        "<p>É o procedimento para levantar os bens, pagar as dívidas e os impostos e fazer a <b>partilha</b>. Pontos importantes:</p>" +
        "<ul><li><b>Prazo:</b> deve ser aberto em até <b>2 meses</b> da morte. Muitos estados cobram multa no imposto se houver atraso.</li>" +
        "<li><b>Imposto:</b> o ITCMD (imposto estadual sobre herança e doações), com alíquotas que variam conforme o estado.</li>" +
        "<li><b>Inventariante:</b> a pessoa nomeada para administrar a herança durante o inventário.</li>" +
        "<li><b>No cartório (extrajudicial):</b> quando todos os herdeiros são maiores, capazes e estão de acordo, com advogado. É bem mais rápido. Regras recentes do Conselho Nacional de Justiça ampliaram os casos em que isso é possível, mesmo com testamento ou herdeiros menores, sob certas condições.</li>" +
        "<li><b>Na Justiça (judicial):</b> quando há conflito, ou nos casos que não podem ir ao cartório.</li>" +
        "<li><b>Valores pequenos:</b> saldos de FGTS, PIS-PASEP e pequenas quantias em banco podem ser liberados por <b>alvará</b> judicial, sem inventário completo, aos dependentes habilitados.</li></ul>",
      lei: [
        {
          ref: "Código Civil, art. 1.857",
          texto: "Toda pessoa capaz pode dispor, por testamento, da totalidade dos seus bens, ou de parte deles, para depois de sua morte. § 1º A legítima dos herdeiros necessários não poderá ser incluída no testamento.",
          simples: "Por testamento você decide o destino dos seus bens, mas <b>sem tocar na legítima</b>."
        },
        {
          ref: "Código Civil, art. 1.860, parágrafo único",
          texto: "Podem testar os maiores de dezesseis anos.",
          simples: "A partir dos <b>16 anos</b> já se pode fazer testamento."
        },
        {
          ref: "Código Civil, art. 1.814 (resumido)",
          texto: "São excluídos da sucessão os herdeiros ou legatários: I - que houverem sido autores, co-autores ou partícipes de homicídio doloso, ou tentativa deste, contra a pessoa de cuja sucessão se tratar, seu cônjuge, companheiro, ascendente ou descendente; II - que houverem acusado caluniosamente em juízo o autor da herança ou incorrerem em crime contra a sua honra (...); III - que, por violência ou meios fraudulentos, inibirem ou obstarem o autor da herança de dispor livremente de seus bens por ato de última vontade.",
          simples: "Quem comete esses atos graves contra o autor da herança <b>pode perder o direito</b> de herdar."
        },
        {
          ref: "Código de Processo Civil, art. 610, § 1º (resumido)",
          texto: "Se todos forem capazes e concordes, o inventário e a partilha poderão ser feitos por escritura pública, a qual constituirá documento hábil para qualquer ato de registro, bem como para levantamento de importância depositada em instituições financeiras.",
          simples: "Todos maiores, capazes e de acordo? O inventário pode ser feito <b>no cartório</b>."
        }
      ],
      vida: [
        "Testamento não é só para ricos. Ele evita brigas e garante que pessoas que você ama, mas que não seriam herdeiras (um enteado, um amigo, uma instituição), recebam algo.",
        "Prefira o <b>testamento público</b>: ele fica registrado no cartório e é difícil de ser perdido ou contestado.",
        "Não deixe o inventário para depois: além da possível multa no ITCMD, enquanto ele não acaba, os bens ficam “travados” e não podem ser vendidos com facilidade.",
        "Seguro de vida e previdência privada (como o VGBL), em regra, <b>não entram</b> na herança: vão direto para os beneficiários indicados."
      ],
      palavras: [
        { t: "Testamento", d: "Ato pessoal e revogável pelo qual alguém dispõe de seus bens para depois da morte." },
        { t: "Testador", d: "A pessoa que faz o testamento." },
        { t: "Legado", d: "Bem específico deixado em testamento para alguém (o legatário)." },
        { t: "Codicilo", d: "Escrito particular para pequenas disposições, como objetos pessoais de pouco valor e instruções sobre o enterro." },
        { t: "Indignidade", d: "Exclusão da herança, por decisão judicial, de quem praticou atos graves contra o autor da herança." },
        { t: "Deserdação", d: "Exclusão de um herdeiro necessário feita pelo próprio autor da herança, no testamento, com causa prevista em lei." },
        { t: "Inventário", d: "Procedimento para apurar os bens, pagar as dívidas e dividir a herança entre os herdeiros." },
        { t: "Inventariante", d: "Pessoa que administra a herança e representa o espólio durante o inventário." },
        { t: "ITCMD", d: "Imposto estadual sobre transmissão por morte e doação." },
        { t: "Alvará judicial", d: "Autorização do juiz, por exemplo, para sacar pequenos valores deixados por quem morreu." }
      ],
      quiz: [
        {
          p: "Vovó Nina tem dois filhos. Que parte da herança ela pode deixar livremente para a biblioteca do bairro?",
          o: ["Tudo", "Metade", "Um quarto", "Nada"],
          c: 1,
          e: "Como tem herdeiros necessários, ela só pode dispor da metade disponível. A outra metade é a legítima dos filhos."
        },
        {
          p: "A partir de que idade alguém pode fazer testamento?",
          o: ["16 anos", "18 anos", "21 anos", "Qualquer idade"],
          c: 0,
          e: "Art. 1.860, parágrafo único: os maiores de 16 anos podem testar."
        },
        {
          p: "Os quatro irmãos herdeiros são maiores, capazes e estão de acordo com a divisão. Como pode ser feito o inventário?",
          o: ["Só na Justiça", "Por escritura pública no cartório, com advogado", "Não precisa de inventário", "Só depois de 10 anos"],
          c: 1,
          e: "CPC, art. 610, § 1º: se todos são capazes e concordam, o inventário pode ser extrajudicial, com assistência de advogado."
        },
        {
          p: "Um filho tentou matar o pai para ficar com a herança. O que pode acontecer?",
          o: ["Nada, ele é herdeiro necessário", "Ele pode ser excluído da herança por indignidade", "Ele recebe o dobro", "Só perde metade"],
          c: 1,
          e: "Art. 1.814, I: autor de homicídio doloso ou tentativa contra o autor da herança pode ser excluído por indignidade."
        }
      ]
    }
  ]
});
