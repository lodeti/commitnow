# CommitNow #

## Como e por que eu criei o meu hub de produtividade ##

### Introdução ###

Antes de mais nada preciso deixar claro uma coisa: Não sou programador profissional. No momento estou estudando Análise e Desenvolvimento de Sistemas em uma faculdade EaD e como você deve imaginar, o que venho aprendendo em programação e na tecnologia em geral, vem de cursos que venho fazendo por fora. A programação para mim tem sido (até o momento, pelo menos) um *hobby* que tem feito meus dias mais legais.

Pois bem, uma das coisas que eu tinha dificuldade era manter o ritmo nos projetos e manter meu GitHub sempre ativo - *verdinho*, como eu costumo dizer.

E porque difícil? Bem, sou dentista. Trabalho no SUS pela manhã e a tarde/noite estou no meu consultório particular. Isso dá cerca de 12h de trabalho por dia. Manter a constância nessa condição é meio complicado, convenhamos.

Vi algumas vezes pela internet sobre *scripts* que automatizam o commit ao GitHub... mas sinceramente? Não era essa a solução que eu queria. Não queria "trapacear", até porque sabemos que não adianta. Ora, do que vale a pena o perfil cheio de quadradinhos verdes e sem nenhum conteúdo relevante?

Então tive uma ideia!


### Ideia inicial ###

Pensei então em criar uma aplicação que tornasse esses *commits* mais práticos e sem "trapacear" - ou seja, sem desrespeitar as políticas do GitHub e usando as tecnologias que tenho mais familiaridade (HTML, CSS, Javascript/Node.js e frameworks).

A ideia começou a tomar corpo aqui. Normalmente eu acesso todos os dias, quase que religiosamente, os mesmos sites em meu computador (portal de notícias, LinkedIn, previsão do tempo, sites de cursos, etc.). Esses links normalmente estão na minha página inicial do Chrome que é a propria página do Google. Estes links estavam seja nos atalhos na propria página ou na barra de favoritos. 

Pensei então em deixar todos esses links e informações em um página só, que se tornaria minha "central" diária e onde ao invés de um campo de pesquisa, estivesse um campo onde eu pudesse inserir uma mensagem de *commit* e ao invés de um botão "pesquisar", um botão que eu realizasse esse *commit* em um repositório específico.

E no que isso seria útil? No meu caso que tenho certa dificuldade de concentração e pouco tempo livre, acessar essa página **todos os dias** além de facilitar o acesso ao meus links mais usados e informações que eu sempre procuro, me lembraria sempre de manter a produtividade do meu aprendizado e evitaria do meu GitHub ficar pouco ativo. 


### Desenvolvimento ###

**Front-end**

Para manter uma interface agradável e próxima da página inicial que eu já estava habituado, tentei deixar próxima da página do Google. Deixando centralizados o nome da aplicação em letras grandes e logo abaixo um *input* do tipo *text* onde seria a mensagem do *commit*.

Para que ficasse mais limpo o visual, achei que ficaria melhor os links no rodapé. No cabeçalho, pus uma mensagem de boas-vindas personalizada com meu nome, o período (bom dia, boa tarde ou boa noite) e logo abaixo duas informações que sempre procuro: a temperatura na minha cidade e informações do cambio (dolar e euro, no caso).

Para escolher as cores e fontes pensei em deixar próximo da página inicial do GitHub. Para isso usei a extensão do Chrome chamada ColorZilla e com ela copiei o hexadecimal das cores e modifiquei então fundo, botões, rodapé e etc.

Um ponto interessante é do botão que aciona *commit*. Usei uma fonte que parecesse o uso do comando do terminal usando o Git Bash - "$ git commit".

Também usei *media queries* para deixar a página responsiva para que eu pudesse acessar pelo celular. Já que eventualmente algum dia que eu não estivesse usando o computador (em uma viagem por exemplo), eu não deixasse de manter a disciplina de fazer **todos os dias** pelo menos um *commit*.

