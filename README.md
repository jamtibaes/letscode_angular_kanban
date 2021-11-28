# Projeto Final - Angular
O propósito desse desafio é a criação de um frontend para um quadro de kanban proposto como trabalho final do módulo de Angular. 
Mais informações: https://github.com/lpqueiroz/ProjetoFinalAngular

## Requisitos:
* NodeJs
* Angular - versão 13
* Bootstrap - versão 5

## Rodando a aplicação
Após clonar o repositório, instalar as dependencias.

### Frontend
```
> cd FRONT/projeto-kanban
> npm install
> ng serve --o
```

### Backend
```
> cd BACK
> npm install
> npm run server
```

## Funcionalidades
### Login
Ao iniciar a aplicação abrirá e tela de login, existe uma validação nos campos para caso o usuário tenha passado pelo campo de input e deixado vazio. O video abaixo mostra este comportamento. O unico usuário cadastrado no backend é o letscode, assim que entrar com os dados de login, será redirecionado para a tela do kanban.
Assim que o usuário envia os dados pelo formulário, é enviado um POST para o backend que retorna um token caso esteja cadastrado e é salvo no localStorage, esse token é enviado em cada interação com o backend. 

https://user-images.githubusercontent.com/17555669/143782474-7a075d4e-f3ab-4c03-a36a-7108eecac0ee.mp4

### Logout
Assim que fazer o login será adicionado na barra de navegação um botão para Log out, assim que o botão for pressionado, apagará o token salvo no localStorage e o usuário será redirecionando para a tela de login 

https://user-images.githubusercontent.com/17555669/143782870-e4ed0c35-e248-42b9-92dc-a4609fd9ae13.mp4

### Nova Tarefa


