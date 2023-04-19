A estrutura da aplicação é composta por dois componentes principais:

    O componente Home, que é responsável pela renderização da tela e gerencia o estado geral da aplicação.
    O componente Task, que é responsável pela renderização de cada tarefa individual na lista.

O estado da aplicação é gerenciado pelo useState hook do React. O estado é composto por:

    tasks: uma matriz de objetos que representam as tarefas a serem realizadas. Cada objeto tem três propriedades: id (um identificador único para cada tarefa), isChecked (uma booleana que indica se a tarefa foi concluída ou não) e content (uma string que representa a descrição da tarefa).
    taskInput: uma string que representa o valor do campo de entrada onde o usuário pode adicionar novas tarefas.
    done: uma booleana que indica se a tarefa foi concluída ou não.

A função handleTaskAdd é executada quando o usuário clica no botão de adicionar tarefa. Ela adiciona uma nova tarefa à matriz de tarefas usando o setTasks hook e limpa o campo de entrada taskInput.

A função handleTaskRemove é executada quando o usuário clica no botão de exclusão de uma tarefa. Ela remove a tarefa selecionada da matriz de tarefas usando o setTasks hook.

A função handleCheck é executada quando o usuário clica no checkbox de uma tarefa. Ela atualiza a propriedade isChecked da tarefa selecionada na matriz de tarefas usando o setTasks hook.

O componente Task é responsável por renderizar cada tarefa individual na lista. Ele recebe três props: taskProps, que é um objeto que representa a tarefa; onRemove, que é uma função que é executada quando o usuário clica no botão de exclusão de uma tarefa; e onCheck, que é uma função que é executada quando o usuário clica no checkbox de uma tarefa.

O componente Task renderiza uma view que contém um checkbox, o conteúdo da tarefa e um botão de exclusão. Quando o usuário clica no checkbox, a função handleDoneTask é executada, atualizando a propriedade isChecked da tarefa selecionada na matriz de tarefas usando o onCheck prop. Quando o usuário clica no botão de exclusão, a função handleDeleteTask é executada, rem
