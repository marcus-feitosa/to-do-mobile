import React, { useState } from 'react';


import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';
import { Task } from '../../components/Task'
import {Header} from '../../components/Header'

import { styles } from './styles'


import { FontAwesome5 } from '@expo/vector-icons';



export interface Tasks {
  id: string;
  isChecked: boolean;
  content: string;
}


export function Home() {

  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [taskInput, setTaskInput] = useState('');
  const [done, setDone] = useState(false)


  function handleTaskAdd(){
    setTasks([
      {
        id: taskInput,
        isChecked: false,
        content: taskInput,
      },
      ...tasks
    ])

    setTaskInput('')
  }
  function handleTaskRemove(taskToDelete: Tasks) {

    const taskWhithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskToDelete.id
    })

    return Alert.alert('Remover', `Remover o participante ${taskToDelete.content}?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(taskWhithoutDeletedOne)
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function handleCheck(taskToDone: Tasks) {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskToDone.id) {
        return {
          ...task,
          isChecked: !task.isChecked,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  
    const totalTasks = tasks.length
    const totalTasksDone = tasks.filter(
        task => task.isChecked === true
    ).length

  return (
    <>
    <Header />
    <View style={styles.container}>
      <View style={styles.contentBlock}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Adicione uma tarefa'
          placeholderTextColor='#6B6B6B'
          onChangeText={setTaskInput}
          value={taskInput}
        />
        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>


      <View style={styles.countdown}>
        <View style={styles.createdCountdown}>
          <Text style={styles.createdCountdownText}>
            Críadas <Text style={styles.countdownNumber}>{totalTasks}</Text>
            </Text>
        </View>
        <View style={styles.concludedCountdown}>
          <Text style={styles.concludedCountdownText}>
            Concluídas <Text style={styles.countdownNumber}>{totalTasksDone}</Text>
            </Text>
        </View>
      </View>

      <FlatList
        data={tasks}
        
        renderItem={({ item }) => (
          <Task key={item.id}  taskProps={item} onRemove={() => handleTaskRemove(item)} onCheck={()=>handleCheck(item)}/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.textView}>
          <FontAwesome5 name="clipboard-list" size={60} color='#808080' />
          <Text style={styles.listEmptyTextBold}>
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text style={styles.listEmptyText}>
            Crie tarefas e organize seus itens a fazer
          </Text>
          </View>
        )}
      />
      </View>
    </View>
</>
    
  )
};