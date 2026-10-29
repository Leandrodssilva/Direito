window.MODULOS = window.MODULOS || [];
window.MODULOS.push({
  id: "obrigacoes",
  numero: 5,
  titulo: "Obrigações: o dever de cumprir",
  subtitulo: "Credor e devedor, como pagar direito e o que acontece quando não se paga.",
  licoes: [
    {
      id: "o-que-e-obrigacao",
      titulo: "O que é uma obrigação",
      resumo: "Dar, fazer ou não fazer: os três tipos de “ficar devendo”.",
      tempo: "6 min",
      historia:
        "<p>Lia prometeu ao irmão: <span class='fala'>“Se você me emprestar o videogame, eu te <mark>dou</mark> meu chocolate, <mark>faço</mark> sua cama a semana toda e <mark>não conto</mark> para a mamãe que você quebrou o vaso.”</span></p>" +
        "<p>Vovó Nina, que ouvia tudo, riu: <span class='fala'>“Lia, você acabou de criar as três obrigações que existem no Direito: <mark>dar</mark>, <mark>fazer</mark> e <mark>não fazer</mark>.”</span></p>" +
        "<p><span class='fala'>“E agora eu sou devedora?”</span> <span class='fala'>“É, sim. E seu irmão é o credor. Ele pode cobrar.”</span></p>",
      ideia: "Obrigação é um <mark>laço</mark> entre duas pessoas: o <mark>credor</mark>, que pode exigir, e o <mark>devedor</mark>, que deve cumprir uma prestação de dar, fazer ou não fazer.",
      explicacao:
        "<p>Toda obrigação tem três partes:</p>" +
        "<ul><li><b>Credor:</b> quem tem o direito de receber.</li>" +
        "<li><b>Devedor:</b> quem tem o dever de cumprir.</li>" +
        "<li><b>Prestação:</b> o que deve ser cumprido.</li></ul>" +
        "<p>Obrigações podem nascer de um <b>contrato</b> (combinei de pagar), de um <b>ato ilícito</b> (bati no seu carro, tenho que indenizar) ou da própria <b>lei</b> (pai deve pensão ao filho).</p>" +
        "<h3>Os três tipos</h3>" +
        "<div class='tabela-wrap'><table><thead><tr><th>Tipo</th><th>O devedor precisa…</th><th>Exemplo</th></tr></thead><tbody>" +
        "<tr><td><b>Dar</b></td><td>Entregar uma coisa (certa ou incerta)</td><td>Entregar o carro vendido; pagar o preço</td></tr>" +
        "<tr><td><b>Fazer</b></td><td>Realizar um serviço ou atividade</td><td>Pintar a parede; fazer o bolo de aniversário</td></tr>" +
        "<tr><td><b>Não fazer</b></td><td>Se abster de alguma coisa</td><td>Não construir acima de dois andares; não abrir concorrência na mesma rua</td></tr>" +
        "</tbody></table></div>" +
        "<p><b>Coisa certa</b> é uma coisa específica (o cavalo Trovão). <b>Coisa incerta</b> é indicada pelo gênero e pela quantidade (dez sacos de farinha). Se a coisa certa se perder <b>sem culpa</b> do devedor antes da entrega, a obrigação acaba e ele devolve o que recebeu. Se for <b>com culpa</b>, ele responde pelo valor e pelas perdas e danos.</p>" +
        "<h3>Vários credores ou devedores: a solidariedade</h3>" +
        "<p>Quando há mais de um devedor, em regra cada um deve apenas a sua parte. Mas se houver <b>solidariedade</b>, o credor pode cobrar <b>a dívida inteira de qualquer um deles</b>. Quem pagou depois cobra dos outros a parte deles. A solidariedade <mark>não se presume</mark>: precisa estar na lei ou no contrato.</p>",
      lei: [
        {
          ref: "Código Civil, art. 233",
          texto: "A obrigação de dar coisa certa abrange os acessórios dela embora não mencionados, salvo se o contrário resultar do título ou das circunstâncias do caso.",
          simples: "Quem deve entregar uma coisa entrega <b>com os acessórios</b>. Lembra? O acessório segue o principal."
        },
        {
          ref: "Código Civil, art. 247",
          texto: "Incorre na obrigação de indenizar perdas e danos o devedor que recusar a prestação a ele só imposta, ou só por ele exequível.",
          simples: "Se só aquela pessoa podia fazer o serviço (um pintor famoso, por exemplo) e ela se recusa, <b>tem de indenizar</b>."
        },
        {
          ref: "Código Civil, art. 265",
          texto: "A solidariedade não se presume; resulta da lei ou da vontade das partes.",
          simples: "Só se pode cobrar tudo de um só devedor se a <b>lei</b> ou o <b>contrato</b> disserem."
        }
      ],
      vida: [
        "Contratou um serviço que não foi feito? O juiz pode mandar cumprir, multar por dia de atraso, mandar outra pessoa fazer à custa do devedor ou fixar indenização.",
        "Dividiu o aluguel com amigos e todos assinaram o contrato como devedores solidários? O dono pode cobrar o aluguel inteiro de qualquer um.",
        "Ao vender um carro, deixe claro no papel o que vai junto (estepe, chave reserva, manual). Na dúvida, os acessórios acompanham."
      ],
      palavras: [
        { t: "Obrigação", d: "Vínculo jurídico em que o devedor deve cumprir uma prestação em favor do credor." },
        { t: "Credor", d: "Quem tem o direito de exigir o cumprimento da obrigação." },
        { t: "Devedor", d: "Quem tem o dever de cumprir a obrigação." },
        { t: "Prestação", d: "O conteúdo da obrigação: dar, fazer ou não fazer algo." },
        { t: "Solidariedade", d: "Quando, havendo vários devedores, o credor pode cobrar a dívida inteira de qualquer um. Precisa estar na lei ou no contrato." }
      ],
      quiz: [
        {
          p: "O Tio Beto se comprometeu a não abrir outra padaria na mesma rua. Que obrigação é essa?",
          o: ["Dar", "Fazer", "Não fazer", "Solidária"],
          c: 2,
          e: "Ele precisa se abster de algo. É obrigação de não fazer."
        },
        {
          p: "Três amigos devem 900 reais e o contrato não fala em solidariedade. O credor pode cobrar os 900 de um só?",
          o: ["Sim, sempre", "Não, a solidariedade não se presume; em regra, cada um deve 300", "Sim, do mais rico", "Não pode cobrar de ninguém"],
          c: 1,
          e: "Art. 265: a solidariedade precisa vir da lei ou do contrato. Sem ela, a dívida é dividida."
        },
        {
          p: "Um quadro vendido pegou fogo por um raio antes da entrega, sem culpa do vendedor. O que acontece?",
          o: ["O vendedor deve pagar indenização", "A obrigação se resolve: o vendedor devolve o que recebeu", "O comprador perde o dinheiro", "O vendedor deve entregar outro quadro qualquer"],
          c: 1,
          e: "Perda de coisa certa sem culpa do devedor resolve a obrigação, e o preço pago é devolvido. Não há perdas e danos."
        }
      ]
    },

    {
      id: "pagamento",
      titulo: "Pagar do jeito certo",
      resumo: "A quem pagar, onde, quando e por que guardar o recibo.",
      tempo: "6 min",
      historia:
        "<p>Seu Tonico pagou a conta da farmácia a um rapaz que estava na porta e disse ser funcionário. No mês seguinte, a farmácia cobrou de novo: o rapaz não trabalhava lá.</p>" +
        "<p><span class='fala'>“Mas eu paguei!”</span>, reclamou ele. Vovó Nina explicou: <span class='fala'>“Pagou, mas para a <mark>pessoa errada</mark>. Quem paga mal paga duas vezes, diz o ditado. E o mais importante: <mark>peça sempre o recibo</mark>. Ele é a sua prova.”</span></p>",
      ideia: "Pagar é <mark>cumprir</mark> a obrigação. Para o pagamento valer, ele precisa ser feito <mark>à pessoa certa</mark>, no lugar e no tempo certos, e você tem direito à <mark>quitação</mark>.",
      explicacao:
        "<p>Para o Direito, “pagamento” não é só dinheiro: é cumprir qualquer obrigação, inclusive entregar uma coisa ou fazer um serviço.</p>" +
        "<h3>A quem pagar</h3>" +
        "<p>Ao <b>credor</b> ou a quem o represente (um funcionário autorizado, um procurador). Se você paga a outra pessoa, o pagamento só vale se o credor confirmar ou se o dinheiro chegou a ele. Há uma exceção que protege quem age de boa-fé: o pagamento feito ao <b>credor putativo</b>, que parecia ser o credor verdadeiro para qualquer pessoa, vale, mesmo que depois se prove que não era.</p>" +
        "<h3>Onde pagar</h3>" +
        "<p>Se nada foi combinado, paga-se no <b>domicílio do devedor</b>: o credor é que vai buscar. Na prática, os contratos costumam definir outro lugar ou forma (boleto, transferência).</p>" +
        "<h3>Quando pagar</h3>" +
        "<p>Na data combinada. Se não houver data, o credor pode exigir <b>imediatamente</b>. O pagamento pode ser antecipado em alguns casos, por exemplo, se o devedor tiver sua falência decretada.</p>" +
        "<h3>Quitação: o recibo</h3>" +
        "<p>Quem paga tem <b>direito ao recibo</b> e pode até reter o pagamento enquanto não o recebe. O recibo deve dizer o valor, a dívida, quem pagou, o tempo e o lugar, com a assinatura do credor. Comprovantes de transferência e PIX também servem como prova de pagamento.</p>" +
        "<h3>Outras formas de acabar com a dívida</h3>" +
        "<ul><li><b>Consignação:</b> o credor se recusa a receber? Você pode depositar o valor no banco ou em juízo e se livrar da dívida.</li>" +
        "<li><b>Compensação:</b> se duas pessoas devem dinheiro uma à outra, as dívidas se anulam até onde forem iguais.</li>" +
        "<li><b>Novação:</b> cria-se uma dívida nova para substituir a antiga.</li>" +
        "<li><b>Remissão:</b> o credor perdoa a dívida (e o devedor aceita).</li>" +
        "<li><b>Dação em pagamento:</b> o credor aceita receber outra coisa no lugar do que era devido.</li></ul>",
      lei: [
        {
          ref: "Código Civil, art. 308",
          texto: "O pagamento deve ser feito ao credor ou a quem de direito o represente, sob pena de só valer depois de por ele ratificado, ou tanto quanto reverter em seu proveito.",
          simples: "Pague ao <b>credor</b> ou a quem ele autorizou. Senão, o pagamento pode não valer."
        },
        {
          ref: "Código Civil, art. 319",
          texto: "O devedor que paga tem direito a quitação regular, e pode reter o pagamento, enquanto não lhe seja dada.",
          simples: "Você tem <b>direito ao recibo</b>, e pode não pagar enquanto não o recebe."
        },
        {
          ref: "Código Civil, art. 327",
          texto: "Efetuar-se-á o pagamento no domicílio do devedor, salvo se as partes convencionarem diversamente, ou se o contrário resultar da lei, da natureza da obrigação ou das circunstâncias.",
          simples: "Sem combinação, o pagamento é feito onde o <b>devedor</b> mora."
        },
        {
          ref: "Código Civil, art. 322",
          texto: "Quando o pagamento for em quotas periódicas, a quitação da última estabelece, até prova em contrário, a presunção de estarem solvidas as anteriores.",
          simples: "Se você tem o recibo da última parcela, presume-se que pagou as anteriores."
        }
      ],
      vida: [
        "Guarde recibos e comprovantes: os de contas de consumo, como luz, água e telefone, pelo menos até receber a <b>declaração anual de quitação</b>, que as empresas devem enviar (Lei 12.007/2009).",
        "Pague boletos e PIX conferindo o <b>nome do recebedor</b>. Golpes de boleto falso exploram justamente o “pagar à pessoa errada”.",
        "O dono do imóvel não quer receber o aluguel para depois alegar atraso? Faça a <b>consignação em pagamento</b> e deposite o valor."
      ],
      palavras: [
        { t: "Pagamento", d: "Cumprimento da obrigação, seja entregando dinheiro, uma coisa ou realizando um serviço." },
        { t: "Quitação", d: "Documento (recibo) que prova que a dívida foi paga." },
        { t: "Credor putativo", d: "Pessoa que parece ser o credor verdadeiro aos olhos de todos. O pagamento de boa-fé a ela vale." },
        { t: "Consignação em pagamento", d: "Depósito do valor devido quando o credor se recusa a receber ou não pode ser encontrado." },
        { t: "Compensação", d: "Extinção de duas dívidas recíprocas até o valor em que se equivalem." },
        { t: "Dação em pagamento", d: "Quando o credor aceita receber uma coisa diferente da que era devida." }
      ],
      quiz: [
        {
          p: "Se nada foi combinado, onde deve ser feito o pagamento?",
          o: ["No domicílio do credor", "No domicílio do devedor", "No banco mais próximo", "No cartório"],
          c: 1,
          e: "Art. 327: a regra é o domicílio do devedor, salvo combinação ou circunstâncias em contrário."
        },
        {
          p: "O credor se recusa a dar recibo. O devedor pode:",
          o: ["Pagar assim mesmo e torcer", "Reter o pagamento até receber a quitação", "Nunca mais pagar", "Pagar metade"],
          c: 1,
          e: "Art. 319: quem paga tem direito à quitação e pode reter o pagamento enquanto ela não for dada."
        },
        {
          p: "Lia deve 20 reais ao irmão e o irmão deve 15 a ela. Se eles “acertarem as contas”, Lia passa a dever 5. Isso se chama:",
          o: ["Novação", "Compensação", "Remissão", "Consignação"],
          c: 1,
          e: "Compensação: duas dívidas recíprocas se extinguem até onde forem iguais."
        }
      ]
    },

    {
      id: "inadimplemento",
      titulo: "Quando não se cumpre: mora, juros e multa",
      resumo: "Atraso, perdas e danos, lucros cessantes, juros, correção e cláusula penal.",
      tempo: "8 min",
      historia:
        "<p>O Tio Beto encomendou um forno novo para a padaria. Combinou a entrega para o dia 1º, mas o forno só chegou no dia 20. Durante esses dias, a padaria vendeu metade do pão de sempre.</p>" +
        "<p><span class='fala'>“Eu perdi dinheiro com isso!”</span>, disse ele. Vovó Nina explicou: <span class='fala'>“Quem atrasa está em <mark>mora</mark>. E quem causa prejuízo por não cumprir paga <mark>perdas e danos</mark>: o que você <mark>perdeu</mark> e o que <mark>deixou de ganhar</mark>, desde que se prove.”</span></p>",
      ideia: "Quem não cumpre a obrigação, ou cumpre com atraso, responde pelos <mark>prejuízos</mark>, com <mark>juros</mark>, <mark>correção monetária</mark> e, se combinada, <mark>multa</mark>.",
      explicacao:
        "<h3>Mora e inadimplemento</h3>" +
        "<ul><li><b>Mora:</b> é o atraso, ou o cumprimento no lugar ou do jeito errado, quando ainda é útil cumprir. O devedor que atrasa está em mora. O credor que se recusa a receber também pode estar em mora.</li>" +
        "<li><b>Inadimplemento absoluto:</b> quando não adianta mais cumprir. O bolo de casamento entregue depois da festa não serve para nada.</li></ul>" +
        "<p>Se a dívida tem data certa, o devedor está em mora <b>no dia seguinte ao vencimento</b>, sem precisar de aviso. Se não tem data, é preciso notificá-lo.</p>" +
        "<h3>As consequências</h3>" +
        "<p>O devedor responde por <b>perdas e danos</b>, <b>juros</b>, <b>correção monetária</b> e honorários de advogado. As perdas e danos incluem:</p>" +
        "<ul><li><b>Dano emergente:</b> o que a pessoa efetivamente perdeu (o dinheiro gasto, a coisa estragada).</li>" +
        "<li><b>Lucro cessante:</b> o que razoavelmente deixou de ganhar (as vendas que a padaria perdeu).</li></ul>" +
        "<p>Desde a Lei 14.905/2024, se o contrato não disser outra coisa, a <b>correção monetária</b> segue o índice IPCA e os <b>juros legais</b> correspondem à taxa Selic descontado o IPCA.</p>" +
        "<h3>Quando não há culpa</h3>" +
        "<p>Se o descumprimento aconteceu por <b>caso fortuito ou força maior</b> (um fato que não dava para evitar nem impedir, como uma enchente que destruiu a estrada), o devedor, em regra, não responde pelos prejuízos, a não ser que tenha assumido esse risco expressamente.</p>" +
        "<h3>Cláusula penal (multa)</h3>" +
        "<p>As partes podem combinar uma <b>multa</b> para o caso de descumprimento ou atraso. Ela tem um limite: <mark>não pode ser maior que o valor da obrigação principal</mark>. E o juiz deve reduzi-la se for exagerada ou se a obrigação foi cumprida em parte.</p>" +
        "<h3>Arras (o “sinal”)</h3>" +
        "<p>Sinal é o valor dado no começo para garantir o negócio. Se quem deu o sinal desiste, perde o sinal. Se quem recebeu desiste, devolve o sinal e mais o equivalente.</p>",
      lei: [
        {
          ref: "Código Civil, art. 389",
          texto: "Não cumprida a obrigação, responde o devedor por perdas e danos, mais juros, atualização monetária e honorários de advogado.",
          simples: "Quem não cumpre paga o <b>prejuízo</b>, mais <b>juros</b>, <b>correção</b> e <b>advogado</b>."
        },
        {
          ref: "Código Civil, art. 393",
          texto: "O devedor não responde pelos prejuízos resultantes de caso fortuito ou força maior, se expressamente não se houver por eles responsabilizado.",
          simples: "Se foi algo <b>impossível de evitar</b>, em regra o devedor não paga o prejuízo."
        },
        {
          ref: "Código Civil, art. 402",
          texto: "Salvo as exceções expressamente previstas em lei, as perdas e danos devidas ao credor abrangem, além do que ele efetivamente perdeu, o que razoavelmente deixou de lucrar.",
          simples: "Paga-se o que <b>se perdeu</b> e o que <b>se deixou de ganhar</b>."
        },
        {
          ref: "Código Civil, art. 412",
          texto: "O valor da cominação imposta na cláusula penal não pode exceder o da obrigação principal.",
          simples: "A <b>multa</b> nunca pode ser maior que o valor do próprio contrato."
        }
      ],
      vida: [
        "Em contas de consumo e financiamentos, a multa por atraso para o consumidor é limitada a <b>2% do valor da prestação</b> (Código de Defesa do Consumidor, art. 52, § 1º). Os juros de mora são cobrados à parte.",
        "No condomínio, a multa por atraso da taxa condominial também é de no máximo <b>2%</b> (Código Civil, art. 1.336, § 1º).",
        "Vai cobrar lucros cessantes? Junte provas do que você ganhava antes: notas fiscais, extratos, planilhas de vendas.",
        "Deu sinal na compra de um imóvel e o vendedor desistiu? Você pode exigir a devolução do sinal <b>em dobro</b>, ou seja, o sinal mais o equivalente, com correção."
      ],
      palavras: [
        { t: "Mora", d: "Atraso ou cumprimento imperfeito da obrigação, quando ela ainda é útil ao credor." },
        { t: "Inadimplemento", d: "Descumprimento da obrigação. É absoluto quando o cumprimento não serve mais ao credor." },
        { t: "Dano emergente", d: "O prejuízo concreto, aquilo que a pessoa efetivamente perdeu." },
        { t: "Lucro cessante", d: "Aquilo que a pessoa razoavelmente deixou de ganhar por causa do dano." },
        { t: "Juros", d: "Remuneração pelo uso do dinheiro ou pelo atraso no pagamento." },
        { t: "Correção monetária", d: "Atualização do valor para compensar a inflação. Não é lucro, é só manter o valor." },
        { t: "Caso fortuito ou força maior", d: "Fato inevitável e imprevisível, como um desastre natural, que afasta a responsabilidade do devedor." },
        { t: "Cláusula penal", d: "Multa combinada no contrato para o caso de descumprimento ou atraso." },
        { t: "Arras", d: "O sinal: valor dado no início do negócio para confirmá-lo." }
      ],
      quiz: [
        {
          p: "O taxista ficou 30 dias sem trabalhar porque a oficina atrasou o conserto do carro. As corridas que ele não fez são:",
          o: ["Dano emergente", "Lucro cessante", "Dano moral", "Cláusula penal"],
          c: 1,
          e: "É o que ele razoavelmente deixou de ganhar: lucro cessante (art. 402)."
        },
        {
          p: "Um contrato de 10 mil reais prevê multa de 15 mil por descumprimento. O que acontece?",
          o: ["Vale, porque foi combinado", "A multa não pode passar do valor da obrigação principal", "A multa é sempre nula", "Dobra para 30 mil"],
          c: 1,
          e: "Art. 412: a cláusula penal não pode exceder o valor da obrigação principal. E ainda pode ser reduzida pelo juiz se for excessiva."
        },
        {
          p: "Uma dívida vencia no dia 10, com data certa. Quando o devedor está em mora?",
          o: ["Só depois de ser notificado", "Logo após o vencimento, sem precisar de aviso", "Depois de 30 dias", "Só quando o credor entrar na Justiça"],
          c: 1,
          e: "Com data certa, o próprio vencimento já “avisa” o devedor (art. 397). É a mora automática."
        }
      ]
    }
  ]
});
