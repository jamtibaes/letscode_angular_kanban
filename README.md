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
Existe uma validação no formulário para que seja inserido o título e o conteudo, caso algum desses estejam faltando um alerta lembrará o usuario a preencher esses dados, assim que o botão + for pressionado, o valor será atribuido automaticamente na coluna Todo.

https://user-images.githubusercontent.com/17555669/143785723-fcf19839-0468-45f7-b6e0-e79cd9da623c.mp4

### Modos
#### Modo Resumido
Card com detalhes resumido, para entrar no modo de edição, clicar em cima do titulo, pressionando novamente o titulo entra novamente no modo resumido.

https://user-images.githubusercontent.com/17555669/143785992-43ae2726-6c9c-41e2-83be-cfc209770a4e.mp4

#### Modo Detalhado
Card no modo detalahdo onde o usuário pode entrar no modo edição clicando em cima do icone da caneta, pode excluir ou mover para outra coluna.

https://user-images.githubusercontent.com/17555669/143786849-31aad9f3-057f-47ca-ba1e-1195091957a3.mp4

#### Modo Edição
Card no modo o usuario pode editar o título e/ou o conteudo, assim como cancelar uma edição.

https://user-images.githubusercontent.com/17555669/143787015-a33e6080-a149-4559-93f8-850ba4b121c1.mp4

