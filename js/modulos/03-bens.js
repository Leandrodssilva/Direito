window.MODULOS = window.MODULOS || [];
window.MODULOS.push({
  id: "domicilio-e-bens",
  numero: 3,
  titulo: "Onde moro e o que tenho",
  subtitulo: "Domicílio e os tipos de bens: móveis, imóveis, acessórios e benfeitorias.",
  licoes: [
    {
      id: "domicilio",
      titulo: "Domicílio: o endereço que vale para a lei",
      resumo: "Por que a lei quer saber onde você mora de verdade.",
      tempo: "5 min",
      historia:
        "<p>Lia perguntou: <span class='fala'>“Vó, se o carteiro precisa do nosso endereço para entregar cartas, quem precisa do endereço da gente para entregar coisas da lei?”</span></p>" +
        "<p><span class='fala'>“O juiz!”</span>, respondeu a Vovó. <span class='fala'>“Se alguém quiser cobrar uma dívida minha, precisa saber onde me encontrar. O lugar onde eu moro <mark>para ficar</mark>, com vontade de permanecer, é meu <mark>domicílio</mark>. É lá que a lei me procura.”</span></p>" +
        "<p>Lia lembrou: <span class='fala'>“Mas nas férias a gente fica na praia!”</span> <span class='fala'>“Na praia a gente só passeia. Lá não é nosso domicílio.”</span></p>",
      ideia: "Domicílio é o lugar onde a pessoa mora <mark>com intenção de ficar</mark>. É ali que ela, em regra, responde por seus direitos e deveres.",
      explicacao:
        "<p>Domicílio é diferente de simples <b>residência</b> ou <b>moradia</b>. Para ser domicílio, precisa haver duas coisas: a pessoa <b>mora ali</b> e tem <b>ânimo definitivo</b>, ou seja, vontade de permanecer.</p>" +
        "<h3>Casos especiais</h3>" +
        "<ul><li><b>Mais de uma casa:</b> quem vive alternadamente em vários lugares tem domicílio em qualquer um deles.</li>" +
        "<li><b>Profissão:</b> para assuntos do trabalho, o local onde a pessoa exerce a profissão também é domicílio.</li>" +
        "<li><b>Quem não tem casa fixa</b> (um artista de circo, por exemplo): o domicílio é o lugar onde ele for encontrado.</li>" +
        "<li><b>Domicílio necessário</b>, definido pela lei:</li></ul>" +
        "<div class='tabela-wrap'><table><thead><tr><th>Pessoa</th><th>Domicílio</th></tr></thead><tbody>" +
        "<tr><td>Incapaz (criança, por exemplo)</td><td>O do seu representante (os pais)</td></tr>" +
        "<tr><td>Servidor público</td><td>Onde exerce permanentemente as funções</td></tr>" +
        "<tr><td>Militar</td><td>Onde serve</td></tr>" +
        "<tr><td>Marítimo</td><td>Onde o navio está matriculado</td></tr>" +
        "<tr><td>Preso</td><td>Onde cumpre a pena</td></tr>" +
        "</tbody></table></div>" +
        "<h3>Domicílio da empresa</h3>" +
        "<p>Para as pessoas jurídicas, o domicílio é o lugar onde funciona a diretoria ou o que estiver escrito no estatuto. Se a empresa tem filiais, cada uma é domicílio para os negócios feitos ali.</p>" +
        "<h3>Para que serve</h3>" +
        "<p>Ele define, por exemplo, <b>em qual cidade</b> você será processado, onde receberá notificações e onde será aberto o inventário quando você morrer (o último domicílio).</p>",
      lei: [
        {
          ref: "Código Civil, art. 70",
          texto: "O domicílio da pessoa natural é o lugar onde ela estabelece a sua residência com ânimo definitivo.",
          simples: "Domicílio é onde você <b>mora para ficar</b>."
        },
        {
          ref: "Código Civil, art. 71",
          texto: "Se, porém, a pessoa natural tiver diversas residências, onde, alternadamente, viva, considerar-se-á domicílio seu qualquer delas.",
          simples: "Quem mora em mais de um lugar tem <b>mais de um domicílio</b>."
        },
        {
          ref: "Código Civil, art. 78",
          texto: "Nos contratos escritos, poderão os contratantes especificar domicílio onde se exercitem e cumpram os direitos e obrigações deles resultantes.",
          simples: "Num contrato, as partes podem escolher a cidade onde vão resolver os problemas dele. É o <b>foro de eleição</b>."
        }
      ],
      vida: [
        "Mudou de endereço? Atualize nos bancos, lojas e órgãos públicos. Muitas notificações são enviadas para o endereço que você informou.",
        "Em contratos com empresas, veja a cláusula de “foro”. Para o consumidor, uma cláusula que obriga a processar em outra cidade e dificulta sua defesa pode ser considerada <b>abusiva</b>.",
        "Nas ações de consumo, o consumidor pode processar a empresa na cidade <b>onde ele mora</b>."
      ],
      palavras: [
        { t: "Domicílio", d: "Lugar onde a pessoa mora com intenção de permanecer. É onde ela responde por seus atos perante a lei." },
        { t: "Ânimo definitivo", d: "A vontade de permanecer em um lugar, e não só estar de passagem." },
        { t: "Domicílio necessário", d: "Domicílio que a própria lei define para algumas pessoas, como incapazes, servidores públicos, militares e presos." },
        { t: "Foro de eleição", d: "Cidade escolhida no contrato para resolver na Justiça os conflitos dele." }
      ],
      quiz: [
        {
          p: "A família da Lia passa 15 dias de férias na praia todo ano. A casa de praia é domicílio deles?",
          o: ["Sim, porque eles ficam lá", "Não, porque falta a intenção de morar ali de forma permanente", "Sim, se tiver conta de luz no nome deles", "Depende do tamanho da casa"],
          c: 1,
          e: "Domicílio exige residência com ânimo definitivo. Ficar de passagem nas férias não basta."
        },
        {
          p: "Qual é o domicílio de uma criança de 8 anos?",
          o: ["O da escola", "O que ela escolher", "O do seu representante, normalmente os pais", "Não tem domicílio"],
          c: 2,
          e: "O incapaz tem domicílio necessário: o do seu representante ou assistente (art. 76)."
        },
        {
          p: "Seu Tonico tem uma casa na cidade e um sítio, e vive metade da semana em cada um. Qual é o domicílio dele?",
          o: ["Só a casa da cidade", "Só o sítio", "Qualquer um dos dois", "Nenhum"],
          c: 2,
          e: "Art. 71: quem vive alternadamente em várias residências tem domicílio em qualquer delas."
        }
      ]
    },

    {
      id: "bens",
      titulo: "Os tipos de bens",
      resumo: "Móveis, imóveis, fungíveis, acessórios, frutos e benfeitorias.",
      tempo: "8 min",
      historia:
        "<p>Lia fez uma lista das coisas da casa: a casa, a mangueira do quintal, a bicicleta, o Bolota (que, na verdade, é do Seu Tonico), um pacote de arroz e as mangas que caíram no chão.</p>" +
        "<p>Vovó Nina pegou a lista e foi separando: <span class='fala'>“A casa não sai do lugar: é <mark>imóvel</mark>. A bicicleta e o arroz você pode carregar: são <mark>móveis</mark>. O Bolota anda sozinho: também é móvel. O arroz acaba quando você usa: é <mark>consumível</mark>. E as mangas nascem da árvore sem estragar a árvore: são <mark>frutos</mark>.”</span></p>" +
        "<p>Lia arregalou os olhos: <span class='fala'>“O Direito tem nome para tudo!”</span></p>",
      ideia: "Bem é <mark>tudo o que tem valor</mark> e pode pertencer a alguém. A lei os separa em grupos porque cada grupo segue regras diferentes.",
      explicacao:
        "<p>Por que tanta classificação? Porque as regras mudam. Vender uma casa exige escritura e registro; vender uma bicicleta, não. Emprestar arroz é diferente de emprestar um carro. Vamos às principais:</p>" +
        "<div class='tabela-wrap'><table><thead><tr><th>Classificação</th><th>O que é</th><th>Exemplo</th></tr></thead><tbody>" +
        "<tr><td><b>Imóveis</b></td><td>O solo e tudo que se incorpora a ele, natural ou artificialmente</td><td>Terreno, casa, árvore plantada</td></tr>" +
        "<tr><td><b>Móveis</b></td><td>Os que podem ser movidos sem estragar. Os animais (semoventes) se movem sozinhos</td><td>Carro, celular, gado</td></tr>" +
        "<tr><td><b>Fungíveis</b></td><td>Podem ser trocados por outro igual</td><td>Dinheiro, saco de arroz, litro de leite</td></tr>" +
        "<tr><td><b>Infungíveis</b></td><td>Únicos, não podem ser substituídos</td><td>Um quadro original, o carro específico com aquela placa</td></tr>" +
        "<tr><td><b>Consumíveis</b></td><td>Acabam com o primeiro uso</td><td>Comida, combustível</td></tr>" +
        "<tr><td><b>Divisíveis</b></td><td>Podem ser partidos sem perder valor nem essência</td><td>Uma saca de café</td></tr>" +
        "<tr><td><b>Indivisíveis</b></td><td>Se partir, estraga ou perde o valor</td><td>Um cavalo, um relógio</td></tr>" +
        "</tbody></table></div>" +
        "<p>Curiosidade: a lei considera <b>imóveis</b> alguns direitos, como o direito à herança enquanto ela não é dividida. E considera <b>móveis</b> as energias que têm valor econômico, como a eletricidade.</p>" +
        "<h3>Principal e acessório</h3>" +
        "<p>O <b>principal</b> existe por si só. O <b>acessório</b> depende do principal. A regra de ouro é: <mark>o acessório segue o principal</mark>. Quem compra a mangueira (a árvore) leva junto as mangas que ainda estão nela.</p>" +
        "<p>São acessórios:</p>" +
        "<ul><li><b>Frutos:</b> nascem periodicamente sem diminuir a coisa principal. Podem ser naturais (mangas, crias de animais), industriais (produção de uma fábrica) ou civis (aluguéis, juros).</li>" +
        "<li><b>Produtos:</b> tirados da coisa e que a vão esgotando (o minério de uma mina).</li>" +
        "<li><b>Benfeitorias:</b> obras ou despesas feitas na coisa.</li></ul>" +
        "<h3>Os três tipos de benfeitoria</h3>" +
        "<div class='tabela-wrap'><table><thead><tr><th>Tipo</th><th>Para quê</th><th>Exemplo numa casa alugada</th></tr></thead><tbody>" +
        "<tr><td><b>Necessária</b></td><td>Conservar ou evitar que a coisa estrague</td><td>Consertar o telhado que vaza</td></tr>" +
        "<tr><td><b>Útil</b></td><td>Aumentar ou facilitar o uso</td><td>Instalar grades, construir uma garagem</td></tr>" +
        "<tr><td><b>Voluptuária</b></td><td>Só embelezar ou dar prazer</td><td>Piscina, fonte decorativa</td></tr>" +
        "</tbody></table></div>" +
        "<h3>Bens públicos</h3>" +
        "<p>Os bens do governo são públicos: as ruas e praças (de uso comum do povo), os prédios das repartições (de uso especial) e os demais (dominicais). Bens públicos <b>não podem ser adquiridos por usucapião</b>.</p>",
      lei: [
        {
          ref: "Código Civil, art. 79",
          texto: "São bens imóveis o solo e tudo quanto se lhe incorporar natural ou artificialmente.",
          simples: "Imóvel é a <b>terra</b> e o que está grudado nela: casa, árvore, poço."
        },
        {
          ref: "Código Civil, art. 82",
          texto: "São móveis os bens suscetíveis de movimento próprio, ou de remoção por força alheia, sem alteração da substância ou da destinação econômico-social.",
          simples: "Móvel é o que <b>anda sozinho</b> (animais) ou o que <b>dá para carregar</b> sem estragar."
        },
        {
          ref: "Código Civil, art. 92",
          texto: "Principal é o bem que existe sobre si, abstrata ou concretamente; acessório, aquele cuja existência supõe a do principal.",
          simples: "O acessório <b>depende</b> do principal para existir."
        },
        {
          ref: "Código Civil, art. 102",
          texto: "Os bens públicos não estão sujeitos a usucapião.",
          simples: "Ninguém vira dono de terreno do governo só por ocupar durante muitos anos."
        }
      ],
      vida: [
        "Mora de aluguel e precisa consertar algo urgente? Benfeitorias <b>necessárias</b> em geral devem ser pagas pelo dono, mesmo sem autorização prévia, salvo se o contrato disser outra coisa (Lei do Inquilinato, art. 35).",
        "Vai fazer uma benfeitoria <b>útil</b> no imóvel alugado? Peça autorização <b>por escrito</b> ao dono. Sem ela, você pode não ser reembolsado.",
        "Benfeitorias <b>voluptuárias</b> (piscina, jardim decorativo) não são indenizadas. Na saída, o inquilino pode retirá-las, se isso não estragar o imóvel.",
        "Ao comprar uma casa, combine por escrito o que fica (armários, ar-condicionado, luminárias). Assim você evita a discussão sobre o que é acessório."
      ],
      palavras: [
        { t: "Bem", d: "Tudo que tem valor e pode ser objeto de direito: coisas, animais, créditos." },
        { t: "Bem imóvel", d: "O solo e tudo que a ele se incorpora: terrenos, casas, árvores." },
        { t: "Bem móvel", d: "O que pode ser movido sem perder sua essência, inclusive os animais (semoventes)." },
        { t: "Fungível", d: "Que pode ser substituído por outro da mesma espécie, qualidade e quantidade, como dinheiro e grãos." },
        { t: "Semovente", d: "Bem móvel que se move por conta própria, como os animais." },
        { t: "Bem acessório", d: "Aquele que depende de outro, o principal. Em regra, o acessório segue o principal." },
        { t: "Frutos", d: "Utilidades que a coisa produz periodicamente sem se desgastar: mangas, crias, aluguéis, juros." },
        { t: "Benfeitoria", d: "Obra ou despesa feita em um bem. Pode ser necessária, útil ou voluptuária." }
      ],
      quiz: [
        {
          p: "Um cavalo, para o Direito, é um bem:",
          o: ["Imóvel", "Móvel semovente", "Público", "Fungível"],
          c: 1,
          e: "Animais são bens móveis que se movem sozinhos: os semoventes. Isso não tira a proteção que as leis dão aos animais contra maus-tratos."
        },
        {
          p: "O inquilino consertou um cano estourado que ia alagar a casa. Que tipo de benfeitoria é essa?",
          o: ["Voluptuária", "Útil", "Necessária", "Não é benfeitoria"],
          c: 2,
          e: "É necessária, porque serviu para conservar o imóvel e evitar um dano."
        },
        {
          p: "Você emprestou 100 reais ao Tio Beto. Ele precisa devolver exatamente a mesma nota?",
          o: ["Sim, a mesma nota", "Não, dinheiro é fungível: basta devolver 100 reais", "Sim, se você anotou o número de série", "Não precisa devolver"],
          c: 1,
          e: "Dinheiro é o exemplo clássico de bem fungível: pode ser substituído por outro de mesmo valor."
        },
        {
          p: "Os aluguéis que uma casa rende são classificados como:",
          o: ["Produtos", "Frutos civis", "Benfeitorias", "Bens públicos"],
          c: 1,
          e: "Aluguéis e juros são frutos civis: rendimentos periódicos que a coisa gera sem se esgotar."
        }
      ]
    }
  ]
});
