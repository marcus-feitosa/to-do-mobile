import { View, Text, TouchableOpacity} from "react-native";
import {styles} from './styles'
import { EvilIcons } from '@expo/vector-icons'; 
import {Checkbox} from 'expo-checkbox';





interface TaskProps{
    content:string
    onCheck: () => void
    onRemove: () => void
    
}

export function Task({content, onRemove,onCheck}:TaskProps){
    return(
        <>
        <View style={styles.container}>
            <Checkbox onValueChange={onCheck}

            />
            <Text style={styles.name}>{content}</Text>
            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <EvilIcons name="trash" size={36} color="gray" />
            </TouchableOpacity>
        </View>
        </>
    )
}