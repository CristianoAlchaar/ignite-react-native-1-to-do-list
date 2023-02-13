import { TouchableOpacity, View, Alert } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox"
import { Trash } from "phosphor-react-native"
import { styles } from "./styles"

interface ToDoItemProps {
    id: string
    isDone: boolean
    description: string
    onRemove: (id: string) => void
    onChangeIsDone: (id: string) => void
}

export function ToDoItem( {id, isDone, description, onRemove, onChangeIsDone} : ToDoItemProps) {
    const { container, checkbox, icon } = styles

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

    function handleToggleIsDone(){
        onChangeIsDone(id)
    }

    return(
        <View style={container}>
            <BouncyCheckbox style={checkbox} 
                size={24}
                innerIconStyle={
                    !isDone ? { 
                        borderColor: '#4EA8DE', 
                        borderWidth: 2 
                    } : {}
                }
                fillColor="#5E60CE"    
                textStyle={isDone ? { textAlign: "justify", color: '#808080' } : { textAlign: "justify", color: '#F2F2F2'}}
                text={description}
                isChecked = {isDone}
                onPress={handleToggleIsDone}
            />
            <TouchableOpacity style={icon} onPress={() => handleRemoveToDoItem()}>
                <Trash color="#808080" size={24}/>
            </TouchableOpacity>
            
        </View>
    )
}