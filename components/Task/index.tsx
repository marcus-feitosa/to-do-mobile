import { View, Text, TouchableOpacity} from "react-native";
import {styles} from './styles'
import { EvilIcons } from '@expo/vector-icons'; 
import {Checkbox} from 'expo-checkbox';





interface TaskProps{
    name:string
    onRemove: () => void
    
}

export function Task({name, onRemove}:TaskProps){
    return(
        <>
        <View style={styles.container}>
            <Checkbox
        
            />
            <Text style={styles.name}>{name}</Text>
            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <EvilIcons name="trash" size={36} color="gray" />
            </TouchableOpacity>
        </View>
        </>
    )
}