**Back-end**

A primeira coisa que eu fiz foi criar a função que faria o *commit*. Para isso, antes de tudo, declarei as constantes que recebem o nome de usuário do GitHub, o nome do repositório, a branch, o arquivo onde o *commit* de será realizado e por fim o token do GitHub. Na empolgação acabei esquecendo de um ponto importante que era definir as autorizações do token. Foi por esse motivo que nas primeiras tentativas o *commit* não era realizado. Uma bobagem, mas que demorou um pouco para eu perceber do que se tratava. Coisa de iniciante?

Outro problema que me deparei foi que de início a função **substituía** o conteúdo do repositório pelo *commit* vindo da aplicação. Erro meu na lógica. Corrigido isso, a função adiciona o texto do input na última linha do arquivo escolhido.

Depois, pensei bem e fiz uma mudança pensando em usuários futuros: O código agora verifica se existe no repositório o arquivo informado, se o arquivo não existir, ele então é criado automaticamente.

Depois, declarei duas constantes que receberam meu nome e o nome da minha cidade. Então fiz duas funções simples, onde uma exibe "Bom dia/Boa tarde/ Boa noite, André!", de acordo com o horário, claro. Logo abaixo uma mensagem mostrando as informações do clima em minha cidade no momento. Fiz isso consumindo a API Open Weather. Como exemplo, ficou assim: "Em Tapiratiba agora fazem 32.6°C (nublado).". Uma linha abaixo, fiz exibir as cotações do dólar e do euro, consumindo uma API que exibe informações gerais do mercado financeiro. Ficou assim: "O Dólar está sendo negociado por R$ 4,92 e o Euro por R$ 5,31.".

Feito isso, já tinha quase tudo que eu precisava. Mas ainda poderia melhorar.

Pensei em consumir uma API de frase que exibisse uma frase "inspiradora" dentro do input, dando a opção ao usuáro de fazer o *commit* dessa frase arquivo.

Achei a ideia boa, mas as APIs de frases que encontrei (e que eram gratuitas), eram muito ruins. Muito lentas, com poucas frases e ainda assim poucas delas realmente inspiravam alguma coisa. 

A solução que encontrei? Criar minha própria API de frases. Agora esse input consome essa minha API e exibe frases com dicas técnicas para profissionais da área *tech* em geral. Com isso, além da praticidade da aplicação, ela agora também ajuda nos estudos! Em um outro momento contarei os detalhes de como eu a desenvolvi. 

### Criando a landing page ###

Embora muito simples, achei tão útil a aplicação que pensei que mais pessoas poderiam usar, especialmente aqueles que estão começando como eu. 

Para isso criei uma página estática com a estética parecida com a da aplicação, onde usando a rolagem suave do JQuery o usuário pode ir navegando pela documentação do projeto, entendendo do que se trata e tirando dúvidas.

### Gerador de código ###

Para facilitar ainda mais a vida de quem está ainda mais iniciante que eu, pensei então em criar um gerador da aplicação onde o usuário iria passo a passo, página por página, inserindo os valores das constantes que citei acima e ao final seria entregue o código minificado da aplicação. 

Bem, embora eu tenha condições ténicas de fazer isso, não achei pertinente por um motivo: Talvez não fosse transparente o suficiente pedir o token do GitHub a alguém e deixar nem que seja a impressão que essa informção tão importante não esteja segura.

**Por isso o gerador de código funciona todo em uma página só**. Assim, após o usuário inserir os dados necessários, os links que deseja ter na  aplicação ele deverá clicar no botão "Gerar código" e então no momento em que clicar para copiar o código gerado, todas as informações digitadas são apagadas imediatamente. Ainda pensando nisso, deixei a possibilidade do usuário simplesmente não informar o token, deixando-o livre para inseri-lo diretamente no código depois de gerado.

