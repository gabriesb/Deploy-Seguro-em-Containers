# 🚀 Deploy Seguro em Containers com DevOps

Este projeto demonstra como realizar o **deploy seguro e automatizado** de uma aplicação Node.js em containers utilizando **Docker**, **GitHub Actions** e **AWS Elastic Beanstalk**.  
A ideia é mostrar, na prática, como aplicar boas práticas de **CI/CD (Integração Contínua e Entrega Contínua)**, garantindo escalabilidade, reprodutibilidade e segurança no fluxo de deploy.

---

## 📌 Objetivo do Projeto

O projeto foi desenvolvido para resolver um problema comum em equipes de desenvolvimento:

> **"Como garantir que meu código chegue em produção de forma rápida, automatizada e sem erros manuais?"**

Muitas vezes o processo de deploy manual gera falhas, inconsistências entre ambientes e retrabalho.  
Aqui, mostramos como configurar uma pipeline que **empacota, testa e entrega** sua aplicação em produção com poucos cliques.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js + Express** → Back-end simples para exemplificar a aplicação.  
- **Docker** → Criação da imagem containerizada, garantindo que o app rode de forma idêntica em qualquer ambiente.  
- **Docker Hub** → Registro da imagem para ser consumida pelo AWS Elastic Beanstalk.  
- **AWS Elastic Beanstalk** → Orquestração e deploy do container na nuvem (com auto scaling, balanceamento de carga e monitoramento).  
- **S3 (Amazon Simple Storage Service)** → Armazenamento das versões do aplicativo enviadas no pipeline.  
- **IAM (Identity and Access Management)** → Controle de permissões para o GitHub Actions acessar a AWS com segurança.  
- **GitHub Actions** → Automação de build, push da imagem Docker e deploy no Elastic Beanstalk.

---

## ⚙️ Arquitetura da Solução

1. **Código atualizado no GitHub** → Qualquer push dispara a pipeline.  
2. **GitHub Actions** →  
   - Faz o build da imagem Docker.  
   - Envia a imagem para o Docker Hub.  
   - Gera um `Dockerrun.aws.json` apontando para a imagem.  
   - Publica a versão no **AWS S3**.  
   - Atualiza o **Elastic Beanstalk** com a nova versão.  
3. **Elastic Beanstalk** →  
   - Faz o deploy da nova versão em instâncias EC2.  
   - Garante que a aplicação esteja disponível no domínio público do ambiente.  

Fluxo final: **Commit → Build → Deploy Automático → App rodando em produção**. 🚀  

---

## 📂 Estrutura do Repositório

├── app/ # Código fonte da aplicação Node.js
│ └── index.js # Servidor Express simples
├── .github/workflows/ # Pipeline de CI/CD (GitHub Actions)
├── Dockerfile # Definição da imagem Docker
├── Dockerrun.aws.json # Arquivo de configuração para Elastic Beanstalk
├── docker-compose.yml # Configuração local (opcional)
├── package.json # Dependências do Node.js
└── README.md # Documentação do projeto

---

## 📦 Como Rodar Localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/gabriesb/Deploy-Seguro-em-Containers.git
   cd Deploy-Seguro-em-Containers
Instale as dependências:

npm install
Suba a aplicação:

npm start
Acesse no navegador:

http://localhost:3000
☁️ Deploy na AWS
O deploy é realizado automaticamente pelo GitHub Actions.

A cada push na branch configurada, uma nova versão é:

Buildada com Docker.

Enviada ao Docker Hub.

Deployada no Elastic Beanstalk.

Aplicação disponível em um domínio público do Beanstalk:

http://meu-app-env.eba-xxxxxxx.us-east-1.elasticbeanstalk.com


📸 Screenshots do Projeto

📌 1. Pipeline no GitHub Actions rodando com sucesso

<img width="1920" height="938" alt="Captura de Tela (422)" src="https://github.com/user-attachments/assets/9fa5f1ff-a4a7-4868-b83a-e266cffac4a5" />


📌 2. Elastic Beanstalk – Ambiente saudável (Health Green)

<img width="1561" height="476" alt="Captura de Tela (428)" src="https://github.com/user-attachments/assets/f9525aaa-5869-498d-9adc-21f7d26946bc" />


📌 3. Aplicação rodando no navegador

<img width="1920" height="966" alt="Captura de Tela (423)" src="https://github.com/user-attachments/assets/e9dcb856-bd4a-4c0a-bb69-bf3c3db6cb82" />



🔒 Segurança
O acesso à AWS é feito via usuário IAM específico, com permissões limitadas ao Elastic Beanstalk e S3.

As credenciais (AWS_ACCESS_KEY_ID e AWS_SECRET_ACCESS_KEY) estão armazenadas de forma segura em GitHub Secrets.

O Docker Hub também utiliza secrets para evitar exposição de credenciais.


🚀 Conclusão
Este projeto mostra como é possível criar uma esteira de CI/CD moderna, utilizando ferramentas consolidadas no mercado, garantindo:

Deploy automatizado

Escalabilidade

Segurança

Confiabilidade

Tudo isso reduzindo o risco de erro humano e acelerando o ciclo de entrega de software.



👨‍💻 Autor: Gabriel Silveira
🔗 GitHub: @gabriesb
