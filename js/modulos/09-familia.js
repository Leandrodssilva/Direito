window.MODULOS = window.MODULOS || [];
window.MODULOS.push({
  id: "familia",
  numero: 9,
  titulo: "Família",
  subtitulo: "Casamento, união estável, regimes de bens, filhos, guarda, divórcio e pensão.",
  licoes: [
    {
      id: "formas-de-familia",
      titulo: "Casamento e união estável",
      resumo: "As formas de família que a lei reconhece e o que muda entre elas.",
      tempo: "7 min",
      historia:
        "<p>Lia foi a dois eventos no mesmo mês. No primeiro, a tia Rosa se casou no cartório, com juiz de paz, papel assinado e bolo. No segundo, a festa foi para comemorar os dez anos em que o tio Davi e o Marcos moram juntos.</p>" +
        "<p><span class='fala'>“Vó, os dois são família?”</span></p>" +
        "<p><span class='fala'>“São, sim. A tia Rosa formou família pelo <mark>casamento</mark>. O tio Davi e o Marcos, pela <mark>união estável</mark>. E a Constituição protege as duas, inclusive quando o casal é de duas pessoas do mesmo sexo.”</span></p>",
      ideia: "A lei reconhece várias formas de família. As principais uniões são o <mark>casamento</mark>, que é um ato formal, e a <mark>união estável</mark>, que nasce da convivência pública, contínua e duradoura com intenção de formar família.",
      explicacao:
        "<p>A Constituição de 1988 ampliou a ideia de família. Hoje são reconhecidas, entre outras, a família formada pelo casamento, pela união estável e a <b>família monoparental</b> (um dos pais com os filhos). Desde 2011, o Supremo Tribunal Federal reconhece a união estável entre pessoas do mesmo sexo, e desde 2013 os cartórios devem celebrar o casamento homoafetivo (Resolução 175 do CNJ).</p>" +
        "<h3>Casamento</h3>" +
        "<ul><li><b>Habilitação:</b> os noivos apresentam documentos no Cartório de Registro Civil, que verifica se não há impedimentos.</li>" +
        "<li><b>Celebração:</b> perante o juiz de paz (ou na cerimônia religiosa com efeitos civis, registrada depois).</li>" +
        "<li><b>Idade:</b> a partir de 16 anos, com autorização dos pais. Antes dos 16, o casamento é proibido em qualquer caso, desde 2019.</li>" +
        "<li><b>Impedimentos:</b> não podem casar, por exemplo, pais com filhos, irmãos, e pessoas já casadas.</li></ul>" +
        "<h3>União estável</h3>" +
        "<p>Não precisa de papel para existir. Basta a convivência <b>pública</b> (as pessoas sabem), <b>contínua</b>, <b>duradoura</b> e com o objetivo de <b>constituir família</b>. Não há prazo mínimo na lei, e morar junto não é obrigatório, embora ajude a provar.</p>" +
        "<p>Mas registrar ajuda muito: o casal pode fazer uma <b>escritura pública</b> no Cartório de Notas ou um <b>termo declaratório</b> no Registro Civil, indicando a data de início e o regime de bens. Se nada for escrito, aplica-se a comunhão parcial de bens.</p>" +
        "<p>Namoro, mesmo longo, não é união estável se faltar o objetivo de formar família <b>agora</b>. Planos para o futuro não bastam.</p>" +
        "<div class='tabela-wrap'><table><thead><tr><th></th><th>Casamento</th><th>União estável</th></tr></thead><tbody>" +
        "<tr><td><b>Como começa</b></td><td>Cerimônia formal</td><td>Com a convivência</td></tr>" +
        "<tr><td><b>Estado civil</b></td><td>Muda para “casado”</td><td>Continua “solteiro”, “divorciado” etc. (pode ser registrada)</td></tr>" +
        "<tr><td><b>Regime de bens padrão</b></td><td>Comunhão parcial</td><td>Comunhão parcial</td></tr>" +
        "<tr><td><b>Herança</b></td><td>Cônjuge herda</td><td>Companheiro herda igual ao cônjuge (STF, 2017)</td></tr>" +
        "<tr><td><b>Como termina</b></td><td>Divórcio ou morte</td><td>Dissolução (pode ser no cartório ou na Justiça) ou morte</td></tr>" +
        "</tbody></table></div>" +
        "<h3>Deveres do casal</h3>" +
        "<p>Os cônjuges devem fidelidade, vida em comum, assistência mútua, respeito e consideração, e devem sustentar, guardar e educar os filhos.</p>",
      lei: [
        {
          ref: "Constituição Federal, art. 226",
          texto: "A família, base da sociedade, tem especial proteção do Estado.",
          simples: "O Estado deve <b>proteger a família</b>, em todas as suas formas."
        },
        {
          ref: "Código Civil, art. 1.723",
          texto: "É reconhecida como entidade familiar a união estável entre o homem e a mulher, configurada na convivência pública, contínua e duradoura e estabelecida com o objetivo de constituição de família.",
          simples: "União estável é <b>viver como família</b>, publicamente e de forma duradoura. O STF estendeu a regra aos casais do mesmo sexo."
        },
        {
          ref: "Código Civil, art. 1.520",
          texto: "Não será permitido, em qualquer caso, o casamento de quem não atingiu a idade núbil, observado o disposto no art. 1.517 deste Código.",
          simples: "<b>Menor de 16 anos não pode casar</b>, em nenhuma hipótese."
        },
        {
          ref: "Código Civil, art. 1.566 (resumido)",
          texto: "São deveres de ambos os cônjuges: I - fidelidade recíproca; II - vida em comum, no domicílio conjugal; III - mútua assistência; IV - sustento, guarda e educação dos filhos; V - respeito e consideração mútuos.",
          simples: "Os deveres de quem é casado."
        }
      ],
      vida: [
        "Vive em união estável? Faça uma <b>escritura</b> ou registre no cartório, com a data de início. Isso evita uma briga difícil para provar a união numa separação ou numa herança.",
        "Para provar a união estável sem documento, servem: contas em comum, fotos, plano de saúde como dependente, conta conjunta, testemunhas, filhos em comum.",
        "Namoro sério e com medo de ser confundido com união estável? Algumas pessoas fazem um “contrato de namoro”. Ele ajuda a mostrar a intenção, mas não vale se a realidade for de família."
      ],
      palavras: [
        { t: "Casamento", d: "União formal entre duas pessoas, celebrada perante a autoridade, que cria a família e muda o estado civil." },
        { t: "União estável", d: "Convivência pública, contínua e duradoura com objetivo de constituir família, sem casamento." },
        { t: "Família monoparental", d: "Família formada por um dos pais e seus filhos." },
        { t: "Habilitação para o casamento", d: "Procedimento no cartório em que os noivos apresentam documentos e se verifica se podem casar." },
        { t: "Impedimento matrimonial", d: "Situação que proíbe o casamento, como parentesco próximo ou já ser casado." },
        { t: "Cônjuge e companheiro", d: "Cônjuge é quem é casado. Companheiro é quem vive em união estável." }
      ],
      quiz: [
        {
          p: "Para existir união estável, a lei exige:",
          o: ["No mínimo 5 anos juntos", "Morar na mesma casa obrigatoriamente", "Convivência pública, contínua, duradoura e com objetivo de constituir família", "Registro em cartório"],
          c: 2,
          e: "Art. 1.723. Não há prazo mínimo nem exigência de morar junto ou de registro, embora tudo isso ajude a provar."
        },
        {
          p: "Uma adolescente de 15 anos pode casar se os pais autorizarem?",
          o: ["Sim", "Sim, se estiver grávida", "Não, desde 2019 o casamento de menores de 16 é proibido em qualquer caso", "Só com autorização do juiz"],
          c: 2,
          e: "A Lei 13.811/2019 deu nova redação ao art. 1.520: não se permite, em qualquer caso, o casamento de quem tem menos de 16 anos."
        },
        {
          p: "Um casal vive em união estável e nunca escreveu nada sobre os bens. Qual regime se aplica?",
          o: ["Separação total", "Comunhão universal", "Comunhão parcial", "Nenhum"],
          c: 2,
          e: "Art. 1.725: sem contrato escrito, aplica-se à união estável, no que couber, o regime da comunhão parcial de bens."
        }
      ]
    },

    {
      id: "regimes-de-bens",
      titulo: "Regimes de bens: o que é de quem",
      resumo: "Comunhão parcial, universal, separação e participação final nos aquestos.",
      tempo: "8 min",
      historia:
        "<p>Antes de casar, a tia Rosa já tinha um carro. Depois do casamento, ela e o marido compraram juntos um apartamento. Anos depois, a tia Rosa herdou uma casinha da mãe.</p>" +
        "<p>Lia, que adora contas, perguntou: <span class='fala'>“Se eles se separarem, quem fica com o quê?”</span></p>" +
        "<p>Vovó Nina pegou papel e caneta: <span class='fala'>“Depende do <mark>regime de bens</mark> que eles escolheram. Se não escolheram nada, é a <mark>comunhão parcial</mark>: o que foi comprado durante o casamento é dos dois; o que cada um já tinha antes, ou recebeu de herança e doação, continua sendo só seu.”</span></p>",
      ideia: "O regime de bens é a <mark>regra do dinheiro do casal</mark>: diz quais bens são de cada um e quais são dos dois. Se o casal não escolher, vale a <mark>comunhão parcial</mark>.",
      explicacao:
        "<div class='tabela-wrap'><table><thead><tr><th>Regime</th><th>O que é dos dois</th><th>O que é só de cada um</th></tr></thead><tbody>" +
        "<tr><td><b>Comunhão parcial</b> (o padrão)</td><td>O que foi adquirido de forma onerosa (comprado) durante o casamento, mesmo que esteja em nome de um só</td><td>O que cada um tinha antes; o que recebeu por <b>herança ou doação</b>; objetos de uso pessoal e instrumentos de profissão</td></tr>" +
        "<tr><td><b>Comunhão universal</b></td><td>Praticamente tudo, antes e depois do casamento, incluindo heranças</td><td>Poucas exceções, como bens doados ou herdados com cláusula de incomunicabilidade</td></tr>" +
        "<tr><td><b>Separação convencional</b></td><td>Nada (salvo o que comprarem juntos, como sócios)</td><td>Tudo. Cada um administra o seu</td></tr>" +
        "<tr><td><b>Participação final nos aquestos</b></td><td>Durante o casamento, cada um tem o seu; no fim, divide-se o que cada um ganhou durante a união</td><td>Os bens de cada um, enquanto durar o casamento</td></tr>" +
        "</tbody></table></div>" +
        "<h3>Como escolher</h3>" +
        "<p>Quem quiser um regime diferente da comunhão parcial precisa fazer um <b>pacto antenupcial</b> por <b>escritura pública</b> no Cartório de Notas, antes do casamento. Na união estável, a escolha é feita por contrato escrito.</p>" +
        "<h3>Separação obrigatória</h3>" +
        "<p>A lei impõe a separação de bens em alguns casos, como para quem precisa de autorização judicial para casar e para quem tem <b>mais de 70 anos</b>. Mas, desde 2024, o Supremo Tribunal Federal decidiu que, no caso dos maiores de 70 anos, o casal pode <b>afastar</b> essa regra por escritura pública, escolhendo outro regime.</p>" +
        "<h3>Mudar de regime</h3>" +
        "<p>Durante o casamento, é possível mudar o regime com um pedido conjunto e motivado ao juiz, protegendo os direitos de terceiros (credores, por exemplo).</p>" +
        "<h3>Autorização do cônjuge</h3>" +
        "<p>Exceto no regime da separação absoluta, uma pessoa casada precisa da <b>autorização do cônjuge</b> para vender ou hipotecar imóveis, ser fiadora e fazer doações de bens comuns que não sejam pequenas.</p>",
      lei: [
        {
          ref: "Código Civil, art. 1.640",
          texto: "Não havendo convenção, ou sendo ela nula ou ineficaz, vigorará, quanto aos bens entre os cônjuges, o regime da comunhão parcial.",
          simples: "Se o casal <b>não escolher</b>, vale a <b>comunhão parcial</b>."
        },
        {
          ref: "Código Civil, art. 1.658",
          texto: "No regime de comunhão parcial, comunicam-se os bens que sobrevierem ao casal, na constância do casamento, com as exceções dos artigos seguintes.",
          simples: "Na comunhão parcial, o que veio <b>durante</b> o casamento é dos dois."
        },
        {
          ref: "Código Civil, art. 1.659, I (resumido)",
          texto: "Excluem-se da comunhão: I - os bens que cada cônjuge possuir ao casar, e os que lhe sobrevierem, na constância do casamento, por doação ou sucessão, e os sub-rogados em seu lugar; (...)",
          simples: "O que cada um <b>já tinha</b>, ou <b>herdou</b>, ou <b>ganhou de presente</b>, continua só seu."
        },
        {
          ref: "Código Civil, art. 1.653",
          texto: "É nulo o pacto antenupcial se não for feito por escritura pública, e ineficaz se não lhe seguir o casamento.",
          simples: "Escolher outro regime exige <b>escritura pública</b> antes de casar."
        }
      ],
      vida: [
        "Na comunhão parcial, o salário de cada um, em si, não se divide. Mas o que for <b>comprado</b> com ele durante o casamento, sim.",
        "Se você vendeu um bem que tinha antes do casamento e comprou outro com esse dinheiro, guarde as provas. O novo bem pode continuar sendo só seu (é a “sub-rogação”).",
        "Vai casar e tem uma empresa ou patrimônio grande? Converse sobre o pacto antenupcial com um advogado ou tabelião antes da data."
      ],
      palavras: [
        { t: "Regime de bens", d: "Conjunto de regras que define a propriedade e a administração dos bens do casal." },
        { t: "Comunhão parcial", d: "Regime em que se dividem os bens adquiridos onerosamente durante a união. É o regime padrão." },
        { t: "Comunhão universal", d: "Regime em que quase todos os bens, de antes e depois do casamento, pertencem aos dois." },
        { t: "Separação de bens", d: "Regime em que cada cônjuge mantém seus bens separados, antes e depois do casamento." },
        { t: "Aquestos", d: "Bens adquiridos durante o casamento." },
        { t: "Pacto antenupcial", d: "Escritura pública, feita antes do casamento, em que os noivos escolhem o regime de bens." },
        { t: "Sub-rogação", d: "Substituição de um bem por outro, que fica com a mesma natureza do primeiro." }
      ],
      quiz: [
        {
          p: "Casados na comunhão parcial, o marido herdou uma fazenda do pai. Em caso de divórcio, a fazenda:",
          o: ["É dividida meio a meio", "Fica só com o marido", "Fica com a esposa", "É vendida e o dinheiro é dividido"],
          c: 1,
          e: "Bens recebidos por herança ou doação não se comunicam na comunhão parcial (art. 1.659, I)."
        },
        {
          p: "Os noivos querem casar com separação total de bens. O que precisam fazer?",
          o: ["Avisar no dia do casamento", "Fazer um pacto antenupcial por escritura pública", "Assinar um contrato particular", "Nada, é automático"],
          c: 1,
          e: "Para escolher um regime diferente do padrão, é necessário pacto antenupcial por escritura pública (art. 1.653)."
        },
        {
          p: "Um casal comprou um apartamento durante o casamento, em comunhão parcial, mas ele está só no nome da esposa. No divórcio:",
          o: ["É só dela", "Divide-se, porque foi comprado durante o casamento", "É só dele", "Fica para os filhos"],
          c: 1,
          e: "Na comunhão parcial, o que foi adquirido de forma onerosa durante o casamento é dos dois, ainda que esteja no nome de um só."
        }
      ]
    },

    {
      id: "filhos-e-guarda",
      titulo: "Filhos, poder familiar e guarda",
      resumo: "Parentesco, igualdade entre filhos, guarda compartilhada e convivência.",
      tempo: "8 min",
      historia:
        "<p>Os pais do Pedrinho, colega da Lia, se separaram. Pedrinho estava com medo: <span class='fala'>“Vou ter que escolher entre meu pai e minha mãe?”</span></p>" +
        "<p>Vovó Nina o acalmou: <span class='fala'>“Não, querido. Quem se separou foram eles, não você. A lei diz que, mesmo separados, os dois continuam sendo seus pais, com os mesmos deveres. A regra é a <mark>guarda compartilhada</mark>: os dois decidem juntos sobre sua vida, e você convive com os dois.”</span></p>" +
        "<p>Pedrinho respirou aliviado.</p>",
      ideia: "Todos os filhos têm os <mark>mesmos direitos</mark>, sejam de casamento, de fora dele ou adotados. Os pais exercem juntos o <mark>poder familiar</mark>, e, se se separarem, a regra é a <mark>guarda compartilhada</mark>.",
      explicacao:
        "<h3>Parentesco</h3>" +
        "<ul><li><b>Linha reta:</b> quem descende um do outro: pais, filhos, avós, netos. Não tem limite.</li>" +
        "<li><b>Linha colateral:</b> quem tem um antepassado em comum, mas não descende um do outro: irmãos, tios, sobrinhos, primos. Para o Direito Civil, vai até o <b>4º grau</b> (primos).</li>" +
        "<li><b>Afinidade:</b> o parentesco com a família do cônjuge ou companheiro: sogros, enteados, cunhados.</li></ul>" +
        "<p>Para contar graus na linha colateral, sobe-se até o ancestral comum e desce-se até o outro parente. Irmãos são parentes de 2º grau; tio e sobrinho, de 3º; primos, de 4º.</p>" +
        "<h3>Igualdade entre filhos</h3>" +
        "<p>A Constituição proíbe qualquer diferença entre filhos. Não existe mais “filho legítimo” ou “ilegítimo”. O filho adotado tem os mesmos direitos do biológico. O Supremo também reconhece a <b>paternidade socioafetiva</b> (de quem criou como filho) e admite que uma pessoa tenha, ao mesmo tempo, pai biológico e pai socioafetivo: é a <b>multiparentalidade</b>.</p>" +
        "<h3>Poder familiar</h3>" +
        "<p>É o conjunto de direitos e deveres dos pais sobre os filhos menores: criar, educar, ter os filhos em sua companhia, autorizar viagens e casamento, representá-los e assisti-los. Pode ser <b>suspenso</b> ou <b>perdido</b> em casos graves, como castigos imoderados, abandono ou violência.</p>" +
        "<h3>Guarda</h3>" +
        "<div class='tabela-wrap'><table><thead><tr><th>Tipo</th><th>Como funciona</th></tr></thead><tbody>" +
        "<tr><td><b>Compartilhada</b> (a regra)</td><td>Os dois pais decidem juntos sobre a vida do filho. O tempo de convivência deve ser dividido de forma equilibrada. Não significa necessariamente metade do tempo em cada casa: a criança tem uma casa de referência</td></tr>" +
        "<tr><td><b>Unilateral</b></td><td>Só um dos pais tem a guarda, e o outro tem direito de convivência e o dever de supervisionar</td></tr>" +
        "</tbody></table></div>" +
        "<p>O juiz pode deixar de aplicar a guarda compartilhada quando um dos pais disser que não a deseja ou quando houver <b>risco de violência doméstica ou familiar</b>.</p>" +
        "<h3>Alienação parental</h3>" +
        "<p>É quando um dos pais (ou avós) tenta afastar a criança do outro, falando mal, impedindo visitas ou inventando acusações. A Lei 12.318/2010 prevê medidas como advertência, ampliação da convivência com o outro genitor e até mudança da guarda.</p>",
      lei: [
        {
          ref: "Constituição Federal, art. 227, § 6º",
          texto: "Os filhos, havidos ou não da relação do casamento, ou por adoção, terão os mesmos direitos e qualificações, proibidas quaisquer designações discriminatórias relativas à filiação.",
          simples: "<b>Todo filho é igual</b>: de casamento, de fora dele ou adotado."
        },
        {
          ref: "Código Civil, art. 1.584, § 2º (resumido)",
          texto: "Quando não houver acordo entre a mãe e o pai quanto à guarda do filho, encontrando-se ambos os genitores aptos a exercer o poder familiar, será aplicada a guarda compartilhada, salvo se um dos genitores declarar ao magistrado que não deseja a guarda do menor ou quando houver elementos que evidenciem a probabilidade de risco de violência doméstica ou familiar.",
          simples: "Sem acordo, a regra é a <b>guarda compartilhada</b>, salvo exceções."
        },
        {
          ref: "Código Civil, art. 1.634 (resumido)",
          texto: "Compete a ambos os pais, qualquer que seja a sua situação conjugal, o pleno exercício do poder familiar, que consiste em, quanto aos filhos: I - dirigir-lhes a criação e a educação; II - exercer a guarda unilateral ou compartilhada (...); (...)",
          simples: "Separados ou não, <b>os dois</b> pais exercem o poder familiar."
        }
      ],
      vida: [
        "Pai que não registrou o filho? A mãe pode indicar o nome do suposto pai no cartório, e o caso é encaminhado para a investigação de paternidade. O exame de DNA pode ser gratuito pela Defensoria ou por programas dos tribunais.",
        "Separação com filhos: tentem fazer um <b>plano de convivência</b> por escrito, com dias, feriados, férias, escola e despesas. Acordos feitos pelos pais costumam funcionar melhor que decisões impostas.",
        "Viagem de criança: para viajar dentro do Brasil desacompanhados dos pais, menores de 16 anos precisam, em regra, de autorização dos pais ou do juiz (há exceções, como viajar com avós ou irmãos maiores, com documento que prove o parentesco); para o exterior, menores de 18 sem os dois pais precisam de autorização do pai ou da mãe ausente. Consulte as regras atualizadas do CNJ antes de viajar."
      ],
      palavras: [
        { t: "Parentesco em linha reta", d: "Relação entre ascendentes e descendentes: pais, filhos, avós, netos." },
        { t: "Parentesco colateral", d: "Relação entre pessoas com um ancestral comum, sem que uma descenda da outra: irmãos, tios, primos. Vai até o 4º grau." },
        { t: "Parentesco por afinidade", d: "Vínculo com os parentes do cônjuge ou companheiro, como sogros e enteados." },
        { t: "Poder familiar", d: "Conjunto de direitos e deveres dos pais em relação aos filhos menores." },
        { t: "Guarda compartilhada", d: "Os dois pais dividem as decisões e a responsabilidade sobre o filho. É a regra." },
        { t: "Socioafetividade", d: "Vínculo de filiação baseado no afeto e na convivência, reconhecido pelo Direito." },
        { t: "Multiparentalidade", d: "Quando uma pessoa tem, juridicamente, mais de um pai ou mais de uma mãe, como o biológico e o socioafetivo." },
        { t: "Alienação parental", d: "Interferência de um dos pais ou parentes para afastar a criança do outro genitor." }
      ],
      quiz: [
        {
          p: "Os pais se separaram, não fizeram acordo, e os dois estão aptos a cuidar do filho. Qual é a regra?",
          o: ["A guarda fica com a mãe", "Guarda compartilhada", "A guarda fica com quem ganha mais", "O filho escolhe"],
          c: 1,
          e: "Art. 1.584, § 2º: sem acordo e estando ambos aptos, aplica-se a guarda compartilhada, salvo exceções."
        },
        {
          p: "Tio e sobrinho são parentes em que grau?",
          o: ["2º grau", "3º grau", "4º grau", "Não são parentes"],
          c: 1,
          e: "Do sobrinho sobe-se ao pai dele (1), ao avô, ancestral comum (2), e desce-se ao tio (3). São colaterais de 3º grau."
        },
        {
          p: "Um filho adotado tem os mesmos direitos de herança que um filho biológico?",
          o: ["Não, recebe metade", "Sim, a Constituição proíbe distinção entre filhos", "Só se for adotado bebê", "Só se o testamento disser"],
          c: 1,
          e: "Constituição, art. 227, § 6º: todos os filhos têm os mesmos direitos, proibida qualquer discriminação."
        }
      ]
    },

    {
      id: "divorcio-e-pensao",
      titulo: "Divórcio e pensão alimentícia",
      resumo: "Como se divorciar, quem paga pensão, quanto e por quanto tempo.",
      tempo: "8 min",
      historia:
        "<p>A tia Rosa e o marido decidiram se divorciar. Estavam tristes, mas de acordo em tudo. Lia perguntou: <span class='fala'>“Eles vão ter que brigar no tribunal?”</span></p>" +
        "<p><span class='fala'>“Não precisa”</span>, disse a Vovó. <span class='fala'>“Quando os dois concordam, o divórcio pode ser feito até no <mark>cartório</mark>, com um advogado.”</span></p>" +
        "<p>E a Vovó continuou: <span class='fala'>“E o primo Caio, filho deles, vai continuar recebendo o que precisa dos dois. Isso se chama <mark>pensão alimentícia</mark>, e não é só comida: é escola, saúde, roupa, lazer.”</span></p>",
      ideia: "O divórcio <mark>não depende de prazo nem de motivo</mark>: basta um querer. E a pensão alimentícia é calculada pela <mark>necessidade</mark> de quem recebe e pela <mark>possibilidade</mark> de quem paga.",
      explicacao:
        "<h3>Divórcio</h3>" +
        "<p>Desde a Emenda Constitucional 66/2010, ninguém precisa esperar prazo nem explicar o motivo para se divorciar. O divórcio é um <b>direito</b>: se um dos dois quiser, o outro não pode impedir.</p>" +
        "<div class='tabela-wrap'><table><thead><tr><th>Caminho</th><th>Quando</th></tr></thead><tbody>" +
        "<tr><td><b>Extrajudicial (cartório)</b></td><td>O casal está de acordo em tudo, com advogado ou defensor. Em regra, sem filhos menores ou incapazes; se houver, as questões deles (guarda, convivência, pensão) devem estar resolvidas na Justiça</td></tr>" +
        "<tr><td><b>Judicial consensual</b></td><td>Há acordo, mas o casal prefere ou precisa ir ao juiz</td></tr>" +
        "<tr><td><b>Judicial litigioso</b></td><td>Não há acordo sobre bens, guarda ou pensão. O juiz pode decretar o divórcio logo e continuar o processo sobre o resto</td></tr>" +
        "</tbody></table></div>" +
        "<p>A partilha dos bens segue o regime de bens do casal. E cada um pode decidir se mantém ou não o sobrenome do outro.</p>" +
        "<h3>Pensão alimentícia</h3>" +
        "<p>“Alimentos”, para o Direito, é tudo que a pessoa precisa para viver com dignidade: comida, moradia, saúde, educação, vestuário e lazer.</p>" +
        "<ul><li><b>Quem deve:</b> parentes entre si (pais e filhos, avós e netos, irmãos), cônjuges e companheiros. Os avós só pagam de forma <b>complementar</b>, quando os pais não podem.</li>" +
        "<li><b>Quanto:</b> não existe percentual fixo na lei. O juiz equilibra a <b>necessidade</b> de quem recebe e a <b>possibilidade</b> de quem paga (o chamado binômio, às vezes chamado de trinômio, somando a proporcionalidade).</li>" +
        "<li><b>Mudanças:</b> se a situação de um dos dois mudar, a pensão pode ser revista para mais ou para menos, ou extinta.</li>" +
        "<li><b>Até quando:</b> a pensão do filho <b>não acaba automaticamente aos 18 anos</b>. É preciso pedir ao juiz. Os tribunais costumam mantê-la enquanto o filho estuda em curso superior ou técnico, até por volta dos 24 anos.</li>" +
        "<li><b>Entre ex-cônjuges:</b> hoje é exceção, normalmente temporária, para quem precisa de tempo para se recolocar no mercado de trabalho.</li></ul>" +
        "<h3>E se não pagar?</h3>" +
        "<p>A pensão é a única dívida civil que pode levar à <b>prisão</b> no Brasil. A prisão (de 1 a 3 meses, em regime fechado) pode ser pedida pelas <b>três últimas parcelas</b> anteriores à cobrança e as que vencerem durante o processo. Também é possível descontar direto do salário, penhorar bens e protestar o nome do devedor. Pagar não depende de visita, nem visita depende de pagamento.</p>",
      lei: [
        {
          ref: "Constituição Federal, art. 226, § 6º",
          texto: "O casamento civil pode ser dissolvido pelo divórcio.",
          simples: "Desde 2010, o texto é só isso: <b>sem prazo e sem motivo</b>."
        },
        {
          ref: "Código Civil, art. 1.694, § 1º",
          texto: "Os alimentos devem ser fixados na proporção das necessidades do reclamante e dos recursos da pessoa obrigada.",
          simples: "A pensão equilibra <b>o que um precisa</b> e <b>o que o outro pode</b> pagar."
        },
        {
          ref: "Código Civil, art. 1.699",
          texto: "Se, fixados os alimentos, sobrevier mudança na situação financeira de quem os supre, ou na de quem os recebe, poderá o interessado reclamar ao juiz, conforme as circunstâncias, exoneração, redução ou majoração do encargo.",
          simples: "Mudou a situação? A pensão pode <b>subir, baixar ou acabar</b>, com pedido ao juiz."
        },
        {
          ref: "Súmula 358 do STJ",
          texto: "O cancelamento de pensão alimentícia de filho que atingiu a maioridade está sujeito à decisão judicial, mediante contraditório, ainda que nos próprios autos.",
          simples: "Fez 18 anos? A pensão <b>só para com decisão do juiz</b>."
        }
      ],
      vida: [
        "Sem dinheiro para advogado? A <b>Defensoria Pública</b> atende gratuitamente casos de divórcio, guarda e pensão para quem não pode pagar.",
        "Perdeu o emprego e não consegue pagar a pensão? <b>Não pare de pagar por conta própria</b>. Peça logo a revisão ao juiz e pague o que puder, guardando os comprovantes.",
        "Pague a pensão por transferência ou depósito identificado. Pagamentos “por fora”, em produtos ou sem recibo, podem não ser aceitos como prova.",
        "Violência doméstica? Ligue <b>180</b> (Central de Atendimento à Mulher) ou 190. A Lei Maria da Penha permite medidas protetivas urgentes, inclusive fixação de pensão provisória."
      ],
      palavras: [
        { t: "Divórcio", d: "Dissolução do casamento. Pode ser feito no cartório (se consensual, nos casos permitidos) ou na Justiça." },
        { t: "Partilha", d: "Divisão dos bens do casal (ou da herança) entre as pessoas que têm direito a eles." },
        { t: "Alimentos", d: "Tudo o que é necessário para viver com dignidade: comida, moradia, saúde, educação, roupa e lazer." },
        { t: "Pensão alimentícia", d: "Valor pago periodicamente para garantir os alimentos de quem precisa, como os filhos." },
        { t: "Binômio necessidade-possibilidade", d: "Critério para fixar a pensão: o que o alimentando precisa e o que o alimentante pode pagar." },
        { t: "Alimentante e alimentando", d: "Alimentante é quem paga a pensão. Alimentando é quem a recebe." },
        { t: "Exoneração de alimentos", d: "Decisão judicial que libera alguém de continuar pagando a pensão." }
      ],
      quiz: [
        {
          p: "Um casal sem filhos, de acordo em tudo, quer se divorciar. Pode ser no cartório?",
          o: ["Não, só na Justiça", "Sim, por escritura pública, com advogado ou defensor", "Só depois de 2 anos separados", "Só se não tiverem bens"],
          c: 1,
          e: "O divórcio consensual pode ser feito por escritura pública (CPC, art. 733), com assistência de advogado ou defensor público."
        },
        {
          p: "O filho fez 18 anos. O pai pode parar de pagar a pensão na hora?",
          o: ["Sim, automaticamente", "Não, precisa de decisão judicial", "Sim, se avisar o filho", "Sim, se o filho trabalhar meio período"],
          c: 1,
          e: "Súmula 358 do STJ: o cancelamento da pensão do filho que fez 18 anos depende de decisão judicial."
        },
        {
          p: "Qual é o percentual da pensão alimentícia fixado pela lei?",
          o: ["30% do salário", "20% do salário", "Não há percentual fixo: depende da necessidade e da possibilidade", "Um salário mínimo"],
          c: 2,
          e: "A lei não fixa percentual. O juiz decide caso a caso, pelo art. 1.694, § 1º. Os 30% são um mito popular."
        },
        {
          p: "Pela falta de pagamento de quais parcelas pode ser pedida a prisão do devedor de pensão?",
          o: ["De qualquer parcela, de qualquer época", "Das três últimas anteriores à cobrança e das que vencerem no processo", "Só depois de 12 meses de atraso", "Prisão por dívida não existe"],
          c: 1,
          e: "CPC, art. 528, § 7º, e Súmula 309 do STJ. Parcelas mais antigas são cobradas por penhora de bens."
        }
      ]
    }
  ]
});
