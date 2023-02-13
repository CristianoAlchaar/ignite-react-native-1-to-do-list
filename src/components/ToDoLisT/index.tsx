import { useState, useRef } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { styles } from "./styles";
import { PlusCircle } from 'phosphor-react-native';
import { EmptyMessage } from '../EmptyMessage';
import { ToDoItem } from '../ToDoItem';

import { uid } from 'uid';

interface toDoItem{
    id: string;
    isDone: boolean;
    description: string;
}

const list: toDoItem[] = [
    {id: '1', isDone: false, description: 'Comer batata'},
    {id: '2', isDone: true, description: 'Lambar sabão'},
    {id: '3', isDone: true, description: 'Estudar Programação'},
    {id: '4', isDone: false, description: 'Varrer a casa'},
]

export function ToDoList() {
    const [toDoList, setToDoList] = useState<toDoItem[]>(list)
    const [newToDo, setNewToDo] = useState('')

    const refInput = useRef<TextInput>(null)

    const { input,
            container, 
            inputContainer, 
            button, 
            dataContainer, 
            created, 
            concluded,
            numberContainer, 
            dataItemContainer,
    } = styles;

    function handleAddNewToDo(){
        if(newToDo.trim().length > 0){
            setToDoList([...toDoList, {
                description: newToDo,
                isDone: false,
                id: uid()
            }])
        }else{
            Alert.alert('Adicionar Tarefa', 'Não foi possível adicionar a tarefa. Insira uma tarefa válida')
        }    
        setNewToDo('')
        
        //if its not null, it will blur the current input
        refInput.current && refInput.current.blur()
    }

    function removeToDoFromList(id:string){
        setToDoList(toDoList.filter((item) => item.id !== id))
    }

    function changeIsDone(id:string){
        setToDoList((prevToDoList) => {
            const updatedToDoList = prevToDoList.map((toDo) => {
              if (toDo.id === id) {
                return {
                  ...toDo,
                  isDone: !toDo.isDone,
                };
              }
              return toDo;
            });
            return updatedToDoList;
        });
    }

    return( 
        <View style={container}>
            <View style={inputContainer}>
                <TextInput style={input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={'#808080'}
                    onChangeText={setNewToDo}
                    value={newToDo}
                    ref = {refInput}
                />

                <TouchableOpacity style={button} onPress={handleAddNewToDo} >
                    <PlusCircle color="#F2F2F2" weight="light" size={22}/>
                </TouchableOpacity>
            </View> 
            <View style={dataContainer}>
                <View style={dataItemContainer}>
                    <Text style={created}>Criadas</Text>
                    <Text style={numberContainer}>{toDoList.length}</Text>
                </View>
                <View style={dataItemContainer}>
                    <Text style={concluded}>Concluídas</Text>
                    <Text style={numberContainer}>{toDoList.filter(item => item.isDone).length}</Text>
                </View>
            </View> 

            <FlatList
                data={toDoList}
                renderItem={({ item }) => 
                    <ToDoItem 
                        id={item.id} 
                        description={item.description} 
                        isDone={item.isDone} 
                        onRemove={removeToDoFromList}
                        onChangeIsDone={changeIsDone}
                    />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent= {() => <EmptyMessage />}
            />

        </View>
    )
}