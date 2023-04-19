import { View, Text, TouchableOpacity} from "react-native";
import {styles} from './styles'
import { EvilIcons } from '@expo/vector-icons'; 
import {Checkbox} from 'expo-checkbox';
import { Tasks } from "../../src/Home";





interface TaskProps{
    taskProps : Tasks
    onRemove: (task: Tasks) => void;
    onCheck: (task: Tasks) => void;
    
    
}

export function Task({taskProps, onRemove,onCheck}:TaskProps){

    function handleDoneTask() {
        const onDone = taskProps.isChecked ? false : true
    
        const newTaskProps = { ...taskProps, done: onDone}
        onCheck(newTaskProps)

        console.log({newTaskProps});
      }
    
      function handleDeleteTask() {
        onRemove(taskProps)
      }

    return(
        <>
        <View style={styles.container}>
            <Checkbox onValueChange={handleDoneTask} value={taskProps.isChecked} color={taskProps.isChecked ? '#4630EB' : undefined}

            />
            <Text style={taskProps.isChecked ? styles.checkedTask : styles.task}>{taskProps.content}</Text>
            <TouchableOpacity style={styles.button} onPress={handleDeleteTask}>
                <EvilIcons name="trash" size={36} color="gray" />
            </TouchableOpacity>
        </View>
        </>
    )
}