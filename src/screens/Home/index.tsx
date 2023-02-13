import { View } from "react-native";
import { Header } from "../../components/Header";
import { ToDoList } from "../../components/ToDoLisT";
import { styles } from "./styles";

export function Home(){
    const { mainContainer } = styles;

    return(
        <View style={mainContainer}>
            <Header />
            <ToDoList />
        </View>
    )
}