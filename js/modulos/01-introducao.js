window.MODULOS = window.MODULOS || [];
window.MODULOS.push({
  id: "introducao",
  numero: 1,
  titulo: "Começando do zero",
  subtitulo: "O que é Direito, o que é Direito Civil e como se lê uma lei.",
  licoes: [
    {
      id: "o-que-e-direito",
      titulo: "O que é o Direito?",
      resumo: "As regras que deixam as pessoas viverem juntas sem briga.",
      tempo: "5 min",
      historia:
        "<p>Lia chamou os amigos para jogar bola na rua. No começo, cada um jogava do seu jeito: um pegava a bola com a mão, outro chutava para qualquer lado, e o gol não tinha tamanho certo. Em dez minutos, todo mundo estava brigando.</p>" +
        "<p>Vovó Nina veio da janela e perguntou: <span class='fala'>“Vocês combinaram as regras antes?”</span></p>" +
        "<p>Eles pararam, combinaram o que valia e o que não valia, e escolheram a Vovó como juíza. Pronto: o jogo ficou justo e divertido.</p>" +
        "<p>O <mark>Direito é isso</mark>, só que para um país inteiro: um conjunto de regras combinadas para que milhões de pessoas consigam viver juntas, e alguém (o juiz) para decidir quando há briga.</p>",
      ideia: "Direito é o conjunto de <mark>regras obrigatórias</mark> que organiza a vida em sociedade e diz o que acontece quando alguém não cumpre.",
      explicacao:
        "<p>Existem muitas regras na vida: regras da casa, da escola, da religião, de etiqueta. O que torna uma regra <b>jurídica</b> é que ela vale para todos e pode ser <b>cobrada pelo Estado</b>. Se você não cumprimentar o vizinho, é falta de educação. Se você não pagar o aluguel, o dono pode ir à Justiça cobrar.</p>" +
        "<p>As regras jurídicas mais conhecidas são as <b>leis</b>. No Brasil, quem faz as leis federais é o <b>Congresso Nacional</b> (deputados e senadores), e o Presidente da República sanciona, ou seja, assina para que elas comecem a valer.</p>" +
        "<h3>A pirâmide das leis</h3>" +
        "<p>As leis não são todas iguais. Imagine uma pirâmide:</p>" +
        "<ul><li><b>No topo, a Constituição Federal</b> (de 1988). É a lei mais importante. Nenhuma outra pode ir contra ela.</li>" +
        "<li><b>No meio, as leis</b>, como o Código Civil, o Código de Defesa do Consumidor, a Lei do Inquilinato.</li>" +
        "<li><b>Embaixo, as regras menores</b>, como decretos e resoluções, que detalham as leis.</li></ul>" +
        "<p>Se uma regra de baixo contradiz uma de cima, vale a de cima.</p>" +
        "<h3>Público e privado</h3>" +
        "<p>O Direito é dividido em “ramos”, como galhos de uma árvore. Um jeito simples de separar:</p>" +
        "<ul><li><b>Direito Público:</b> cuida da relação das pessoas com o Estado (impostos, crimes, eleições).</li>" +
        "<li><b>Direito Privado:</b> cuida da relação das pessoas entre si (comprar, alugar, casar, herdar). O <mark>Direito Civil</mark> é o principal ramo do Direito Privado, e é por ele que vamos começar.</li></ul>",
      lei: [
        {
          ref: "Constituição Federal, art. 5º, II",
          texto: "ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei;",
          simples: "Só a <b>lei</b> pode obrigar você a fazer ou a não fazer algo. Se nenhuma lei proíbe, em regra você pode."
        },
        {
          ref: "Constituição Federal, art. 5º, XXXV",
          texto: "a lei não excluirá da apreciação do Poder Judiciário lesão ou ameaça a direito;",
          simples: "Se alguém feriu ou ameaça um direito seu, você <b>sempre</b> pode pedir ajuda à Justiça."
        }
      ],
      vida: [
        "Quando alguém diz “isso é ilegal”, quer dizer que alguma lei proíbe. Pergunte sempre: <b>qual lei?</b>",
        "O Judiciário (juízes e tribunais) não cria as leis. Ele <b>aplica</b> as leis aos casos que chegam até ele.",
        "Para causas pequenas do dia a dia existe o <b>Juizado Especial Cível</b>. Em causas de até 20 salários mínimos, você pode entrar sem advogado."
      ],
      palavras: [
        { t: "Direito", d: "Conjunto de regras obrigatórias que organizam a vida em sociedade e que o Estado pode fazer cumprir." },
        { t: "Lei", d: "Regra escrita, aprovada pelo Poder Legislativo, que vale para todos." },
        { t: "Constituição", d: "A lei mais importante do país. Fica no topo, e nenhuma outra pode contrariá-la. A nossa é de 1988." },
        { t: "Poder Judiciário", d: "Os juízes e tribunais. Decidem os conflitos aplicando as leis." },
        { t: "Direito Privado", d: "Parte do Direito que cuida das relações entre pessoas comuns e empresas, como contratos, família e herança." }
      ],
      quiz: [
        {
          p: "O que diferencia uma regra jurídica de uma regra de etiqueta?",
          o: ["A regra jurídica é mais antiga", "A regra jurídica pode ser cobrada pelo Estado", "A regra jurídica só vale para advogados", "Não há diferença"],
          c: 1,
          e: "Regras de etiqueta são boas maneiras. Regras jurídicas podem ser exigidas na Justiça, com consequências para quem não cumpre."
        },
        {
          p: "Uma lei comum diz uma coisa e a Constituição diz o contrário. Qual vale?",
          o: ["A mais nova", "A lei comum, porque é mais detalhada", "A Constituição, porque está no topo da pirâmide", "As duas valem igualmente"],
          c: 2,
          e: "A Constituição é a lei suprema. Uma lei que contraria a Constituição é inconstitucional e não deve ser aplicada."
        },
        {
          p: "Comprar um carro, alugar uma casa e receber herança são assuntos principalmente de qual ramo?",
          o: ["Direito Penal", "Direito Civil", "Direito Eleitoral", "Direito Tributário"],
          c: 1,
          e: "São relações entre pessoas comuns, assunto do Direito Civil, o principal ramo do Direito Privado."
        }
      ]
    },

    {
      id: "o-que-e-direito-civil",
      titulo: "O Direito Civil e o Código Civil",
      resumo: "O “manual de instruções” da vida comum, do nascimento até a herança.",
      tempo: "6 min",
      historia:
        "<p>Lia perguntou para a Vovó Nina: <span class='fala'>“Vó, qual lei fala de mim?”</span></p>" +
        "<p>A Vovó pegou um livro grosso da estante. <span class='fala'>“Quase tudo da sua vida está neste aqui, o Código Civil. Ele falou de você quando você nasceu e ganhou um nome. Fala de você quando o Tio Beto vende um pão, quando alugamos esta casa, quando o Bolota do Seu Tonico late de madrugada e quando um dia você herdar meus livros.”</span></p>" +
        "<p><span class='fala'>“Então ele é o manual de instruções da vida?”</span>, perguntou Lia. <span class='fala'>“Da vida comum, sim”</span>, sorriu a Vovó.</p>",
      ideia: "O Direito Civil cuida da <mark>vida comum das pessoas</mark>: quem somos, o que temos, o que combinamos, nossa família e o que deixamos quando morremos.",
      explicacao:
        "<p>O Código Civil brasileiro é a <b>Lei nº 10.406, de 2002</b>, e começou a valer em janeiro de 2003. Ele tem mais de 2.000 artigos. Não precisa decorar nada: o importante é entender como ele está organizado, como as gavetas de um armário.</p>" +
        "<div class='tabela-wrap'><table><thead><tr><th>Parte</th><th>Do que trata</th><th>Pergunta que responde</th></tr></thead><tbody>" +
        "<tr><td><b>Parte Geral</b></td><td>Pessoas, bens, negócios jurídicos, prazos</td><td>Quem pode fazer o quê? Quando um acordo vale?</td></tr>" +
        "<tr><td><b>Obrigações</b></td><td>Dívidas, pagamento, contratos, indenizações</td><td>O que devo? O que acontece se eu não pagar?</td></tr>" +
        "<tr><td><b>Empresa</b></td><td>Empresários e sociedades</td><td>Como funciona uma empresa?</td></tr>" +
        "<tr><td><b>Coisas</b></td><td>Posse, propriedade, vizinhos, garantias</td><td>O que é meu? Como provo que é meu?</td></tr>" +
        "<tr><td><b>Família</b></td><td>Casamento, união estável, filhos, pensão</td><td>Quais são os direitos dentro da família?</td></tr>" +
        "<tr><td><b>Sucessões</b></td><td>Herança e testamento</td><td>Para quem vão os bens de quem morreu?</td></tr>" +
        "</tbody></table></div>" +
        "<p>Esta trilha segue exatamente essa ordem (deixando a parte de Empresa para um curso futuro de Direito Empresarial).</p>" +
        "<p>O Código Civil não trabalha sozinho. Ao lado dele há <b>leis especiais</b> que cuidam de assuntos específicos e, quando tratam do mesmo tema, costumam ter preferência:</p>" +
        "<ul><li><b>Código de Defesa do Consumidor</b> (Lei 8.078/1990): compras de lojas e empresas.</li>" +
        "<li><b>Lei do Inquilinato</b> (Lei 8.245/1991): aluguel de imóveis urbanos.</li>" +
        "<li><b>Estatuto da Criança e do Adolescente</b> (Lei 8.069/1990) e <b>Estatuto da Pessoa Idosa</b> (Lei 10.741/2003).</li></ul>",
      lei: [
        {
          ref: "Código Civil, art. 1º",
          texto: "Toda pessoa é capaz de direitos e deveres na ordem civil.",
          simples: "O primeiro artigo do Código já diz o principal: <b>toda pessoa</b>, sem exceção, pode ter direitos e deveres."
        },
        {
          ref: "Lei 10.406/2002, art. 2.044",
          texto: "Este Código entrará em vigor 1 (um) ano após a sua publicação.",
          simples: "O Código foi publicado em janeiro de 2002 e passou a valer em janeiro de 2003. O anterior era de <b>1916</b>."
        }
      ],
      vida: [
        "Quando você ouvir “o Código”, sem dizer qual, em conversas sobre contrato, família ou herança, quase sempre é o <b>Código Civil</b>.",
        "Comprou numa loja e deu problema? Primeiro olhe o <b>Código de Defesa do Consumidor</b>. Ele protege mais o comprador do que o Código Civil.",
        "O texto oficial e atualizado de todas as leis federais fica no site do Planalto: <b>planalto.gov.br</b>. É gratuito."
      ],
      palavras: [
        { t: "Código Civil", d: "A Lei 10.406/2002. Reúne as regras básicas da vida civil: pessoas, bens, contratos, família e herança." },
        { t: "Lei especial", d: "Lei feita para um assunto específico (consumo, aluguel, crianças). Quando trata do mesmo tema, costuma prevalecer sobre a lei geral." },
        { t: "Artigo", d: "Cada “item” numerado de uma lei. Escreve-se “art.”. Do 1 ao 9 usa-se número ordinal: art. 1º, art. 9º; depois, art. 10, art. 186." }
      ],
      quiz: [
        {
          p: "Qual é a lei do Código Civil que usamos hoje?",
          o: ["Lei 8.078/1990", "Lei 10.406/2002", "Constituição de 1988", "Código de 1916"],
          c: 1,
          e: "O Código Civil atual é a Lei 10.406, de 2002, que substituiu o Código de 1916. A Lei 8.078/1990 é o Código de Defesa do Consumidor."
        },
        {
          p: "Em qual parte do Código Civil você procuraria regras sobre herança?",
          o: ["Parte Geral", "Direito das Coisas", "Direito das Sucessões", "Direito de Empresa"],
          c: 2,
          e: "“Sucessão” é quando alguém “sucede”, ou seja, fica no lugar de quem morreu. Herança e testamento ficam no Direito das Sucessões."
        },
        {
          p: "Você comprou uma geladeira numa loja e ela quebrou em uma semana. Qual lei costuma proteger você melhor?",
          o: ["Código Civil", "Código de Defesa do Consumidor", "Lei do Inquilinato", "Nenhuma"],
          c: 1,
          e: "Na relação entre um consumidor e uma loja, vale o Código de Defesa do Consumidor, uma lei especial que protege mais quem compra."
        }
      ]
    },

    {
      id: "como-ler-uma-lei",
      titulo: "Como se lê uma lei",
      resumo: "Artigo, parágrafo, inciso e alínea, e as regras de quando uma lei vale.",
      tempo: "7 min",
      historia:
        "<p>Lia viu na TV: “segundo o artigo 1.723, parágrafo primeiro...”. Ficou confusa. <span class='fala'>“Vó, isso é código secreto?”</span></p>" +
        "<p>Vovó Nina pegou uma receita de bolo. <span class='fala'>“Olha: a receita tem um título, depois os passos numerados. Dentro de um passo, às vezes tem observações e listas de ingredientes. A lei é igualzinha: o <mark>artigo</mark> é o passo, o <mark>parágrafo</mark> é a observação, e os <mark>incisos</mark> são a lista.”</span></p>" +
        "<p>Lia riu: <span class='fala'>“Então lei é uma receita que ninguém pode desobedecer.”</span></p>",
      ideia: "Toda lei é organizada em <mark>artigos</mark>, que podem ter parágrafos, incisos e alíneas. E ninguém pode deixar de cumprir uma lei dizendo que não a conhecia.",
      explicacao:
        "<h3>As peças de uma lei</h3>" +
        "<div class='tabela-wrap'><table><thead><tr><th>Peça</th><th>Como aparece</th><th>Para que serve</th></tr></thead><tbody>" +
        "<tr><td><b>Artigo</b></td><td>Art. 5º, Art. 186</td><td>A regra principal</td></tr>" +
        "<tr><td><b>Parágrafo</b></td><td>§ 1º, § 2º, ou “Parágrafo único” quando só há um</td><td>Explica, completa ou abre exceção ao artigo</td></tr>" +
        "<tr><td><b>Inciso</b></td><td>I, II, III (números romanos)</td><td>Uma lista de itens</td></tr>" +
        "<tr><td><b>Alínea</b></td><td>a), b), c)</td><td>Uma lista dentro do inciso</td></tr>" +
        "</tbody></table></div>" +
        "<p>Então “art. 5º, parágrafo único, inciso V” quer dizer: vá ao artigo 5, desça até o parágrafo único e procure o quinto item da lista.</p>" +
        "<h3>As regras sobre as próprias leis</h3>" +
        "<p>Existe uma lei que ensina como as outras funcionam: a <b>Lei de Introdução às Normas do Direito Brasileiro</b> (LINDB, de 1942). Dela vêm três ideias importantes:</p>" +
        "<ul><li><b>Toda lei precisa de um tempo antes de valer.</b> Se a lei não disser nada, ela começa a valer <b>45 dias</b> depois de publicada. Esse intervalo se chama <i>vacatio legis</i> (“férias da lei”), e serve para todo mundo se preparar.</li>" +
        "<li><b>Ninguém pode dizer “eu não sabia”.</b> Depois que a lei vale, ela vale para todos, conheçam ou não.</li>" +
        "<li><b>A lei nova não estraga o que já estava pronto.</b> Ela não pode prejudicar o <i>direito adquirido</i>, o <i>ato jurídico perfeito</i> (um contrato já feito corretamente) e a <i>coisa julgada</i> (uma decisão judicial da qual não cabe mais recurso).</li></ul>" +
        "<h3>E quando a lei não fala nada?</h3>" +
        "<p>O juiz não pode se recusar a decidir. Se não houver lei para o caso, ele usa a <b>analogia</b> (aplica a regra de um caso parecido), os <b>costumes</b> e os <b>princípios gerais do Direito</b>.</p>",
      lei: [
        {
          ref: "LINDB, art. 1º",
          texto: "Salvo disposição contrária, a lei começa a vigorar em todo o país quarenta e cinco dias depois de oficialmente publicada.",
          simples: "Se a lei não disser a data, ela passa a valer <b>45 dias</b> depois de publicada."
        },
        {
          ref: "LINDB, art. 3º",
          texto: "Ninguém se escusa de cumprir a lei, alegando que não a conhece.",
          simples: "“Eu não sabia que era proibido” <b>não livra</b> ninguém de cumprir a lei."
        },
        {
          ref: "LINDB, art. 4º",
          texto: "Quando a lei for omissa, o juiz decidirá o caso de acordo com a analogia, os costumes e os princípios gerais de direito.",
          simples: "Se a lei não fala do caso, o juiz decide mesmo assim, comparando com casos parecidos e usando o bom senso jurídico."
        }
      ],
      vida: [
        "Ao procurar uma lei na internet, prefira a versão <b>“compilada”</b> no site do Planalto: ela mostra o texto já com todas as mudanças, e o que foi revogado aparece riscado.",
        "Se um contrato foi assinado antes de uma lei nova, em geral ele continua valendo pelas regras antigas naquilo que já estava pronto.",
        "Quando alguém citar um artigo para você, peça o número exato e confira. É fácil: basta buscar “art. 186 código civil”, por exemplo."
      ],
      palavras: [
        { t: "Parágrafo (§)", d: "Parte do artigo que explica, completa ou cria uma exceção à regra principal. Quando há só um, chama-se “parágrafo único”." },
        { t: "Inciso", d: "Item de uma lista dentro de um artigo, numerado em romanos: I, II, III." },
        { t: "Vacatio legis", d: "Expressão latina para o período entre a publicação da lei e o dia em que ela começa a valer. Em regra, 45 dias." },
        { t: "Direito adquirido", d: "Direito que já entrou de vez no seu patrimônio. Uma lei nova não pode tirá-lo." },
        { t: "Coisa julgada", d: "Decisão judicial contra a qual não cabe mais recurso. Torna-se definitiva." },
        { t: "Revogar", d: "Tirar a validade de uma lei ou de um artigo. Uma lei nova pode revogar a antiga." }
      ],
      quiz: [
        {
          p: "O que significa “art. 4º, inciso II”?",
          o: ["O quarto artigo, segundo parágrafo", "O quarto artigo, segundo item da lista", "A quarta lei, segundo artigo", "O segundo artigo, quarto item"],
          c: 1,
          e: "Inciso é item de lista, escrito em número romano. Inciso II é o segundo item da lista do artigo 4º."
        },
        {
          p: "Uma lei foi publicada hoje e não diz quando começa a valer. Quando ela passa a valer?",
          o: ["Hoje mesmo", "Em 45 dias", "Em 1 ano", "Só depois que todos lerem"],
          c: 1,
          e: "Pela LINDB, art. 1º, quando a lei não diz a data, ela vale 45 dias após a publicação."
        },
        {
          p: "Seu Tonico construiu um muro proibido e disse que “não sabia da lei”. Isso o livra?",
          o: ["Sim, se ele provar que não sabia", "Sim, se ele for idoso", "Não, ninguém pode deixar de cumprir a lei alegando que não a conhece", "Depende do juiz gostar dele"],
          c: 2,
          e: "É o art. 3º da LINDB. Se valesse a desculpa de não saber, ninguém cumpriria lei nenhuma."
        }
      ]
    }
  ]
});
