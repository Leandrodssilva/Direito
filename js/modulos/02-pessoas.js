window.MODULOS = window.MODULOS || [];
window.MODULOS.push({
  id: "pessoas",
  numero: 2,
  titulo: "Pessoas: quem tem direitos",
  subtitulo: "Quando a pessoa começa e termina, quem pode agir sozinho, nome, imagem e empresas.",
  licoes: [
    {
      id: "pessoa-natural",
      titulo: "Quando a pessoa começa e termina",
      resumo: "Nascimento com vida, os direitos do bebê na barriga e a morte para o Direito.",
      tempo: "6 min",
      historia:
        "<p>A tia da Lia estava grávida. Lia perguntou: <span class='fala'>“O bebê já é uma pessoa?”</span></p>" +
        "<p>Vovó Nina explicou: <span class='fala'>“Para o Direito, o bebê na barriga se chama <mark>nascituro</mark>, que quer dizer ‘aquele que vai nascer’. A lei já cuida dele: ele pode receber uma doação ou uma herança, que fica guardada. Mas ele vira pessoa, com tudo o que isso significa, quando <mark>nasce com vida</mark>.”</span></p>" +
        "<p><span class='fala'>“E se ele respirar só um pouquinho?”</span> <span class='fala'>“Basta isso. Se nasceu e respirou, foi pessoa, mesmo que por um minuto.”</span></p>",
      ideia: "A pessoa começa para o Direito quando <mark>nasce com vida</mark> e termina com a <mark>morte</mark>. Antes de nascer, o nascituro já tem seus direitos protegidos.",
      explicacao:
        "<p>Ter <b>personalidade jurídica</b> significa poder ter direitos e deveres. O ser humano é chamado de <b>pessoa natural</b> (ou pessoa física) para diferenciar das empresas, que são pessoas jurídicas.</p>" +
        "<h3>O começo</h3>" +
        "<p>A personalidade começa com o <b>nascimento com vida</b>. Os médicos verificam se o bebê respirou. Isso importa muito em casos de herança: se o bebê nasceu vivo e morreu logo depois, ele chegou a herdar e, ao morrer, passou a herança adiante.</p>" +
        "<p>Antes disso, a lei <b>protege o nascituro</b>: ele pode ser beneficiado em doação e testamento, tem direito a cuidados com a gestação e a mãe pode pedir ao pai “alimentos gravídicos” (uma pensão durante a gravidez, Lei 11.804/2008).</p>" +
        "<h3>O registro</h3>" +
        "<p>Todo nascimento deve ser registrado no <b>Cartório de Registro Civil</b>. A primeira certidão de nascimento é gratuita para todos. É esse papel que prova que a pessoa existe para o Estado.</p>" +
        "<h3>O fim</h3>" +
        "<p>A personalidade termina com a <b>morte</b>, que também é registrada no cartório (certidão de óbito). Há casos especiais:</p>" +
        "<ul><li><b>Morte presumida sem ausência:</b> quando é extremamente provável a morte de quem estava em perigo de vida (um naufrágio, por exemplo), ou de quem desapareceu em guerra e não foi achado até dois anos depois do fim dela. O juiz declara a morte depois de terminadas as buscas.</li>" +
        "<li><b>Ausência:</b> quando a pessoa some sem deixar notícia nem alguém para cuidar dos bens. O juiz nomeia um curador para os bens e, com o passar dos anos, os herdeiros podem ficar com eles, primeiro provisoriamente e depois de forma definitiva.</li>" +
        "<li><b>Comoriência:</b> se duas pessoas morrem no mesmo acidente e não dá para saber quem morreu primeiro, considera-se que morreram ao mesmo tempo. Uma não herda da outra.</li></ul>",
      lei: [
        {
          ref: "Código Civil, art. 2º",
          texto: "A personalidade civil da pessoa começa do nascimento com vida; mas a lei põe a salvo, desde a concepção, os direitos do nascituro.",
          simples: "Vira pessoa quem <b>nasce vivo</b>. Mas, desde que foi gerado, o bebê já tem seus direitos guardados."
        },
        {
          ref: "Código Civil, art. 6º",
          texto: "A existência da pessoa natural termina com a morte; presume-se esta, quanto aos ausentes, nos casos em que a lei autoriza a abertura de sucessão definitiva.",
          simples: "A pessoa deixa de existir para o Direito quando morre. Quem desapareceu há muito tempo pode ser considerado morto."
        },
        {
          ref: "Código Civil, art. 8º",
          texto: "Se dois ou mais indivíduos falecerem na mesma ocasião, não se podendo averiguar se algum dos comorientes precedeu aos outros, presumir-se-ão simultaneamente mortos.",
          simples: "Se não dá para saber quem morreu antes, a lei considera que morreram <b>juntos</b>."
        }
      ],
      vida: [
        "Registre o bebê logo. A <b>primeira certidão de nascimento</b> e a de óbito são <b>gratuitas</b> em qualquer cartório de registro civil.",
        "Grávida e o pai não ajuda? A lei permite pedir <b>alimentos gravídicos</b> para cobrir despesas da gravidez.",
        "Se um parente desapareceu, procure a Defensoria ou um advogado para pedir a <b>declaração de ausência</b>. Ela permite cuidar dos bens da pessoa."
      ],
      palavras: [
        { t: "Personalidade jurídica", d: "A qualidade de poder ter direitos e deveres. Todo ser humano nascido com vida tem." },
        { t: "Pessoa natural", d: "O ser humano, para o Direito. Também chamada de pessoa física." },
        { t: "Nascituro", d: "O bebê que já foi concebido, mas ainda não nasceu. A lei protege seus direitos." },
        { t: "Ausência", d: "Situação de quem desapareceu sem deixar notícias nem quem cuide dos seus bens. Declarada pelo juiz." },
        { t: "Comoriência", d: "Quando duas ou mais pessoas morrem na mesma ocasião e não se sabe quem morreu primeiro. Considera-se que morreram juntas." }
      ],
      quiz: [
        {
          p: "Quando o ser humano começa a ser pessoa para o Direito?",
          o: ["Na concepção", "Quando completa 18 anos", "No nascimento com vida", "Quando é registrado no cartório"],
          c: 2,
          e: "É o art. 2º do Código Civil. O registro não cria a pessoa, ele apenas prova que ela nasceu."
        },
        {
          p: "O avô deixou uma doação para o neto que ainda está na barriga da mãe. Isso é possível?",
          o: ["Não, ele ainda não é pessoa", "Sim, a lei protege os direitos do nascituro", "Só se o pai autorizar", "Só depois que ele fizer 18 anos"],
          c: 1,
          e: "O nascituro pode receber doação e herança. Os direitos ficam guardados e se confirmam quando ele nasce com vida."
        },
        {
          p: "Pai e filho morreram no mesmo acidente e ninguém sabe quem morreu primeiro. O que a lei presume?",
          o: ["Que o pai morreu primeiro", "Que o filho morreu primeiro", "Que morreram ao mesmo tempo", "O juiz sorteia"],
          c: 2,
          e: "É a comoriência (art. 8º). Como morreram ao mesmo tempo, um não herda do outro."
        }
      ]
    },

    {
      id: "capacidade",
      titulo: "Capacidade: quem pode agir sozinho",
      resumo: "Por que uma criança não pode vender a casa e o que muda aos 16 e aos 18 anos.",
      tempo: "8 min",
      historia:
        "<p>Lia, com 10 anos, quis vender a bicicleta para um colega por 50 reais. A mãe do colega disse: <span class='fala'>“Espera, isso precisa da autorização dos seus pais.”</span></p>" +
        "<p>Lia ficou brava: <span class='fala'>“Mas a bicicleta é minha!”</span></p>" +
        "<p>Vovó Nina explicou: <span class='fala'>“É sua, sim. Você tem o <mark>direito</mark>. Mas a lei acha que, nessa idade, você ainda não tem experiência para fazer negócios sozinha, então seus pais fazem por você. É como andar de bicicleta com rodinhas: você pedala, mas alguém segura.”</span></p>",
      ideia: "Todos podem <mark>ter</mark> direitos, mas nem todos podem <mark>exercê-los sozinhos</mark>. Até 16 anos, alguém age no lugar. De 16 a 18, alguém ajuda. Aos 18, a pessoa age sozinha.",
      explicacao:
        "<p>Existem dois tipos de capacidade:</p>" +
        "<ul><li><b>Capacidade de direito:</b> poder <i>ter</i> direitos. Todo mundo tem, até um bebê. Um bebê pode ser dono de uma casa.</li>" +
        "<li><b>Capacidade de fato (ou de exercício):</b> poder <i>usar</i> os direitos sozinho, assinando contratos, vendendo, comprando. Essa depende da idade e de outras condições.</li></ul>" +
        "<h3>Os três degraus da capacidade</h3>" +
        "<div class='tabela-wrap'><table><thead><tr><th>Quem</th><th>Situação</th><th>Como age</th></tr></thead><tbody>" +
        "<tr><td>Menores de 16 anos</td><td><b>Absolutamente incapazes</b></td><td><b>Representados:</b> os pais ou o tutor assinam no lugar deles.</td></tr>" +
        "<tr><td>De 16 a 18 anos; ébrios habituais e viciados em tóxicos; quem não consegue exprimir sua vontade, por causa temporária ou permanente; pródigos</td><td><b>Relativamente incapazes</b></td><td><b>Assistidos:</b> a própria pessoa assina, junto com os pais ou o curador.</td></tr>" +
        "<tr><td>Maiores de 18 anos</td><td><b>Plenamente capazes</b></td><td>Sozinhos.</td></tr>" +
        "</tbody></table></div>" +
        "<p>O <b>pródigo</b> é quem gasta tudo de forma descontrolada, a ponto de arruinar a própria vida. Ele precisa de ajuda apenas para atos de dinheiro grande (vender, emprestar, dar quitação), não para a vida do dia a dia.</p>" +
        "<h3>Pessoa com deficiência</h3>" +
        "<p>Desde o <b>Estatuto da Pessoa com Deficiência</b> (Lei 13.146/2015), ter uma deficiência <b>não torna ninguém incapaz</b>. A pessoa pode casar, votar, ter filhos e decidir sobre a própria vida. Se precisar, pode pedir a <b>tomada de decisão apoiada</b>: escolhe duas pessoas de confiança para ajudá-la em decisões. A curatela fica só para casos excepcionais e limitada a questões de patrimônio.</p>" +
        "<h3>Emancipação: virar “adulto” antes dos 18</h3>" +
        "<p>A emancipação antecipa a capacidade total. Acontece:</p>" +
        "<ul><li>Pelos pais, a partir dos <b>16 anos</b>, por escritura pública no cartório (sem precisar de juiz);</li>" +
        "<li>Por decisão do juiz, se o jovem de 16 anos tiver tutor;</li>" +
        "<li>Pelo casamento;</li>" +
        "<li>Por emprego público efetivo;</li>" +
        "<li>Pela formatura em curso superior;</li>" +
        "<li>Por ter um negócio próprio ou emprego que dê ao jovem de 16 anos o próprio sustento.</li></ul>" +
        "<p>Atenção: emancipado pode fazer contratos sozinho, mas continua menor de idade para outras leis. Ele ainda não pode, por exemplo, tirar carteira de motorista antes dos 18.</p>",
      lei: [
        {
          ref: "Código Civil, art. 3º",
          texto: "São absolutamente incapazes de exercer pessoalmente os atos da vida civil os menores de 16 (dezesseis) anos.",
          simples: "Menores de 16 anos <b>não podem</b> fazer negócios sozinhos. Os pais fazem por eles."
        },
        {
          ref: "Código Civil, art. 4º",
          texto: "São incapazes, relativamente a certos atos ou à maneira de os exercer: I - os maiores de dezesseis e menores de dezoito anos; II - os ébrios habituais e os viciados em tóxico; III - aqueles que, por causa transitória ou permanente, não puderem exprimir sua vontade; IV - os pródigos.",
          simples: "Essas pessoas agem, mas com <b>ajuda</b> (assistência) para os atos que a lei exige."
        },
        {
          ref: "Código Civil, art. 5º",
          texto: "A menoridade cessa aos dezoito anos completos, quando a pessoa fica habilitada à prática de todos os atos da vida civil.",
          simples: "Aos <b>18 anos</b>, a pessoa pode fazer tudo sozinha. O parágrafo único traz os casos de emancipação."
        }
      ],
      vida: [
        "Um contrato assinado <b>sozinho</b> por um menor de 16 anos é <b>nulo</b>: não vale. Se foi um jovem de 16 ou 17 anos sem assistência, é <b>anulável</b>. Veremos a diferença no Módulo 4.",
        "Pequenas compras do dia a dia de uma criança (um lanche, um caderno) são aceitas normalmente pela sociedade. A preocupação da lei é com negócios importantes.",
        "Familiar com deficiência intelectual? Antes de pensar em curatela, conheça a <b>tomada de decisão apoiada</b> (art. 1.783-A). Ela preserva a autonomia da pessoa."
      ],
      palavras: [
        { t: "Capacidade de fato", d: "Poder exercer os próprios direitos pessoalmente, sem precisar de representante ou assistente." },
        { t: "Absolutamente incapaz", d: "Quem não pode praticar atos da vida civil sozinho. Hoje, só os menores de 16 anos." },
        { t: "Relativamente incapaz", d: "Quem pratica os atos, mas precisa da ajuda (assistência) de alguém. Ex.: jovens de 16 e 17 anos." },
        { t: "Representação", d: "Quando outra pessoa age no lugar do incapaz. Os pais representam os filhos menores de 16." },
        { t: "Assistência", d: "Quando o próprio relativamente incapaz age, mas acompanhado de quem o ajuda (pais ou curador)." },
        { t: "Emancipação", d: "Antecipação da capacidade plena antes dos 18 anos, por exemplo, por decisão dos pais a partir dos 16." },
        { t: "Pródigo", d: "Quem gasta o patrimônio de forma desordenada, pondo em risco o próprio sustento." },
        { t: "Curatela", d: "Medida judicial em que um curador ajuda a cuidar dos interesses de um adulto que precisa de proteção." }
      ],
      quiz: [
        {
          p: "Um bebê de 1 ano herdou um apartamento. Ele pode ser o dono?",
          o: ["Não, bebês não podem ter bens", "Sim, ele tem capacidade de direito; os pais administram por ele", "Só depois dos 18 anos", "Só se for emancipado"],
          c: 1,
          e: "Todos têm capacidade de direito, inclusive bebês. O que eles não têm é capacidade de fato: os pais agem por eles."
        },
        {
          p: "Um jovem de 17 anos quer assinar um contrato de aluguel. Como deve ser feito?",
          o: ["Ele não pode assinar de jeito nenhum", "Os pais assinam no lugar dele", "Ele assina junto com os pais (assistência)", "Ele assina sozinho"],
          c: 2,
          e: "Entre 16 e 18 anos a pessoa é relativamente incapaz: ela mesma assina, assistida pelos pais."
        },
        {
          p: "Qual destas situações NÃO emancipa um jovem?",
          o: ["Casar-se", "Formar-se em faculdade", "Tirar o título de eleitor aos 16", "Os pais concederem por escritura pública após os 16"],
          c: 2,
          e: "Votar aos 16 é um direito político e não emancipa. As outras opções estão no art. 5º, parágrafo único, do Código Civil."
        },
        {
          p: "Segundo a lei atual, uma pessoa adulta com síndrome de Down é:",
          o: ["Absolutamente incapaz", "Plenamente capaz, podendo pedir apoio se quiser", "Sempre interditada", "Incapaz para casar"],
          c: 1,
          e: "O Estatuto da Pessoa com Deficiência afirma que a deficiência não afeta a capacidade civil. A pessoa pode usar a tomada de decisão apoiada."
        }
      ]
    },

    {
      id: "direitos-da-personalidade",
      titulo: "Nome, imagem, corpo e privacidade",
      resumo: "Os direitos que nascem com você e que ninguém pode comprar.",
      tempo: "7 min",
      historia:
        "<p>Seu Tonico tirou uma foto engraçada da Lia caindo na poça e postou no grupo do bairro. Todo mundo riu, menos a Lia.</p>" +
        "<p>Vovó Nina conversou com ele: <span class='fala'>“Tonico, a imagem da Lia é dela. É como se fosse um pedaço dela. Você não pode usar sem pedir, ainda mais para fazer graça.”</span></p>" +
        "<p>Seu Tonico apagou na hora e pediu desculpas. Lia aprendeu que há coisas que <mark>são parte de quem a gente é</mark>, e a lei protege essas coisas com muito cuidado.</p>",
      ideia: "Direitos da personalidade protegem <mark>quem você é</mark>: vida, corpo, nome, imagem, honra e privacidade. Não podem ser vendidos, nem abandonados.",
      explicacao:
        "<p>Os direitos da personalidade são diferentes dos outros porque não têm preço de mercado. Você pode vender sua bicicleta, mas não pode vender seu nome ou sua honra. Por isso, a lei diz que eles são <b>intransmissíveis</b> (não passam para outra pessoa) e <b>irrenunciáveis</b> (você não pode abrir mão deles para sempre).</p>" +
        "<h3>Os principais</h3>" +
        "<ul><li><b>Corpo:</b> ninguém pode ser obrigado a se submeter a tratamento médico ou cirurgia com risco de vida. Você pode doar órgãos depois da morte, mas <b>sempre de graça</b>.</li>" +
        "<li><b>Nome:</b> todo mundo tem direito a um nome (prenome e sobrenome). Ninguém pode usar seu nome em propaganda sem autorização, nem de forma que o exponha ao desprezo.</li>" +
        "<li><b>Imagem e honra:</b> sua foto, sua voz e sua reputação não podem ser usadas sem sua autorização, especialmente se isso prejudicar sua honra ou tiver fins comerciais.</li>" +
        "<li><b>Privacidade:</b> a vida privada é inviolável. O juiz pode mandar parar quem a estiver invadindo.</li></ul>" +
        "<h3>E depois da morte?</h3>" +
        "<p>A proteção continua. O cônjuge, os parentes em linha reta (pais, filhos, netos) ou colaterais até o quarto grau podem defender a memória e a imagem de quem morreu.</p>" +
        "<h3>Trocar de nome</h3>" +
        "<p>Desde 2022 (Lei 14.382), qualquer pessoa maior de 18 anos pode mudar o <b>prenome</b> (o primeiro nome) <b>uma vez</b>, direto no cartório, sem precisar explicar o motivo. Pessoas trans podem alterar nome e gênero diretamente no cartório, sem cirurgia nem decisão judicial, conforme entendimento do Supremo Tribunal Federal.</p>",
      lei: [
        {
          ref: "Código Civil, art. 11",
          texto: "Com exceção dos casos previstos em lei, os direitos da personalidade são intransmissíveis e irrenunciáveis, não podendo o seu exercício sofrer limitação voluntária.",
          simples: "Esses direitos <b>são seus para sempre</b>: não dá para vender, transferir ou renunciar a eles."
        },
        {
          ref: "Código Civil, art. 12",
          texto: "Pode-se exigir que cesse a ameaça, ou a lesão, a direito da personalidade, e reclamar perdas e danos, sem prejuízo de outras sanções previstas em lei.",
          simples: "Se alguém está ferindo esses direitos, você pode pedir que <b>pare</b> e também pedir <b>indenização</b>."
        },
        {
          ref: "Código Civil, art. 21",
          texto: "A vida privada da pessoa natural é inviolável, e o juiz, a requerimento do interessado, adotará as providências necessárias para impedir ou fazer cessar ato contrário a esta norma.",
          simples: "Sua intimidade é protegida. O juiz pode <b>mandar parar</b> quem a invade."
        }
      ],
      vida: [
        "Usaram sua foto em propaganda sem pedir? Você pode exigir a retirada e pedir indenização, mesmo que a foto não seja ofensiva, porque houve <b>uso comercial</b>.",
        "Vazaram fotos íntimas ou dados pessoais seus? Guarde prints com data e link, peça a retirada à plataforma e procure ajuda. Além do Código Civil, há o Marco Civil da Internet e a Lei Geral de Proteção de Dados.",
        "Detesta o seu primeiro nome? Depois dos 18, você pode trocá-lo <b>uma vez</b> no cartório de registro civil, sem processo judicial."
      ],
      palavras: [
        { t: "Direitos da personalidade", d: "Direitos ligados à própria pessoa: vida, corpo, nome, imagem, honra e privacidade." },
        { t: "Intransmissível", d: "Que não pode ser passado para outra pessoa, nem vendido, nem doado." },
        { t: "Irrenunciável", d: "Que não se pode abandonar ou abrir mão de forma definitiva." },
        { t: "Prenome", d: "O primeiro nome da pessoa (Lia, Roberto). O sobrenome indica a família." },
        { t: "Perdas e danos", d: "A indenização em dinheiro pelo prejuízo que alguém sofreu." }
      ],
      quiz: [
        {
          p: "Uma marca de refrigerante usou a foto de uma pessoa comum num outdoor, sem pedir. O que ela pode fazer?",
          o: ["Nada, porque a foto não era ofensiva", "Pedir a retirada e indenização pelo uso comercial da imagem", "Só reclamar se for famosa", "Cobrar só se tiver assinado contrato"],
          c: 1,
          e: "A imagem é direito da personalidade. Usá-la com fins comerciais sem autorização gera dever de indenizar, mesmo sem ofensa."
        },
        {
          p: "Alguém pode vender um rim para pagar dívidas?",
          o: ["Sim, o corpo é dele", "Sim, se for maior de idade", "Não, o corpo não pode ser objeto de venda", "Sim, com autorização do juiz"],
          c: 2,
          e: "A disposição do próprio corpo é limitada, e a venda de órgãos é proibida pela Constituição. Doação de órgãos é sempre gratuita."
        },
        {
          p: "Um adulto quer mudar o prenome porque não gosta dele. O que diz a lei atual?",
          o: ["É impossível", "Só com processo judicial e motivo grave", "Pode mudar uma vez, direto no cartório, sem justificar", "Só se o nome for ridículo"],
          c: 2,
          e: "A Lei 14.382/2022 permite que maiores de 18 anos alterem o prenome uma vez, no cartório, sem motivo. Voltar atrás depende de decisão judicial."
        }
      ]
    },

    {
      id: "pessoa-juridica",
      titulo: "Pessoa jurídica: empresas também são “pessoas”",
      resumo: "Por que a padaria do Tio Beto tem CNPJ e o que é “desconsiderar” uma empresa.",
      tempo: "6 min",
      historia:
        "<p>Tio Beto abriu a Padaria Pão Quente com um sócio. Lia viu a placa com um número grande: CNPJ.</p>" +
        "<p><span class='fala'>“Tio, a padaria tem CPF?”</span> <span class='fala'>“Quase! Tem CNPJ. Para a lei, a padaria virou uma <mark>pessoa diferente de mim</mark>. Ela tem nome, endereço, conta no banco e dívidas dela. Se a padaria dever ao moinho, em regra quem paga é a padaria, não a minha casa.”</span></p>" +
        "<p>Lia pensou um pouco: <span class='fala'>“Então é uma pessoa feita de papel.”</span> Tio Beto riu: <span class='fala'>“E de muito pão.”</span></p>",
      ideia: "Pessoa jurídica é um <mark>grupo de pessoas ou de bens</mark> que a lei trata como se fosse uma pessoa, com direitos, deveres e patrimônio próprios.",
      explicacao:
        "<p>Há coisas que uma pessoa sozinha não consegue fazer. Por isso a lei permite criar “pessoas” que não são de carne e osso: as <b>pessoas jurídicas</b>.</p>" +
        "<h3>Tipos</h3>" +
        "<ul><li><b>De direito público:</b> a União, os Estados, os Municípios, as autarquias (como o INSS). Também países estrangeiros, chamados de pessoas jurídicas de direito público externo.</li>" +
        "<li><b>De direito privado:</b></li></ul>" +
        "<div class='tabela-wrap'><table><thead><tr><th>Tipo</th><th>O que é</th><th>Exemplo</th></tr></thead><tbody>" +
        "<tr><td><b>Sociedade</b></td><td>Pessoas que se juntam para ganhar dinheiro e dividir o lucro</td><td>A padaria do Tio Beto e do sócio</td></tr>" +
        "<tr><td><b>Associação</b></td><td>Pessoas que se juntam sem buscar lucro</td><td>Associação de moradores, clube, ONG</td></tr>" +
        "<tr><td><b>Fundação</b></td><td>Um patrimônio separado por alguém para uma finalidade social</td><td>Uma fundação que mantém um hospital</td></tr>" +
        "<tr><td><b>Organização religiosa</b></td><td>Igrejas e templos</td><td>Uma paróquia</td></tr>" +
        "<tr><td><b>Partido político</b></td><td>Organização para disputar eleições</td><td>Qualquer partido registrado</td></tr>" +
        "</tbody></table></div>" +
        "<h3>Quando ela “nasce”</h3>" +
        "<p>A pessoa jurídica de direito privado começa a existir com o <b>registro</b> do seu documento de criação (contrato social ou estatuto) na Junta Comercial ou no Cartório de Registro de Pessoas Jurídicas. Depois, recebe um CNPJ na Receita Federal.</p>" +
        "<h3>Patrimônio separado e a desconsideração</h3>" +
        "<p>A grande vantagem é a <b>separação de patrimônios</b>: em regra, as dívidas da empresa são da empresa. Mas, se os sócios usam a empresa para fraudar, misturando o dinheiro dela com o deles ou desviando a finalidade, o juiz pode aplicar a <mark>desconsideração da personalidade jurídica</mark>: “levanta o véu” da empresa e cobra dos sócios.</p>",
      lei: [
        {
          ref: "Código Civil, art. 44",
          texto: "São pessoas jurídicas de direito privado: I - as associações; II - as sociedades; III - as fundações; IV - as organizações religiosas; V - os partidos políticos.",
          simples: "A lista dos tipos de pessoa jurídica privada."
        },
        {
          ref: "Código Civil, art. 45",
          texto: "Começa a existência legal das pessoas jurídicas de direito privado com a inscrição do ato constitutivo no respectivo registro (...).",
          simples: "Sem <b>registro</b>, não há pessoa jurídica."
        },
        {
          ref: "Código Civil, art. 50 (resumido)",
          texto: "Em caso de abuso da personalidade jurídica, caracterizado pelo desvio de finalidade ou pela confusão patrimonial, pode o juiz (...) desconsiderá-la para que os efeitos de certas e determinadas relações de obrigações sejam estendidos aos bens particulares de administradores ou de sócios (...).",
          simples: "Se a empresa for usada para <b>enganar</b>, o juiz pode cobrar as dívidas dela dos bens dos sócios."
        }
      ],
      vida: [
        "Vai abrir um pequeno negócio? O MEI (Microempreendedor Individual) é um jeito simples de ter CNPJ. Atenção: no MEI, o patrimônio do dono e o do negócio <b>não são separados</b>.",
        "Nunca pague contas pessoais com a conta da empresa. Essa mistura (confusão patrimonial) é justamente o que permite cobrar dos sócios.",
        "Antes de fechar negócio com uma empresa, consulte o CNPJ no site da Receita Federal para ver se ela existe e está ativa."
      ],
      palavras: [
        { t: "Pessoa jurídica", d: "Entidade formada por pessoas ou bens que a lei trata como sujeito de direitos, com patrimônio próprio. Ex.: empresas, associações." },
        { t: "CNPJ", d: "Cadastro Nacional da Pessoa Jurídica. É o “CPF” das empresas e entidades." },
        { t: "Associação", d: "União de pessoas para fins não econômicos, como um clube ou uma ONG." },
        { t: "Fundação", d: "Patrimônio destinado por alguém a uma finalidade social, religiosa, cultural ou de assistência." },
        { t: "Desconsideração da personalidade jurídica", d: "Quando o juiz ignora a separação entre empresa e sócios, por abuso ou fraude, e cobra as dívidas dos sócios." }
      ],
      quiz: [
        {
          p: "Um grupo de vizinhos se reúne, sem buscar lucro, para cuidar da praça do bairro. Que tipo de pessoa jurídica eles podem criar?",
          o: ["Sociedade", "Associação", "Fundação", "Autarquia"],
          c: 1,
          e: "Associação é a união de pessoas sem fim lucrativo. Sociedade busca lucro; fundação nasce de um patrimônio destinado a um fim."
        },
        {
          p: "Quando uma empresa passa a existir legalmente?",
          o: ["Quando os sócios combinam de boca", "Quando abre as portas", "Com o registro do contrato social no órgão competente", "Quando contrata o primeiro empregado"],
          c: 2,
          e: "Art. 45 do Código Civil: a existência legal começa com a inscrição do ato constitutivo no registro."
        },
        {
          p: "Os sócios pagavam a viagem da família com o dinheiro da empresa e deixaram dívidas com fornecedores. O que pode acontecer?",
          o: ["Nada, a empresa é uma pessoa separada", "O juiz pode desconsiderar a personalidade jurídica e cobrar dos sócios", "Os fornecedores perdem o dinheiro", "A empresa vira pessoa física"],
          c: 1,
          e: "A mistura de dinheiro é confusão patrimonial, uma das hipóteses do art. 50 para alcançar o patrimônio dos sócios."
        }
      ]
    }
  ]
});
