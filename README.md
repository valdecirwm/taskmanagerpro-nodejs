<div align="center">

  # 🚀 TaskManager Pro — Node.js & Architecture MVC

  <p align="center">
git init  </p>

  <p align="center">
    <a href="#-tecnologias">Tecnologias</a> •
    <a href="#-funcionalidades">Funcionalidades</a> •
    <a href="#-arquitetura-mvc">Arquitetura MVC</a> •
    <a href="#-como-executar">Como Executar</a> •
    <a href="#-canal-no-youtube">YouTube</a>
  </p>

</div>

---

## 📌 Sobre o Projeto

O **TaskManager Pro** é uma aplicação Full-Stack desenvolvida para demonstrar a aplicação prática do padrão de arquitetura **MVC (Model-View-Controller)** no ecossistema **Node.js**. 

A aplicação conta com uma interface responsiva construída com **Bootstrap 5.3**, suporte a **Light e Dark Mode** persistente, animações fluidas e integrações com base de dados relacional (**MySQL**) via ORM (**Sequelize**).

> 💼 **Para Recrutadores:** Este repositório reflete boas práticas de estruturação de projeto, separação de responsabilidades (SoC), manipulação de rotas RESTful, integração com base de dados e componentização modular com Handlebars.

---

## 🛠️ Tecnologias Utilizadas

### **Back-end**
- **Node.js** — Ambiente de execução JavaScript no servidor
- **Express.js** — Framework web para rotas e middlewares
- **Sequelize ORM** — Mapeamento objeto-relacional para MySQL
- **MySQL** — Base de dados relacional

### **Front-end**
- **Express-Handlebars** — Template engine para renderização dinâmica
- **Bootstrap 5.3** — Framework CSS para layout responsivo
- **Bootstrap Icons** — Iconografia vetorial
- **JavaScript Vanilla** — Animações e alternância de temas (Dark/Light Mode)

---

## ✨ Funcionalidades

- [x] **CRUD Completo de Tarefas:**
  - **Criar:** Registo de novas tarefas com título e descrição.
  - **Listar:** Exibição em cards responsivos.
  - **Atualizar:** Edição de títulos, descrições e alteração do estado de conclusão (`done`).
  - **Eliminar:** Remoção rápida de registos.
- [x] **Alternador de Tema (Dark/Light Mode):** Persistência do tema escolhido no `localStorage`.
- [x] **Interface Responsiva & Animações:** Efeitos visuais fluidos para melhor experiência de utilizador (UX).

---

## 🏗️ Arquitetura do Projeto (MVC)

A estrutura de diretórios foi organizada seguindo rigorosamente o padrão **Model-View-Controller**:

```text
tasks/
├── 📁 controllers/
│   └── TaskController.js      # Regras de negócio e controlo das rotas
├── 📁 db/
│   └── conn.js                # Conexão com a base de dados (Sequelize)
├── 📁 models/
│   └── Task.js                # Schema e definição do modelo de dados
├── 📁 public/
│   ├── 📁 css/
│   │   └── style.css          # Estilização customizada e temas
│   └── 📁 js/
│       └── main.js            # Lógica interativa de front-end
├── 📁 routes/
│   └── tasksRoutes.js         # Mapeamento e definição das rotas
├── 📁 views/
│   ├── 📁 layouts/
│   │   └── main.handlebars    # Layout base/principal da aplicação
│   └── 📁 tasks/
│       ├── all.handlebars     # Listagem das tarefas
│       ├── create.handlebars  # Formulário de criação
│       └── edit.handlebars    # Formulário de edição
└── index.js                   # Ponto de entrada da aplicação
```

---

## ⚡ Como Executar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) (v16 ou superior)
- Servidor MySQL ativo (ex: via XAMPP, WAMP ou instalação direta)

### Passo a Passo

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/teu-usuario/teu-repositorio.git
   cd teu-repositorio
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```

3. **Configurar a Base de Dados:**
   - Garanta que o servidor MySQL está em execução.
   - Crie uma base de dados chamada `nodemvc` (ou altere o nome no ficheiro `db/conn.js`).

4. **Executar a aplicação:**
   ```bash
   npm start
   # ou com nodemon
   npx nodemon index.js
   ```

5. **Aceder no navegador:**
   Abra [http://localhost:3000/tasks](http://localhost:3000/tasks)

---

## 🎥 Acompanhe no YouTube!

Gostas de conteúdo sobre **Node.js, MVC, SQL e Desenvolvimento Web**?
No meu canal partilho tutoriais práticos, resolução de erros comuns e dicas de carreira para devs!

<div align="center">

  [![YouTube Channel](https://img.shields.io/badge/Inscreva--se-YouTube-red?style=for-the-badge&logo=youtube)](https://www.youtube.com/@Valdecir-Dev)

  👉 **[Clica aqui para te inscreveres no canal e acompanhar novos projetos!](https://www.youtube.com/@Valdecir-Dev)**

</div>

---

## 🤝 Contacto & Redes Sociais

- **LinkedIn:** [Meu Linkedin](https://www.linkedin.com/in/valdecir-waldhelm-morgado/)
- **GitHub:** [Meu GitHub](https://github.com/valdecirwm)
- **E-mail:** valdwald81@gmail.com

---

<div align="center">
  <sub>Desenvolvido com 💜 durante os estudos de Node.js & MVC.</sub>
</div>