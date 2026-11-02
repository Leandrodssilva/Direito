/* Código Civil explicado: arts. 26 a 39 (ausência: sucessão provisória e definitiva). Formato em js/codigo/0001-0005.js. */
window.CODIGO = window.CODIGO || { artigos: [] };
(function () {
  var PROV = ["Parte Geral", "Livro I — Das Pessoas", "Título I — Das Pessoas Naturais", "Capítulo III — Da Ausência", "Seção II — Da Sucessão Provisória"];
  var DEF = ["Parte Geral", "Livro I — Das Pessoas", "Título I — Das Pessoas Naturais", "Capítulo III — Da Ausência", "Seção III — Da Sucessão Definitiva"];

  window.CODIGO.artigos.push(
    {
      n: 26, rotulo: "Art. 26", caminho: PROV,
      texto: [
        { tipo: "caput", t: "Decorrido um ano da arrecadação dos bens do ausente, ou, se ele deixou representante ou procurador, em se passando três anos, poderão os interessados requerer que se declare a ausência e se abra provisoriamente a sucessão." }
      ],
      simples: "Depois de um tempo cuidando dos bens de quem sumiu, a família pode dar o <mark>segundo passo</mark>: pedir que os herdeiros passem a usar os bens, ainda de forma <mark>provisória</mark>. O prazo é de <mark>1 ano</mark> se o desaparecido não deixou procurador, ou <mark>3 anos</mark> se deixou.",
      itens: [
        { r: "1 ano", t: "Conta-se da <b>arrecadação dos bens</b>, ou seja, do momento em que o juiz mandou recolher e listar os bens do ausente e o curador passou a cuidar deles." },
        { r: "3 anos", t: "Se o ausente deixou um <b>representante ou procurador</b>, a lei espera mais, porque alguém de confiança dele já estava cuidando das coisas." },
        { r: "O pedido", t: "Os interessados pedem ao juiz duas coisas: que declare a ausência e que abra a <b>sucessão provisória</b>, uma espécie de “herança temporária”." }
      ],
      exemplo: "Fazia um ano que a cunhada do Seu Tonico cuidava, como curadora, do apartamento do irmão dele, que tinha desaparecido. Como ele não tinha deixado procurador, a família pôde pedir ao juiz a abertura da sucessão provisória.",
      atencao: "“Provisória” quer dizer que os herdeiros ainda <b>não são donos definitivos</b>. Se o ausente voltar, os bens voltam para ele (art. 36). Por isso, nessa fase, a lei exige garantias e cuidados.",
      palavras: [
        { t: "Arrecadação de bens", d: "Ato judicial de recolher e listar os bens de alguém para que fiquem guardados e administrados." },
        { t: "Sucessão provisória", d: "Segunda fase da ausência: os herdeiros recebem os bens do desaparecido de forma temporária, podendo ter de devolvê-los se ele voltar." }
      ],
      licao: "pessoa-natural", relacionados: [22, 27, 28, 37]
    },
    {
      n: 27, rotulo: "Art. 27", caminho: PROV,
      texto: [
        { tipo: "caput", t: "Para o efeito previsto no artigo anterior, somente se consideram interessados:" },
        { tipo: "inciso", r: "I", t: "o cônjuge não separado judicialmente;" },
        { tipo: "inciso", r: "II", t: "os herdeiros presumidos, legítimos ou testamentários;" },
        { tipo: "inciso", r: "III", t: "os que tiverem sobre os bens do ausente direito dependente de sua morte;" },
        { tipo: "inciso", r: "IV", t: "os credores de obrigações vencidas e não pagas." }
      ],
      simples: "Nem qualquer pessoa pode pedir a sucessão provisória do art. 26. Só podem pedir as <mark>pessoas que têm algo a ver</mark> com os bens do desaparecido: o cônjuge, os herdeiros, quem tem algum direito que depende da morte dele e os credores.",
      itens: [
        { r: "I", t: "O <b>marido ou a esposa</b>, desde que não estivessem separados judicialmente. O companheiro da união estável também é admitido pelos tribunais." },
        { r: "II", t: "Os <b>herdeiros presumidos</b>: os que seriam herdeiros se ele tivesse morrido, seja pela lei (filhos, pais etc.), seja por testamento." },
        { r: "III", t: "Quem tem um direito que <b>depende da morte</b> do ausente. Por exemplo, o beneficiário de um seguro de vida." },
        { r: "IV", t: "Os <b>credores</b> com dívidas já vencidas e não pagas: precisam receber o que o desaparecido lhes devia." }
      ],
      exemplo: "O ausente devia dinheiro a um banco, com parcelas já vencidas. O banco também pode pedir a abertura da sucessão provisória, porque é credor de dívida vencida (inciso IV).",
      atencao: "Se nenhum desses interessados fizer o pedido, o <b>Ministério Público</b> deve fazê-lo (art. 28, § 1º).",
      palavras: [
        { t: "Herdeiro presumido", d: "Quem seria herdeiro se a pessoa tivesse morrido." },
        { t: "Herdeiro testamentário", d: "Quem recebe bens porque foi indicado num testamento." },
        { t: "Credor", d: "Quem tem o direito de receber algo, como o pagamento de uma dívida." }
      ],
      licao: "pessoa-natural", relacionados: [26, 28]
    },
    {
      n: 28, rotulo: "Art. 28", caminho: PROV,
      texto: [
        { tipo: "caput", t: "A sentença que determinar a abertura da sucessão provisória só produzirá efeito cento e oitenta dias depois de publicada pela imprensa; mas, logo que passe em julgado, proceder-se-á à abertura do testamento, se houver, e ao inventário e partilha dos bens, como se o ausente fosse falecido." },
        { tipo: "paragrafo", r: "§ 1º", t: "Findo o prazo a que se refere o art. 26, e não havendo interessados na sucessão provisória, cumpre ao Ministério Público requerê-la ao juízo competente." },
        { tipo: "paragrafo", r: "§ 2º", t: "Não comparecendo herdeiro ou interessado para requerer o inventário até trinta dias depois de passar em julgado a sentença que mandar abrir a sucessão provisória, proceder-se-á à arrecadação dos bens do ausente pela forma estabelecida nos arts. 1.819 a 1.823." }
      ],
      simples: "A decisão que abre a sucessão provisória espera <mark>180 dias</mark> depois de publicada para valer, dando uma última chance de o desaparecido aparecer. Enquanto isso, já se pode <mark>abrir o testamento</mark> e fazer o <mark>inventário</mark>, como se ele tivesse morrido.",
      itens: [
        { r: "Caput", t: "A sentença é publicada na imprensa e só produz efeito <b>180 dias</b> depois. Mas, quando não couber mais recurso, já se abre o testamento (se houver) e se faz o inventário e a partilha." },
        { r: "§ 1º", t: "Se ninguém pedir a sucessão provisória no prazo do art. 26, quem deve pedir é o <b>Ministério Público</b>." },
        { r: "§ 2º", t: "Se ninguém aparecer para fazer o inventário em <b>30 dias</b>, os bens são arrecadados como uma <b>herança jacente</b> (herança sem herdeiro conhecido), que pode acabar indo para o Município." }
      ],
      exemplo: "O juiz abriu a sucessão provisória dos bens do irmão do Seu Tonico, e a decisão foi publicada. Durante os 180 dias seguintes, a família fez o inventário, listando o apartamento e a conta no banco, para dividir entre os herdeiros quando a decisão começasse a valer.",
      atencao: "Note o “como se o ausente fosse falecido”. É uma ficção da lei: ninguém sabe se ele morreu, mas, para organizar os bens, o processo segue como se fosse uma herança.",
      palavras: [
        { t: "Passar em julgado", d: "Quando não cabe mais recurso contra uma decisão, e ela se torna definitiva." },
        { t: "Partilha", d: "Divisão dos bens entre os herdeiros." },
        { t: "Herança jacente", d: "Herança de alguém que não deixou herdeiros conhecidos. Fica sob guarda de um curador até que eles apareçam ou que ela vá para o poder público." }
      ],
      licao: "pessoa-natural", relacionados: [26, 27, 30]
    },
    {
      n: 29, rotulo: "Art. 29", caminho: PROV,
      texto: [
        { tipo: "caput", t: "Antes da partilha, o juiz, quando julgar conveniente, ordenará a conversão dos bens móveis, sujeitos a deterioração ou a extravio, em imóveis ou em títulos garantidos pela União." }
      ],
      simples: "Alguns bens estragam ou somem fácil, como comida estocada, animais, máquinas, um carro parado. Para <mark>proteger o valor</mark> do patrimônio de quem sumiu, o juiz pode mandar <mark>vender esses bens</mark> e guardar o dinheiro em algo mais seguro: um imóvel ou títulos do governo.",
      exemplo: "O ausente tinha um carro parado na garagem, que estava se desvalorizando e enferrujando. O juiz autorizou a venda e mandou aplicar o dinheiro em títulos do Tesouro Nacional. Se ele voltar, encontrará o valor preservado.",
      atencao: "O juiz só faz isso “quando julgar conveniente”. Não é obrigatório: depende de os bens estarem realmente correndo risco.",
      palavras: [
        { t: "Deterioração", d: "Estrago, perda de qualidade com o tempo." },
        { t: "Extravio", d: "Perda, sumiço." },
        { t: "Títulos garantidos pela União", d: "Investimentos emitidos pelo governo federal, como os títulos do Tesouro Direto." }
      ],
      licao: "pessoa-natural", relacionados: [28, 33]
    },
    {
      n: 30, rotulo: "Art. 30", caminho: PROV,
      texto: [
        { tipo: "caput", t: "Os herdeiros, para se imitirem na posse dos bens do ausente, darão garantias da restituição deles, mediante penhores ou hipotecas equivalentes aos quinhões respectivos." },
        { tipo: "paragrafo", r: "§ 1º", t: "Aquele que tiver direito à posse provisória, mas não puder prestar a garantia exigida neste artigo, será excluído, mantendo-se os bens que lhe deviam caber sob a administração do curador, ou de outro herdeiro designado pelo juiz, e que preste essa garantia." },
        { tipo: "paragrafo", r: "§ 2º", t: "Os ascendentes, os descendentes e o cônjuge, uma vez provada a sua qualidade de herdeiros, poderão, independentemente de garantia, entrar na posse dos bens do ausente." }
      ],
      simples: "Como o desaparecido pode voltar, quem recebe os bens na sucessão provisória precisa dar uma <mark>garantia</mark> de que vai devolvê-los. Mas os parentes mais próximos (<mark>pais, filhos e cônjuge</mark>) estão <mark>dispensados</mark> dessa garantia.",
      itens: [
        { r: "Caput", t: "Para entrar na posse, o herdeiro dá uma garantia (penhor ou hipoteca) do mesmo valor da parte que vai receber." },
        { r: "§ 1º", t: "Quem não puder dar a garantia fica de fora por enquanto, e a parte dele continua com o curador ou com outro herdeiro que dê a garantia. (O art. 34 permite que ele receba metade dos rendimentos.)" },
        { r: "§ 2º", t: "<b>Ascendentes</b> (pais, avós), <b>descendentes</b> (filhos, netos) e o <b>cônjuge</b> não precisam dar garantia. Basta provar que são herdeiros." }
      ],
      exemplo: "O ausente deixou uma filha e um sobrinho que era herdeiro por testamento. A filha pôde ficar com a parte dela sem dar garantia. Já o sobrinho teve de oferecer uma hipoteca de um imóvel dele para entrar na posse da parte que lhe cabia.",
      atencao: "A ideia é equilibrar: os parentes mais próximos são, presumivelmente, quem o ausente gostaria de proteger, e a lei confia mais neles.",
      palavras: [
        { t: "Imitir-se na posse", d: "Entrar na posse, passar a ter e usar os bens." },
        { t: "Quinhão", d: "A parte que cabe a cada herdeiro." },
        { t: "Penhor e hipoteca", d: "Garantias: o penhor recai sobre bens móveis; a hipoteca, sobre imóveis." }
      ],
      licao: "pessoa-natural", relacionados: [28, 34]
    },
    {
      n: 31, rotulo: "Art. 31", caminho: PROV,
      texto: [
        { tipo: "caput", t: "Os imóveis do ausente só se poderão alienar, não sendo por desapropriação, ou hipotecar, quando o ordene o juiz, para lhes evitar a ruína." }
      ],
      simples: "Na sucessão provisória, os herdeiros <mark>não podem vender nem hipotecar</mark> os imóveis de quem sumiu. Só com <mark>ordem do juiz</mark> e para evitar que o imóvel <mark>se estrague</mark>. A exceção é a desapropriação feita pelo governo.",
      exemplo: "A casa do ausente estava com o telhado desabando, e os herdeiros não tinham dinheiro para a reforma. O juiz autorizou uma hipoteca para conseguir o empréstimo e salvar a casa da ruína.",
      atencao: "A regra protege o desaparecido: se ele voltar, terá de volta o imóvel, e não apenas o dinheiro de uma venda apressada.",
      palavras: [
        { t: "Alienar", d: "Transferir a propriedade a outra pessoa, como vender ou doar." },
        { t: "Desapropriação", d: "Quando o governo toma um bem particular para uso público, pagando indenização ao dono." },
        { t: "Ruína", d: "Estado de destruição ou de grande estrago." }
      ],
      licao: "pessoa-natural", relacionados: [30, 36]
    },
    {
      n: 32, rotulo: "Art. 32", caminho: PROV,
      texto: [
        { tipo: "caput", t: "Empossados nos bens, os sucessores provisórios ficarão representando ativa e passivamente o ausente, de modo que contra eles correrão as ações pendentes e as que de futuro àquele forem movidas." }
      ],
      simples: "Quando os herdeiros recebem os bens na sucessão provisória, eles passam a <mark>representar o desaparecido</mark> na Justiça: podem <mark>cobrar</mark> o que devem a ele e <mark>respondem</mark> pelos processos contra ele.",
      itens: [
        { r: "Ativamente", t: "Os herdeiros podem entrar na Justiça em nome do ausente, por exemplo, para cobrar um inquilino que não paga." },
        { r: "Passivamente", t: "Quem quiser processar o ausente processa os herdeiros provisórios. Os processos que já existiam continuam contra eles." }
      ],
      exemplo: "Um credor do ausente entrou com uma ação de cobrança. Como a filha dele já era sucessora provisória, a ação foi movida contra ela, que vai responder com os bens do pai, e não com os dela.",
      atencao: "Os herdeiros respondem com os <b>bens do ausente</b>, não com o próprio patrimônio, como acontece em qualquer herança.",
      palavras: [
        { t: "Empossado", d: "Que já entrou na posse." },
        { t: "Ação pendente", d: "Processo judicial que já começou e ainda não terminou." }
      ],
      licao: "pessoa-natural", relacionados: [30, 33]
    },
    {
      n: 33, rotulo: "Art. 33", caminho: PROV,
      texto: [
        { tipo: "caput", t: "O descendente, ascendente ou cônjuge que for sucessor provisório do ausente, fará seus todos os frutos e rendimentos dos bens que a este couberem; os outros sucessores, porém, deverão capitalizar metade desses frutos e rendimentos, segundo o disposto no art. 29, de acordo com o representante do Ministério Público, e prestar anualmente contas ao juiz competente." },
        { tipo: "paragrafo", r: "Parágrafo único.", t: "Se o ausente aparecer, e ficar provado que a ausência foi voluntária e injustificada, perderá ele, em favor do sucessor, sua parte nos frutos e rendimentos." }
      ],
      simples: "E os <mark>aluguéis e rendimentos</mark> dos bens? Os parentes mais próximos (filhos, pais, cônjuge) <mark>ficam com tudo</mark>. Os outros herdeiros ficam com <mark>metade</mark> e precisam guardar a outra metade, prestando contas todo ano.",
      itens: [
        { r: "Caput, 1ª parte", t: "<b>Descendentes, ascendentes e cônjuge</b> ficam com 100% dos frutos e rendimentos (aluguéis, juros, colheitas)." },
        { r: "Caput, 2ª parte", t: "<b>Outros sucessores</b> (um irmão, um sobrinho, um amigo indicado em testamento) guardam metade, aplicando-a com segurança (art. 29), e prestam contas ao juiz <b>todo ano</b>." },
        { r: "Parágrafo único", t: "Se o ausente voltar e ficar provado que ele <b>sumiu de propósito e sem motivo</b>, ele perde a parte dele nos rendimentos, que fica com o sucessor." }
      ],
      exemplo: "O apartamento do ausente rendia R$ 1.000 de aluguel. A filha, sucessora provisória, ficava com os R$ 1.000. Se o sucessor fosse o sobrinho, ele ficaria com R$ 500 e aplicaria os outros R$ 500, prestando contas anualmente.",
      atencao: "O parágrafo único é uma espécie de punição: quem abandona tudo sem justificativa não pode depois cobrar os rendimentos de quem cuidou dos bens.",
      palavras: [
        { t: "Frutos e rendimentos", d: "O que os bens produzem periodicamente, como aluguéis, juros e colheitas." },
        { t: "Capitalizar", d: "Guardar e aplicar o dinheiro para que ele renda." }
      ],
      licao: "pessoa-natural", relacionados: [29, 30, 34, 36]
    },
    {
      n: 34, rotulo: "Art. 34", caminho: PROV,
      texto: [
        { tipo: "caput", t: "O excluído, segundo o art. 30, da posse provisória poderá, justificando falta de meios, requerer lhe seja entregue metade dos rendimentos do quinhão que lhe tocaria." }
      ],
      simples: "Lembra do herdeiro que ficou de fora por <mark>não conseguir dar garantia</mark> (art. 30, § 1º)? Se ele provar que <mark>não tem dinheiro</mark>, pode pedir para receber <mark>metade dos rendimentos</mark> da parte que seria dele.",
      exemplo: "O sobrinho do ausente não tinha imóvel nem bens para dar em garantia e ficou de fora da posse provisória. Como estava desempregado, pediu ao juiz e passou a receber metade dos aluguéis da parte que lhe caberia.",
      atencao: "A regra evita que alguém pobre seja duplamente prejudicado: ficar sem os bens só porque não tem como oferecer garantia.",
      palavras: [
        { t: "Falta de meios", d: "Não ter recursos financeiros suficientes." }
      ],
      licao: "pessoa-natural", relacionados: [30, 33]
    },
    {
      n: 35, rotulo: "Art. 35", caminho: PROV,
      texto: [
        { tipo: "caput", t: "Se durante a posse provisória se provar a época exata do falecimento do ausente, considerar-se-á, nessa data, aberta a sucessão em favor dos herdeiros, que o eram àquele tempo." }
      ],
      simples: "Se, no meio da sucessão provisória, alguém <mark>descobrir quando o desaparecido realmente morreu</mark>, a herança passa a ser contada <mark>daquela data</mark>. E herdam as pessoas que eram herdeiras <mark>naquele dia</mark>.",
      exemplo: "Três anos depois do desaparecimento, a polícia identificou que o irmão do Seu Tonico tinha morrido num acidente em outro estado, dois meses depois de sumir. A herança passou a ser considerada aberta naquela data, e herdaram as pessoas que eram suas herdeiras naquele momento.",
      atencao: "Isso pode mudar quem herda. Se um herdeiro morreu depois da data real da morte do ausente, ele chegou a herdar, e a parte dele passa para os herdeiros dele.",
      palavras: [
        { t: "Abertura da sucessão", d: "O momento em que a herança passa para os herdeiros: normalmente, o da morte." }
      ],
      licao: "pessoa-natural", relacionados: [6, 36]
    },
    {
      n: 36, rotulo: "Art. 36", caminho: PROV,
      texto: [
        { tipo: "caput", t: "Se o ausente aparecer, ou se lhe provar a existência, depois de estabelecida a posse provisória, cessarão para logo as vantagens dos sucessores nela imitidos, ficando, todavia, obrigados a tomar as medidas assecuratórias precisas, até a entrega dos bens a seu dono." }
      ],
      simples: "Se o desaparecido <mark>voltar</mark> (ou se provarem que ele <mark>está vivo</mark>) durante a sucessão provisória, os herdeiros <mark>perdem na hora</mark> as vantagens. Mas, até devolverem tudo, eles continuam obrigados a <mark>cuidar bem</mark> dos bens.",
      exemplo: "Quatro anos depois, o irmão do Seu Tonico voltou para casa. Os herdeiros provisórios deixaram de ficar com os aluguéis imediatamente, mas tiveram que continuar cuidando do apartamento até devolvê-lo a ele.",
      atencao: "O que já foi recebido de rendimentos pelos parentes próximos, conforme o art. 33, em regra não precisa ser devolvido.",
      palavras: [
        { t: "Medidas assecuratórias", d: "Providências para proteger e conservar os bens." }
      ],
      licao: "pessoa-natural", relacionados: [33, 39]
    },
    {
      n: 37, rotulo: "Art. 37", caminho: DEF,
      texto: [
        { tipo: "caput", t: "Dez anos depois de passada em julgado a sentença que concede a abertura da sucessão provisória, poderão os interessados requerer a sucessão definitiva e o levantamento das cauções prestadas." }
      ],
      simples: "<mark>Dez anos</mark> depois da decisão que abriu a sucessão provisória, os herdeiros podem pedir a <mark>sucessão definitiva</mark>: passam a ser <mark>donos de verdade</mark> e recebem de volta as garantias que deram.",
      exemplo: "Doze anos depois do desaparecimento do irmão do Seu Tonico (um ano de curadoria, mais dez de sucessão provisória e um pouco do processo), a família pediu a sucessão definitiva. O sobrinho recebeu de volta a hipoteca que tinha dado como garantia.",
      atencao: "É com a sucessão definitiva que a lei presume a morte do ausente (art. 6º). Mesmo assim, ele ainda pode voltar e recuperar parte dos bens, nos termos do art. 39.",
      palavras: [
        { t: "Sucessão definitiva", d: "Última fase da ausência: os herdeiros passam a ser donos definitivos dos bens do desaparecido." },
        { t: "Caução", d: "Garantia dada para assegurar o cumprimento de uma obrigação." },
        { t: "Levantamento", d: "Retirada, liberação de algo que estava depositado ou preso." }
      ],
      licao: "pessoa-natural", relacionados: [6, 26, 38, 39]
    },
    {
      n: 38, rotulo: "Art. 38", caminho: DEF,
      texto: [
        { tipo: "caput", t: "Pode-se requerer a sucessão definitiva, também, provando-se que o ausente conta oitenta anos de idade, e que de cinco datam as últimas notícias dele." }
      ],
      simples: "Existe um <mark>atalho</mark>: se o desaparecido já teria <mark>80 anos</mark> e as últimas notícias dele são de <mark>5 anos atrás</mark>, a família pode pedir direto a sucessão definitiva, sem esperar os dez anos.",
      exemplo: "O avô do Pedrinho, com Alzheimer, saiu de casa aos 79 anos e nunca mais foi visto. Cinco anos depois, com ele já tendo 84 anos, a família pôde pedir diretamente a sucessão definitiva.",
      atencao: "A ideia é de bom senso: com essa idade e tanto tempo sem notícias, a morte é muito provável, e não faz sentido esperar mais uma década.",
      licao: "pessoa-natural", relacionados: [37]
    },
    {
      n: 39, rotulo: "Art. 39", caminho: DEF,
      texto: [
        { tipo: "caput", t: "Regressando o ausente nos dez anos seguintes à abertura da sucessão definitiva, ou algum de seus descendentes ou ascendentes, aquele ou estes haverão só os bens existentes no estado em que se acharem, os sub-rogados em seu lugar, ou o preço que os herdeiros e demais interessados houverem recebido pelos bens alienados depois daquele tempo." },
        { tipo: "paragrafo", r: "Parágrafo único.", t: "Se, nos dez anos a que se refere este artigo, o ausente não regressar, e nenhum interessado promover a sucessão definitiva, os bens arrecadados passarão ao domínio do Município ou do Distrito Federal, se localizados nas respectivas circunscrições, incorporando-se ao domínio da União, quando situados em território federal." }
      ],
      simples: "Mesmo depois da sucessão definitiva, o desaparecido (ou um filho ou pai dele) que <mark>voltar em até 10 anos</mark> pode recuperar os bens, mas só <mark>do jeito que estiverem</mark>: o que sobrou, o que foi comprado no lugar ou o dinheiro das vendas. E, se ninguém aparecer para pedir nada, os bens vão para o <mark>Município</mark>.",
      itens: [
        { r: "Caput", t: "Quem volta em até <b>10 anos</b> recebe: os bens que ainda existem, <b>no estado em que estão</b>; os bens comprados no lugar deles (sub-rogados); ou o <b>preço</b> recebido pelos que foram vendidos. Não pode exigir indenização por desgaste, nem o que foi gasto." },
        { r: "Parágrafo único", t: "Se, nesses dez anos, o ausente não voltar e <b>ninguém pedir</b> a sucessão definitiva, os bens vão para o <b>Município</b> (ou o Distrito Federal) onde estão. Em território federal, vão para a União." }
      ],
      exemplo: "O irmão do Seu Tonico voltou cinco anos depois da sucessão definitiva. A filha tinha vendido o carro dele e reformado o apartamento. Ele recebeu o apartamento como estava e o dinheiro da venda do carro, mas não pôde exigir nada além disso.",
      atencao: "Depois desses 10 anos da sucessão definitiva, mesmo que o ausente volte, os bens não são mais dele.",
      palavras: [
        { t: "Bens sub-rogados", d: "Bens que tomaram o lugar de outros, como uma casa comprada com o dinheiro da venda de outra." },
        { t: "Circunscrição", d: "A área de território de um município, estado ou outra divisão." }
      ],
      licao: "pessoa-natural", relacionados: [36, 37]
    }
  );
})();
