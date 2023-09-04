const nome = ''
const cidade = '';
const owner = '';
const repo = '';
const branch = '';
const token = '';
const arquivo = 'app.md';

function cumprimentar() {
  var cumprimento = "";
  var data = new Date();
  var hora = data.getHours();

  if (hora >= 0 && hora < 12) {
    cumprimento = "Bom dia";
  } else if (hora >= 12 && hora < 18) {
    cumprimento = "Boa tarde";
  } else {
    cumprimento = "Boa noite";
  }

  var boasVindasElement = document.getElementById("boasVindas");
  boasVindasElement.innerHTML = cumprimento+', ' + nome + '! ';
  ;
}

cumprimentar();


async function getFraseDoDia() {
  try {
    const response = await fetch('https://api-frases-dev.vercel.app/dica');
    if (!response.ok) {
      throw new Error('Não foi possível obter a frase do dia');
    }
    const data = await response.text();
    return data;
  } catch (error) {
    console.error('Erro ao obter a frase do dia:', error);
    return null;
  }
}

async function atualizarFraseDoDia() {
  const fraseDoDia = await getFraseDoDia();
  if (fraseDoDia) {
    const commitInputElement = document.getElementById('commitInput');
    commitInputElement.value = fraseDoDia;
  }
}


atualizarFraseDoDia();


function commitToGitHub() {
  const commitMessage = document.getElementById('commitInput').value;

  const newContent = commitMessage;

  const commitData = {
    message: commitMessage,
    content: btoa(newContent),
    branch: branch
  };

  const fullFilePath = `https://api.github.com/repos/${owner}/${repo}/contents/${arquivo}`;

  fetch(fullFilePath, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github.v3+json'
    }
  })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Not Found' || data.path !== arquivo) {
        createNewFile(commitData);
      } else {
        updateFile(commitData, data.sha);
      }
    })
    .catch(error => {
      console.error('Erro ao verificar o arquivo:', error);
      alert('Erro. Commit não realizado! Verifique o erro no console do navegador.');
    });
}


function createNewFile(commitData) {
  fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${arquivo}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github.v3+json'
    },
    body: JSON.stringify(commitData)
  })
    .then(response => {
      if (response.ok) {
        console.log('Novo arquivo criado com sucesso!');
      } else {
        console.error('Erro ao criar o arquivo:', response.statusText);
        alert('Erro. Commit não realizado! Verifique o erro no console do navegador.');

      }
    })
    .catch(error => {
      console.error('Erro ao criar o arquivo:', error);
      alert('Erro. Commit não realizado! Verifique o erro no console do navegador.');
    });
}

function updateFile(commitData, sha) {
  fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${arquivo}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github.v3+json'
    }
  })
    .then(response => response.json())
    .then(data => {
      const existingContent = atob(data.content);
      const updatedContent = `${existingContent}\n\n${commitData.message}`;
      const updatedCommitData = {
        ...commitData,
        content: btoa(updatedContent),
        sha: sha
      };
      return fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${arquivo}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github.v3+json'
        },
        body: JSON.stringify(updatedCommitData)
      });
    })
    .then(response => {
      if (response.ok) {
        console.log('Arquivo atualizado com sucesso!');
        alert('Commit realizado com sucesso!');
      } else {
        console.error('Erro ao atualizar o arquivo:', response.statusText);
        alert('Erro. Commit não realizado! Verifique o erro no console do navegador.');
      }
    })
    .catch(error => {
      console.error('Erro ao atualizar o arquivo:', error);
      alert('Erro. Commit não realizado! Verifique o erro no console do navegador.');
    });
}

function getWeather() {
  const apiKey = '';

  fetch('https://api.openweathermap.org/data/2.5/weather?q='+cidade+',br&units=metric&appid=' + apiKey + '&lang=pt_br')
    .then(response => response.json())
    .then(data => {
      const climaDiv = document.getElementById('clima');
      climaDiv.innerHTML = '';

      if (data.cod === 200) {
        const temperatura = data.main.temp.toFixed(1);
        const descricao = data.weather[0].description;

        const temperaturaElement = document.createElement('span');
        temperaturaElement.textContent = 'Em '+cidade+' agora fazem ' + temperatura + '°C ';

        const descricaoElement = document.createElement('span');
        descricaoElement.textContent = '(' + descricao + ').';

        climaDiv.appendChild(temperaturaElement);
        climaDiv.appendChild(descricaoElement);
      } else {
        climaDiv.innerHTML = 'Erro ao obter informações de clima';
      }
    })
    .catch(error => {
      const climaDiv = document.getElementById('clima');
      climaDiv.innerHTML = 'Erro ao obter informações de clima';
      console.error('Erro ao obter informações de clima:', error);
    });
}

getWeather();

function getFinancialData() {
  fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL')
    .then(response => response.json())
    .then(data => {
      exibirDadosFinanceiros(data);
    })
    .catch(error => {
      const finDiv = document.getElementById('fin');
      finDiv.innerHTML = 'Erro ao obter informações financeiras';
      console.error('Erro ao obter dados da API:', error);
    });
}

function formatarNumero(valor) {
  if (!isNaN(parseFloat(valor))) {
    return parseFloat(valor).toFixed(2).replace('.', ',');
  }
  return valor;
}

function exibirDadosFinanceiros(data) {
  const finDiv = document.getElementById('fin');
  finDiv.innerHTML = '';

  const usdToBrl = data.USDBRL;
  const eurToBrl = data.EURBRL;

  const usdToBrlBid = formatarNumero(usdToBrl.bid);

  const eurToBrlBid = formatarNumero(eurToBrl.bid);

  const resultHTML = `<span>O Dólar está sendo negociado por R$ ${usdToBrlBid} e o Euro por  R$ ${eurToBrlBid}.</span>`;

  finDiv.innerHTML = resultHTML;
}

getFinancialData();