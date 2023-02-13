import { TouchableOpacity, View, Alert } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox"
import { Trash } from "phosphor-react-native"
import { styles } from "./styles"
import { useState } from "react";

interface ToDoItemProps {
    id: string
    isDone: boolean
    description: string
    onRemove: (id: string) => void
}

export function ToDoItem( {id, isDone, description, onRemove} : ToDoItemProps) {
    const { container, checkbox, icon } = styles
    const [isChecked, setIsChecked] = useState(isDone)

    function handleRemoveToDoItem(){
        Alert.alert("Remover", `Deseja realmente remover a tarefa: "${description}"?`, [
            {
              text: 'Sim',
              onPress: () => onRemove(id)
            },
            {
              text: 'Não',
              style: 'cancel'
            }
        ])
    }

    return(
        <View style={container}>
            <BouncyCheckbox style={checkbox} 
                size={24}
                innerIconStyle={
                    !isChecked ? { 
                        borderColor: '#4EA8DE', 
                        borderWidth: 2 
                    } : {}
                }
                fillColor="#5E60CE"    
                textStyle={isChecked ? { textAlign: "justify", color: '#808080' } : { textAlign: "justify", color: '#F2F2F2'}}
                text={description}
                isChecked = {isChecked}
                onPress={() => isChecked ? setIsChecked(false) : setIsChecked(true)}
            />
            <TouchableOpacity style={icon} onPress={() => handleRemoveToDoItem()}>
                <Trash color="#808080" size={24}/>
            </TouchableOpacity>
            
        </View>
    )
}