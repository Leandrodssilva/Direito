/* Código Civil explicado: arts. 40 a 69 (pessoas jurídicas, associações e fundações). Formato em js/codigo/0001-0005.js. */
window.CODIGO = window.CODIGO || { artigos: [] };
(function () {
  var GER = ["Parte Geral", "Livro I — Das Pessoas", "Título II — Das Pessoas Jurídicas", "Capítulo I — Disposições Gerais"];
  var ASS = ["Parte Geral", "Livro I — Das Pessoas", "Título II — Das Pessoas Jurídicas", "Capítulo II — Das Associações"];
  var FUN = ["Parte Geral", "Livro I — Das Pessoas", "Título II — Das Pessoas Jurídicas", "Capítulo III — Das Fundações"];

  window.CODIGO.artigos.push(
    {
      n: 40, rotulo: "Art. 40", caminho: GER,
      texto: [{ tipo: "caput", t: "As pessoas jurídicas são de direito público, interno ou externo, e de direito privado." }],
      simples: "Pessoa jurídica é uma “pessoa” criada pela lei, que não é de carne e osso: o governo, uma empresa, uma associação. Este artigo as divide em <mark>três grupos</mark>: as <mark>públicas internas</mark> (do Brasil), as <mark>públicas externas</mark> (países estrangeiros) e as <mark>privadas</mark>.",
      itens: [
        { r: "Direito público interno", t: "União, estados, municípios e outras entidades do governo brasileiro (art. 41)." },
        { r: "Direito público externo", t: "Outros países e organizações internacionais, como a ONU (art. 42)." },
        { r: "Direito privado", t: "Empresas, associações, fundações, igrejas e partidos (art. 44)." }
      ],
      exemplo: "No mesmo dia, Tio Beto pagou IPTU à Prefeitura (pessoa jurídica de direito público interno), recebeu um pedido de pães do consulado da Itália (país estrangeiro, de direito público externo) e comprou farinha de um moinho (empresa, de direito privado).",
      atencao: "A divisão importa porque as regras mudam. Os bens públicos, por exemplo, não podem ser adquiridos por usucapião, e o governo segue regras próprias para contratar.",
      palavras: [
        { t: "Pessoa jurídica", d: "Entidade formada por pessoas ou bens que a lei trata como sujeito de direitos e deveres, com patrimônio próprio." },
        { t: "Direito público", d: "Parte do Direito que trata do Estado e de suas relações com as pessoas." }
      ],
      licao: "pessoa-juridica", relacionados: [41, 42, 44]
    },
    {
      n: 41, rotulo: "Art. 41", caminho: GER,
      texto: [
        { tipo: "caput", t: "São pessoas jurídicas de direito público interno:" },
        { tipo: "inciso", r: "I", t: "a União;" },
        { tipo: "inciso", r: "II", t: "os Estados, o Distrito Federal e os Territórios;" },
        { tipo: "inciso", r: "III", t: "os Municípios;" },
        { tipo: "inciso", r: "IV", t: "as autarquias, inclusive as associações públicas;", nota: "Redação dada pela Lei nº 11.107, de 2005" },
        { tipo: "inciso", r: "V", t: "as demais entidades de caráter público criadas por lei." },
        { tipo: "paragrafo", r: "Parágrafo único.", t: "Salvo disposição em contrário, as pessoas jurídicas de direito público, a que se tenha dado estrutura de direito privado, regem-se, no que couber, quanto ao seu funcionamento, pelas normas deste Código." }
      ],
      simples: "Esta é a lista das pessoas jurídicas do <mark>governo brasileiro</mark>: a União, os estados, o Distrito Federal, os municípios, as autarquias e outras entidades públicas criadas por lei.",
      itens: [
        { r: "I", t: "<b>União:</b> o governo federal, o Brasil como um todo." },
        { r: "II", t: "<b>Estados, Distrito Federal e Territórios.</b> Hoje o Brasil não tem nenhum território federal, mas a Constituição permite criá-los." },
        { r: "III", t: "<b>Municípios:</b> as cidades." },
        { r: "IV", t: "<b>Autarquias</b>: entidades criadas por lei para um serviço público específico, como o INSS e as universidades federais. Também as <b>associações públicas</b>, que são consórcios entre entes públicos (Lei 11.107/2005)." },
        { r: "V", t: "<b>Outras entidades públicas criadas por lei</b>, como as fundações públicas de direito público." },
        { r: "Parágrafo único", t: "Se uma entidade pública for organizada com estrutura parecida com a de uma empresa privada, aplicam-se a ela, no que couber, as regras deste Código." }
      ],
      exemplo: "Lia quis saber quem cuida de cada coisa: a rua da casa dela é do Município; a rodovia que leva à praia é do Estado; a aposentadoria da Vovó Nina é paga pelo INSS, que é uma autarquia da União.",
      atencao: "Empresas públicas e sociedades de economia mista, como a Caixa Econômica Federal e a Petrobras, <b>não</b> estão nesta lista: elas são pessoas jurídicas de direito <b>privado</b>, embora controladas pelo governo.",
      palavras: [
        { t: "União", d: "A pessoa jurídica que representa o governo federal brasileiro." },
        { t: "Autarquia", d: "Entidade pública criada por lei para prestar um serviço específico, com autonomia, como o INSS." }
      ],
      licao: "pessoa-juridica", relacionados: [40, 43, 98]
    },
    {
      n: 42, rotulo: "Art. 42", caminho: GER,
      texto: [{ tipo: "caput", t: "São pessoas jurídicas de direito público externo os Estados estrangeiros e todas as pessoas que forem regidas pelo direito internacional público." }],
      simples: "Os <mark>outros países</mark> e as <mark>organizações internacionais</mark> (como a ONU e a Organização Mundial da Saúde) também são pessoas jurídicas para o Direito brasileiro. São as de direito público <mark>externo</mark>.",
      exemplo: "A embaixada da França em Brasília alugou um imóvel. Quem assinou o contrato foi a República Francesa, uma pessoa jurídica de direito público externo.",
      atencao: "Países estrangeiros têm algumas proteções especiais (as chamadas imunidades) e, em regra, não podem ser processados aqui sobre atos de governo deles. Mas, em relações comuns, como uma dívida de aluguel ou uma relação de trabalho, os tribunais brasileiros admitem processos.",
      palavras: [
        { t: "Estado estrangeiro", d: "Outro país, considerado como pessoa jurídica." },
        { t: "Direito internacional público", d: "Conjunto de regras que organiza as relações entre países e organizações internacionais." }
      ],
      licao: "pessoa-juridica", relacionados: [40]
    },
    {
      n: 43, rotulo: "Art. 43", caminho: GER,
      texto: [{ tipo: "caput", t: "As pessoas jurídicas de direito público interno são civilmente responsáveis por atos dos seus agentes que nessa qualidade causem danos a terceiros, ressalvado direito regressivo contra os causadores do dano, se houver, por parte destes, culpa ou dolo." }],
      simples: "Se um <mark>funcionário público</mark>, trabalhando, <mark>causar dano</mark> a alguém, quem paga é o <mark>governo</mark> (a União, o estado, o município). Depois, se o funcionário teve culpa, o governo pode <mark>cobrar dele</mark>.",
      exemplo: "Um caminhão de lixo da Prefeitura bateu no muro da padaria do Tio Beto. Ele cobra o conserto da Prefeitura, sem precisar provar a culpa do motorista. Se o motorista estava distraído no celular, a Prefeitura pode depois cobrar dele o que pagou.",
      atencao: "É a mesma regra do art. 37, § 6º, da Constituição: a responsabilidade do Estado é <b>objetiva</b>, ou seja, a vítima não precisa provar culpa. Basta provar o dano e que ele foi causado por um agente público trabalhando. Em 2019, o Supremo decidiu (Tema 940) que a vítima deve processar o Estado, e não diretamente o servidor.",
      palavras: [
        { t: "Agente público", d: "Qualquer pessoa que exerce uma função pública, como servidores e empregados do governo." },
        { t: "Direito regressivo", d: "Direito de quem pagou uma indenização de cobrar depois do verdadeiro culpado." },
        { t: "Dolo", d: "A intenção de causar o resultado." }
      ],
      licao: "culpa-e-risco", relacionados: [41]
    },
    {
      n: 44, rotulo: "Art. 44", caminho: GER,
      texto: [
        { tipo: "caput", t: "São pessoas jurídicas de direito privado:" },
        { tipo: "inciso", r: "I", t: "as associações;" },
        { tipo: "inciso", r: "II", t: "as sociedades;" },
        { tipo: "inciso", r: "III", t: "as fundações." },
        { tipo: "inciso", r: "IV", t: "as organizações religiosas;", nota: "Incluído pela Lei nº 10.825, de 2003" },
        { tipo: "inciso", r: "V", t: "os partidos políticos.", nota: "Incluído pela Lei nº 10.825, de 2003" },
        { tipo: "inciso", r: "VI", t: "(Revogado).", nota: "Revogado pela Lei nº 14.382, de 2022" },
        { tipo: "paragrafo", r: "§ 1º", t: "São livres a criação, a organização, a estruturação interna e o funcionamento das organizações religiosas, sendo vedado ao poder público negar-lhes reconhecimento ou registro dos atos constitutivos e necessários ao seu funcionamento.", nota: "Incluído pela Lei nº 10.825, de 2003" },
        { tipo: "paragrafo", r: "§ 2º", t: "As disposições concernentes às associações aplicam-se subsidiariamente às sociedades que são objeto do Livro II da Parte Especial deste Código.", nota: "Incluído pela Lei nº 10.825, de 2003" },
        { tipo: "paragrafo", r: "§ 3º", t: "Os partidos políticos serão organizados e funcionarão conforme o disposto em lei específica.", nota: "Incluído pela Lei nº 10.825, de 2003" }
      ],
      simples: "Esta é a lista das pessoas jurídicas <mark>privadas</mark>: as que não são do governo. São <mark>cinco tipos</mark>: associações, sociedades, fundações, organizações religiosas e partidos políticos.",
      itens: [
        { r: "I", t: "<b>Associações:</b> pessoas que se unem sem buscar lucro (clube, ONG, associação de moradores)." },
        { r: "II", t: "<b>Sociedades:</b> pessoas que se unem para ganhar dinheiro e dividir o lucro (as empresas)." },
        { r: "III", t: "<b>Fundações:</b> um patrimônio separado por alguém para uma finalidade social." },
        { r: "IV", t: "<b>Organizações religiosas:</b> igrejas, templos, centros religiosos." },
        { r: "V", t: "<b>Partidos políticos.</b>" },
        { r: "VI", t: "<b>Revogado.</b> Tratava da EIRELI (empresa individual de responsabilidade limitada). Em 2021, as EIRELIs foram transformadas em sociedades limitadas, e o inciso foi revogado em 2022. Hoje, quem quer empreender sozinho com patrimônio separado usa a <b>sociedade limitada unipessoal</b>." },
        { r: "§ 1º", t: "O governo não pode impedir a criação de igrejas nem se recusar a registrá-las. É a liberdade religiosa." },
        { r: "§ 2º", t: "As regras das associações servem de reserva para as sociedades, quando faltar regra específica." },
        { r: "§ 3º", t: "Os partidos seguem lei própria (Lei 9.096/1995)." }
      ],
      exemplo: "No bairro da Lia existem: a padaria do Tio Beto (sociedade), a associação de moradores (associação), a paróquia (organização religiosa), uma fundação que mantém a creche e o comitê de um partido.",
      atencao: "A diferença entre <b>associação</b> e <b>sociedade</b> é o lucro: a associação pode até ter receitas e sobras, mas não as divide entre os associados.",
      palavras: [
        { t: "Sociedade", d: "Pessoa jurídica formada por pessoas que se unem para exercer atividade econômica e dividir os lucros." },
        { t: "Subsidiariamente", d: "Como reserva, quando faltar uma regra específica." },
        { t: "EIRELI", d: "Antiga empresa individual de responsabilidade limitada, extinta em 2021 e transformada em sociedade limitada." }
      ],
      licao: "pessoa-juridica", relacionados: [45, 53, 62]
    },
    {
      n: 45, rotulo: "Art. 45", caminho: GER,
      texto: [
        { tipo: "caput", t: "Começa a existência legal das pessoas jurídicas de direito privado com a inscrição do ato constitutivo no respectivo registro, precedida, quando necessário, de autorização ou aprovação do Poder Executivo, averbando-se no registro todas as alterações por que passar o ato constitutivo." },
        { tipo: "paragrafo", r: "Parágrafo único.", t: "Decai em três anos o direito de anular a constituição das pessoas jurídicas de direito privado, por defeito do ato respectivo, contado o prazo da publicação de sua inscrição no registro." }
      ],
      simples: "Uma empresa ou associação <mark>“nasce”</mark> quando o documento que a cria (contrato social ou estatuto) é <mark>registrado</mark> no órgão certo. Algumas atividades ainda precisam de <mark>autorização do governo</mark> antes. E toda mudança no documento também precisa ser registrada.",
      itens: [
        { r: "Caput", t: "Sem registro, não existe pessoa jurídica. Empresas registram na <b>Junta Comercial</b>; associações e fundações, no <b>Cartório de Registro Civil de Pessoas Jurídicas</b>. Bancos e seguradoras, por exemplo, também precisam de autorização do governo. Cada alteração (mudança de endereço, de sócios) é averbada no registro." },
        { r: "Parágrafo único", t: "Se houve algum defeito na criação da pessoa jurídica, quem quiser anulá-la tem <b>3 anos</b>, contados da publicação do registro. Depois disso, o direito acaba (decadência)." }
      ],
      exemplo: "Tio Beto e o sócio assinaram o contrato social da padaria em janeiro, mas só registraram na Junta Comercial em março. Até março, a padaria não existia como pessoa jurídica: era apenas uma “sociedade em comum”, e os dois respondiam com seus próprios bens pelas dívidas.",
      atencao: "Funcionar sem registro tem um risco grande: os sócios respondem <b>pessoal e ilimitadamente</b> pelas dívidas (arts. 986 a 990).",
      palavras: [
        { t: "Ato constitutivo", d: "O documento que cria a pessoa jurídica: o contrato social (empresas) ou o estatuto (associações e fundações)." },
        { t: "Junta Comercial", d: "Órgão estadual onde se registram as empresas." },
        { t: "Decair", d: "Perder um direito porque o prazo para exercê-lo terminou." }
      ],
      licao: "pessoa-juridica", relacionados: [44, 46]
    },
    {
      n: 46, rotulo: "Art. 46", caminho: GER,
      texto: [
        { tipo: "caput", t: "O registro declarará:" },
        { tipo: "inciso", r: "I", t: "a denominação, os fins, a sede, o tempo de duração e o fundo social, quando houver;" },
        { tipo: "inciso", r: "II", t: "o nome e a individualização dos fundadores ou instituidores, e dos diretores;" },
        { tipo: "inciso", r: "III", t: "o modo por que se administra e representa, ativa e passivamente, judicial e extrajudicialmente;" },
        { tipo: "inciso", r: "IV", t: "se o ato constitutivo é reformável no tocante à administração, e de que modo;" },
        { tipo: "inciso", r: "V", t: "se os membros respondem, ou não, subsidiariamente, pelas obrigações sociais;" },
        { tipo: "inciso", r: "VI", t: "as condições de extinção da pessoa jurídica e o destino do seu patrimônio, nesse caso." }
      ],
      simples: "O registro funciona como a <mark>“certidão de nascimento”</mark> da pessoa jurídica. Este artigo diz <mark>o que precisa estar escrito</mark> nele, para que todos saibam quem ela é e como funciona.",
      itens: [
        { r: "I", t: "Nome, objetivo, endereço da sede, por quanto tempo vai existir e o patrimônio inicial (se houver)." },
        { r: "II", t: "Quem criou e quem dirige." },
        { r: "III", t: "Quem a administra e quem pode falar por ela, dentro e fora da Justiça." },
        { r: "IV", t: "Se as regras de administração podem ser mudadas, e como." },
        { r: "V", t: "Se os membros respondem, como reserva, pelas dívidas da pessoa jurídica." },
        { r: "VI", t: "Como ela pode acabar e para onde vai o patrimônio se isso acontecer." }
      ],
      exemplo: "Antes de fechar um contrato grande com a associação de moradores, o Tio Beto pediu a certidão do registro. Assim descobriu quem era o presidente e se ele podia assinar sozinho.",
      atencao: "Consultar o registro é uma boa prática antes de fazer negócio com uma pessoa jurídica: ele mostra quem pode assinar por ela.",
      palavras: [
        { t: "Denominação", d: "O nome da pessoa jurídica." },
        { t: "Sede", d: "O endereço principal de uma pessoa jurídica." },
        { t: "Fundo social", d: "O patrimônio inicial reservado para a pessoa jurídica." }
      ],
      licao: "pessoa-juridica", relacionados: [45, 47]
    },
    {
      n: 47, rotulo: "Art. 47", caminho: GER,
      texto: [{ tipo: "caput", t: "Obrigam a pessoa jurídica os atos dos administradores, exercidos nos limites de seus poderes definidos no ato constitutivo." }],
      simples: "Quando o <mark>administrador</mark> (o diretor, o presidente) faz algo <mark>dentro dos poderes</mark> que o estatuto ou contrato social lhe dá, quem fica <mark>obrigada</mark> é a pessoa jurídica.",
      exemplo: "O contrato social da padaria diz que o Tio Beto pode fazer compras de até R$ 50 mil sozinho. Quando ele comprou um forno de R$ 30 mil, quem ficou devendo foi a padaria, e não ele pessoalmente.",
      atencao: "E se o administrador passar dos limites? Os tribunais protegem quem negociou <b>de boa-fé</b> e não tinha como saber do limite (a chamada “teoria da aparência”). Por isso, para negócios grandes, vale conferir os poderes no registro.",
      palavras: [
        { t: "Administrador", d: "Pessoa encarregada de dirigir e representar a pessoa jurídica." }
      ],
      licao: "pessoa-juridica", relacionados: [46, 48]
    },
    {
      n: 48, rotulo: "Art. 48", caminho: GER,
      texto: [
        { tipo: "caput", t: "Se a pessoa jurídica tiver administração coletiva, as decisões se tomarão pela maioria de votos dos presentes, salvo se o ato constitutivo dispuser de modo diverso." },
        { tipo: "paragrafo", r: "Parágrafo único.", t: "Decai em três anos o direito de anular as decisões a que se refere este artigo, quando violarem a lei ou estatuto, ou forem eivadas de erro, dolo, simulação ou fraude." }
      ],
      simples: "Quando a pessoa jurídica é administrada por um <mark>grupo</mark> (uma diretoria, um conselho), as decisões são tomadas pela <mark>maioria dos presentes</mark>, a não ser que o estatuto diga outra coisa. Decisões ilegais podem ser anuladas em até <mark>3 anos</mark>.",
      itens: [
        { r: "Caput", t: "Regra da maioria dos <b>presentes</b> na reunião, não de todos os membros. O estatuto pode exigir outro número." },
        { r: "Parágrafo único", t: "Se a decisão desrespeitou a lei ou o estatuto, ou foi tomada com erro, dolo, simulação ou fraude, quem se sentir prejudicado tem <b>3 anos</b> para pedir a anulação." }
      ],
      exemplo: "A diretoria da associação de moradores tem 7 membros. Numa reunião vieram 5, e 3 votaram por reformar a quadra. A decisão foi aprovada pela maioria dos presentes.",
      palavras: [
        { t: "Administração coletiva", d: "Quando a pessoa jurídica é dirigida por um grupo, como uma diretoria." },
        { t: "Eivado", d: "Contaminado, com defeito." }
      ],
      licao: "pessoa-juridica", relacionados: [47]
    },
    {
      n: 48, letra: "A", rotulo: "Art. 48-A", caminho: GER,
      texto: [{ tipo: "caput", t: "As pessoas jurídicas de direito privado, sem prejuízo do previsto em legislação especial e em seus atos constitutivos, poderão realizar suas assembleias gerais por meio eletrônico, inclusive para os fins do disposto no art. 59 deste Código, respeitados os direitos previstos de participação e de manifestação.", nota: "Incluído pela Lei nº 14.382, de 2022" }],
      simples: "Associações, empresas e outras pessoas jurídicas privadas podem fazer <mark>assembleias pela internet</mark>, por videochamada, desde que todos possam <mark>participar e falar</mark>.",
      exemplo: "Na pandemia, a associação de moradores começou a fazer assembleias por videochamada. A lei agora deixa claro que isso vale, inclusive para eleger ou tirar a diretoria e mudar o estatuto.",
      atencao: "A reunião on-line precisa garantir os mesmos direitos da presencial: todos devem conseguir entrar, ouvir, falar e votar. Este artigo foi acrescentado em 2022, por isso tem a letra “A”.",
      palavras: [
        { t: "Assembleia geral", d: "Reunião de todos os membros de uma pessoa jurídica para tomar decisões importantes." }
      ],
      licao: "pessoa-juridica", relacionados: [48, 59]
    },
    {
      n: 49, rotulo: "Art. 49", caminho: GER,
      texto: [{ tipo: "caput", t: "Se a administração da pessoa jurídica vier a faltar, o juiz, a requerimento de qualquer interessado, nomear-lhe-á administrador provisório." }],
      simples: "Se a pessoa jurídica ficar <mark>sem ninguém para administrá-la</mark> (o presidente morreu, a diretoria renunciou), qualquer interessado pode pedir ao juiz que nomeie um <mark>administrador temporário</mark>.",
      exemplo: "O presidente da associação de moradores morreu e o mandato do restante da diretoria tinha acabado. Ninguém podia pagar as contas nem convocar eleições. Um morador pediu ao juiz, que nomeou um administrador provisório até a nova eleição.",
      palavras: [
        { t: "Administrador provisório", d: "Pessoa nomeada pelo juiz para administrar temporariamente uma pessoa jurídica que ficou sem direção." }
      ],
      licao: "pessoa-juridica", relacionados: [47]
    },
    {
      n: 49, letra: "A", rotulo: "Art. 49-A", caminho: GER,
      texto: [
        { tipo: "caput", t: "A pessoa jurídica não se confunde com os seus sócios, associados, instituidores ou administradores.", nota: "Incluído pela Lei nº 13.874, de 2019" },
        { tipo: "paragrafo", r: "Parágrafo único.", t: "A autonomia patrimonial das pessoas jurídicas é um instrumento lícito de alocação e segregação de riscos, estabelecido pela lei com a finalidade de estimular empreendimentos, para a geração de empregos, tributo, renda e inovação em benefício de todos.", nota: "Incluído pela Lei nº 13.874, de 2019" }
      ],
      simples: "A empresa é uma <mark>pessoa diferente</mark> dos seus sócios. O dinheiro, os bens e as dívidas dela são <mark>dela</mark>, e não dos sócios. E a lei diz que isso é <mark>bom e legítimo</mark>: serve para incentivar as pessoas a empreender.",
      itens: [
        { r: "Caput", t: "Pessoa jurídica ≠ sócios. Cada um tem seu patrimônio." },
        { r: "Parágrafo único", t: "Separar os patrimônios é uma forma lícita de <b>separar os riscos</b>. Se o negócio der errado, o sócio não perde a casa da família. Isso estimula empresas, empregos e inovação." }
      ],
      exemplo: "A padaria do Tio Beto ficou devendo ao moinho. Em regra, o moinho cobra da padaria, não da casa do Tio Beto. Foi exatamente por isso que ele abriu uma sociedade limitada, e não trabalhou só no próprio nome.",
      atencao: "A separação tem limite: se os sócios abusarem dela, misturando patrimônios ou usando a empresa para fraudar, o juiz pode desconsiderá-la (art. 50). Este artigo veio com a Lei da Liberdade Econômica, de 2019.",
      palavras: [
        { t: "Autonomia patrimonial", d: "A separação entre o patrimônio da pessoa jurídica e o de seus sócios." },
        { t: "Segregação de riscos", d: "Separar os riscos de um negócio para que não atinjam todo o patrimônio do empreendedor." }
      ],
      licao: "pessoa-juridica", relacionados: [50]
    },
    {
      n: 50, rotulo: "Art. 50", caminho: GER,
      texto: [
        { tipo: "caput", t: "Em caso de abuso da personalidade jurídica, caracterizado pelo desvio de finalidade ou pela confusão patrimonial, pode o juiz, a requerimento da parte, ou do Ministério Público quando lhe couber intervir no processo, desconsiderá-la para que os efeitos de certas e determinadas relações de obrigações sejam estendidos aos bens particulares de administradores ou de sócios da pessoa jurídica beneficiados direta ou indiretamente pelo abuso.", nota: "Redação dada pela Lei nº 13.874, de 2019" },
        { tipo: "paragrafo", r: "§ 1º", t: "Para os fins do disposto neste artigo, desvio de finalidade é a utilização da pessoa jurídica com o propósito de lesar credores e para a prática de atos ilícitos de qualquer natureza.", nota: "Redação dada pela Lei nº 14.195, de 2021" },
        { tipo: "paragrafo", r: "§ 2º", t: "Entende-se por confusão patrimonial a ausência de separação de fato entre os patrimônios, caracterizada por:", nota: "Incluído pela Lei nº 13.874, de 2019" },
        { tipo: "inciso", r: "I", t: "cumprimento repetitivo pela sociedade de obrigações do sócio ou do administrador ou vice-versa;" },
        { tipo: "inciso", r: "II", t: "transferência de ativos ou de passivos sem efetivas contraprestações, exceto os de valor proporcionalmente insignificante; e" },
        { tipo: "inciso", r: "III", t: "outros atos de descumprimento da autonomia patrimonial." },
        { tipo: "paragrafo", r: "§ 3º", t: "O disposto no caput e nos §§ 1º e 2º deste artigo também se aplica à extensão das obrigações de sócios ou de administradores à pessoa jurídica.", nota: "Incluído pela Lei nº 13.874, de 2019" },
        { tipo: "paragrafo", r: "§ 4º", t: "A mera existência de grupo econômico sem a presença dos requisitos de que trata o caput deste artigo não autoriza a desconsideração da personalidade da pessoa jurídica.", nota: "Incluído pela Lei nº 13.874, de 2019" },
        { tipo: "paragrafo", r: "§ 5º", t: "Não constitui desvio de finalidade a mera expansão ou a alteração da finalidade original da atividade econômica específica da pessoa jurídica.", nota: "Incluído pela Lei nº 13.874, de 2019" }
      ],
      simples: "Se os sócios <mark>abusam</mark> da empresa, usando-a para <mark>enganar credores</mark> ou <mark>misturando</mark> o dinheiro dela com o deles, o juiz pode <mark>“levantar o véu”</mark> da empresa e cobrar as dívidas dos <mark>bens particulares</mark> dos sócios ou administradores que se beneficiaram.",
      itens: [
        { r: "Caput", t: "Dois tipos de abuso permitem a desconsideração: <b>desvio de finalidade</b> e <b>confusão patrimonial</b>. Quem pede é a parte prejudicada (ou o Ministério Público). O juiz não faz isso sozinho, e só para dívidas específicas, alcançando os sócios ou administradores que se beneficiaram." },
        { r: "§ 1º", t: "<b>Desvio de finalidade</b>: usar a empresa de propósito para prejudicar credores ou cometer atos ilícitos." },
        { r: "§ 2º", t: "<b>Confusão patrimonial</b>: não haver separação real entre o dinheiro da empresa e o dos sócios. Exemplos: I) a empresa paga sempre as contas pessoais do sócio (ou o contrário); II) bens passam de um para o outro sem pagamento; III) outros atos que desrespeitam a separação." },
        { r: "§ 3º", t: "Vale também ao contrário (<b>desconsideração inversa</b>): se o sócio esconde os bens <b>dele</b> dentro da empresa, a dívida pessoal dele pode ser cobrada da empresa." },
        { r: "§ 4º", t: "Fazer parte de um <b>grupo de empresas</b>, sozinho, não basta para desconsiderar. Precisa haver abuso." },
        { r: "§ 5º", t: "Apenas <b>mudar ou ampliar</b> a atividade da empresa não é desvio de finalidade." }
      ],
      exemplo: "Um vizinho tinha uma construtora que não entregou um apartamento. Descobriu-se que ele pagava a escola dos filhos, a viagem da família e o carro dele com o dinheiro da empresa, e que a empresa ficou sem nada. O juiz desconsiderou a personalidade jurídica, e o comprador pôde cobrar dos bens pessoais dele.",
      atencao: "No <b>Código de Defesa do Consumidor</b> (art. 28) as regras são mais fáceis para a vítima: basta que a empresa seja um obstáculo para o consumidor receber. O processo para pedir a desconsideração está nos arts. 133 a 137 do Código de Processo Civil.",
      palavras: [
        { t: "Desconsideração da personalidade jurídica", d: "Quando o juiz ignora a separação entre empresa e sócios, por abuso, e cobra as dívidas dos bens pessoais deles." },
        { t: "Desvio de finalidade", d: "Uso da pessoa jurídica para lesar credores ou praticar atos ilícitos." },
        { t: "Confusão patrimonial", d: "Mistura entre o patrimônio da empresa e o dos sócios." },
        { t: "Desconsideração inversa", d: "Quando os bens da empresa respondem pelas dívidas pessoais de um sócio que escondeu seu patrimônio nela." }
      ],
      licao: "pessoa-juridica", relacionados: [49, 52]
    },
    {
      n: 51, rotulo: "Art. 51", caminho: GER,
      texto: [
        { tipo: "caput", t: "Nos casos de dissolução da pessoa jurídica ou cassada a autorização para seu funcionamento, ela subsistirá para os fins de liquidação, até que esta se conclua." },
        { tipo: "paragrafo", r: "§ 1º", t: "Far-se-á, no registro onde a pessoa jurídica estiver inscrita, a averbação de sua dissolução." },
        { tipo: "paragrafo", r: "§ 2º", t: "As disposições para a liquidação das sociedades aplicam-se, no que couber, às demais pessoas jurídicas de direito privado." },
        { tipo: "paragrafo", r: "§ 3º", t: "Encerrada a liquidação, promover-se-á o cancelamento da inscrição da pessoa jurídica." }
      ],
      simples: "Uma pessoa jurídica <mark>não some de uma hora para outra</mark>. Quando decide acabar, ela continua existindo até <mark>pagar as dívidas</mark>, receber o que tem a receber e dividir o que sobrar (a <mark>liquidação</mark>). Só então o registro é cancelado.",
      itens: [
        { r: "Caput", t: "Mesmo dissolvida (ou com a autorização de funcionamento cassada), ela continua existindo para a liquidação." },
        { r: "§ 1º", t: "A dissolução é anotada (averbada) no registro." },
        { r: "§ 2º", t: "As regras de liquidação das empresas servem para as outras pessoas jurídicas privadas." },
        { r: "§ 3º", t: "Terminada a liquidação, o registro é cancelado. Aí ela deixa de existir, como uma “morte” da pessoa jurídica." }
      ],
      exemplo: "Tio Beto e o sócio decidiram fechar a padaria. Primeiro, venderam os equipamentos, pagaram os funcionários e o moinho, e só então dividiram o que sobrou e pediram a baixa na Junta Comercial e na Receita.",
      atencao: "Simplesmente “abandonar” a empresa, sem liquidação regular, é perigoso: os tribunais podem considerar isso dissolução irregular e responsabilizar os sócios, principalmente por dívidas de impostos.",
      palavras: [
        { t: "Dissolução", d: "Decisão ou fato que dá início ao fim de uma pessoa jurídica." },
        { t: "Liquidação", d: "Fase em que a pessoa jurídica que vai acabar paga as dívidas, recebe os créditos e divide o que sobrar." }
      ],
      licao: "pessoa-juridica", relacionados: [45, 69]
    },
    {
      n: 52, rotulo: "Art. 52", caminho: GER,
      texto: [{ tipo: "caput", t: "Aplica-se às pessoas jurídicas, no que couber, a proteção dos direitos da personalidade." }],
      simples: "Empresas e associações também têm <mark>nome</mark>, <mark>reputação</mark> e <mark>imagem</mark> a proteger. Os direitos da personalidade (arts. 11 a 21) valem para elas <mark>naquilo que fizer sentido</mark>.",
      exemplo: "Um concorrente espalhou nas redes sociais que a padaria do Tio Beto usava farinha estragada, o que era mentira. As vendas caíram. A padaria pode exigir a retirada das publicações e pedir indenização por dano moral.",
      atencao: "“No que couber”: uma empresa tem direito ao nome, à imagem e à boa reputação, mas não, por exemplo, à integridade física. Pela Súmula 227 do STJ, “a pessoa jurídica pode sofrer dano moral”.",
      licao: "direitos-da-personalidade", relacionados: [11, 12, 20]
    },
    {
      n: 53, rotulo: "Art. 53", caminho: ASS,
      texto: [
        { tipo: "caput", t: "Constituem-se as associações pela união de pessoas que se organizem para fins não econômicos." },
        { tipo: "paragrafo", r: "Parágrafo único.", t: "Não há, entre os associados, direitos e obrigações recíprocos." }
      ],
      simples: "Associação é um grupo de pessoas que se junta para um objetivo <mark>sem fins lucrativos</mark>: esporte, cultura, caridade, defesa do bairro. E os associados <mark>não têm obrigações uns com os outros</mark>: cada um tem obrigações com a associação.",
      itens: [
        { r: "Caput", t: "“Fins não econômicos” quer dizer que o objetivo não é dar lucro aos associados. A associação pode cobrar mensalidade, vender rifas e ter dinheiro em caixa, mas o que sobrar fica para a própria associação." },
        { r: "Parágrafo único", t: "Os associados se ligam à associação, não entre si. Se um associado não paga a mensalidade, quem cobra é a associação, e não os outros associados." }
      ],
      exemplo: "Os vizinhos criaram a “Associação Amigos da Praça”. Todos pagam R$ 20 por mês, e o dinheiro é usado para plantar árvores e consertar os bancos. Ninguém recebe lucro.",
      palavras: [
        { t: "Associação", d: "União de pessoas organizada para fins não econômicos, como um clube, uma ONG ou uma associação de moradores." },
        { t: "Fins não econômicos", d: "Objetivos que não visam ao lucro para os membros." },
        { t: "Recíproco", d: "Mútuo, de um para o outro." }
      ],
      licao: "pessoa-juridica", relacionados: [44, 54]
    },
    {
      n: 54, rotulo: "Art. 54", caminho: ASS,
      texto: [
        { tipo: "caput", t: "Sob pena de nulidade, o estatuto das associações conterá:" },
        { tipo: "inciso", r: "I", t: "a denominação, os fins e a sede da associação;" },
        { tipo: "inciso", r: "II", t: "os requisitos para a admissão, demissão e exclusão dos associados;" },
        { tipo: "inciso", r: "III", t: "os direitos e deveres dos associados;" },
        { tipo: "inciso", r: "IV", t: "as fontes de recursos para sua manutenção;" },
        { tipo: "inciso", r: "V", t: "o modo de constituição e de funcionamento dos órgãos deliberativos;", nota: "Redação dada pela Lei nº 11.127, de 2005" },
        { tipo: "inciso", r: "VI", t: "as condições para a alteração das disposições estatutárias e para a dissolução." },
        { tipo: "inciso", r: "VII", t: "a forma de gestão administrativa e de aprovação das respectivas contas.", nota: "Incluído pela Lei nº 11.127, de 2005" }
      ],
      simples: "O <mark>estatuto</mark> é o “livro de regras” da associação. Este artigo lista o que <mark>obrigatoriamente</mark> precisa estar nele. Se faltar algum item, o estatuto é <mark>nulo</mark>.",
      itens: [
        { r: "I", t: "Nome, objetivo e endereço." },
        { r: "II", t: "Como alguém entra, sai por vontade própria (demissão) ou é excluído." },
        { r: "III", t: "Direitos e deveres dos associados." },
        { r: "IV", t: "De onde vem o dinheiro: mensalidades, doações, eventos." },
        { r: "V", t: "Como funcionam os órgãos que decidem (assembleia, diretoria, conselho)." },
        { r: "VI", t: "Como mudar o estatuto e como encerrar a associação." },
        { r: "VII", t: "Como a associação é administrada e como as contas são aprovadas." }
      ],
      exemplo: "Para registrar a “Associação Amigos da Praça” no cartório, os vizinhos escreveram um estatuto. O cartório só aceitou depois que incluíram como as contas seriam aprovadas (inciso VII), que tinham esquecido.",
      palavras: [
        { t: "Estatuto", d: "Documento com as regras básicas de uma associação ou fundação." },
        { t: "Órgão deliberativo", d: "Grupo que toma as decisões de uma pessoa jurídica, como a assembleia geral." }
      ],
      licao: "pessoa-juridica", relacionados: [53, 57, 59]
    },
    {
      n: 55, rotulo: "Art. 55", caminho: ASS,
      texto: [{ tipo: "caput", t: "Os associados devem ter iguais direitos, mas o estatuto poderá instituir categorias com vantagens especiais." }],
      simples: "Em regra, todos os associados têm os <mark>mesmos direitos</mark>. Mas o estatuto pode criar <mark>categorias</mark> diferentes, com algumas <mark>vantagens especiais</mark>.",
      exemplo: "O clube do bairro tem sócios comuns, sócios-fundadores (que não pagam mensalidade) e sócios-atletas (que usam as quadras de graça). Isso é permitido porque está no estatuto. Mas, dentro da mesma categoria, todos têm direitos iguais.",
      licao: "pessoa-juridica", relacionados: [53, 54]
    },
    {
      n: 56, rotulo: "Art. 56", caminho: ASS,
      texto: [
        { tipo: "caput", t: "A qualidade de associado é intransmissível, se o estatuto não dispuser o contrário." },
        { tipo: "paragrafo", r: "Parágrafo único.", t: "Se o associado for titular de quota ou fração ideal do patrimônio da associação, a transferência daquela não importará, de per si, na atribuição da qualidade de associado ao adquirente ou ao herdeiro, salvo disposição diversa do estatuto." }
      ],
      simples: "Ser associado é algo <mark>pessoal</mark>: não dá para vender nem deixar de herança, a não ser que o estatuto permita. E, mesmo que alguém compre ou herde uma <mark>cota</mark> do patrimônio do clube, isso <mark>não o torna associado</mark> automaticamente.",
      itens: [
        { r: "Caput", t: "A condição de associado não passa a outra pessoa, salvo se o estatuto permitir." },
        { r: "Parágrafo único", t: "Alguns clubes vendem “títulos” ou cotas do patrimônio. Quem compra ou herda o título não vira associado automaticamente: precisa ser admitido, a não ser que o estatuto diga o contrário." }
      ],
      exemplo: "O avô do Pedrinho tinha um título do clube de campo. Quando ele morreu, o Pedrinho herdou o título, mas teve de passar pelo processo de admissão do clube para poder frequentá-lo como associado.",
      licao: "pessoa-juridica", relacionados: [53, 61]
    },
    {
      n: 57, rotulo: "Art. 57", caminho: ASS,
      texto: [
        { tipo: "caput", t: "A exclusão do associado só é admissível havendo justa causa, assim reconhecida em procedimento que assegure direito de defesa e de recurso, nos termos previstos no estatuto.", nota: "Redação dada pela Lei nº 11.127, de 2005" },
        { tipo: "paragrafo", r: "Parágrafo único.", t: "(Revogado).", nota: "Revogado pela Lei nº 11.127, de 2005" }
      ],
      simples: "Um associado só pode ser <mark>expulso</mark> se houver um <mark>motivo justo</mark> e depois de um processo em que ele possa <mark>se defender</mark> e <mark>recorrer</mark> da decisão.",
      exemplo: "A diretoria do clube quis expulsar o Seu Tonico porque ele reclamou do preço da mensalidade numa reunião. Não pode: reclamar não é justa causa. E, mesmo que houvesse motivo, ele teria direito de apresentar sua defesa e recorrer.",
      atencao: "É uma aplicação do direito de defesa (contraditório e ampla defesa), que vale também nas relações entre particulares. O parágrafo único que existia antes, revogado em 2005, permitia recurso à assembleia; hoje a regra geral está no próprio caput.",
      palavras: [
        { t: "Justa causa", d: "Motivo sério e legítimo, previsto nas regras, que justifica uma punição." },
        { t: "Direito de defesa", d: "Direito de saber do que é acusado e de apresentar suas razões e provas antes de ser punido." }
      ],
      licao: "pessoa-juridica", relacionados: [54, 58]
    },
    {
      n: 58, rotulo: "Art. 58", caminho: ASS,
      texto: [{ tipo: "caput", t: "Nenhum associado poderá ser impedido de exercer direito ou função que lhe tenha sido legitimamente conferido, a não ser nos casos e pela forma previstos na lei ou no estatuto." }],
      simples: "Se um associado tem um <mark>direito</mark> (votar, usar a piscina) ou uma <mark>função</mark> (tesoureiro, conselheiro) dados de forma correta, ninguém pode <mark>impedi-lo</mark> de exercê-los, a não ser nos casos previstos na lei ou no estatuto.",
      exemplo: "Dona Cida foi eleita tesoureira da associação. O presidente, que não gostava dela, trocou a senha do banco para ela não ter acesso. Isso é proibido: ela foi eleita legitimamente e só pode ser afastada nos casos e na forma previstos no estatuto.",
      licao: "pessoa-juridica", relacionados: [57]
    },
    {
      n: 59, rotulo: "Art. 59", caminho: ASS,
      texto: [
        { tipo: "caput", t: "Compete privativamente à assembléia geral:", nota: "Redação dada pela Lei nº 11.127, de 2005" },
        { tipo: "inciso", r: "I", t: "destituir os administradores;", nota: "Redação dada pela Lei nº 11.127, de 2005" },
        { tipo: "inciso", r: "II", t: "alterar o estatuto.", nota: "Redação dada pela Lei nº 11.127, de 2005" },
        { tipo: "paragrafo", r: "Parágrafo único.", t: "Para as deliberações a que se referem os incisos I e II deste artigo é exigido deliberação da assembléia especialmente convocada para esse fim, cujo quorum será o estabelecido no estatuto, bem como os critérios de eleição dos administradores.", nota: "Redação dada pela Lei nº 11.127, de 2005" }
      ],
      simples: "Duas decisões importantes só podem ser tomadas pela <mark>assembleia geral</mark> (a reunião de todos os associados): <mark>tirar a diretoria</mark> e <mark>mudar o estatuto</mark>. E, para isso, a assembleia precisa ser <mark>convocada especialmente</mark> para esse assunto.",
      itens: [
        { r: "I", t: "Só a assembleia pode destituir (tirar do cargo) os administradores." },
        { r: "II", t: "Só a assembleia pode alterar o estatuto." },
        { r: "Parágrafo único", t: "A assembleia precisa ser convocada com esse objetivo declarado, e o número mínimo de presentes ou de votos (quórum) é o que o estatuto definir. O estatuto também define como os administradores são eleitos." }
      ],
      exemplo: "Os moradores queriam tirar o presidente da associação. Não bastava levantar a questão numa reunião qualquer: foi preciso convocar uma assembleia com o aviso “pauta: destituição do presidente”, seguindo o quórum do estatuto.",
      atencao: "Desde 2022, essas assembleias também podem ser feitas por meio eletrônico (art. 48-A).",
      palavras: [
        { t: "Destituir", d: "Tirar alguém de um cargo antes do fim do mandato." },
        { t: "Quórum", d: "Número mínimo de pessoas presentes ou de votos exigido para uma reunião ou decisão valer." },
        { t: "Privativamente", d: "De forma exclusiva: só aquele órgão pode decidir." }
      ],
      licao: "pessoa-juridica", relacionados: [48, 54, 60]
    },
    {
      n: 60, rotulo: "Art. 60", caminho: ASS,
      texto: [{ tipo: "caput", t: "A convocação dos órgãos deliberativos far-se-á na forma do estatuto, garantido a 1/5 (um quinto) dos associados o direito de promovê-la.", nota: "Redação dada pela Lei nº 11.127, de 2005" }],
      simples: "As reuniões da associação são <mark>convocadas</mark> como o estatuto mandar. Mas, se a diretoria não quiser chamar, <mark>1/5 dos associados</mark> pode convocar a reunião por conta própria.",
      exemplo: "A associação tem 100 associados, e a diretoria se recusava a convocar uma assembleia para discutir as contas. Vinte associados (1/5) assinaram a convocação e a reunião aconteceu.",
      atencao: "É uma proteção da minoria: impede que a diretoria simplesmente se recuse a reunir os associados.",
      licao: "pessoa-juridica", relacionados: [59]
    },
    {
      n: 61, rotulo: "Art. 61", caminho: ASS,
      texto: [
        { tipo: "caput", t: "Dissolvida a associação, o remanescente do seu patrimônio líquido, depois de deduzidas, se for o caso, as quotas ou frações ideais referidas no parágrafo único do art. 56, será destinado à entidade de fins não econômicos designada no estatuto, ou, omisso este, por deliberação dos associados, à instituição municipal, estadual ou federal, de fins idênticos ou semelhantes." },
        { tipo: "paragrafo", r: "§ 1º", t: "Por cláusula do estatuto ou, no seu silêncio, por deliberação dos associados, podem estes, antes da destinação do remanescente referida neste artigo, receber em restituição, atualizado o respectivo valor, as contribuições que tiverem prestado ao patrimônio da associação." },
        { tipo: "paragrafo", r: "§ 2º", t: "Não existindo no Município, no Estado, no Distrito Federal ou no Território, em que a associação tiver sede, instituição nas condições indicadas neste artigo, o que remanescer do seu patrimônio se devolverá à Fazenda do Estado, do Distrito Federal ou da União." }
      ],
      simples: "Quando uma associação acaba, o que <mark>sobra</mark> do patrimônio não é dividido como lucro entre os associados. Vai para <mark>outra entidade sem fins lucrativos</mark>, de preferência com objetivo parecido.",
      itens: [
        { r: "Caput", t: "Primeiro, descontam-se as cotas dos associados que tinham títulos (art. 56). O restante vai para a entidade indicada no estatuto; se ele não indicar, os associados escolhem uma instituição pública com fins iguais ou parecidos." },
        { r: "§ 1º", t: "Se o estatuto ou os associados decidirem, cada associado pode receber de volta, com correção, o que <b>contribuiu para o patrimônio</b> (não as mensalidades comuns, mas aportes ao patrimônio)." },
        { r: "§ 2º", t: "Se não houver nenhuma instituição assim no lugar, o que sobrar vai para o Estado, o Distrito Federal ou a União." }
      ],
      exemplo: "A “Associação Amigos da Praça” acabou, e sobraram R$ 5 mil em caixa. Como o estatuto mandava, o dinheiro foi doado a outra associação ambiental da cidade.",
      licao: "pessoa-juridica", relacionados: [51, 53, 56]
    },
    {
      n: 62, rotulo: "Art. 62", caminho: FUN,
      texto: [
        { tipo: "caput", t: "Para criar uma fundação, o seu instituidor fará, por escritura pública ou testamento, dotação especial de bens livres, especificando o fim a que se destina, e declarando, se quiser, a maneira de administrá-la." },
        { tipo: "paragrafo", r: "Parágrafo único.", t: "A fundação somente poderá constituir-se para fins de:", nota: "Redação dada pela Lei nº 13.151, de 2015" },
        { tipo: "inciso", r: "I", t: "assistência social;" },
        { tipo: "inciso", r: "II", t: "cultura, defesa e conservação do patrimônio histórico e artístico;" },
        { tipo: "inciso", r: "III", t: "educação;" },
        { tipo: "inciso", r: "IV", t: "saúde;" },
        { tipo: "inciso", r: "V", t: "segurança alimentar e nutricional;" },
        { tipo: "inciso", r: "VI", t: "defesa, preservação e conservação do meio ambiente e promoção do desenvolvimento sustentável;" },
        { tipo: "inciso", r: "VII", t: "pesquisa científica, desenvolvimento de tecnologias alternativas, modernização de sistemas de gestão, produção e divulgação de informações e conhecimentos técnicos e científicos;" },
        { tipo: "inciso", r: "VIII", t: "promoção da ética, da cidadania, da democracia e dos direitos humanos;" },
        { tipo: "inciso", r: "IX", t: "atividades religiosas; e" },
        { tipo: "inciso", r: "X", t: "(VETADO)." }
      ],
      simples: "<mark>Fundação</mark> é quando alguém <mark>separa uma parte dos seus bens</mark> e diz: “isto aqui vai servir para sempre a tal finalidade”. É feita por <mark>escritura pública</mark> ou por <mark>testamento</mark>, e só pode ter <mark>fins sociais</mark>, como os da lista.",
      itens: [
        { r: "Caput", t: "O instituidor (quem cria) faz uma <b>dotação</b>: separa bens livres (sem dívidas ou ônus), diz para que servem e, se quiser, como a fundação será administrada. Precisa ser por escritura pública (em vida) ou testamento (para depois da morte)." },
        { r: "Parágrafo único", t: "As finalidades permitidas: I) assistência social; II) cultura e patrimônio histórico; III) educação; IV) saúde; V) alimentação; VI) meio ambiente; VII) pesquisa e ciência; VIII) ética, cidadania, democracia e direitos humanos; IX) religião. O inciso X foi vetado pelo Presidente da República." }
      ],
      exemplo: "Uma senhora rica do bairro, sem filhos, deixou em testamento um prédio e uma quantia em dinheiro para criar a “Fundação Livro Aberto”, para manter uma biblioteca gratuita. Depois da morte dela, a fundação foi criada com esses bens.",
      atencao: "Na <b>associação</b>, o centro são as <b>pessoas</b>. Na <b>fundação</b>, o centro é o <b>patrimônio</b> destinado a um fim. Por isso, uma fundação não tem sócios nem associados.",
      palavras: [
        { t: "Fundação", d: "Patrimônio destinado por alguém a uma finalidade social, que ganha personalidade jurídica." },
        { t: "Instituidor", d: "Quem cria a fundação, destinando bens a ela." },
        { t: "Dotação", d: "O conjunto de bens destinado à fundação." },
        { t: "Bens livres", d: "Bens sem dívidas, penhoras ou outros ônus." },
        { t: "Veto", d: "Recusa do Presidente da República a um trecho de lei aprovado pelo Congresso." }
      ],
      licao: "pessoa-juridica", relacionados: [44, 63, 66]
    },
    {
      n: 63, rotulo: "Art. 63", caminho: FUN,
      texto: [{ tipo: "caput", t: "Quando insuficientes para constituir a fundação, os bens a ela destinados serão, se de outro modo não dispuser o instituidor, incorporados em outra fundação que se proponha a fim igual ou semelhante." }],
      simples: "E se os bens deixados forem <mark>poucos demais</mark> para criar a fundação? Em vez de se perderem, eles vão para <mark>outra fundação</mark> com objetivo igual ou parecido, a não ser que o instituidor tenha dito outra coisa.",
      exemplo: "Um morador deixou R$ 20 mil em testamento para criar uma fundação de proteção aos animais. O valor não dava para manter uma fundação. O dinheiro foi entregue a uma fundação de proteção animal que já existia na cidade.",
      atencao: "A lei respeita a vontade de quem doou: o dinheiro continua servindo à mesma causa.",
      licao: "pessoa-juridica", relacionados: [62, 69]
    },
    {
      n: 64, rotulo: "Art. 64", caminho: FUN,
      texto: [{ tipo: "caput", t: "Constituída a fundação por negócio jurídico entre vivos, o instituidor é obrigado a transferir-lhe a propriedade, ou outro direito real, sobre os bens dotados, e, se não o fizer, serão registrados, em nome dela, por mandado judicial." }],
      simples: "Se alguém cria uma fundação <mark>em vida</mark>, é <mark>obrigado</mark> a passar para ela os bens prometidos. Se não passar, o <mark>juiz manda registrar</mark> os bens no nome da fundação.",
      exemplo: "Um empresário assinou a escritura criando uma fundação educacional e prometeu um terreno. Depois, desistiu de transferir. O juiz mandou registrar o terreno em nome da fundação.",
      atencao: "Criada a fundação, o instituidor não pode simplesmente voltar atrás e ficar com os bens.",
      palavras: [
        { t: "Negócio jurídico entre vivos", d: "Ato feito para produzir efeitos enquanto a pessoa está viva, ao contrário do testamento." },
        { t: "Mandado judicial", d: "Ordem escrita do juiz para que algo seja cumprido." }
      ],
      licao: "pessoa-juridica", relacionados: [62]
    },
    {
      n: 65, rotulo: "Art. 65", caminho: FUN,
      texto: [
        { tipo: "caput", t: "Aqueles a quem o instituidor cometer a aplicação do patrimônio, em tendo ciência do encargo, formularão logo, de acordo com as suas bases (art. 62), o estatuto da fundação projetada, submetendo-o, em seguida, à aprovação da autoridade competente, com recurso ao juiz." },
        { tipo: "paragrafo", r: "Parágrafo único.", t: "Se o estatuto não for elaborado no prazo assinado pelo instituidor, ou, não havendo prazo, em cento e oitenta dias, a incumbência caberá ao Ministério Público." }
      ],
      simples: "As pessoas que o instituidor escolheu para tocar a fundação devem <mark>escrever o estatuto</mark> logo, seguindo o que ele determinou, e levá-lo para <mark>aprovação do Ministério Público</mark>. Se não fizerem isso no prazo, quem faz é o <mark>próprio Ministério Público</mark>.",
      itens: [
        { r: "Caput", t: "Quem recebeu a missão redige o estatuto e o submete à aprovação da autoridade competente (o Ministério Público). Se houver recusa, cabe recurso ao juiz." },
        { r: "Parágrafo único", t: "Prazo: o que o instituidor definiu ou, se ele não definiu, <b>180 dias</b>. Passado o prazo, o Ministério Público assume a tarefa." }
      ],
      exemplo: "No testamento, a senhora nomeou a sobrinha para criar a biblioteca. A sobrinha escreveu o estatuto e o levou ao Ministério Público, que o aprovou.",
      licao: "pessoa-juridica", relacionados: [62, 66]
    },
    {
      n: 66, rotulo: "Art. 66", caminho: FUN,
      texto: [
        { tipo: "caput", t: "Velará pelas fundações o Ministério Público do Estado onde situadas." },
        { tipo: "paragrafo", r: "§ 1º", t: "Se funcionarem no Distrito Federal ou em Território, caberá o encargo ao Ministério Público do Distrito Federal e Territórios.", nota: "Redação dada pela Lei nº 13.151, de 2015" },
        { tipo: "paragrafo", r: "§ 2º", t: "Se estenderem a atividade por mais de um Estado, caberá o encargo, em cada um deles, ao respectivo Ministério Público." }
      ],
      simples: "Quem <mark>fiscaliza</mark> as fundações é o <mark>Ministério Público do estado</mark> onde elas estão. Ele verifica se o dinheiro está sendo usado para a finalidade certa.",
      itens: [
        { r: "Caput", t: "Fiscaliza o Ministério Público do estado onde a fundação está." },
        { r: "§ 1º", t: "No Distrito Federal, fiscaliza o Ministério Público do Distrito Federal e Territórios." },
        { r: "§ 2º", t: "Se a fundação atua em vários estados, o Ministério Público de cada estado fiscaliza a atuação ali." }
      ],
      exemplo: "A fundação da biblioteca precisa enviar todo ano as contas ao Ministério Público estadual, que confere se o dinheiro foi usado para comprar livros e manter a biblioteca, e não para outra coisa.",
      atencao: "Por que tanta fiscalização? Porque a fundação não tem “donos” nem associados para vigiar o patrimônio. Alguém precisa garantir que a vontade do instituidor seja respeitada.",
      palavras: [
        { t: "Velar", d: "Cuidar, vigiar, fiscalizar." }
      ],
      licao: "pessoa-juridica", relacionados: [62, 67]
    },
    {
      n: 67, rotulo: "Art. 67", caminho: FUN,
      texto: [
        { tipo: "caput", t: "Para que se possa alterar o estatuto da fundação é mister que a reforma:" },
        { tipo: "inciso", r: "I", t: "seja deliberada por dois terços dos competentes para gerir e representar a fundação;" },
        { tipo: "inciso", r: "II", t: "não contrarie ou desvirtue o fim desta;" },
        { tipo: "inciso", r: "III", t: "seja aprovada pelo órgão do Ministério Público no prazo máximo de 45 (quarenta e cinco) dias, findo o qual ou no caso de o Ministério Público a denegar, poderá o juiz supri-la, a requerimento do interessado.", nota: "Redação dada pela Lei nº 13.151, de 2015" }
      ],
      simples: "Mudar o estatuto de uma fundação é <mark>difícil de propósito</mark>. Precisa de três coisas: aprovação de <mark>2/3 dos administradores</mark>, <mark>não mudar a finalidade</mark> e aprovação do <mark>Ministério Público</mark>.",
      itens: [
        { r: "I", t: "Dois terços (2/3) dos que administram a fundação precisam votar a favor." },
        { r: "II", t: "A mudança não pode contrariar nem desviar a finalidade original." },
        { r: "III", t: "O Ministério Público tem <b>45 dias</b> para aprovar. Se não responder no prazo ou se recusar, o interessado pode pedir ao juiz que aprove no lugar dele." }
      ],
      exemplo: "A fundação da biblioteca quis incluir no estatuto a criação de uma sala de informática. Como isso ainda serve à educação e à leitura, 2/3 do conselho aprovaram e o Ministério Público concordou. Mas transformar a biblioteca num restaurante não seria permitido: desvirtuaria o fim.",
      palavras: [
        { t: "Mister", d: "Necessário, preciso." },
        { t: "Desvirtuar", d: "Mudar o sentido ou o objetivo original de algo." },
        { t: "Suprir", d: "Substituir, dar no lugar de outro a autorização que faltava." }
      ],
      licao: "pessoa-juridica", relacionados: [66, 68]
    },
    {
      n: 68, rotulo: "Art. 68", caminho: FUN,
      texto: [{ tipo: "caput", t: "Quando a alteração não houver sido aprovada por votação unânime, os administradores da fundação, ao submeterem o estatuto ao órgão do Ministério Público, requererão que se dê ciência à minoria vencida para impugná-la, se quiser, em dez dias." }],
      simples: "Se a mudança do estatuto <mark>não foi aprovada por todos</mark>, quem <mark>votou contra</mark> tem o direito de ser avisado e de <mark>contestar</mark> a mudança no Ministério Público, em <mark>10 dias</mark>.",
      exemplo: "Dois dos nove conselheiros da fundação votaram contra uma mudança no estatuto. Quando o pedido foi ao Ministério Público, eles foram avisados e, em dez dias, apresentaram suas objeções.",
      atencao: "É mais uma proteção da minoria e da finalidade da fundação.",
      palavras: [
        { t: "Unânime", d: "Com o voto de todos." },
        { t: "Impugnar", d: "Contestar, apresentar oposição." }
      ],
      licao: "pessoa-juridica", relacionados: [67]
    },
    {
      n: 69, rotulo: "Art. 69", caminho: FUN,
      texto: [{ tipo: "caput", t: "Tornando-se ilícita, impossível ou inútil a finalidade a que visa a fundação, ou vencido o prazo de sua existência, o órgão do Ministério Público, ou qualquer interessado, lhe promoverá a extinção, incorporando-se o seu patrimônio, salvo disposição em contrário no ato constitutivo, ou no estatuto, em outra fundação, designada pelo juiz, que se proponha a fim igual ou semelhante." }],
      simples: "Uma fundação acaba quando a finalidade dela fica <mark>ilegal</mark>, <mark>impossível</mark> ou <mark>inútil</mark>, ou quando termina o prazo que ela tinha. Os bens vão para <mark>outra fundação</mark> com objetivo parecido.",
      exemplo: "Uma fundação foi criada há 80 anos para combater uma doença que hoje já foi erradicada. A finalidade ficou inútil. O Ministério Público pediu a extinção, e o juiz destinou o patrimônio a outra fundação de saúde.",
      atencao: "O estatuto ou o documento de criação pode prever outro destino para os bens. Se não prever, quem escolhe a fundação que vai recebê-los é o juiz.",
      palavras: [
        { t: "Extinção", d: "Fim, encerramento da existência de uma pessoa jurídica." }
      ],
      licao: "pessoa-juridica", relacionados: [51, 63]
    }
  );
})();
