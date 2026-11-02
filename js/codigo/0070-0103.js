/* Código Civil explicado: arts. 70 a 103 (domicílio e bens). Formato em js/codigo/0001-0005.js. */
window.CODIGO = window.CODIGO || { artigos: [] };
(function () {
  var DOM = ["Parte Geral", "Livro I — Das Pessoas", "Título III — Do Domicílio"];
  var LB = ["Parte Geral", "Livro II — Dos Bens", "Título Único — Das Diferentes Classes de Bens"];
  var IMO = LB.concat(["Capítulo I — Dos Bens Considerados em Si Mesmos", "Seção I — Dos Bens Imóveis"]);
  var MOV = LB.concat(["Capítulo I — Dos Bens Considerados em Si Mesmos", "Seção II — Dos Bens Móveis"]);
  var FUNG = LB.concat(["Capítulo I — Dos Bens Considerados em Si Mesmos", "Seção III — Dos Bens Fungíveis e Consumíveis"]);
  var DIV = LB.concat(["Capítulo I — Dos Bens Considerados em Si Mesmos", "Seção IV — Dos Bens Divisíveis"]);
  var SING = LB.concat(["Capítulo I — Dos Bens Considerados em Si Mesmos", "Seção V — Dos Bens Singulares e Coletivos"]);
  var REC = LB.concat(["Capítulo II — Dos Bens Reciprocamente Considerados"]);
  var PUB = LB.concat(["Capítulo III — Dos Bens Públicos"]);

  window.CODIGO.artigos.push(
    {
      n: 70, rotulo: "Art. 70", caminho: DOM,
      texto: [{ tipo: "caput", t: "O domicílio da pessoa natural é o lugar onde ela estabelece a sua residência com ânimo definitivo." }],
      simples: "Domicílio é o lugar onde a pessoa <mark>mora com a intenção de ficar</mark>. Não basta estar lá: é preciso morar e querer permanecer. É ali que a lei a procura.",
      itens: [
        { r: "Residência", t: "O fato: a pessoa vive ali." },
        { r: "Ânimo definitivo", t: "A intenção: ela quer permanecer ali, não está só de passagem." }
      ],
      exemplo: "A família da Lia mora na casa da Rua das Flores há dez anos e não pensa em se mudar. Esse é o domicílio deles. A casa de praia, usada nas férias, não é.",
      atencao: "O domicílio define, por exemplo, em qual cidade a pessoa será processada (Código de Processo Civil, art. 46) e onde se abre o inventário dela (o último domicílio).",
      palavras: [
        { t: "Domicílio", d: "Lugar onde a pessoa mora com intenção de permanecer. É onde ela responde por seus atos perante a lei." },
        { t: "Residência", d: "Lugar onde a pessoa vive, ainda que sem intenção definitiva de ficar." }
      ],
      licao: "domicilio", relacionados: [71, 72, 73]
    },
    {
      n: 71, rotulo: "Art. 71", caminho: DOM,
      texto: [{ tipo: "caput", t: "Se, porém, a pessoa natural tiver diversas residências, onde, alternadamente, viva, considerar-se-á domicílio seu qualquer delas." }],
      simples: "Quem <mark>vive em mais de um lugar</mark>, revezando entre eles, tem <mark>mais de um domicílio</mark>. Qualquer um deles vale.",
      exemplo: "Seu Tonico passa de segunda a quinta na casa da cidade e de sexta a domingo no sítio. Os dois lugares são domicílio dele. Quem quiser processá-lo pode escolher qualquer uma das duas cidades.",
      atencao: "O Brasil admite a <b>pluralidade de domicílios</b>. Alguns países só aceitam um domicílio por pessoa.",
      licao: "domicilio", relacionados: [70, 72]
    },
    {
      n: 72, rotulo: "Art. 72", caminho: DOM,
      texto: [
        { tipo: "caput", t: "É também domicílio da pessoa natural, quanto às relações concernentes à profissão, o lugar onde esta é exercida." },
        { tipo: "paragrafo", r: "Parágrafo único.", t: "Se a pessoa exercitar profissão em lugares diversos, cada um deles constituirá domicílio para as relações que lhe corresponderem." }
      ],
      simples: "Para os <mark>assuntos de trabalho</mark>, o lugar onde a pessoa <mark>trabalha</mark> também é domicílio dela. E, se ela trabalha em vários lugares, cada um vale para os assuntos feitos ali.",
      itens: [
        { r: "Caput", t: "É o chamado <b>domicílio profissional</b>: vale só para as relações ligadas à profissão." },
        { r: "Parágrafo único", t: "Se a pessoa trabalha em várias cidades, cada uma é domicílio para os negócios daquele lugar." }
      ],
      exemplo: "Tio Beto mora numa cidade, mas a padaria fica na cidade vizinha. Um fornecedor da padaria pode cobrá-lo na cidade da padaria, porque o assunto é profissional. Já uma dívida pessoal dele seria cobrada onde ele mora.",
      licao: "domicilio", relacionados: [70, 71]
    },
    {
      n: 73, rotulo: "Art. 73", caminho: DOM,
      texto: [{ tipo: "caput", t: "Ter-se-á por domicílio da pessoa natural, que não tenha residência habitual, o lugar onde for encontrada." }],
      simples: "Quem <mark>não tem casa fixa</mark> (vive viajando, mudando de lugar) tem como domicílio o <mark>lugar onde for encontrado</mark>.",
      exemplo: "Um artista de circo passa poucas semanas em cada cidade. Se alguém precisar processá-lo, pode fazer isso na cidade em que o circo estiver quando ele for encontrado.",
      atencao: "A regra garante que ninguém fique “sem domicílio” e, por isso, fora do alcance da Justiça.",
      palavras: [
        { t: "Residência habitual", d: "Lugar onde a pessoa costuma morar." }
      ],
      licao: "domicilio", relacionados: [70]
    },
    {
      n: 74, rotulo: "Art. 74", caminho: DOM,
      texto: [
        { tipo: "caput", t: "Muda-se o domicílio, transferindo a residência, com a intenção manifesta de o mudar." },
        { tipo: "paragrafo", r: "Parágrafo único.", t: "A prova da intenção resultará do que declarar a pessoa às municipalidades dos lugares, que deixa, e para onde vai, ou, se tais declarações não fizer, da própria mudança, com as circunstâncias que a acompanharem." }
      ],
      simples: "Para <mark>mudar de domicílio</mark>, é preciso <mark>mudar de casa</mark> com a <mark>intenção clara</mark> de ficar no lugar novo. Essa intenção se prova pelo que a pessoa declarar ou pelas circunstâncias da mudança.",
      itens: [
        { r: "Caput", t: "Dois elementos de novo: a mudança física e a intenção de mudar." },
        { r: "Parágrafo único", t: "A intenção se prova pelas declarações feitas às prefeituras ou, mais comum hoje, pelas circunstâncias: levou os móveis, matriculou os filhos na escola, transferiu o título de eleitor, mudou o endereço no banco." }
      ],
      exemplo: "A tia Rosa se mudou para outra cidade por causa de um emprego novo: levou a mudança, matriculou o filho na escola e transferiu o título de eleitor. Ficou claro que ela mudou de domicílio.",
      licao: "domicilio", relacionados: [70]
    },
    {
      n: 75, rotulo: "Art. 75", caminho: DOM,
      texto: [
        { tipo: "caput", t: "Quanto às pessoas jurídicas, o domicílio é:" },
        { tipo: "inciso", r: "I", t: "da União, o Distrito Federal;" },
        { tipo: "inciso", r: "II", t: "dos Estados e Territórios, as respectivas capitais;" },
        { tipo: "inciso", r: "III", t: "do Município, o lugar onde funcione a administração municipal;" },
        { tipo: "inciso", r: "IV", t: "das demais pessoas jurídicas, o lugar onde funcionarem as respectivas diretorias e administrações, ou onde elegerem domicílio especial no seu estatuto ou atos constitutivos." },
        { tipo: "paragrafo", r: "§ 1º", t: "Tendo a pessoa jurídica diversos estabelecimentos em lugares diferentes, cada um deles será considerado domicílio para os atos nele praticados." },
        { tipo: "paragrafo", r: "§ 2º", t: "Se a administração, ou diretoria, tiver a sede no estrangeiro, haver-se-á por domicílio da pessoa jurídica, no tocante às obrigações contraídas por cada uma das suas agências, o lugar do estabelecimento, sito no Brasil, a que ela corresponder." }
      ],
      simples: "As pessoas jurídicas também têm domicílio. O da <mark>União</mark> é Brasília; o de cada <mark>estado</mark>, a capital; o do <mark>município</mark>, onde fica a prefeitura; e o das <mark>empresas e associações</mark>, onde funciona a diretoria ou o endereço que o estatuto escolher.",
      itens: [
        { r: "I", t: "União: o Distrito Federal (Brasília)." },
        { r: "II", t: "Estados: as capitais." },
        { r: "III", t: "Municípios: onde funciona a prefeitura." },
        { r: "IV", t: "Empresas, associações e fundações: onde fica a diretoria ou o endereço escolhido no estatuto ou contrato social." },
        { r: "§ 1º", t: "Empresa com filiais: cada filial é domicílio para os negócios feitos nela." },
        { r: "§ 2º", t: "Empresa com sede no exterior: para os negócios das agências no Brasil, o domicílio é o endereço da agência brasileira." }
      ],
      exemplo: "Lia comprou um celular defeituoso numa filial de uma grande rede de lojas em sua cidade. A sede da empresa fica em São Paulo, mas, pelo § 1º, a filial da cidade dela também é domicílio da empresa para essa compra.",
      atencao: "Nas relações de consumo, o consumidor pode ainda processar a empresa na cidade onde ele próprio mora (Código de Defesa do Consumidor, art. 101, I).",
      palavras: [
        { t: "Filial", d: "Estabelecimento de uma empresa em outro lugar, ligado à sede." },
        { t: "Agência", d: "Unidade de uma empresa num determinado lugar." }
      ],
      licao: "domicilio", relacionados: [70, 78]
    },
    {
      n: 76, rotulo: "Art. 76", caminho: DOM,
      texto: [
        { tipo: "caput", t: "Têm domicílio necessário o incapaz, o servidor público, o militar, o marítimo e o preso." },
        { tipo: "paragrafo", r: "Parágrafo único.", t: "O domicílio do incapaz é o do seu representante ou assistente; o do servidor público, o lugar em que exercer permanentemente suas funções; o do militar, onde servir, e, sendo da Marinha ou da Aeronáutica, a sede do comando a que se encontrar imediatamente subordinado; o do marítimo, onde o navio estiver matriculado; e o do preso, o lugar em que cumprir a sentença." }
      ],
      simples: "Para algumas pessoas, é a <mark>própria lei</mark> que define o domicílio, sem que elas escolham. É o <mark>domicílio necessário</mark>.",
      itens: [
        { r: "Incapaz", t: "O domicílio da criança (ou de outro incapaz) é o do representante ou assistente, normalmente os pais." },
        { r: "Servidor público", t: "Onde trabalha de forma permanente." },
        { r: "Militar", t: "Onde serve. Se for da Marinha ou da Aeronáutica, a sede do comando a que está subordinado." },
        { r: "Marítimo", t: "Quem trabalha em navio: onde o navio está matriculado." },
        { r: "Preso", t: "Onde cumpre a pena." }
      ],
      exemplo: "O primo da Lia é soldado do Exército e serve num quartel em outra cidade. O domicílio necessário dele é a cidade do quartel. Já a Lia, que é criança, tem o domicílio dos pais.",
      atencao: "O domicílio necessário não impede que a pessoa tenha outros domicílios (por exemplo, a casa da família). Os tribunais costumam admitir os dois.",
      palavras: [
        { t: "Domicílio necessário", d: "Domicílio definido pela lei para certas pessoas, como incapazes, servidores, militares, marítimos e presos." },
        { t: "Marítimo", d: "Quem trabalha em navios." }
      ],
      licao: "domicilio", relacionados: [3, 70]
    },
    {
      n: 77, rotulo: "Art. 77", caminho: DOM,
      texto: [{ tipo: "caput", t: "O agente diplomático do Brasil, que, citado no estrangeiro, alegar extraterritorialidade sem designar onde tem, no país, o seu domicílio, poderá ser demandado no Distrito Federal ou no último ponto do território brasileiro onde o teve." }],
      simples: "Um <mark>diplomata brasileiro</mark> que trabalha no exterior e, processado lá, diz que <mark>só pode ser processado no Brasil</mark>, mas <mark>não informa</mark> seu domicílio aqui, pode ser processado em <mark>Brasília</mark> ou na <mark>última cidade</mark> onde morou no Brasil.",
      exemplo: "Um embaixador brasileiro na Argentina foi processado lá e alegou que, como diplomata, só poderia ser processado no Brasil, sem dizer onde morava aqui. Quem o cobrava pôde processá-lo em Brasília.",
      atencao: "“Extraterritorialidade” é a regra pela qual diplomatas, em certos casos, ficam fora do alcance das leis e da Justiça do país onde trabalham. Este artigo impede que eles usem isso para não serem processados em lugar nenhum.",
      palavras: [
        { t: "Agente diplomático", d: "Representante oficial de um país junto a outro país, como um embaixador." },
        { t: "Extraterritorialidade", d: "Situação em que a pessoa, mesmo no estrangeiro, é tratada como se estivesse no próprio país, ficando fora da lei local." },
        { t: "Demandado", d: "Processado, chamado a responder numa ação judicial." }
      ],
      licao: "domicilio", relacionados: [70]
    },
    {
      n: 78, rotulo: "Art. 78", caminho: DOM,
      texto: [{ tipo: "caput", t: "Nos contratos escritos, poderão os contratantes especificar domicílio onde se exercitem e cumpram os direitos e obrigações deles resultantes." }],
      simples: "Num <mark>contrato escrito</mark>, as partes podem <mark>escolher a cidade</mark> onde vão cumprir o contrato e resolver eventuais problemas na Justiça. É o <mark>foro de eleição</mark>.",
      exemplo: "No contrato de compra de farinha, o Tio Beto e o moinho escreveram: “Fica eleito o foro da comarca de Campinas”. Se houver briga, o processo será em Campinas.",
      atencao: "Em contratos com consumidores ou de adesão, a cláusula que dificulte a defesa da parte mais fraca pode ser considerada <b>abusiva</b> e o juiz pode deixar de aplicá-la (Código de Processo Civil, art. 63, § 3º). Desde 2024, o CPC também exige que a cidade escolhida tenha relação com o domicílio das partes ou com o local do negócio.",
      palavras: [
        { t: "Foro de eleição", d: "Cidade escolhida no contrato para resolver na Justiça os conflitos dele." },
        { t: "Comarca", d: "Território em que um juiz de primeira instância exerce suas funções, geralmente uma cidade ou um grupo de cidades." }
      ],
      licao: "domicilio", relacionados: [70, 75]
    },
    {
      n: 79, rotulo: "Art. 79", caminho: IMO,
      texto: [{ tipo: "caput", t: "São bens imóveis o solo e tudo quanto se lhe incorporar natural ou artificialmente." }],
      simples: "<mark>Imóvel</mark> é a <mark>terra</mark> e tudo o que está <mark>grudado</mark> nela, seja pela natureza (árvores, pedras) ou pelo ser humano (casas, prédios, muros).",
      itens: [
        { r: "Solo", t: "O terreno em si." },
        { r: "Incorporação natural", t: "O que a natureza juntou ao solo: árvores, plantas, nascentes." },
        { r: "Incorporação artificial", t: "O que as pessoas construíram: casas, prédios, poços, muros." }
      ],
      exemplo: "A casa da Vovó Nina, a mangueira plantada no quintal e o muro são imóveis. Já o sofá e a bicicleta, que dá para tirar dali sem estragar nada, são móveis.",
      atencao: "Ser imóvel muda muita coisa: para vender, é preciso escritura (se o valor passar de 30 salários mínimos) e registro no Cartório de Imóveis, e, se for casado, autorização do cônjuge.",
      palavras: [
        { t: "Bem imóvel", d: "O solo e tudo o que se incorpora a ele, natural ou artificialmente." },
        { t: "Incorporar", d: "Juntar, unir de forma que passe a fazer parte." }
      ],
      licao: "bens", relacionados: [80, 81, 82]
    },
    {
      n: 80, rotulo: "Art. 80", caminho: IMO,
      texto: [
        { tipo: "caput", t: "Consideram-se imóveis para os efeitos legais:" },
        { tipo: "inciso", r: "I", t: "os direitos reais sobre imóveis e as ações que os asseguram;" },
        { tipo: "inciso", r: "II", t: "o direito à sucessão aberta." }
      ],
      simples: "Algumas coisas que <mark>não são terra nem prédio</mark> a lei <mark>trata como imóveis</mark>: os direitos sobre imóveis (como uma hipoteca ou um usufruto) e o <mark>direito à herança</mark>.",
      itens: [
        { r: "I", t: "Direitos reais sobre imóveis (usufruto, hipoteca, servidão) e as ações judiciais que os protegem." },
        { r: "II", t: "O direito à herança de quem já morreu, enquanto ela não é dividida, mesmo que a herança seja só dinheiro." }
      ],
      exemplo: "O avô do Pedrinho morreu deixando apenas dinheiro no banco. Mesmo assim, se o Pedrinho quiser vender a parte dele na herança antes da partilha, terá de fazer escritura pública, porque o direito à herança é considerado imóvel.",
      atencao: "Por isso a cessão de direitos hereditários exige escritura pública (art. 1.793) e, se o herdeiro for casado, em regra a autorização do cônjuge.",
      palavras: [
        { t: "Direito real", d: "Direito sobre uma coisa, que vale contra todos, como a propriedade, o usufruto e a hipoteca." },
        { t: "Sucessão aberta", d: "A herança de alguém que já morreu." }
      ],
      licao: "bens", relacionados: [79]
    },
    {
      n: 81, rotulo: "Art. 81", caminho: IMO,
      texto: [
        { tipo: "caput", t: "Não perdem o caráter de imóveis:" },
        { tipo: "inciso", r: "I", t: "as edificações que, separadas do solo, mas conservando a sua unidade, forem removidas para outro local;" },
        { tipo: "inciso", r: "II", t: "os materiais provisoriamente separados de um prédio, para nele se reempregarem." }
      ],
      simples: "Algumas coisas <mark>continuam sendo imóveis</mark> mesmo separadas do chão: uma <mark>casa transportada inteira</mark> para outro lugar e os <mark>materiais tirados</mark> de um prédio para depois serem <mark>colocados de volta</mark>.",
      itens: [
        { r: "I", t: "Uma construção retirada do solo inteira, sem ser desmontada, e levada para outro lugar (uma casa pré-fabricada transportada, por exemplo)." },
        { r: "II", t: "Materiais tirados temporariamente para voltar ao mesmo prédio, como as telhas retiradas para consertar o telhado." }
      ],
      exemplo: "Para trocar a estrutura do telhado, Seu Tonico tirou as telhas e empilhou no quintal. Enquanto estão ali para voltar ao telhado, elas continuam sendo consideradas parte do imóvel.",
      licao: "bens", relacionados: [79, 84]
    },
    {
      n: 82, rotulo: "Art. 82", caminho: MOV,
      texto: [{ tipo: "caput", t: "São móveis os bens suscetíveis de movimento próprio, ou de remoção por força alheia, sem alteração da substância ou da destinação econômico-social." }],
      simples: "<mark>Bem móvel</mark> é o que <mark>se move sozinho</mark> (os animais) ou que <mark>pode ser levado</mark> de um lugar para outro <mark>sem estragar</mark> e sem perder sua função.",
      itens: [
        { r: "Movimento próprio", t: "Os <b>semoventes</b>: animais, como o cachorro Bolota ou um rebanho de gado." },
        { r: "Remoção por força alheia", t: "O que alguém pode carregar ou transportar: carro, celular, geladeira, livro." }
      ],
      exemplo: "Bolota, o cachorro do Seu Tonico, é um bem móvel semovente. A bicicleta da Lia também é móvel, porque pode ser levada de um lugar para outro sem estragar.",
      atencao: "Dizer que um animal é “bem móvel” não tira a proteção que as leis dão aos animais contra maus-tratos (Lei 9.605/1998, art. 32). Os tribunais também têm reconhecido o vínculo afetivo com animais de estimação, por exemplo, ao decidir com quem fica o pet num divórcio.",
      palavras: [
        { t: "Bem móvel", d: "Bem que pode ser deslocado sem perder sua essência, inclusive os animais." },
        { t: "Semovente", d: "Bem móvel que se move por conta própria, como os animais." }
      ],
      licao: "bens", relacionados: [79, 83, 84]
    },
    {
      n: 83, rotulo: "Art. 83", caminho: MOV,
      texto: [
        { tipo: "caput", t: "Consideram-se móveis para os efeitos legais:" },
        { tipo: "inciso", r: "I", t: "as energias que tenham valor econômico;" },
        { tipo: "inciso", r: "II", t: "os direitos reais sobre objetos móveis e as ações correspondentes;" },
        { tipo: "inciso", r: "III", t: "os direitos pessoais de caráter patrimonial e respectivas ações." }
      ],
      simples: "A lei também trata como <mark>móveis</mark> coisas que não dá para pegar com a mão: a <mark>energia</mark> que tem valor, os <mark>direitos sobre bens móveis</mark> e os <mark>créditos</mark> (o direito de receber dinheiro).",
      itens: [
        { r: "I", t: "Energias com valor econômico, como a eletricidade." },
        { r: "II", t: "Direitos reais sobre coisas móveis, como o penhor de uma joia." },
        { r: "III", t: "Direitos pessoais com valor em dinheiro, como o direito de receber uma dívida, ações de uma empresa e direitos autorais." }
      ],
      exemplo: "Tio Beto tem um crédito de R$ 2 mil para receber de um cliente. Esse direito é um bem móvel: ele pode, por exemplo, vendê-lo a outra pessoa (cessão de crédito).",
      atencao: "Desviar energia elétrica (o famoso “gato”) é crime de furto justamente porque a energia é considerada coisa móvel.",
      palavras: [
        { t: "Direito pessoal", d: "Direito de exigir algo de uma pessoa determinada, como o pagamento de uma dívida." },
        { t: "Crédito", d: "O direito de receber algo de alguém, normalmente dinheiro." }
      ],
      licao: "bens", relacionados: [80, 82]
    },
    {
      n: 84, rotulo: "Art. 84", caminho: MOV,
      texto: [{ tipo: "caput", t: "Os materiais destinados a alguma construção, enquanto não forem empregados, conservam sua qualidade de móveis; readquirem essa qualidade os provenientes da demolição de algum prédio." }],
      simples: "Tijolos, cimento e telhas comprados para uma obra <mark>são móveis</mark> enquanto não forem usados. Depois de colocados na construção, viram parte do imóvel. E, se o prédio for <mark>demolido</mark>, os restos <mark>voltam a ser móveis</mark>.",
      exemplo: "Os tijolos que o Tio Beto comprou para o forno à lenha, empilhados no quintal, são móveis. Depois que o pedreiro os assentou, passaram a fazer parte do imóvel.",
      atencao: "Compare com o art. 81, II: materiais tirados de um prédio <b>para voltar</b> a ele continuam imóveis. Já os de uma <b>demolição</b> voltam a ser móveis.",
      licao: "bens", relacionados: [81, 82]
    },
    {
      n: 85, rotulo: "Art. 85", caminho: FUNG,
      texto: [{ tipo: "caput", t: "São fungíveis os móveis que podem substituir-se por outros da mesma espécie, qualidade e quantidade." }],
      simples: "<mark>Fungível</mark> é o bem móvel que pode ser <mark>trocado por outro igual</mark>, da mesma espécie, qualidade e quantidade, sem diferença. O exemplo clássico é o <mark>dinheiro</mark>.",
      exemplo: "Lia emprestou uma nota de R$ 10 ao irmão. Ele pode devolver qualquer nota de R$ 10, ou duas de R$ 5, porque dinheiro é fungível. Já o quadro pintado pela Vovó Nina é único: é infungível.",
      atencao: "Um bem pode ser fungível ou não conforme a vontade das partes. Uma moeda comum é fungível, mas uma moeda rara de coleção, combinada como “aquela” moeda, é infungível.",
      palavras: [
        { t: "Fungível", d: "Bem móvel que pode ser substituído por outro da mesma espécie, qualidade e quantidade." },
        { t: "Infungível", d: "Bem que não pode ser substituído por outro, por ser único ou por vontade das partes." }
      ],
      licao: "bens", relacionados: [86]
    },
    {
      n: 86, rotulo: "Art. 86", caminho: FUNG,
      texto: [{ tipo: "caput", t: "São consumíveis os bens móveis cujo uso importa destruição imediata da própria substância, sendo também considerados tais os destinados à alienação." }],
      simples: "<mark>Consumível</mark> é o bem que <mark>acaba quando é usado</mark>, como comida e combustível. A lei também considera consumíveis os bens que estão <mark>à venda</mark>, porque, para o vendedor, eles “acabam” quando são vendidos.",
      itens: [
        { r: "Consumíveis de fato", t: "Somem com o primeiro uso: pão, leite, gasolina." },
        { r: "Consumíveis de direito", t: "Os destinados à venda: os celulares na vitrine de uma loja, mesmo que durem anos para quem compra." }
      ],
      exemplo: "Os pães da padaria do Tio Beto são consumíveis: acabam quando alguém os come. As geladeiras à venda numa loja também são consideradas consumíveis, porque estão destinadas à venda.",
      atencao: "Fungível e consumível são ideias diferentes, embora muitas vezes andem juntas. O livro de uma biblioteca é fungível (há outros exemplares iguais), mas não é consumível.",
      palavras: [
        { t: "Consumível", d: "Bem que se destrói com o primeiro uso ou que se destina à venda." },
        { t: "Alienação", d: "Transferência da propriedade a outra pessoa, como a venda ou a doação." }
      ],
      licao: "bens", relacionados: [85]
    },
    {
      n: 87, rotulo: "Art. 87", caminho: DIV,
      texto: [{ tipo: "caput", t: "Bens divisíveis são os que se podem fracionar sem alteração na sua substância, diminuição considerável de valor, ou prejuízo do uso a que se destinam." }],
      simples: "<mark>Divisível</mark> é o bem que pode ser <mark>partido</mark> sem estragar, <mark>sem perder muito valor</mark> e sem deixar de servir para o que serve.",
      exemplo: "Um saco de 10 quilos de arroz pode ser dividido em dois de 5 quilos sem problema: é divisível. Já um cavalo, um relógio ou um carro não dá para partir: são indivisíveis.",
      atencao: "Um terreno grande pode ser divisível; um terreno pequeno, se dividido, pode ficar abaixo do tamanho mínimo permitido pela prefeitura, tornando-se, na prática, indivisível.",
      palavras: [
        { t: "Divisível", d: "Bem que pode ser partido sem perder sua essência, sem grande perda de valor e sem deixar de servir ao seu uso." },
        { t: "Fracionar", d: "Dividir em partes." }
      ],
      licao: "bens", relacionados: [88]
    },
    {
      n: 88, rotulo: "Art. 88", caminho: DIV,
      texto: [{ tipo: "caput", t: "Os bens naturalmente divisíveis podem tornar-se indivisíveis por determinação da lei ou por vontade das partes." }],
      simples: "Mesmo um bem que <mark>poderia ser dividido</mark> pode ser tratado como <mark>indivisível</mark>, se a <mark>lei</mark> mandar ou se as <mark>pessoas combinarem</mark>.",
      exemplo: "A lei diz que a herança, até a partilha, é indivisível (art. 1.791), mesmo que seja só dinheiro. E Tio Beto e um amigo combinaram que a dívida de 100 sacos de farinha seria entregue de uma vez só, sem parcelar: por vontade deles, ficou indivisível.",
      licao: "bens", relacionados: [87]
    },
    {
      n: 89, rotulo: "Art. 89", caminho: SING,
      texto: [{ tipo: "caput", t: "São singulares os bens que, embora reunidos, se consideram de per si, independentemente dos demais." }],
      simples: "<mark>Bem singular</mark> é aquele que é considerado <mark>sozinho</mark>, por si mesmo, mesmo que esteja junto de outros.",
      exemplo: "Numa estante cheia de livros, cada livro é um bem singular: dá para vender, emprestar ou doar um só, sem mexer nos outros.",
      licao: "bens", relacionados: [90, 91]
    },
    {
      n: 90, rotulo: "Art. 90", caminho: SING,
      texto: [
        { tipo: "caput", t: "Constitui universalidade de fato a pluralidade de bens singulares que, pertinentes à mesma pessoa, tenham destinação unitária." },
        { tipo: "paragrafo", r: "Parágrafo único.", t: "Os bens que formam essa universalidade podem ser objeto de relações jurídicas próprias." }
      ],
      simples: "<mark>Universalidade de fato</mark> é um <mark>conjunto de coisas</mark> da mesma pessoa que, juntas, têm uma <mark>finalidade única</mark>. Mesmo assim, cada coisa do conjunto pode ser negociada sozinha.",
      itens: [
        { r: "Caput", t: "Exemplos: uma biblioteca, uma coleção de selos, um rebanho, o estoque de uma loja." },
        { r: "Parágrafo único", t: "Cada item pode ser vendido ou doado separado: um livro da biblioteca, um boi do rebanho." }
      ],
      exemplo: "A coleção de 500 figurinhas da Lia é uma universalidade de fato. Ela pode vender a coleção inteira ou trocar só uma figurinha repetida.",
      palavras: [
        { t: "Universalidade de fato", d: "Conjunto de bens singulares de uma mesma pessoa com destinação comum, como uma biblioteca ou um rebanho." }
      ],
      licao: "bens", relacionados: [89, 91]
    },
    {
      n: 91, rotulo: "Art. 91", caminho: SING,
      texto: [{ tipo: "caput", t: "Constitui universalidade de direito o complexo de relações jurídicas, de uma pessoa, dotadas de valor econômico." }],
      simples: "<mark>Universalidade de direito</mark> é um conjunto de <mark>direitos e deveres</mark> com valor em dinheiro que a <mark>lei</mark> trata como uma coisa só. Os exemplos principais são o <mark>patrimônio</mark> de uma pessoa e a <mark>herança</mark>.",
      exemplo: "Quando o avô do Pedrinho morreu, tudo o que ele tinha (a casa, o carro, o dinheiro) e tudo o que ele devia formaram a herança, uma universalidade de direito que passou para os herdeiros como um todo.",
      atencao: "Diferença: na universalidade de <b>fato</b> (art. 90), é a vontade da pessoa que junta as coisas. Na de <b>direito</b>, é a lei que junta direitos e deveres num só conjunto.",
      palavras: [
        { t: "Universalidade de direito", d: "Conjunto de relações jurídicas de uma pessoa com valor econômico, tratado pela lei como um todo, como o patrimônio e a herança." },
        { t: "Patrimônio", d: "O conjunto de bens, direitos e dívidas de uma pessoa." }
      ],
      licao: "bens", relacionados: [90]
    },
    {
      n: 92, rotulo: "Art. 92", caminho: REC,
      texto: [{ tipo: "caput", t: "Principal é o bem que existe sobre si, abstrata ou concretamente; acessório, aquele cuja existência supõe a do principal." }],
      simples: "<mark>Principal</mark> é o bem que existe <mark>sozinho</mark>. <mark>Acessório</mark> é o que <mark>depende</mark> do principal para existir. E a regra geral é: <mark>o acessório segue o principal</mark>.",
      exemplo: "A mangueira do quintal é o principal; as mangas são acessórias. Um contrato de empréstimo é o principal; a multa por atraso combinada nele é acessória.",
      atencao: "A ideia vale para coisas e também para direitos: os juros são acessórios da dívida; a fiança é acessória do contrato de aluguel. Se o contrato principal for nulo, em regra o acessório também cai.",
      palavras: [
        { t: "Bem principal", d: "Bem que existe por si mesmo, sem depender de outro." },
        { t: "Bem acessório", d: "Bem cuja existência depende de outro, o principal." }
      ],
      licao: "bens", relacionados: [93, 95, 96]
    },
    {
      n: 93, rotulo: "Art. 93", caminho: REC,
      texto: [{ tipo: "caput", t: "São pertenças os bens que, não constituindo partes integrantes, se destinam, de modo duradouro, ao uso, ao serviço ou ao aformoseamento de outro." }],
      simples: "<mark>Pertenças</mark> são coisas que <mark>não fazem parte</mark> de outro bem, mas ficam com ele <mark>de forma duradoura</mark> para que ele seja usado, funcione ou fique mais bonito.",
      exemplo: "Numa fazenda, o trator e as máquinas são pertenças: não fazem parte do solo, mas estão lá para servir à fazenda. Numa casa, os quadros na parede e um ar-condicionado portátil podem ser pertenças.",
      atencao: "<b>Pertença</b> é diferente de <b>parte integrante</b>. A parte integrante está unida ao bem (as telhas da casa, as rodas do carro). A pertença pode ser tirada sem estragar nada. E isso muda o que vai junto numa venda (art. 94).",
      palavras: [
        { t: "Pertença", d: "Bem que, sem fazer parte de outro, se destina de forma duradoura ao uso, serviço ou embelezamento dele." },
        { t: "Parte integrante", d: "Elemento unido ao bem que forma com ele um todo, como as janelas de uma casa." },
        { t: "Aformoseamento", d: "Embelezamento." }
      ],
      licao: "bens", relacionados: [92, 94]
    },
    {
      n: 94, rotulo: "Art. 94", caminho: REC,
      texto: [{ tipo: "caput", t: "Os negócios jurídicos que dizem respeito ao bem principal não abrangem as pertenças, salvo se o contrário resultar da lei, da manifestação de vontade, ou das circunstâncias do caso." }],
      simples: "Quando você <mark>vende</mark> um bem, as <mark>pertenças não vão junto</mark> automaticamente. Elas só acompanham se a <mark>lei</mark>, o <mark>contrato</mark> ou as <mark>circunstâncias</mark> indicarem.",
      exemplo: "Seu Tonico vendeu o sítio. O trator, que é uma pertença, não foi incluído na venda porque o contrato não falava nele. Se o anúncio dissesse “sítio com porteira fechada” (com tudo dentro), as circunstâncias mostrariam que o trator iria junto.",
      atencao: "Atenção à diferença: para os acessórios em geral, a regra é que <b>seguem</b> o principal (art. 233). Para as pertenças, a regra é que <b>não seguem</b>, salvo exceção. Por isso, em toda compra de imóvel, vale listar no contrato o que fica.",
      licao: "bens", relacionados: [93]
    },
    {
      n: 95, rotulo: "Art. 95", caminho: REC,
      texto: [{ tipo: "caput", t: "Apesar de ainda não separados do bem principal, os frutos e produtos podem ser objeto de negócio jurídico." }],
      simples: "Dá para <mark>vender frutos e produtos antes de colhê-los</mark>, enquanto ainda estão presos ao bem principal.",
      exemplo: "Em julho, Seu Tonico vendeu para a padaria toda a safra de mangas que a mangueira vai dar em dezembro. As mangas ainda nem nasceram, mas a venda é válida.",
      atencao: "É muito comum no agronegócio: produtores vendem a safra antes da colheita (a chamada venda de “safra futura”).",
      palavras: [
        { t: "Frutos", d: "Utilidades que um bem produz periodicamente sem se desgastar, como mangas, crias de animais e aluguéis." },
        { t: "Produtos", d: "Utilidades retiradas de um bem que o vão esgotando, como o minério de uma mina." }
      ],
      licao: "bens", relacionados: [92]
    },
    {
      n: 96, rotulo: "Art. 96", caminho: REC,
      texto: [
        { tipo: "caput", t: "As benfeitorias podem ser voluptuárias, úteis ou necessárias." },
        { tipo: "paragrafo", r: "§ 1º", t: "São voluptuárias as de mero deleite ou recreio, que não aumentam o uso habitual do bem, ainda que o tornem mais agradável ou sejam de elevado valor." },
        { tipo: "paragrafo", r: "§ 2º", t: "São úteis as que aumentam ou facilitam o uso do bem." },
        { tipo: "paragrafo", r: "§ 3º", t: "São necessárias as que têm por fim conservar o bem ou evitar que se deteriore." }
      ],
      simples: "<mark>Benfeitoria</mark> é uma obra ou despesa feita num bem. Há <mark>três tipos</mark>: as <mark>necessárias</mark> (para conservar), as <mark>úteis</mark> (para melhorar o uso) e as <mark>voluptuárias</mark> (só para enfeitar ou dar prazer).",
      itens: [
        { r: "§ 1º Voluptuárias", t: "Só para deleite ou lazer, sem aumentar o uso normal do bem, mesmo que caras: uma piscina, uma fonte decorativa, um jardim de luxo." },
        { r: "§ 2º Úteis", t: "Aumentam ou facilitam o uso: construir uma garagem, instalar grades, fazer mais um quarto." },
        { r: "§ 3º Necessárias", t: "Conservam o bem ou evitam que ele estrague: consertar o telhado, trocar canos podres, reforçar uma parede rachada." }
      ],
      exemplo: "Na casa que alugou, a tia Rosa consertou um cano estourado (necessária), instalou grades nas janelas (útil) e construiu um laguinho com peixes (voluptuária).",
      atencao: "A classificação decide quem paga na hora de sair. Na locação, por exemplo, o inquilino em regra é reembolsado pelas necessárias, pelas úteis se foram autorizadas, e pode retirar as voluptuárias se isso não estragar o imóvel (Lei 8.245/1991, arts. 35 e 36). O possuidor de boa-fé tem regras parecidas (arts. 1.219 e 1.220).",
      palavras: [
        { t: "Benfeitoria", d: "Obra ou despesa feita num bem para conservá-lo, melhorá-lo ou embelezá-lo." },
        { t: "Deleite", d: "Prazer, satisfação." }
      ],
      licao: "bens", relacionados: [92, 97]
    },
    {
      n: 97, rotulo: "Art. 97", caminho: REC,
      texto: [{ tipo: "caput", t: "Não se consideram benfeitorias os melhoramentos ou acréscimos sobrevindos ao bem sem a intervenção do proprietário, possuidor ou detentor." }],
      simples: "Melhorias que acontecem <mark>sozinhas</mark>, pela natureza ou por obra de terceiros, <mark>sem que o dono ou o possuidor tenha feito nada</mark>, não são benfeitorias.",
      exemplo: "Um rio depositou terra na margem do terreno do Seu Tonico ao longo dos anos e o terreno aumentou. Isso não é benfeitoria, porque ninguém fez obra nenhuma (é um fenômeno chamado aluvião, art. 1.250).",
      atencao: "Por isso, quem não fez nada não pode cobrar indenização por esses acréscimos como se fossem benfeitorias suas.",
      licao: "bens", relacionados: [96]
    },
    {
      n: 98, rotulo: "Art. 98", caminho: PUB,
      texto: [{ tipo: "caput", t: "São públicos os bens do domínio nacional pertencentes às pessoas jurídicas de direito público interno; todos os outros são particulares, seja qual for a pessoa a que pertencerem." }],
      simples: "<mark>Bens públicos</mark> são os que pertencem ao <mark>governo</mark>: União, estados, municípios, autarquias. <mark>Todos os outros</mark> são particulares, sejam de pessoas ou de empresas.",
      exemplo: "A praça do bairro é do Município: bem público. A casa da Vovó Nina é dela: bem particular. A padaria do Tio Beto, mesmo sendo uma empresa, também é dona de bens particulares.",
      atencao: "Os bens de empresas estatais, como a Caixa ou a Petrobras, são, em regra, considerados particulares, porque essas empresas são pessoas jurídicas de direito privado. Mas os tribunais protegem os bens delas que estão diretamente ligados a um serviço público.",
      palavras: [
        { t: "Bem público", d: "Bem que pertence às pessoas jurídicas de direito público interno, como a União, os estados e os municípios." }
      ],
      licao: "bens", relacionados: [41, 99]
    },
    {
      n: 99, rotulo: "Art. 99", caminho: PUB,
      texto: [
        { tipo: "caput", t: "São bens públicos:" },
        { tipo: "inciso", r: "I", t: "os de uso comum do povo, tais como rios, mares, estradas, ruas e praças;" },
        { tipo: "inciso", r: "II", t: "os de uso especial, tais como edifícios ou terrenos destinados a serviço ou estabelecimento da administração federal, estadual, territorial ou municipal, inclusive os de suas autarquias;" },
        { tipo: "inciso", r: "III", t: "os dominicais, que constituem o patrimônio das pessoas jurídicas de direito público, como objeto de direito pessoal, ou real, de cada uma dessas entidades." },
        { tipo: "paragrafo", r: "Parágrafo único.", t: "Não dispondo a lei em contrário, consideram-se dominicais os bens pertencentes às pessoas jurídicas de direito público a que se tenha dado estrutura de direito privado." }
      ],
      simples: "Os bens públicos se dividem em <mark>três tipos</mark>: os que <mark>todo mundo usa</mark> (ruas, praças, praias), os <mark>usados pelo governo para trabalhar</mark> (escolas, hospitais, prefeituras) e os que são só <mark>patrimônio do governo</mark>, sem uso definido (dominicais).",
      itens: [
        { r: "I", t: "<b>Uso comum do povo:</b> rios, mares, estradas, ruas, praças. Todos podem usar." },
        { r: "II", t: "<b>Uso especial:</b> prédios e terrenos usados nos serviços públicos: escolas, hospitais, quartéis, repartições." },
        { r: "III", t: "<b>Dominicais:</b> bens que o governo tem, mas que não estão sendo usados para um fim público, como um terreno vazio da prefeitura ou um prédio desocupado." },
        { r: "Parágrafo único", t: "Os bens de entidades públicas com estrutura de direito privado são considerados dominicais, salvo lei em contrário." }
      ],
      exemplo: "No bairro da Lia: a rua e a praça são de uso comum do povo; a escola municipal e o posto de saúde são de uso especial; um terreno baldio da prefeitura, sem uso, é dominical.",
      palavras: [
        { t: "Bens de uso comum do povo", d: "Bens públicos que todos podem usar, como ruas, praças, rios e praias." },
        { t: "Bens de uso especial", d: "Bens públicos destinados aos serviços da administração, como escolas e hospitais públicos." },
        { t: "Bens dominicais", d: "Bens que integram o patrimônio do poder público sem destinação específica, como terrenos vazios." }
      ],
      licao: "bens", relacionados: [98, 100, 101]
    },
    {
      n: 100, rotulo: "Art. 100", caminho: PUB,
      texto: [{ tipo: "caput", t: "Os bens públicos de uso comum do povo e os de uso especial são inalienáveis, enquanto conservarem a sua qualificação, na forma que a lei determinar." }],
      simples: "As <mark>ruas, praças, escolas e hospitais</mark> públicos <mark>não podem ser vendidos</mark> enquanto continuarem servindo à população ou ao serviço público.",
      exemplo: "O prefeito queria vender a praça do bairro para uma construtora. Não pode, enquanto ela for praça (bem de uso comum do povo). Para vender, a lei primeiro teria de mudar a destinação dela (a chamada desafetação), transformando-a em bem dominical.",
      atencao: "“Enquanto conservarem a sua qualificação” é a chave: se uma lei tirar a destinação pública do bem (desafetação), ele vira dominical e pode ser vendido, seguindo as regras do art. 101.",
      palavras: [
        { t: "Inalienável", d: "Que não pode ser vendido, doado ou transferido." },
        { t: "Desafetação", d: "Ato que retira de um bem público sua destinação ao uso comum ou especial, tornando-o dominical." }
      ],
      licao: "bens", relacionados: [99, 101]
    },
    {
      n: 101, rotulo: "Art. 101", caminho: PUB,
      texto: [{ tipo: "caput", t: "Os bens públicos dominicais podem ser alienados, observadas as exigências da lei." }],
      simples: "Os bens <mark>dominicais</mark> (patrimônio do governo sem uso público) <mark>podem ser vendidos</mark>, mas seguindo as regras da lei, como autorização legislativa e licitação.",
      exemplo: "A prefeitura tinha um terreno vazio havia anos. Com autorização da Câmara Municipal e por meio de leilão público, ela o vendeu e usou o dinheiro para reformar a escola.",
      atencao: "As exigências estão principalmente na Lei de Licitações (Lei 14.133/2021): em regra, interesse público justificado, avaliação prévia e licitação (para imóveis, também autorização legislativa).",
      palavras: [
        { t: "Licitação", d: "Procedimento público que o governo usa para comprar, vender ou contratar, garantindo concorrência e transparência." }
      ],
      licao: "bens", relacionados: [99, 100]
    },
    {
      n: 102, rotulo: "Art. 102", caminho: PUB,
      texto: [{ tipo: "caput", t: "Os bens públicos não estão sujeitos a usucapião." }],
      simples: "<mark>Ninguém vira dono</mark> de um bem do governo só por ocupá-lo durante muitos anos. A <mark>usucapião</mark> não vale para bens públicos, de nenhum tipo.",
      exemplo: "Uma família ocupou um terreno da prefeitura e morou lá por 20 anos. Ela não pode pedir usucapião. Mas pode participar de programas de regularização fundiária, como a concessão de uso especial para moradia.",
      atencao: "A Constituição diz a mesma coisa nos arts. 183, § 3º, e 191, parágrafo único. A proteção vale até para bens dominicais (terrenos vazios do governo).",
      palavras: [
        { t: "Usucapião", d: "Forma de adquirir a propriedade pela posse prolongada, contínua e sem oposição, pelo tempo previsto em lei." },
        { t: "Regularização fundiária", d: "Conjunto de medidas para legalizar ocupações urbanas informais e dar título às famílias." }
      ],
      licao: "usucapiao", relacionados: [98, 99]
    },
    {
      n: 103, rotulo: "Art. 103", caminho: PUB,
      texto: [{ tipo: "caput", t: "O uso comum dos bens públicos pode ser gratuito ou retribuído, conforme for estabelecido legalmente pela entidade a cuja administração pertencerem." }],
      simples: "Usar um bem público pode ser <mark>de graça</mark> ou <mark>pago</mark>, conforme o governo responsável decidir, por lei.",
      exemplo: "Andar na praça do bairro é de graça. Já usar uma rodovia com pedágio, estacionar em área de “zona azul” ou entrar num parque nacional pode ser pago.",
      licao: "bens", relacionados: [99]
    }
  );
})();
