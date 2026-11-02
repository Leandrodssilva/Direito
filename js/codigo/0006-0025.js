/* Código Civil explicado: arts. 6º a 25. Formato dos campos em js/codigo/0001-0005.js. */
window.CODIGO = window.CODIGO || { artigos: [] };
(function () {
  var CAP1 = ["Parte Geral", "Livro I — Das Pessoas", "Título I — Das Pessoas Naturais", "Capítulo I — Da Personalidade e da Capacidade"];
  var CAP2 = ["Parte Geral", "Livro I — Das Pessoas", "Título I — Das Pessoas Naturais", "Capítulo II — Dos Direitos da Personalidade"];
  var CAP3 = ["Parte Geral", "Livro I — Das Pessoas", "Título I — Das Pessoas Naturais", "Capítulo III — Da Ausência", "Seção I — Da Curadoria dos Bens do Ausente"];

  window.CODIGO.artigos.push(
    {
      n: 6,
      rotulo: "Art. 6º",
      caminho: CAP1,
      texto: [
        { tipo: "caput", t: "A existência da pessoa natural termina com a morte; presume-se esta, quanto aos ausentes, nos casos em que a lei autoriza a abertura de sucessão definitiva." }
      ],
      simples: "Assim como a pessoa começa ao nascer com vida (art. 2º), ela <mark>termina com a morte</mark>. E, quando alguém <mark>desaparece</mark> e passa muito tempo sem notícias, a lei pode <mark>considerar</mark> que essa pessoa morreu, mesmo sem corpo e sem certidão de óbito comum.",
      itens: [
        { r: "1ª parte", t: "“A existência da pessoa natural termina com a morte”: com a morte, a pessoa deixa de ter direitos e deveres. Os bens dela passam para os herdeiros (a herança), e o casamento termina." },
        { r: "2ª parte", t: "“Presume-se esta, quanto aos ausentes...”: quando uma pessoa some sem deixar notícias, existe um processo longo, chamado <b>ausência</b> (arts. 22 a 39). No fim dele, os herdeiros podem ficar com os bens de forma definitiva. A partir daí, a lei presume que o desaparecido morreu." }
      ],
      exemplo: "O irmão do Seu Tonico foi trabalhar em outro estado há muitos anos e nunca mais deu notícias. A família pediu ao juiz a declaração de ausência. Depois de todos os prazos da lei, os bens dele passaram aos herdeiros de forma definitiva e, para o Direito, ele passou a ser considerado morto.",
      atencao: "Mesmo depois da morte, alguns direitos continuam protegidos: a família pode defender o nome, a imagem e a honra de quem morreu (arts. 12 e 20). E o corpo pode ser doado para depois da morte (art. 14).<br><br>Se o desaparecido voltar, ele pode recuperar os bens no estado em que estiverem, dentro de certos prazos (art. 39).",
      palavras: [
        { t: "Pessoa natural", d: "O ser humano, para o Direito. Também chamada de pessoa física." },
        { t: "Ausente", d: "Pessoa que desapareceu do seu domicílio sem deixar notícia nem quem cuide dos seus bens, assim declarada pelo juiz." },
        { t: "Sucessão definitiva", d: "Última etapa do processo de ausência, em que os herdeiros passam a ser donos definitivos dos bens do desaparecido." },
        { t: "Morte presumida", d: "Morte declarada pela lei ou pelo juiz sem que haja um corpo ou atestado de óbito comum." }
      ],
      licao: "pessoa-natural",
      relacionados: [2, 7, 22]
    },

    {
      n: 7,
      rotulo: "Art. 7º",
      caminho: CAP1,
      texto: [
        { tipo: "caput", t: "Pode ser declarada a morte presumida, sem decretação de ausência:" },
        { tipo: "inciso", r: "I", t: "se for extremamente provável a morte de quem estava em perigo de vida;" },
        { tipo: "inciso", r: "II", t: "se alguém, desaparecido em campanha ou feito prisioneiro, não for encontrado até dois anos após o término da guerra." },
        { tipo: "paragrafo", r: "Parágrafo único.", t: "A declaração da morte presumida, nesses casos, somente poderá ser requerida depois de esgotadas as buscas e averiguações, devendo a sentença fixar a data provável do falecimento." }
      ],
      simples: "Às vezes é quase certo que a pessoa morreu, mas o corpo nunca foi encontrado. Nesses casos, a família não precisa esperar os muitos anos do processo de ausência: pode pedir ao juiz que <mark>declare a morte</mark> logo, <mark>depois que as buscas terminarem</mark>.",
      itens: [
        { r: "I", t: "<b>Perigo de vida:</b> a pessoa estava numa situação em que a morte é extremamente provável. Exemplos: um naufrágio em alto-mar, a queda de um avião, um rompimento de barragem, uma enchente que arrastou casas." },
        { r: "II", t: "<b>Guerra:</b> o soldado que desapareceu em combate ou foi feito prisioneiro e não foi encontrado até <b>dois anos</b> depois do fim da guerra." },
        { r: "Parágrafo único", t: "O pedido só pode ser feito <b>depois que as buscas acabarem</b>. Na decisão, o juiz diz qual foi a <b>data provável</b> da morte. Essa data é muito importante, porque é a partir dela que se abre a herança." }
      ],
      exemplo: "Um pescador amigo do Tio Beto saiu para o mar durante uma tempestade e o barco foi encontrado virado. Depois de semanas de buscas da Marinha, nada foi achado. A esposa pediu ao juiz a declaração de morte presumida. O juiz fixou como data provável o dia da tempestade, e ela pôde fazer o inventário e receber o seguro.",
      atencao: "Diferença importante: na <b>ausência</b> (arts. 22 e seguintes), a pessoa simplesmente sumiu, e o processo leva anos. Na <b>morte presumida do art. 7º</b>, havia um perigo concreto que torna a morte quase certa, e por isso o caminho é mais rápido.<br><br>Na prática, a sentença é registrada no Cartório de Registro Civil (art. 9º, IV), e com ela a família resolve inventário, pensão do INSS e seguros.",
      palavras: [
        { t: "Declarar", d: "Reconhecer oficialmente, numa decisão, que algo aconteceu." },
        { t: "Decretação de ausência", d: "Decisão do juiz que reconhece que uma pessoa desapareceu sem deixar notícias nem representante." },
        { t: "Em campanha", d: "Em operação militar, durante uma guerra." },
        { t: "Sentença", d: "A decisão do juiz que resolve o processo." }
      ],
      licao: "pessoa-natural",
      relacionados: [6, 9, 22]
    },

    {
      n: 8,
      rotulo: "Art. 8º",
      caminho: CAP1,
      texto: [
        { tipo: "caput", t: "Se dois ou mais indivíduos falecerem na mesma ocasião, não se podendo averiguar se algum dos comorientes precedeu aos outros, presumir-se-ão simultaneamente mortos." }
      ],
      simples: "Se duas ou mais pessoas morrem <mark>no mesmo acidente</mark> e não dá para descobrir quem morreu primeiro, a lei considera que elas morreram <mark>ao mesmo tempo</mark>. Isso tem nome: <mark>comoriência</mark>.",
      exemplo: "Um casal sem filhos morreu num acidente de carro, e os médicos não conseguiram dizer quem morreu primeiro. Como a lei considera que morreram juntos, <b>um não herda do outro</b>. A herança do marido vai para a família dele (os pais, por exemplo), e a da esposa, para a família dela.",
      atencao: "Por que isso importa? Imagine que se provasse que o marido morreu um minuto antes. Aí a esposa teria herdado parte dos bens dele naquele minuto e, ao morrer em seguida, passaria tudo para a família <b>dela</b>. A ordem das mortes muda completamente quem fica com os bens.<br><br>A regra só vale quando <b>não dá para provar</b> a ordem. Se um laudo médico ou uma testemunha mostrar quem morreu antes, vale a prova.",
      palavras: [
        { t: "Comoriência", d: "Quando duas ou mais pessoas morrem na mesma ocasião e não se sabe quem morreu primeiro. Presume-se que morreram juntas." },
        { t: "Comorientes", d: "As pessoas que morreram na mesma ocasião." },
        { t: "Preceder", d: "Vir antes." }
      ],
      licao: "pessoa-natural",
      relacionados: [6]
    },

    {
      n: 9,
      rotulo: "Art. 9º",
      caminho: CAP1,
      texto: [
        { tipo: "caput", t: "Serão registrados em registro público:" },
        { tipo: "inciso", r: "I", t: "os nascimentos, casamentos e óbitos;" },
        { tipo: "inciso", r: "II", t: "a emancipação por outorga dos pais ou por sentença do juiz;" },
        { tipo: "inciso", r: "III", t: "a interdição por incapacidade absoluta ou relativa;" },
        { tipo: "inciso", r: "IV", t: "a sentença declaratória de ausência e de morte presumida." }
      ],
      simples: "Os acontecimentos mais importantes da vida de uma pessoa precisam ficar <mark>anotados num livro oficial</mark>, o registro público, que fica no <mark>Cartório de Registro Civil</mark>. Assim, qualquer um pode conferir se a pessoa nasceu, se é casada, se é emancipada ou se morreu.",
      itens: [
        { r: "I", t: "<b>Nascimento, casamento e óbito:</b> os três grandes momentos. Cada um gera uma certidão. A certidão de nascimento é o primeiro documento de todo brasileiro." },
        { r: "II", t: "<b>Emancipação</b> dada pelos pais (por escritura) ou pelo juiz: precisa ser registrada para valer perante todos. Sem o registro, o jovem continua sendo tratado como menor." },
        { r: "III", t: "<b>Interdição:</b> a decisão do juiz que nomeia um curador para um adulto que precisa de proteção. Registrada, ela avisa a todos que aquela pessoa precisa de apoio para certos atos." },
        { r: "IV", t: "<b>Ausência e morte presumida:</b> as decisões dos arts. 6º, 7º e 22 também vão para o registro." }
      ],
      exemplo: "Quando a prima da Lia nasceu, o pai foi ao cartório e fez o registro. Saiu de lá com a certidão de nascimento, de graça. Anos depois, quando ela se casar, o casamento será anotado no mesmo cartório, e a certidão de nascimento dela passará a mostrar isso.",
      atencao: "A primeira via das certidões de nascimento e de óbito é <b>gratuita</b> para todos (Lei 9.534/1997). Hoje também dá para pedir certidões pela internet.<br><br>Com o Estatuto da Pessoa com Deficiência (2015), a palavra “interdição” vem sendo substituída na prática por “curatela”, que deve ser excepcional e limitada a questões de patrimônio. Mas o texto deste artigo continua o mesmo.",
      palavras: [
        { t: "Registro público", d: "Anotação oficial feita em cartório, que qualquer pessoa pode consultar e que dá segurança aos fatos registrados." },
        { t: "Cartório de Registro Civil", d: "O cartório que registra nascimentos, casamentos, óbitos e outros fatos da vida das pessoas." },
        { t: "Outorga", d: "Concessão, autorização dada por alguém." },
        { t: "Interdição", d: "Decisão judicial que nomeia um curador para ajudar um adulto que não consegue cuidar sozinho de certos interesses." },
        { t: "Óbito", d: "Morte. A certidão de óbito é o documento que a comprova." }
      ],
      licao: "pessoa-natural",
      relacionados: [5, 7, 10]
    },

    {
      n: 10,
      rotulo: "Art. 10",
      caminho: CAP1,
      texto: [
        { tipo: "caput", t: "Far-se-á averbação em registro público:" },
        { tipo: "inciso", r: "I", t: "das sentenças que decretarem a nulidade ou anulação do casamento, o divórcio, a separação judicial e o restabelecimento da sociedade conjugal;" },
        { tipo: "inciso", r: "II", t: "dos atos judiciais ou extrajudiciais que declararem ou reconhecerem a filiação;" },
        { tipo: "inciso", r: "III", t: "(Revogado).", nota: "Revogado pela Lei nº 12.010, de 2009" }
      ],
      simples: "<mark>Averbar</mark> é fazer uma <mark>anotação ao lado</mark> de um registro que já existe, para atualizá-lo. Este artigo diz quais mudanças precisam ser anotadas: o fim ou a volta de um casamento e o reconhecimento de um filho.",
      itens: [
        { r: "I", t: "<b>Mudanças no casamento:</b> quando o casamento é anulado, quando o casal se divorcia, quando se separa judicialmente ou quando volta atrás e reata. Tudo isso é anotado na certidão de casamento." },
        { r: "II", t: "<b>Reconhecimento de filho:</b> quando um pai ou uma mãe reconhece um filho, no cartório ou por decisão do juiz (por exemplo, depois de um exame de DNA). A anotação vai na certidão de nascimento do filho." },
        { r: "III", t: "<b>Revogado.</b> Falava da averbação da adoção. Desde 2009, a adoção gera um <b>novo registro de nascimento</b>, em que o filho adotivo aparece como qualquer outro filho, sem nenhuma menção à adoção. Isso evita discriminação." }
      ],
      exemplo: "A tia Rosa se divorciou. O divórcio foi <b>averbado</b> na certidão de casamento dela. Quando ela for se casar de novo, o cartório vai consultar essa certidão e ver que o primeiro casamento já terminou.",
      atencao: "<b>Registro</b> (art. 9º) é o primeiro lançamento de um fato. <b>Averbação</b> (art. 10) é uma atualização ao lado de um registro que já existe.<br><br>Sobre a separação judicial: em 2023, o Supremo Tribunal Federal decidiu que, desde a Emenda Constitucional 66/2010, ela deixou de ser exigida para o divórcio e não existe mais como figura própria. Quem já estava separado continua nessa situação, mas hoje os casais vão direto para o divórcio.",
      palavras: [
        { t: "Averbação", d: "Anotação feita ao lado de um registro já existente para atualizá-lo, como um divórcio na certidão de casamento." },
        { t: "Restabelecimento da sociedade conjugal", d: "Quando um casal separado judicialmente decide reatar o casamento." },
        { t: "Filiação", d: "O vínculo entre pais e filhos." },
        { t: "Extrajudicial", d: "Feito fora da Justiça, normalmente em cartório." },
        { t: "Revogado", d: "Que deixou de valer porque uma lei posterior o retirou." }
      ],
      licao: "filhos-e-guarda",
      relacionados: [9]
    },

    {
      n: 11,
      rotulo: "Art. 11",
      caminho: CAP2,
      texto: [
        { tipo: "caput", t: "Com exceção dos casos previstos em lei, os direitos da personalidade são intransmissíveis e irrenunciáveis, não podendo o seu exercício sofrer limitação voluntária." }
      ],
      simples: "Os direitos da personalidade são os que protegem <mark>quem você é</mark>: sua vida, seu corpo, seu nome, sua imagem, sua honra, sua privacidade. Eles <mark>não podem ser vendidos</mark> nem passados a outra pessoa, e você <mark>não pode abrir mão</mark> deles para sempre.",
      itens: [
        { r: "Intransmissíveis", t: "Não passam para outra pessoa. Você pode vender sua bicicleta, mas não pode vender seu nome ou sua honra." },
        { r: "Irrenunciáveis", t: "Você não pode dizer “a partir de hoje, desisto do direito à minha imagem” de forma definitiva. Esse tipo de renúncia não vale." },
        { r: "Sem limitação voluntária", t: "Em regra, nem por contrato você pode restringir esses direitos de forma permanente ou geral." },
        { r: "Exceções", t: "“Com exceção dos casos previstos em lei”: a própria lei permite alguns usos. Por exemplo, você pode autorizar o uso da sua imagem numa propaganda, por tempo e para fim determinados, e receber por isso." }
      ],
      exemplo: "Uma marca ofereceu muito dinheiro ao Tio Beto para usar a foto dele “para sempre e em qualquer coisa”. Uma cláusula assim é muito questionável: ele pode autorizar o uso da imagem numa campanha específica, por um prazo, mas não abrir mão do direito à própria imagem para sempre.",
      atencao: "Os tribunais costumam aceitar <b>limitações pequenas, temporárias e específicas</b>, desde que não atinjam a dignidade da pessoa. Um exemplo comum são os reality shows: os participantes autorizam ser filmados, por um período e com regras. A Jornada de Direito Civil (Enunciado 4) diz justamente que essas limitações voluntárias são possíveis quando não forem permanentes nem gerais.",
      palavras: [
        { t: "Direitos da personalidade", d: "Direitos ligados à própria pessoa: vida, corpo, nome, imagem, honra e privacidade." },
        { t: "Intransmissível", d: "Que não pode ser passado para outra pessoa." },
        { t: "Irrenunciável", d: "Que não se pode abandonar de forma definitiva." }
      ],
      licao: "direitos-da-personalidade",
      relacionados: [12, 20, 21]
    },

    {
      n: 12,
      rotulo: "Art. 12",
      caminho: CAP2,
      texto: [
        { tipo: "caput", t: "Pode-se exigir que cesse a ameaça, ou a lesão, a direito da personalidade, e reclamar perdas e danos, sem prejuízo de outras sanções previstas em lei." },
        { tipo: "paragrafo", r: "Parágrafo único.", t: "Em se tratando de morto, terá legitimação para requerer a medida prevista neste artigo o cônjuge sobrevivente, ou qualquer parente em linha reta, ou colateral até o quarto grau." }
      ],
      simples: "Se alguém está <mark>ferindo</mark> (ou ameaçando ferir) seu nome, sua imagem, sua honra ou outro direito da personalidade, você pode pedir à Justiça duas coisas: que a pessoa <mark>pare</mark> e que ela <mark>pague</mark> pelo prejuízo. E, se a vítima já morreu, a <mark>família</mark> pode fazer isso por ela.",
      itens: [
        { r: "Caput", t: "Dois remédios: <b>fazer parar</b> (tirar um post do ar, recolher um material, proibir uma publicação) e <b>indenização</b> (perdas e danos, inclusive dano moral). E isso não impede outras punições, como um processo criminal por calúnia, por exemplo." },
        { r: "Parágrafo único", t: "Quando a ofensa é contra quem já morreu, podem pedir a proteção: o <b>cônjuge</b> que ficou, os parentes em <b>linha reta</b> (pais, avós, filhos, netos) e os <b>colaterais até o 4º grau</b> (irmãos, tios, sobrinhos, primos)." }
      ],
      exemplo: "Uma página na internet publicou mentiras dizendo que o avô do Pedrinho, já falecido, tinha sido ladrão. A neta pode pedir ao juiz que mande retirar a publicação e que o responsável pague indenização, defendendo a memória do avô.",
      atencao: "Não precisa esperar o dano acontecer: basta a <b>ameaça</b>. Se você sabe que uma revista vai publicar fotos íntimas suas, pode pedir ao juiz que impeça a publicação antes.<br><br>Para conteúdos na internet, também ajuda o Marco Civil da Internet (Lei 12.965/2014). Em casos de imagens íntimas divulgadas sem autorização, a plataforma deve retirá-las após ser avisada pela vítima.",
      palavras: [
        { t: "Lesão", d: "Ofensa, dano efetivo a um direito." },
        { t: "Perdas e danos", d: "Indenização em dinheiro pelo prejuízo sofrido." },
        { t: "Sanção", d: "Punição ou consequência prevista em lei para quem a descumpre." },
        { t: "Legitimação", d: "O direito de ser a pessoa que pede algo na Justiça." },
        { t: "Cônjuge sobrevivente", d: "O marido ou a esposa que continua vivo depois da morte do outro." }
      ],
      licao: "direitos-da-personalidade",
      relacionados: [11, 20]
    },

    {
      n: 13,
      rotulo: "Art. 13",
      caminho: CAP2,
      texto: [
        { tipo: "caput", t: "Salvo por exigência médica, é defeso o ato de disposição do próprio corpo, quando importar diminuição permanente da integridade física, ou contrariar os bons costumes." },
        { tipo: "paragrafo", r: "Parágrafo único.", t: "O ato previsto neste artigo será admitido para fins de transplante, na forma estabelecida em lei especial." }
      ],
      simples: "Seu corpo é seu, mas a lei <mark>não deixa</mark> que você faça com ele algo que cause um <mark>dano permanente</mark>, a não ser que seja por <mark>necessidade médica</mark> ou para <mark>doar um órgão</mark> a quem precisa.",
      itens: [
        { r: "Caput", t: "É proibido (“defeso”) dispor do próprio corpo de um jeito que cause <b>perda permanente</b> (tirar um órgão saudável por dinheiro, por exemplo) ou que contrarie os bons costumes. A exceção é quando há <b>exigência médica</b>: uma cirurgia para retirar um órgão doente, uma amputação para salvar a vida." },
        { r: "Parágrafo único", t: "O <b>transplante</b> é permitido, seguindo a Lei 9.434/1997. Em vida, uma pessoa pode doar, por exemplo, um rim ou parte do fígado, de graça, sem prejudicar a própria saúde, e, em regra, para o cônjuge ou parentes até o 4º grau (para outras pessoas, é preciso autorização judicial, salvo no caso de medula óssea)." }
      ],
      exemplo: "A mãe do Pedrinho precisa de um rim novo. O irmão dela é compatível e decidiu doar. Isso é permitido: é um transplante, feito de graça e com acompanhamento médico. Mas, se alguém oferecesse dinheiro por um rim, seria proibido e ainda crime.",
      atencao: "A venda de órgãos, tecidos e partes do corpo é proibida pela <b>Constituição</b> (art. 199, § 4º) e é crime.<br><br>Tatuagens e piercings são permitidos: não causam diminuição relevante da integridade física e são aceitos socialmente. Sobre cirurgias de afirmação de gênero, a Jornada de Direito Civil (Enunciado 276) entende que são permitidas, por serem exigência médica ligada à saúde da pessoa.",
      palavras: [
        { t: "Defeso", d: "Proibido." },
        { t: "Disposição do próprio corpo", d: "Decidir o que fazer com o próprio corpo ou com partes dele." },
        { t: "Integridade física", d: "O corpo inteiro e saudável, sem perdas ou lesões." },
        { t: "Bons costumes", d: "Os valores morais aceitos pela sociedade em determinada época." },
        { t: "Transplante", d: "Transferência de um órgão ou tecido de uma pessoa para outra, para tratamento." }
      ],
      licao: "direitos-da-personalidade",
      relacionados: [14, 15]
    },

    {
      n: 14,
      rotulo: "Art. 14",
      caminho: CAP2,
      texto: [
        { tipo: "caput", t: "É válida, com objetivo científico, ou altruístico, a disposição gratuita do próprio corpo, no todo ou em parte, para depois da morte." },
        { tipo: "paragrafo", r: "Parágrafo único.", t: "O ato de disposição pode ser livremente revogado a qualquer tempo." }
      ],
      simples: "Você pode decidir que, <mark>depois que morrer</mark>, seu corpo ou partes dele sejam <mark>doados</mark>, para salvar vidas (doação de órgãos) ou para a ciência (estudo em faculdades de medicina). A doação tem que ser <mark>de graça</mark>. E você pode <mark>mudar de ideia</mark> quando quiser.",
      itens: [
        { r: "Caput", t: "A doação para depois da morte vale se for <b>gratuita</b> e tiver um objetivo <b>científico</b> (estudo e pesquisa) ou <b>altruístico</b> (ajudar outras pessoas, como no transplante). Pode ser do corpo inteiro ou de partes." },
        { r: "Parágrafo único", t: "A decisão pode ser <b>desfeita a qualquer momento</b>, sem precisar explicar o motivo." }
      ],
      exemplo: "Vovó Nina, que foi professora a vida toda, decidiu que quer doar seu corpo para uma faculdade de medicina, para ajudar a formar médicos. Ela conversou com a família, deixou a vontade por escrito e procurou o programa de doação da faculdade. Se um dia mudar de ideia, pode desistir.",
      atencao: "Na prática, para a <b>doação de órgãos</b> depois da morte, a Lei 9.434/1997 exige a <b>autorização da família</b> (cônjuge ou parente maior de idade). Por isso, quem quer ser doador deve <b>avisar a família</b>. Ainda assim, a Jornada de Direito Civil (Enunciado 277) entende que a vontade da própria pessoa, quando expressa em vida, deve prevalecer.<br><br>Desde 2024, também é possível registrar a vontade de doar órgãos pela internet, numa autorização eletrônica feita em cartório (sistema AEDO).",
      palavras: [
        { t: "Altruístico", d: "Feito para ajudar os outros, sem buscar vantagem própria." },
        { t: "Gratuito", d: "Sem cobrar nada em troca." },
        { t: "Revogar", d: "Desfazer, voltar atrás numa decisão." }
      ],
      licao: "direitos-da-personalidade",
      relacionados: [13]
    },

    {
      n: 15,
      rotulo: "Art. 15",
      caminho: CAP2,
      texto: [
        { tipo: "caput", t: "Ninguém pode ser constrangido a submeter-se, com risco de vida, a tratamento médico ou a intervenção cirúrgica." }
      ],
      simples: "Ninguém pode ser <mark>obrigado</mark> a fazer um tratamento ou uma cirurgia que traga <mark>risco de morte</mark>. A decisão é do paciente. Por isso os médicos devem <mark>explicar os riscos</mark> e pedir autorização antes.",
      exemplo: "O médico propôs ao Seu Tonico uma cirurgia no coração, com risco de vida. Seu Tonico tem o direito de ouvir todas as explicações, pensar, conversar com a família e decidir se aceita ou não. Se ele recusar, ninguém pode obrigá-lo.",
      atencao: "Daqui vem o <b>consentimento informado</b>: o paciente deve receber informações claras sobre riscos e alternativas antes de aceitar um tratamento. Quando ele não pode decidir (está inconsciente, por exemplo), em emergências o médico age para salvar a vida.<br><br>Existe também a <b>diretiva antecipada de vontade</b> (o “testamento vital”): um documento em que a pessoa diz, enquanto está lúcida, quais tratamentos aceita ou não no fim da vida. Ela é reconhecida pelo Conselho Federal de Medicina (Resolução 1.995/2012).<br><br>Em 2024, o Supremo Tribunal Federal decidiu que adultos capazes, como as Testemunhas de Jeová, podem recusar transfusão de sangue por motivo religioso, e que o SUS deve oferecer tratamentos alternativos quando possível.",
      palavras: [
        { t: "Constrangido", d: "Forçado, obrigado contra a própria vontade." },
        { t: "Intervenção cirúrgica", d: "Cirurgia, operação." },
        { t: "Consentimento informado", d: "Autorização do paciente dada depois de receber explicações claras sobre o tratamento e seus riscos." }
      ],
      licao: "direitos-da-personalidade",
      relacionados: [13]
    },

    {
      n: 16,
      rotulo: "Art. 16",
      caminho: CAP2,
      texto: [
        { tipo: "caput", t: "Toda pessoa tem direito ao nome, nele compreendidos o prenome e o sobrenome." }
      ],
      simples: "Todo mundo tem <mark>direito a um nome</mark>. E o nome tem duas partes: o <mark>prenome</mark> (o primeiro nome, como Lia) e o <mark>sobrenome</mark> (o nome da família, como Silva).",
      exemplo: "Quando a prima da Lia nasceu, os pais escolheram o prenome “Helena” e colocaram os sobrenomes da mãe e do pai. Assim, ela ficou com um nome que a identifica como pessoa e que mostra de qual família ela vem.",
      atencao: "O nome é um direito, mas também identifica a pessoa para a sociedade. Por isso, em regra, ele não muda livremente. Mas a lei tem várias possibilidades de mudança:<br>• desde 2022 (Lei 14.382), quem tem mais de 18 anos pode mudar o <b>prenome uma vez</b>, direto no cartório, sem explicar o motivo;<br>• é possível acrescentar ou tirar sobrenomes de família no cartório em vários casos, como casamento, divórcio ou para incluir o sobrenome de um padrasto ou madrasta;<br>• pessoas trans podem mudar o nome e o gênero direto no cartório.<br><br>O cartório pode recusar nomes que exponham a criança ao ridículo.",
      palavras: [
        { t: "Nome", d: "O sinal que identifica a pessoa, formado pelo prenome e pelo sobrenome." },
        { t: "Prenome", d: "O primeiro nome da pessoa. Pode ser simples (Lia) ou composto (Ana Clara)." },
        { t: "Sobrenome", d: "O nome de família, também chamado de patronímico. Mostra de quem a pessoa descende." }
      ],
      licao: "direitos-da-personalidade",
      relacionados: [17, 18, 19]
    },

    {
      n: 17,
      rotulo: "Art. 17",
      caminho: CAP2,
      texto: [
        { tipo: "caput", t: "O nome da pessoa não pode ser empregado por outrem em publicações ou representações que a exponham ao desprezo público, ainda quando não haja intenção difamatória." }
      ],
      simples: "Ninguém pode usar <mark>o seu nome</mark> num livro, jornal, filme, peça ou post de um jeito que faça as pessoas <mark>desprezarem você</mark>. E isso vale <mark>mesmo que a pessoa não quisesse ofender</mark>.",
      exemplo: "Um escritor do bairro lançou um livro de humor em que o vilão, um golpista, tinha o nome completo do Tio Beto, que é conhecido na cidade. Os clientes começaram a fazer piadas e a desconfiar dele. Mesmo que o escritor diga que “não teve intenção”, o Tio Beto pode pedir a mudança do nome no livro e indenização.",
      atencao: "O ponto mais importante do artigo está no final: “ainda quando não haja intenção difamatória”. Não é preciso provar que o autor queria ofender. Basta que o uso do nome exponha a pessoa ao desprezo público.<br><br>Para criticar ou informar de forma verdadeira, a imprensa pode citar nomes. A liberdade de expressão também é protegida, e o juiz equilibra os dois direitos em cada caso.",
      palavras: [
        { t: "Outrem", d: "Outra pessoa." },
        { t: "Representação", d: "Peça de teatro, filme, novela ou outra obra que representa pessoas ou fatos." },
        { t: "Desprezo público", d: "Quando a sociedade passa a ver a pessoa com desrespeito ou zombaria." },
        { t: "Intenção difamatória", d: "A vontade de prejudicar a reputação de alguém." }
      ],
      licao: "direitos-da-personalidade",
      relacionados: [16, 18, 20]
    },

    {
      n: 18,
      rotulo: "Art. 18",
      caminho: CAP2,
      texto: [
        { tipo: "caput", t: "Sem autorização, não se pode usar o nome alheio em propaganda comercial." }
      ],
      simples: "Uma empresa <mark>não pode usar o seu nome</mark> para vender produtos ou serviços <mark>sem a sua autorização</mark>. Não importa se a propaganda fala bem de você.",
      exemplo: "Vovó Nina foi professora muito querida na cidade. Uma escola particular fez um panfleto dizendo “Recomendada pela professora Nina Souza”, sem ela nunca ter dito isso. Mesmo sendo um elogio, a escola usou o nome dela para vender. Ela pode exigir que o panfleto seja recolhido e pedir indenização.",
      atencao: "Aqui, ao contrário do art. 17, não é preciso que o uso seja ofensivo. O simples uso <b>comercial</b> sem autorização já é proibido. A mesma lógica vale para a imagem (art. 20).<br><br>Pessoas famosas costumam ser alvo disso. É por isso que celebridades assinam contratos de uso de nome e imagem com as marcas que as contratam.",
      palavras: [
        { t: "Nome alheio", d: "O nome de outra pessoa." },
        { t: "Propaganda comercial", d: "Divulgação feita para vender produtos ou serviços." }
      ],
      licao: "direitos-da-personalidade",
      relacionados: [16, 17, 20]
    },

    {
      n: 19,
      rotulo: "Art. 19",
      caminho: CAP2,
      texto: [
        { tipo: "caput", t: "O pseudônimo adotado para atividades lícitas goza da proteção que se dá ao nome." }
      ],
      simples: "<mark>Pseudônimo</mark> é um nome que a pessoa escolhe usar no trabalho ou na arte, no lugar do nome verdadeiro: um nome artístico, um nome de escritor. Se a atividade é <mark>lícita</mark>, esse nome inventado tem a <mark>mesma proteção</mark> que o nome de verdade.",
      exemplo: "O irmão da Lia é cantor e se apresenta como “Léo Pão Quente”, em homenagem à padaria do tio. Uma outra banda começou a usar o mesmo nome para vender ingressos, enganando os fãs. Ele pode exigir que parem, porque o pseudônimo dele é protegido como se fosse o nome dele.",
      atencao: "A proteção só vale para atividades <b>lícitas</b>. Um apelido usado para cometer golpes não recebe proteção.<br><br>Pseudônimo é diferente de <b>apelido</b> (como “Tonico” para Antônio). Mas um apelido público e notório pode até substituir oficialmente o prenome (Lei 6.015/1973, art. 58). Foi o que fizeram alguns políticos e artistas conhecidos pelo apelido.",
      palavras: [
        { t: "Pseudônimo", d: "Nome fictício escolhido pela pessoa para atividades artísticas, literárias ou profissionais." },
        { t: "Lícito", d: "Permitido pela lei." },
        { t: "Gozar da proteção", d: "Ter direito à proteção." }
      ],
      licao: "direitos-da-personalidade",
      relacionados: [16, 17]
    },

    {
      n: 20,
      rotulo: "Art. 20",
      caminho: CAP2,
      texto: [
        { tipo: "caput", t: "Salvo se autorizadas, ou se necessárias à administração da justiça ou à manutenção da ordem pública, a divulgação de escritos, a transmissão da palavra, ou a publicação, a exposição ou a utilização da imagem de uma pessoa poderão ser proibidas, a seu requerimento e sem prejuízo da indenização que couber, se lhe atingirem a honra, a boa fama ou a respeitabilidade, ou se se destinarem a fins comerciais.", nota: "Vide ADIN 4815" },
        { tipo: "paragrafo", r: "Parágrafo único.", t: "Em se tratando de morto ou de ausente, são partes legítimas para requerer essa proteção o cônjuge, os ascendentes ou os descendentes." }
      ],
      simples: "Sua <mark>imagem</mark>, sua <mark>voz</mark> e seus <mark>escritos</mark> (cartas, mensagens) são seus. Se alguém divulgar isso <mark>sem autorização</mark> e de um jeito que <mark>ofenda sua honra</mark> ou para <mark>ganhar dinheiro</mark>, você pode pedir que pare e pedir indenização.",
      itens: [
        { r: "O que protege", t: "Escritos (cartas, diários, mensagens), a palavra (a voz, uma conversa gravada) e a imagem (fotos, vídeos)." },
        { r: "Quando pode usar", t: "Com <b>autorização</b> da pessoa, ou quando for necessário para a <b>Justiça</b> (uma prova num processo) ou para a <b>ordem pública</b> (a foto de um procurado pela polícia)." },
        { r: "Quando pode proibir", t: "Quando o uso atinge a <b>honra</b>, a <b>boa fama</b> ou a <b>respeitabilidade</b>, ou quando tem <b>fins comerciais</b> (propaganda, venda). Além de proibir, cabe <b>indenização</b>." },
        { r: "Parágrafo único", t: "Se a pessoa já morreu ou está ausente, podem pedir a proteção o <b>cônjuge</b>, os <b>ascendentes</b> (pais, avós) e os <b>descendentes</b> (filhos, netos)." }
      ],
      exemplo: "Seu Tonico postou no grupo do bairro um vídeo da Lia caindo na poça, para fazer graça. A imagem expôs a menina ao ridículo. Os pais dela podem pedir que o vídeo seja apagado e, se houve dano, indenização. Se uma loja usasse a foto da Lia num anúncio, sem autorização, também caberia indenização, mesmo sem ofensa, porque o uso seria comercial.",
      atencao: "<b>Biografias:</b> em 2015, o Supremo Tribunal Federal (ADI 4815) decidiu que <b>não é preciso autorização</b> da pessoa ou da família para publicar biografias. Se houver mentiras ou ofensas, o biografado pode pedir indenização e correção depois.<br><br><b>Uso comercial:</b> para o Superior Tribunal de Justiça (Súmula 403), quem publica a imagem de alguém sem autorização, com fins econômicos ou comerciais, deve indenizar, sem que a vítima precise provar prejuízo.<br><br>Fotos em lugares públicos, em que a pessoa aparece de forma secundária numa multidão, normalmente não geram indenização.",
      palavras: [
        { t: "Direito à imagem", d: "Direito de decidir sobre o uso da própria aparência, em fotos, vídeos e desenhos." },
        { t: "Honra", d: "A dignidade e a reputação de uma pessoa, como ela é vista por si mesma e pelos outros." },
        { t: "Fins comerciais", d: "Com o objetivo de vender algo ou obter lucro." },
        { t: "Ascendentes e descendentes", d: "Ascendentes são pais, avós e bisavós. Descendentes são filhos, netos e bisnetos." }
      ],
      licao: "direitos-da-personalidade",
      relacionados: [12, 18, 21]
    },

    {
      n: 21,
      rotulo: "Art. 21",
      caminho: CAP2,
      texto: [
        { tipo: "caput", t: "A vida privada da pessoa natural é inviolável, e o juiz, a requerimento do interessado, adotará as providências necessárias para impedir ou fazer cessar ato contrário a esta norma.", nota: "Vide ADIN 4815" }
      ],
      simples: "Sua <mark>vida particular</mark> (sua casa, sua família, sua saúde, suas conversas, seus segredos) é só sua. Ninguém pode invadi-la. Se alguém fizer isso, o <mark>juiz pode mandar parar</mark>, ou impedir antes que aconteça.",
      exemplo: "Um vizinho começou a filmar o quintal da Vovó Nina por cima do muro e a postar os vídeos na internet, mostrando a rotina dela. Ela pode pedir ao juiz que proíba as filmagens, mande apagar os vídeos e, se houver dano, condene o vizinho a indenizar.",
      atencao: "A Constituição também protege a intimidade, a vida privada, a casa e o sigilo das comunicações (art. 5º, incisos X, XI e XII). E, desde 2018, a <b>Lei Geral de Proteção de Dados</b> (LGPD, Lei 13.709/2018) protege os seus dados pessoais, como CPF, endereço e dados de saúde, quando usados por empresas e pelo governo.<br><br>Pessoas famosas e políticos têm uma proteção um pouco menor em relação a fatos ligados à vida pública delas, mas também têm direito à privacidade no que é estritamente pessoal.",
      palavras: [
        { t: "Vida privada", d: "A parte da vida que a pessoa não expõe ao público: família, casa, saúde, relacionamentos." },
        { t: "Inviolável", d: "Que não pode ser invadido nem desrespeitado." },
        { t: "Requerimento", d: "Pedido formal feito à autoridade, como ao juiz." },
        { t: "LGPD", d: "Lei Geral de Proteção de Dados, que regula como empresas e governo podem coletar e usar dados pessoais." }
      ],
      licao: "direitos-da-personalidade",
      relacionados: [11, 12, 20]
    },

    {
      n: 22,
      rotulo: "Art. 22",
      caminho: CAP3,
      texto: [
        { tipo: "caput", t: "Desaparecendo uma pessoa do seu domicílio sem dela haver notícia, se não houver deixado representante ou procurador a quem caiba administrar-lhe os bens, o juiz, a requerimento de qualquer interessado ou do Ministério Público, declarará a ausência, e nomear-lhe-á curador." }
      ],
      simples: "Quando uma pessoa <mark>some</mark> de casa, <mark>sem dar notícia</mark> e <mark>sem deixar ninguém</mark> para cuidar das coisas dela, alguém precisa tomar conta dos bens. Então o juiz <mark>declara a ausência</mark> e nomeia um <mark>curador</mark> para administrá-los.",
      itens: [
        { r: "Requisitos", t: "1) A pessoa desapareceu do seu domicílio; 2) não há notícias dela; 3) ela não deixou representante ou procurador para cuidar dos bens." },
        { r: "Quem pede", t: "Qualquer <b>interessado</b> (cônjuge, filhos, sócios, credores) ou o <b>Ministério Público</b>." },
        { r: "O que o juiz faz", t: "<b>Declara a ausência</b> e nomeia um <b>curador</b>, que vai administrar os bens enquanto a pessoa está sumida." }
      ],
      exemplo: "O irmão do Seu Tonico saiu de casa há um ano e nunca mais deu notícia. Ele tinha um apartamento alugado para terceiros e uma conta no banco, e ninguém podia receber os aluguéis nem pagar as contas. A família pediu ao juiz a declaração de ausência. O juiz nomeou a cunhada como curadora, e ela passou a cuidar do apartamento.",
      atencao: "O processo de ausência tem <b>três fases</b>:<br>1) <b>curadoria dos bens do ausente</b> (arts. 22 a 25): alguém cuida dos bens;<br>2) <b>sucessão provisória</b> (arts. 26 a 36): um ano depois da arrecadação dos bens (ou três anos, se ele deixou procurador), os herdeiros podem ficar com os bens, mas de forma provisória;<br>3) <b>sucessão definitiva</b> (arts. 37 a 39): dez anos depois, os herdeiros ficam definitivamente com os bens, e a lei presume a morte (art. 6º).<br><br>Antes de tudo, é importante registrar o desaparecimento na polícia.",
      palavras: [
        { t: "Ausência", d: "Situação, declarada pelo juiz, de quem desapareceu sem notícias e sem deixar quem cuide dos seus bens." },
        { t: "Curador", d: "Pessoa nomeada pelo juiz para cuidar dos interesses ou dos bens de alguém que não pode fazê-lo." },
        { t: "Procurador", d: "Pessoa que recebeu de outra, por procuração, poderes para agir em seu nome." },
        { t: "Ministério Público", d: "Instituição que defende os interesses da sociedade e de pessoas vulneráveis. Seus membros são os promotores e procuradores." }
      ],
      licao: "pessoa-natural",
      relacionados: [6, 23, 25]
    },

    {
      n: 23,
      rotulo: "Art. 23",
      caminho: CAP3,
      texto: [
        { tipo: "caput", t: "Também se declarará a ausência, e se nomeará curador, quando o ausente deixar mandatário que não queira ou não possa exercer ou continuar o mandato, ou se os seus poderes forem insuficientes." }
      ],
      simples: "E se a pessoa que sumiu <mark>deixou alguém</mark> com procuração para cuidar das coisas dela? Em regra, essa pessoa cuida. Mas, se ela <mark>não quiser</mark>, <mark>não puder</mark> ou <mark>não tiver poderes suficientes</mark>, o juiz também declara a ausência e nomeia um curador.",
      itens: [
        { r: "Não queira", t: "O procurador desistiu de cuidar dos bens." },
        { r: "Não possa", t: "O procurador morreu, ficou doente ou se mudou para longe." },
        { r: "Poderes insuficientes", t: "A procuração só dava poderes para algumas coisas. Por exemplo, para receber o aluguel, mas não para pagar o IPTU ou fazer reformas urgentes." }
      ],
      exemplo: "Antes de desaparecer, o irmão do Seu Tonico tinha dado uma procuração a um amigo, só para receber os aluguéis. Quando o telhado do apartamento começou a cair, o amigo não tinha poderes para contratar a reforma. A família pediu ao juiz a declaração de ausência, e foi nomeado um curador com poderes para cuidar de tudo.",
      atencao: "Este artigo completa o art. 22. Lá, a pessoa não deixou ninguém. Aqui, ela deixou alguém, mas essa pessoa não resolve o problema.",
      palavras: [
        { t: "Mandatário", d: "Quem recebeu um mandato, ou seja, poderes para agir em nome de outra pessoa. É o mesmo que procurador." },
        { t: "Mandato", d: "Contrato pelo qual alguém dá a outra pessoa poderes para agir em seu nome. A procuração é o documento que o formaliza." }
      ],
      licao: "pessoa-natural",
      relacionados: [22, 24]
    },

    {
      n: 24,
      rotulo: "Art. 24",
      caminho: CAP3,
      texto: [
        { tipo: "caput", t: "O juiz, que nomear o curador, fixar-lhe-á os poderes e obrigações, conforme as circunstâncias, observando, no que for aplicável, o disposto a respeito dos tutores e curadores." }
      ],
      simples: "Quando o juiz nomeia o curador dos bens do ausente, ele também diz <mark>o que o curador pode fazer</mark> e <mark>quais são os deveres dele</mark>, de acordo com cada caso. Para completar, usam-se as regras que já existem para os <mark>tutores</mark> e <mark>curadores</mark>.",
      exemplo: "Ao nomear a cunhada do Seu Tonico como curadora, o juiz escreveu na decisão: ela pode receber os aluguéis, pagar as contas e fazer consertos urgentes, mas não pode vender o apartamento sem autorização. E deve prestar contas de tudo periodicamente.",
      atencao: "O curador cuida de bens que <b>não são dele</b>. Por isso, como os tutores e curadores do Direito de Família (arts. 1.728 e seguintes), em regra ele precisa <b>prestar contas</b> ao juiz e pedir autorização para atos mais graves, como vender bens.",
      palavras: [
        { t: "Tutor", d: "Pessoa nomeada para cuidar de uma criança ou adolescente que não tem os pais vivos ou com poder familiar." },
        { t: "Prestar contas", d: "Mostrar, com documentos, o que entrou, o que saiu e o que foi feito com o dinheiro ou os bens de outra pessoa." },
        { t: "Circunstâncias", d: "Os detalhes e as condições de cada caso." }
      ],
      licao: "pessoa-natural",
      relacionados: [22, 25]
    },

    {
      n: 25,
      rotulo: "Art. 25",
      caminho: CAP3,
      texto: [
        { tipo: "caput", t: "O cônjuge do ausente, sempre que não esteja separado judicialmente, ou de fato por mais de dois anos antes da declaração da ausência, será o seu legítimo curador." },
        { tipo: "paragrafo", r: "§ 1º", t: "Em falta do cônjuge, a curadoria dos bens do ausente incumbe aos pais ou aos descendentes, nesta ordem, não havendo impedimento que os iniba de exercer o cargo." },
        { tipo: "paragrafo", r: "§ 2º", t: "Entre os descendentes, os mais próximos precedem os mais remotos." },
        { tipo: "paragrafo", r: "§ 3º", t: "Na falta das pessoas mencionadas, compete ao juiz a escolha do curador." }
      ],
      simples: "Quem deve ser o curador dos bens de quem desapareceu? A lei faz uma <mark>fila</mark>: primeiro o <mark>marido ou a esposa</mark>; depois os <mark>pais</mark>; depois os <mark>filhos</mark> (e, se não houver, os netos); e, se não houver ninguém, o <mark>juiz escolhe</mark>.",
      itens: [
        { r: "Caput", t: "O <b>cônjuge</b> vem primeiro, desde que o casal não estivesse separado judicialmente nem separado de fato (morando separado) há mais de <b>dois anos</b> antes da declaração da ausência." },
        { r: "§ 1º", t: "Sem cônjuge, a curadoria vai para os <b>pais</b> e, depois deles, para os <b>descendentes</b>, nessa ordem, desde que não tenham algum impedimento." },
        { r: "§ 2º", t: "Entre os descendentes, os <b>mais próximos</b> vêm primeiro: os filhos antes dos netos, os netos antes dos bisnetos." },
        { r: "§ 3º", t: "Se não houver nenhuma dessas pessoas, o <b>juiz escolhe</b> o curador." }
      ],
      exemplo: "O irmão do Seu Tonico era casado, mas já estava separado de fato da esposa havia cinco anos quando desapareceu. Por isso, ela não pode ser a curadora. Como os pais dele já morreram, a curadoria passou para a filha dele, que é a descendente mais próxima.",
      atencao: "Os tribunais e a doutrina entendem que o <b>companheiro</b> da união estável tem o mesmo lugar do cônjuge nessa fila (Jornada de Direito Civil, Enunciado 97).<br><br>A referência a “separado judicialmente” continua no texto, mas, desde 2023, o Supremo Tribunal Federal entende que a separação judicial não existe mais como figura própria (veja o art. 10).",
      palavras: [
        { t: "Separação de fato", d: "Quando o casal deixa de viver junto, sem nenhum processo ou documento formal." },
        { t: "Curadoria", d: "O encargo de ser curador, cuidando dos bens ou interesses de outra pessoa." },
        { t: "Incumbir", d: "Caber como dever ou responsabilidade a alguém." },
        { t: "Descendentes mais próximos e mais remotos", d: "Os mais próximos são os filhos; os mais remotos, netos e bisnetos." }
      ],
      licao: "pessoa-natural",
      relacionados: [22, 24]
    }
  );
})();
