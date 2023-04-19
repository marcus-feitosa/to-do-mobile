**DOCUMENTAÇÃO GERADA POR IA**


To-Do List

Este é um aplicativo de To-Do List desenvolvido em React Native com TypeScript.
Funcionalidades

    Adicionar tarefas
    Remover tarefas
    Marcar tarefas como concluídas

Como executar o projeto

    Clone o repositório
    Instale as dependências com o comando npm install
    Execute o projeto com o comando expo start

Como utilizar

    Na tela inicial, adicione uma tarefa no campo de texto e clique no botão + para adicioná-la à lista.
    Para marcar uma tarefa como concluída, clique no checkbox ao lado da tarefa.
    Para remover uma tarefa, clique no ícone de lixeira ao lado da tarefa.

Como funciona

O aplicativo é composto por dois componentes principais: Home e Task.

Home é responsável por renderizar a lista de tarefas e gerenciar as funções de adicionar e remover tarefas.

Task é responsável por renderizar cada tarefa individualmente e gerenciar a função de marcar tarefas como concluídas.

Quando uma tarefa é adicionada, um novo objeto Tasks é criado com as seguintes propriedades:

php

{
  id: string; // identificador único da tarefa
  
  isChecked: boolean; // indica se a tarefa foi concluída ou não
  
  content: string; // conteúdo da tarefa
}

Ao marcar uma tarefa como concluída, a função handleCheck é chamada na tela Home. Esta função mapeia todas as tarefas da lista e retorna uma nova lista com a tarefa atualizada. A tarefa atualizada contém a propriedade isChecked modificada para o valor oposto.

Ao remover uma tarefa, a função handleTaskRemove é chamada na tela Home. Esta função filtra todas as tarefas da lista e retorna uma nova lista sem a tarefa que foi removida.
Tecnologias utilizadas

    React Native
    TypeScript
    Expo
    FontAwesome5
    Expo Checkbox

Referências

    Documentação do React Native
    Documentação do TypeScript
    Documentação do Expo
    Documentação do FontAwesome5
    Documentação do Expo Checkbox
