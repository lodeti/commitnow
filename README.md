# CommitNow

O CommitNow é uma aplicação web que simplifica o processo de fazer commits em repositórios do GitHub. Com o CommitNow, você pode facilmente inserir mensagens de commit e realizar commits diretamente pela interface da aplicação.

## Funcionalidades

- Permite inserir manualmente uma mensagem de commit (ou usar a dica técnica gerada automaticamente, caso preferir).
- Oferece uma dica técnica para profissionais de diversas áreas da tecnologia.
- Centraliza em uma única página os links que você mais acessa.
- Mostra informações de clima atual para a cidade que você escolher.
- Apresenta as últimas taxas de câmbio entre o dólar e o euro em relação ao real.

## Como Usar

1. Abra a aplicação em seu navegador.

2. Você pode inserir manualmente uma mensagem de commit no campo de texto ou se preferir, usar a dica do dia.

3. Clique no botão `$ git commit` para fazer o commit.

4. O commit será feito no repositório do GitHub especificado nas variáveis `owner`, `repo`, `branch` e `token` no arquivo `script.js`. Certifique-se de configurar essas variáveis corretamente antes de usar a aplicação.

5. Além disso, a aplicação exibirá informações de clima atual da cidade que você configuar na variável `cidade` e as últimas taxas de câmbio entre o dólar e o euro em relação ao real.

**IMPORTANTE:** Certifique-se de ter permissões adequadas no repositório para fazer commits.

## Configuração

Antes de usar o CommitNow, é necessário personalizar o seu código para que sua aplicação se torne funcional.

Você pode fazer isso de duas maneiras. A primeira é configurando essas variáveis manualmente. Para isso vá no arquivo `script.js` e altere as seguintes variáveis:

- `nome`: Pelo seu nome.
- `cidade`: Pela sua cidade (ou de onde você queira saber o clima em tempo real).
- `owner`: Pelo seu nome de usuário no GitHub.
- `repo`: Nome do repositório no GitHub.
- `branch`: Nome da branch onde o commit será feito.
- `token`: Token de acesso pessoal do GitHub para autenticação.
- `arquivo`: OPCIONAL. Substitua pelo arquivo que queira realizar o commit. Caso não mude essa variável, o app irá criar um arquivo automaticamente.

Depois, vá até o arquivo `index.html` e substitua as tags `<a>` pelos links que você mais acessa no seu dia.

A outra maneira de configurar sua aplicação é usando o [gerador de código no site do projeto](https://github.com/lodeti/commitnow). Fique tranquilo, ele é seguro e não armazena nenhuma informação. 


## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- API do GitHub
- [API Frases Dev](https://github.com/lodeti/api-frases-dev)
- API de clima OpenWeatherMap
- API de câmbio AwesomeAPI

## Disclaimer

Muito cuidado com seu token do GitHub. **Nunca faça commit desse token, não envie-o a ninguém e não o mostre em qualquer que seja o lugar.**

Para saber como eu criei essa aplicação, leia o arquivo `comoEuFiz.md` aqui neste repositório.

Considere se conectar ao meu [LinkedIn](https://www.linkedin.com/in/andrelodeti/).

---
