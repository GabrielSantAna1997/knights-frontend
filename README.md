## Requisitos básicos

- Node.js e npm (Node Package Manager): O Vue.js requer o Node.js, que inclui o npm para gerenciar as dependências do projeto. Você pode baixar e instalar o Node.js em nodejs.org.

- Vue CLI (Interface de Linha de Comando): Embora não seja estritamente necessário, a maioria dos projetos Vue.js são configurados e gerenciados usando o Vue CLI. Isso simplifica a configuração inicial do projeto, gerenciamento de dependências, desenvolvimento e implantação. Você pode instalar o Vue CLI globalmente através do npm usando o seguinte comando:

```
npm install -g @vue/cli
```


## Frontend Inicialização
- Este projeto está diretamente conectado ao knights-backend.

- Para iniciar este projeto, é necessário executar o comando `npm install` para instalar as dependências necessárias.

```
npm install
```

- É crucial que este projeto seja executado na porta 8080, que é a porta padrão do Vue.

- Além disso, a porta 8080 é de extrema importância, pois no backend foi feita a liberação para esta porta. Caso deseje alterá-la, será necessário acessar o arquivo app.js(do backend) na linha 15 e modificar para a porta desejada.

- Após todas as confirmações feitas, basta executar o comando `npm run serve` e o frontend estará pronto para uso.

```
npm run serve
```

## Organização dos arquivos

- Foram montadas apenas duas views: a página inicial (HomePage) e a tela de cadastro.

- Além disso, foram desenvolvidos componentes reutilizáveis para futuras atualizações no projeto, os quais estão localizados em `src/components`.

- No diretório `src/router`, foram adicionadas as rotas que estão sendo utilizadas no projeto, proporcionando assim a possibilidade de reutilização no futuro.

- No serviço `services/KnightsService`, foram desenvolvidas todas as requisições utilizadas para consultar o backend.