<h1>
  CLI Clone Repo GitHub RProjetos
</h1>
<p>Essa CLI clona projetos do git hub, no formato de boilertemplate, para que possa prover agilidade no desenvolvimento de código Typescript / NodeJs.</p>
<p>Os passos de uso são clonar o projeto utilizando a cli e instalar as dependências:</p>
<p>
<i>
Obs: No final desse documento é explicado como usar a cli de modo global.
</i>
</p>

```javascript
  // Install
    npm i

  // Run Dev
    npm run start:dev

  // Run Build
    npm run build

  // Run Prod
    npm run start

  // Run Prettier
    npm run prettier

  // Run Eslint
    npm run eslint

  // Run Jest ( test )
    npm run test

  // Run Jest ( test CI )
    npm run test:ci
```

---

<h2>
  Conteúdo do repositório:
</h2>
<ul>
  <li>Typescript com NodeJS</li>
  <li>Prettier</li>
  <li>Eslint</li>
  <li>Jest</li>
</ul>

---

<h2>
  Typescript com NodeJS
</h2>
<p>Iniciando uma aplicação NodeJs utilizando Typescript como base:</p>

```javascript
  // Typescript
  npm i -D typescript @types/node tsx tsup
```

---

<h2>
  Prettier
</h2>
<p>
  O Prettier é uma ferramenta de formatação de código que ajuda a manter a consistência e a legibilidade do código em projetos de desenvolvimento de software. 
</p>

<p>
  Ele é amplamente utilizado em várias linguagens de programação/marcadores, incluindo JavaScript, TypeScript, CSS, HTML, JSON e muito mais.
</p>

```javascript
  // Prettier
  npm i -D prettier
```

---

<h2>
  Eslint
</h2>
<p>
O ESLint é uma ferramenta de análise de código estática amplamente utilizada na comunidade de desenvolvimento de software. 
</p>

<p>
Ele é projetado para ajudar os desenvolvedores a identificar e corrigir problemas de qualidade, erros de sintaxe e padrões de código inconsistentes em projetos JavaScript e TypeScript.
</p>

```javascript
  // Eslint
  npm i -D eslint
  npm i -D eslint-config-prettier eslint-plugin-prettier eslint-plugin-import
  npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

---

<h2>
  Jest
</h2>
<p>
O Jest é um framework de testes de JavaScript amplamente utilizado para testar aplicativos e bibliotecas JavaScript. 
</p>

<p>
Ele foi desenvolvido para ser fácil de configurar e usar, fornecendo uma ampla gama de recursos para escrever testes automatizados.
</p>

```javascript
  // Jest
  npm i -D jest ts-jest @types/jest
  npx ts-jest config:init
```



<h2>
  Executando CLI com comando global >> initdev
</h2>
<p>
A definição do comando é feita com a adição da chave "bin" no arquivo package.json, conforme exemplificado a seguir:
"bin": {
    "initdev":"./dist/index.js"
  },
Após a geração do processo de buid, deverá ser realizado uma instalação global da aplicação, e já teremos o funcionamento do comando disponivel no para teste como comando global.
</p>
<p>
Comando para realizar a instalação:
>> npm i -g
</p>
<p>
Em sistemas linux, pode ser necessário um comando de superusuário:
>> sudo npm i -g
</p>

---

Por ♥ Ricardo Poleto 👋 [Linkedin!](https://www.linkedin.com/in/ricardo-poleto/)
