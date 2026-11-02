/* Código Civil explicado: arts. 104 a 125 (negócio jurídico: disposições gerais, representação e condição). Formato em js/codigo/0001-0005.js. */
window.CODIGO = window.CODIGO || { artigos: [] };
(function () {
  var NJ = ["Parte Geral", "Livro III — Dos Fatos Jurídicos", "Título I — Do Negócio Jurídico"];
  var GER = NJ.concat(["Capítulo I — Disposições Gerais"]);
  var REP = NJ.concat(["Capítulo II — Da Representação"]);
  var CON = NJ.concat(["Capítulo III — Da Condição, do Termo e do Encargo"]);

  window.CODIGO.artigos.push(
    {
      n: 104, rotulo: "Art. 104", caminho: GER,
      texto: [
        { tipo: "caput", t: "A validade do negócio jurídico requer:" },
        { tipo: "inciso", r: "I", t: "agente capaz;" },
        { tipo: "inciso", r: "II", t: "objeto lícito, possível, determinado ou determinável;" },
        { tipo: "inciso", r: "III", t: "forma prescrita ou não defesa em lei." }
      ],
      simples: "Para um acordo (contrato, doação, testamento) <mark>valer</mark>, ele precisa de três coisas: <mark>quem</mark> faz precisa poder fazer; <mark>o que</mark> se combina precisa ser permitido, possível e claro; e o <mark>jeito</mark> de fazer precisa seguir a lei.",
      itens: [
        { r: "I", t: "<b>Agente capaz:</b> a pessoa precisa ter capacidade (arts. 3º a 5º) ou estar representada ou assistida. E precisa ter legitimação para aquele ato (por exemplo, um casado precisa da autorização do cônjuge para vender imóvel)." },
        { r: "II", t: "<b>Objeto lícito</b> (permitido pela lei), <b>possível</b> (dá para cumprir) e <b>determinado ou determinável</b> (dá para saber exatamente o que é, agora ou depois). Vender drogas é ilícito; vender um terreno na Lua é impossível; “vender uma coisa qualquer” é indeterminado." },
        { r: "III", t: "<b>Forma:</b> em regra, a forma é livre (art. 107). Mas, quando a lei exige uma forma (escritura pública para imóvel, por exemplo), ela tem de ser seguida. E não se pode usar uma forma que a lei proíba." }
      ],
      exemplo: "Tio Beto quer comprar a casa do vizinho por R$ 400 mil. Os dois são adultos (agente capaz), a casa existe e está bem identificada (objeto lícito, possível e determinado), e eles vão fazer escritura pública no cartório (forma prescrita). O negócio vale.",
      atencao: "Faltando algum desses requisitos, o negócio é, em regra, <b>nulo</b> (art. 166). Se o problema for a incapacidade relativa (16 e 17 anos, por exemplo), é <b>anulável</b> (art. 171).",
      palavras: [
        { t: "Negócio jurídico", d: "Declaração de vontade feita para produzir efeitos escolhidos pelas partes, como um contrato." },
        { t: "Objeto determinável", d: "Algo que ainda não está definido, mas que pode ser definido depois por critérios combinados, como “a safra de 2027”." },
        { t: "Forma prescrita", d: "A forma que a lei exige, como a escritura pública." },
        { t: "Defeso", d: "Proibido." }
      ],
      licao: "fato-ato-negocio", relacionados: [3, 4, 107, 108]
    },
    {
      n: 105, rotulo: "Art. 105", caminho: GER,
      texto: [{ tipo: "caput", t: "A incapacidade relativa de uma das partes não pode ser invocada pela outra em benefício próprio, nem aproveita aos co-interessados capazes, salvo se, neste caso, for indivisível o objeto do direito ou da obrigação comum." }],
      simples: "A regra que protege o <mark>jovem de 16 ou 17 anos</mark> (ou outro relativamente incapaz) existe para <mark>proteger ele</mark>, não a outra parte. Quem fez negócio com ele <mark>não pode usar</mark> isso para desfazer o acordo quando lhe convém. E quem estava junto com ele no negócio, sendo capaz, também não aproveita, a não ser que o objeto seja indivisível.",
      itens: [
        { r: "1ª parte", t: "A outra parte não pode alegar a incapacidade relativa do jovem para se livrar do contrato." },
        { r: "2ª parte", t: "Se o jovem e um adulto estavam do mesmo lado do negócio, o adulto não se beneficia da anulação, salvo se o objeto for indivisível (não dá para anular só uma parte)." }
      ],
      exemplo: "Um adulto vendeu uma moto para o irmão da Lia, de 17 anos, que comprou sem assistência dos pais. Depois, o adulto se arrependeu porque achou que vendeu barato e quis anular dizendo que o comprador era menor. Não pode: quem pode pedir a anulação é o próprio jovem (ou seus pais).",
      licao: "nulo-e-anulavel", relacionados: [4, 104]
    },
    {
      n: 106, rotulo: "Art. 106", caminho: GER,
      texto: [{ tipo: "caput", t: "A impossibilidade inicial do objeto não invalida o negócio jurídico se for relativa, ou se cessar antes de realizada a condição a que ele estiver subordinado." }],
      simples: "Se o que foi combinado é <mark>impossível só para aquela pessoa</mark> (mas possível para outras), ou se <mark>deixar de ser impossível</mark> antes de o negócio precisar ser cumprido, o negócio <mark>continua valendo</mark>.",
      itens: [
        { r: "Impossibilidade relativa", t: "É impossível para o devedor, mas não para qualquer pessoa. Exemplo: alguém promete entregar uma peça que ele próprio não sabe fabricar, mas outros sabem. O negócio vale, e ele terá de dar um jeito ou responder pelo descumprimento." },
        { r: "Impossibilidade que cessa", t: "Se o negócio depende de uma condição futura e a impossibilidade acaba antes dela, o negócio vale." }
      ],
      exemplo: "Tio Beto prometeu vender um forno importado que, na época, estava proibido de entrar no país, mas só entregaria se a padaria nova ficasse pronta. Antes de a padaria ficar pronta, a importação foi liberada. O negócio vale.",
      atencao: "Já a impossibilidade <b>absoluta</b> (ninguém conseguiria cumprir, como vender uma estrela) torna o negócio <b>nulo</b> (art. 166, II).",
      licao: "fato-ato-negocio", relacionados: [104, 125]
    },
    {
      n: 107, rotulo: "Art. 107", caminho: GER,
      texto: [{ tipo: "caput", t: "A validade da declaração de vontade não dependerá de forma especial, senão quando a lei expressamente a exigir." }],
      simples: "Em regra, um acordo <mark>vale do jeito que for feito</mark>: de boca, por escrito, por mensagem, por um gesto. Só precisa de <mark>forma especial</mark> quando a <mark>lei manda</mark>.",
      exemplo: "Lia comprou um sorvete apontando para o sabor e entregando o dinheiro. Não falou nada nem assinou nada, e mesmo assim fez um contrato de compra e venda válido.",
      atencao: "Forma livre não quer dizer prova fácil. Um contrato de boca vale, mas pode ser difícil de provar. Para coisas importantes, faça por escrito.",
      palavras: [
        { t: "Princípio da liberdade de forma", d: "Regra de que os negócios jurídicos, em geral, podem ser feitos de qualquer forma, salvo quando a lei exige uma específica." }
      ],
      licao: "fato-ato-negocio", relacionados: [104, 108, 109]
    },
    {
      n: 108, rotulo: "Art. 108", caminho: GER,
      texto: [{ tipo: "caput", t: "Não dispondo a lei em contrário, a escritura pública é essencial à validade dos negócios jurídicos que visem à constituição, transferência, modificação ou renúncia de direitos reais sobre imóveis de valor superior a trinta vezes o maior salário mínimo vigente no País." }],
      simples: "Negócios sobre <mark>imóveis</mark> que valem <mark>mais de 30 salários mínimos</mark> (vender, doar, hipotecar) precisam ser feitos por <mark>escritura pública</mark>, no Cartório de Notas. Sem ela, não valem.",
      exemplo: "Tio Beto comprou um terreno por um valor muito acima de 30 salários mínimos. Ele e o vendedor foram ao Cartório de Notas fazer a escritura. Depois, levaram a escritura ao Cartório de Registro de Imóveis para registrar, e só então o Tio Beto virou dono (art. 1.245).",
      atencao: "“Não dispondo a lei em contrário”: há leis que dispensam a escritura. É o caso dos contratos de financiamento imobiliário do sistema bancário (Lei 9.514/1997 e Sistema Financeiro da Habitação), que têm força de escritura pública. E a escritura é só o primeiro passo: a propriedade só passa com o <b>registro</b>.",
      palavras: [
        { t: "Escritura pública", d: "Documento feito pelo tabelião no Cartório de Notas, com fé pública." },
        { t: "Direitos reais sobre imóveis", d: "Direitos que recaem diretamente sobre um imóvel, como a propriedade, o usufruto e a hipoteca." }
      ],
      licao: "fato-ato-negocio", relacionados: [104, 107, 109]
    },
    {
      n: 109, rotulo: "Art. 109", caminho: GER,
      texto: [{ tipo: "caput", t: "No negócio jurídico celebrado com a cláusula de não valer sem instrumento público, este é da substância do ato." }],
      simples: "Se as próprias partes <mark>combinarem</mark> que o negócio só vale se for feito por <mark>escritura pública</mark>, então ele só vale assim, mesmo que a lei não exija.",
      exemplo: "Seu Tonico vai vender um carro antigo de coleção para um colecionador. Os dois combinaram por escrito: “este negócio só valerá se for feito por escritura pública”. A lei não exige escritura para carros, mas, como eles combinaram, sem a escritura não há venda.",
      licao: "fato-ato-negocio", relacionados: [107, 108]
    },
    {
      n: 110, rotulo: "Art. 110", caminho: GER,
      texto: [{ tipo: "caput", t: "A manifestação de vontade subsiste ainda que o seu autor haja feito a reserva mental de não querer o que manifestou, salvo se dela o destinatário tinha conhecimento." }],
      simples: "Se você diz <mark>“sim”</mark> mas, <mark>por dentro</mark>, pensa “não”, vale o <mark>“sim”</mark>. O que você pensou em segredo não muda o que você declarou, a não ser que a outra pessoa <mark>soubesse</mark> que você não estava falando sério.",
      exemplo: "O primo da Lia prometeu, num contrato, vender o videogame dela por R$ 500, pensando “vou prometer, mas não vou cumprir”. A promessa vale. Mas, se o comprador sabia que era tudo de mentira, aí a promessa não vale.",
      atencao: "Essa “intenção escondida” se chama <b>reserva mental</b>. A regra protege quem confiou na palavra dada.",
      palavras: [
        { t: "Reserva mental", d: "Quando alguém declara uma coisa, mas em segredo não quer o que declarou." },
        { t: "Destinatário", d: "A pessoa a quem a declaração é dirigida." }
      ],
      licao: "fato-ato-negocio", relacionados: [112]
    },
    {
      n: 111, rotulo: "Art. 111", caminho: GER,
      texto: [{ tipo: "caput", t: "O silêncio importa anuência, quando as circunstâncias ou os usos o autorizarem, e não for necessária a declaração de vontade expressa." }],
      simples: "Em regra, <mark>ficar calado não é dizer sim</mark>. Mas o silêncio pode valer como <mark>concordância</mark> quando as circunstâncias ou os costumes indicarem isso e a lei não exigir um “sim” expresso.",
      exemplo: "Há anos, o moinho entrega farinha na padaria toda segunda-feira e o Tio Beto paga na sexta, sem nunca precisar fazer pedido. Se o moinho avisar “semana que vem levo farinha normalmente” e o Tio Beto não disser nada, o silêncio dele, pelos costumes entre os dois, vale como aceite.",
      atencao: "O ditado “quem cala consente” <b>não</b> é a regra geral. Por exemplo, um produto enviado sem você ter pedido é considerado amostra grátis, e você não precisa pagar (Código de Defesa do Consumidor, art. 39, parágrafo único).",
      palavras: [
        { t: "Anuência", d: "Concordância, consentimento." },
        { t: "Usos", d: "Costumes, práticas habituais em determinado lugar, ramo ou relação." }
      ],
      licao: "fato-ato-negocio", relacionados: [107, 113]
    },
    {
      n: 112, rotulo: "Art. 112", caminho: GER,
      texto: [{ tipo: "caput", t: "Nas declarações de vontade se atenderá mais à intenção nelas consubstanciada do que ao sentido literal da linguagem." }],
      simples: "Na hora de entender um contrato, vale <mark>mais o que as pessoas quiseram dizer</mark> do que a <mark>letra fria</mark> das palavras.",
      exemplo: "No contrato de aluguel da tia Rosa estava escrito “o inquilino pagará a taxa de lixo”, mas os dois sempre combinaram e praticaram que quem pagava era o dono. Se houver discussão, o juiz vai procurar a intenção verdadeira das partes, não apenas o que ficou escrito.",
      atencao: "Atenção: a intenção que vale é a que aparece de algum modo na própria declaração e nas circunstâncias, e não um pensamento secreto (veja o art. 110).",
      palavras: [
        { t: "Consubstanciado", d: "Contido, expresso." },
        { t: "Sentido literal", d: "O significado exato das palavras, ao pé da letra." }
      ],
      licao: "fato-ato-negocio", relacionados: [110, 113]
    },
    {
      n: 113, rotulo: "Art. 113", caminho: GER,
      texto: [
        { tipo: "caput", t: "Os negócios jurídicos devem ser interpretados conforme a boa-fé e os usos do lugar de sua celebração." },
        { tipo: "paragrafo", r: "§ 1º", t: "A interpretação do negócio jurídico deve lhe atribuir o sentido que:", nota: "Incluído pela Lei nº 13.874, de 2019" },
        { tipo: "inciso", r: "I", t: "for confirmado pelo comportamento das partes posterior à celebração do negócio;" },
        { tipo: "inciso", r: "II", t: "corresponder aos usos, costumes e práticas do mercado relativas ao tipo de negócio;" },
        { tipo: "inciso", r: "III", t: "corresponder à boa-fé;" },
        { tipo: "inciso", r: "IV", t: "for mais benéfico à parte que não redigiu o dispositivo, se identificável; e" },
        { tipo: "inciso", r: "V", t: "corresponder a qual seria a razoável negociação das partes sobre a questão discutida, inferida das demais disposições do negócio e da racionalidade econômica das partes, consideradas as informações disponíveis no momento de sua celebração." },
        { tipo: "paragrafo", r: "§ 2º", t: "As partes poderão livremente pactuar regras de interpretação, de preenchimento de lacunas e de integração dos negócios jurídicos diversas daquelas previstas em lei.", nota: "Incluído pela Lei nº 13.874, de 2019" }
      ],
      simples: "Um contrato deve ser entendido com <mark>honestidade</mark> (boa-fé) e de acordo com os <mark>costumes do lugar</mark>. Quando houver dúvida, a lei dá <mark>cinco pistas</mark> para descobrir o sentido certo.",
      itens: [
        { r: "Caput", t: "Duas bússolas: a <b>boa-fé</b> (o que uma pessoa honesta entenderia) e os <b>usos do lugar</b> onde o negócio foi feito." },
        { r: "§ 1º, I", t: "Olhe o que as partes <b>fizeram depois</b> de assinar: o comportamento delas mostra como entendiam o contrato." },
        { r: "§ 1º, II", t: "Olhe os <b>costumes do mercado</b> para aquele tipo de negócio." },
        { r: "§ 1º, III", t: "Escolha o sentido que corresponda à <b>boa-fé</b>." },
        { r: "§ 1º, IV", t: "Na dúvida, favoreça <b>quem não escreveu</b> a cláusula. Quem redige tem o dever de ser claro." },
        { r: "§ 1º, V", t: "Pense em como as partes, sendo <b>razoáveis</b>, teriam negociado aquele ponto, considerando o resto do contrato e o que sabiam na época." },
        { r: "§ 2º", t: "As partes podem combinar suas <b>próprias regras de interpretação</b>, diferentes das da lei." }
      ],
      exemplo: "No contrato de entrega de pães, estava escrito “entrega pela manhã”. O Tio Beto entregava às 11h; o hotel queria às 6h. Como, por um ano, o hotel recebeu às 11h sem reclamar (comportamento posterior) e o contrato tinha sido redigido pelo hotel (na dúvida, favorece quem não redigiu), o juiz entendeu que 11h estava dentro do combinado.",
      atencao: "O § 1º e o § 2º foram acrescentados pela Lei da Liberdade Econômica, de 2019. A boa-fé também aparece no art. 422, como dever de comportamento durante todo o contrato.",
      palavras: [
        { t: "Boa-fé objetiva", d: "Padrão de comportamento leal e honesto que se espera de qualquer pessoa correta numa negociação." },
        { t: "Lacuna", d: "Ponto que o contrato não regulou." }
      ],
      licao: "como-nasce-um-contrato", relacionados: [112, 114]
    },
    {
      n: 114, rotulo: "Art. 114", caminho: GER,
      texto: [{ tipo: "caput", t: "Os negócios jurídicos benéficos e a renúncia interpretam-se estritamente." }],
      simples: "Quando alguém <mark>dá algo de graça</mark> (uma doação, um empréstimo gratuito) ou <mark>abre mão</mark> de um direito, isso deve ser entendido <mark>do jeito mais restrito</mark>: não se pode aumentar o favor por interpretação.",
      exemplo: "Vovó Nina emprestou de graça o carro à vizinha “para ir ao médico na segunda-feira”. A vizinha não pode entender que isso inclui usar o carro a semana toda. E, se o Tio Beto “perdoou os juros” de uma dívida, isso não significa que perdoou a dívida inteira.",
      atencao: "A razão é justa: quem faz um favor não pode ser obrigado a mais do que quis dar.",
      palavras: [
        { t: "Negócio benéfico", d: "Negócio em que só uma das partes recebe vantagem, como a doação e o comodato." },
        { t: "Renúncia", d: "Ato de abrir mão de um direito." },
        { t: "Interpretação estrita", d: "Entender a declaração no sentido mais limitado, sem ampliá-la." }
      ],
      licao: "fato-ato-negocio", relacionados: [113]
    },
    {
      n: 115, rotulo: "Art. 115", caminho: REP,
      texto: [{ tipo: "caput", t: "Os poderes de representação conferem-se por lei ou pelo interessado." }],
      simples: "Uma pessoa pode <mark>agir em nome de outra</mark> (representá-la) por dois caminhos: porque a <mark>lei</mark> manda ou porque a própria pessoa <mark>deu poderes</mark>.",
      itens: [
        { r: "Representação legal", t: "A lei dá os poderes: os pais representam os filhos menores; o tutor representa o pupilo; o curador, o curatelado." },
        { r: "Representação voluntária", t: "O próprio interessado dá os poderes, normalmente por uma procuração (contrato de mandato)." }
      ],
      exemplo: "Os pais da Lia a representam porque a lei manda (legal). Já a Vovó Nina, quando assinou papéis no banco pelo Tio Beto, agiu porque ele lhe deu uma procuração (voluntária).",
      palavras: [
        { t: "Representação", d: "Quando uma pessoa age em nome de outra, e os efeitos recaem sobre o representado." },
        { t: "Representado", d: "A pessoa em nome de quem o representante age." }
      ],
      licao: "servicos-e-garantias", relacionados: [116, 120]
    },
    {
      n: 116, rotulo: "Art. 116", caminho: REP,
      texto: [{ tipo: "caput", t: "A manifestação de vontade pelo representante, nos limites de seus poderes, produz efeitos em relação ao representado." }],
      simples: "O que o representante faz <mark>dentro dos poderes</mark> que tem vale <mark>como se o próprio representado</mark> tivesse feito.",
      exemplo: "O Tio Beto deu procuração à Vovó Nina para renovar o seguro da padaria. Quando ela assinou a renovação, foi como se o próprio Tio Beto tivesse assinado: quem fica obrigado a pagar o seguro é ele.",
      atencao: "Fora dos limites dos poderes, o ato em regra não obriga o representado, a não ser que ele depois concorde (ratifique). E o representante pode ter de responder pelo excesso (art. 118).",
      licao: "servicos-e-garantias", relacionados: [115, 118]
    },
    {
      n: 117, rotulo: "Art. 117", caminho: REP,
      texto: [
        { tipo: "caput", t: "Salvo se o permitir a lei ou o representado, é anulável o negócio jurídico que o representante, no seu interesse ou por conta de outrem, celebrar consigo mesmo." },
        { tipo: "paragrafo", r: "Parágrafo único.", t: "Para esse efeito, tem-se como celebrado pelo representante o negócio realizado por aquele em quem os poderes houverem sido subestabelecidos." }
      ],
      simples: "O representante <mark>não pode fazer negócio consigo mesmo</mark>, por exemplo, usando a procuração para <mark>vender para ele próprio</mark> o bem do representado. Se fizer, o negócio é <mark>anulável</mark>, a não ser que a lei ou o representado permitam.",
      itens: [
        { r: "Caput", t: "É o chamado <b>contrato consigo mesmo</b> (ou autocontrato). O risco é óbvio: o representante pode favorecer a si mesmo." },
        { r: "Parágrafo único", t: "Não adianta passar a procuração para um terceiro (substabelecer) e fazer o negócio através dele: vale como se o próprio representante tivesse feito." }
      ],
      exemplo: "Seu Tonico deu procuração a um conhecido para vender a casa de praia. O conhecido usou a procuração para vender a casa para ele mesmo, por um preço baixo. Seu Tonico pode anular a venda.",
      atencao: "Se a procuração disser expressamente que o procurador pode comprar para si (cláusula “em causa própria”), aí é permitido. A Súmula 60 do STJ trata de uma situação parecida, considerando nula a obrigação cambial assumida por procurador do mutuário vinculado ao mutuante, no exclusivo interesse deste.",
      palavras: [
        { t: "Contrato consigo mesmo", d: "Negócio em que o representante atua dos dois lados: em nome do representado e em nome próprio (ou de outro representado)." },
        { t: "Substabelecer", d: "Passar a outra pessoa os poderes recebidos numa procuração." }
      ],
      licao: "servicos-e-garantias", relacionados: [116, 119]
    },
    {
      n: 118, rotulo: "Art. 118", caminho: REP,
      texto: [{ tipo: "caput", t: "O representante é obrigado a provar às pessoas, com quem tratar em nome do representado, a sua qualidade e a extensão de seus poderes, sob pena de, não o fazendo, responder pelos atos que a estes excederem." }],
      simples: "Quem age em nome de outra pessoa deve <mark>mostrar</mark> que é representante e <mark>até onde vão seus poderes</mark>. Se não mostrar e passar dos limites, <mark>responde pessoalmente</mark> pelo excesso.",
      exemplo: "Um homem disse ao Tio Beto que era procurador de um fornecedor e encomendou 500 pães “por conta do fornecedor”, sem mostrar a procuração. Os poderes dele não incluíam compras. O fornecedor não precisa pagar; quem responde é o homem que se apresentou como procurador.",
      atencao: "Dica prática: antes de fechar negócio com alguém que diz representar outra pessoa ou empresa, peça a procuração ou o contrato social e confira os poderes.",
      licao: "servicos-e-garantias", relacionados: [116]
    },
    {
      n: 119, rotulo: "Art. 119", caminho: REP,
      texto: [
        { tipo: "caput", t: "É anulável o negócio concluído pelo representante em conflito de interesses com o representado, se tal fato era ou devia ser do conhecimento de quem com aquele tratou." },
        { tipo: "paragrafo", r: "Parágrafo único.", t: "É de cento e oitenta dias, a contar da conclusão do negócio ou da cessação da incapacidade, o prazo de decadência para pleitear-se a anulação prevista neste artigo." }
      ],
      simples: "Se o representante fizer um negócio que é <mark>bom para ele e ruim para quem ele representa</mark> (conflito de interesses), o negócio pode ser <mark>anulado</mark>, desde que a outra parte <mark>soubesse</mark> ou devesse saber disso. O prazo para pedir é de <mark>180 dias</mark>.",
      itens: [
        { r: "Caput", t: "Dois requisitos: o conflito de interesses e que a outra parte sabia ou devia saber. Isso protege quem negociou de boa-fé." },
        { r: "Parágrafo único", t: "Prazo de <b>180 dias</b>, contado da conclusão do negócio ou, se o representado era incapaz, do dia em que ele deixou de ser." }
      ],
      exemplo: "O tutor de um menino vendeu o terreno do menino para o próprio irmão do tutor, por metade do preço. O irmão sabia que o terreno era do menino e conhecia o valor real. Quando completar 18 anos, o menino terá 180 dias para pedir a anulação.",
      palavras: [
        { t: "Conflito de interesses", d: "Situação em que o representante tem um interesse próprio contrário ao do representado." },
        { t: "Decadência", d: "Perda de um direito por não ter sido exercido dentro do prazo." }
      ],
      licao: "servicos-e-garantias", relacionados: [117]
    },
    {
      n: 120, rotulo: "Art. 120", caminho: REP,
      texto: [{ tipo: "caput", t: "Os requisitos e os efeitos da representação legal são os estabelecidos nas normas respectivas; os da representação voluntária são os da Parte Especial deste Código." }],
      simples: "Os detalhes de cada tipo de representação estão <mark>em outros lugares</mark>: a dos pais, tutores e curadores, nas regras de família; a voluntária (procuração), nas regras do <mark>contrato de mandato</mark> (arts. 653 e seguintes).",
      exemplo: "Para saber o que os pais da Lia podem fazer com o dinheiro dela, olha-se o Direito de Família (arts. 1.689 e seguintes). Para saber o que a Vovó Nina pode fazer com a procuração do Tio Beto, olham-se as regras do mandato.",
      licao: "servicos-e-garantias", relacionados: [115]
    },
    {
      n: 121, rotulo: "Art. 121", caminho: CON,
      texto: [{ tipo: "caput", t: "Considera-se condição a cláusula que, derivando exclusivamente da vontade das partes, subordina o efeito do negócio jurídico a evento futuro e incerto." }],
      simples: "<mark>Condição</mark> é um <mark>“se”</mark> colocado no contrato: o negócio só produz efeito (ou deixa de produzir) <mark>se</mark> acontecer algo <mark>no futuro</mark> que <mark>não se sabe</mark> se vai acontecer.",
      itens: [
        { r: "Vontade das partes", t: "A condição é criada pelas partes, não pela lei." },
        { r: "Futuro", t: "Algo que ainda vai acontecer." },
        { r: "Incerto", t: "Não se sabe se vai acontecer. Se for certo (como a chegada do próximo Natal), não é condição, é <b>termo</b>." }
      ],
      exemplo: "Vovó Nina disse à Lia, por escrito: “Dou-lhe meu piano <b>se</b> você passar no conservatório de música”. A doação depende de um fato futuro e incerto: é uma doação com condição.",
      atencao: "Há dois tipos de condição: a <b>suspensiva</b> (o efeito só começa se o fato acontecer, como no exemplo) e a <b>resolutiva</b> (o efeito acaba se o fato acontecer). Veja os arts. 125 e 127.",
      palavras: [
        { t: "Condição", d: "Cláusula que faz o efeito de um negócio depender de um fato futuro e incerto." },
        { t: "Termo", d: "Data ou fato futuro e certo a partir do qual o negócio começa ou termina." }
      ],
      licao: "fato-ato-negocio", relacionados: [122, 125]
    },
    {
      n: 122, rotulo: "Art. 122", caminho: CON,
      texto: [{ tipo: "caput", t: "São lícitas, em geral, todas as condições não contrárias à lei, à ordem pública ou aos bons costumes; entre as condições defesas se incluem as que privarem de todo efeito o negócio jurídico, ou o sujeitarem ao puro arbítrio de uma das partes." }],
      simples: "Pode-se colocar quase qualquer <mark>“se”</mark> num contrato, desde que não seja <mark>contra a lei</mark> ou os bons costumes. São <mark>proibidas</mark> as condições que <mark>esvaziam</mark> totalmente o negócio e as que deixam tudo ao <mark>puro capricho</mark> de uma das partes.",
      itens: [
        { r: "Permitidas", t: "Condições que não contrariem a lei, a ordem pública e os bons costumes." },
        { r: "Proibidas (1)", t: "As que tiram todo o efeito do negócio (as chamadas condições perplexas): “vendo a casa, desde que ela continue sendo minha”." },
        { r: "Proibidas (2)", t: "As <b>puramente potestativas</b>: dependem só do capricho de uma parte. “Pago se eu quiser.”" }
      ],
      exemplo: "No contrato de compra de farinha estava escrito: “o moinho entregará a farinha se tiver vontade”. Essa condição é proibida, porque deixa tudo ao puro arbítrio do moinho. Já “se o trigo da safra chegar até março” é uma condição válida.",
      atencao: "Condição <b>simplesmente potestativa</b> é diferente e é permitida: depende da vontade de uma parte, mas também de um fato. Por exemplo, “dou-lhe o carro se você se mudar para Recife”: depende da vontade da pessoa, mas envolve uma decisão séria, não um mero capricho.",
      palavras: [
        { t: "Condição puramente potestativa", d: "Condição que depende só do capricho de uma das partes. É proibida." },
        { t: "Arbítrio", d: "Decisão segundo a própria vontade, sem regra." }
      ],
      licao: "fato-ato-negocio", relacionados: [121, 123]
    },
    {
      n: 123, rotulo: "Art. 123", caminho: CON,
      texto: [
        { tipo: "caput", t: "Invalidam os negócios jurídicos que lhes são subordinados:" },
        { tipo: "inciso", r: "I", t: "as condições física ou juridicamente impossíveis, quando suspensivas;" },
        { tipo: "inciso", r: "II", t: "as condições ilícitas, ou de fazer coisa ilícita;" },
        { tipo: "inciso", r: "III", t: "as condições incompreensíveis ou contraditórias." }
      ],
      simples: "Algumas condições são tão ruins que <mark>derrubam o negócio inteiro</mark>: as <mark>impossíveis</mark> (quando o negócio só começa se elas acontecerem), as <mark>ilegais</mark> e as <mark>sem sentido</mark>.",
      itens: [
        { r: "I", t: "Condição <b>impossível e suspensiva</b>: “dou-lhe minha casa se você tocar o sol com a mão”. O negócio nunca começaria, então é inválido." },
        { r: "II", t: "Condição <b>ilícita</b> ou de fazer algo ilícito: “dou-lhe R$ 10 mil se você furtar tal objeto”." },
        { r: "III", t: "Condição <b>incompreensível ou contraditória</b>: ninguém consegue entender o que foi combinado." }
      ],
      exemplo: "Um homem prometeu por escrito dar um carro ao sobrinho “se ele bater no vizinho”. A condição é ilícita, e todo o negócio é inválido. O sobrinho não tem direito ao carro em nenhuma hipótese.",
      atencao: "Compare com o art. 124: a condição impossível, quando é <b>resolutiva</b>, não derruba o negócio; ela simplesmente é ignorada.",
      licao: "nulo-e-anulavel", relacionados: [122, 124]
    },
    {
      n: 124, rotulo: "Art. 124", caminho: CON,
      texto: [{ tipo: "caput", t: "Têm-se por inexistentes as condições impossíveis, quando resolutivas, e as de não fazer coisa impossível." }],
      simples: "Algumas condições são <mark>ignoradas</mark>, como se não estivessem escritas, e o negócio <mark>continua valendo</mark>: as impossíveis do tipo <mark>“acaba se”</mark> (resolutivas) e as de <mark>“não fazer algo impossível”</mark>.",
      itens: [
        { r: "Impossível resolutiva", t: "“Empresto-lhe a casa, e o empréstimo acaba se você voar sem avião.” Como isso nunca vai acontecer, a condição é ignorada e o empréstimo vale normalmente." },
        { r: "Não fazer coisa impossível", t: "“Dou-lhe o carro se você não beber o oceano inteiro.” Não há como descumprir. A condição é ignorada, e a doação vale pura e simples." }
      ],
      exemplo: "Seu Tonico doou um terreno à Lia com a cláusula: “a doação será desfeita se Lia andar até a Lua”. A condição é impossível e resolutiva: considera-se inexistente, e a doação vale definitivamente.",
      licao: "nulo-e-anulavel", relacionados: [123]
    },
    {
      n: 125, rotulo: "Art. 125", caminho: CON,
      texto: [{ tipo: "caput", t: "Subordinando-se a eficácia do negócio jurídico à condição suspensiva, enquanto esta se não verificar, não se terá adquirido o direito, a que ele visa." }],
      simples: "Quando o negócio tem uma <mark>condição suspensiva</mark> (só começa <mark>se</mark> algo acontecer), enquanto o fato <mark>não acontece</mark>, a pessoa <mark>ainda não tem o direito</mark>. Ela tem apenas uma expectativa.",
      exemplo: "Vovó Nina prometeu o piano à Lia se ela passar no conservatório. Enquanto Lia não passa, o piano continua sendo da avó. Se Lia passar, aí sim ela adquire o direito ao piano.",
      atencao: "Mesmo antes de a condição acontecer, quem espera o direito pode tomar medidas para protegê-lo (art. 130). Por exemplo, impedir que o piano seja destruído.",
      palavras: [
        { t: "Condição suspensiva", d: "Condição que suspende o início dos efeitos do negócio até que o fato aconteça." },
        { t: "Eficácia", d: "A capacidade de um ato produzir efeitos." },
        { t: "Direito eventual", d: "A expectativa de um direito que depende de uma condição ainda não cumprida." }
      ],
      licao: "fato-ato-negocio", relacionados: [121, 122]
    }
  );
})();
