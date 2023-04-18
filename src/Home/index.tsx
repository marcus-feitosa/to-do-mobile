import React, { useState } from 'react';


import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';
import { Task } from '../../components/Task'
import {Header} from '../../components/Header'

import { styles } from './styles'


import { FontAwesome5 } from '@expo/vector-icons';




export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskInput, setTaskInput] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  function handleTaskAdd() {
    if (tasks.includes(taskInput)) {
      return Alert.alert('Task já cadastrada', 'Já existe uma task cadastrada com esse nome')
    }

    setTasks(old => [...old, taskInput]);
    setTaskInput('');
  }

  function handleTaskRemove(user: string) {
    return Alert.alert('Remover', `Remover o participante ${user}?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(participant => participant !== user))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }
  function handleCheck(user: string) {
    setIsChecked(!isChecked);
  }

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
            Críadas <Text style={styles.countdownNumber}>0</Text>
            </Text>
        </View>
        <View style={styles.concludedCountdown}>
          <Text style={styles.concludedCountdownText}>
            Concluídas <Text style={styles.countdownNumber}>0</Text>
            </Text>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Task key={item} content={item} onRemove={() => handleTaskRemove(item)} onCheck={()=>handleCheck(item)} isChecked={isChecked}/>
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